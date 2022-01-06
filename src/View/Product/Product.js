import React, { useEffect, useState } from 'react'
import './product.css'
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import shoplistproimg1 from '../../assets/images/Home/offer-banner.png'
import axios from "axios";
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb'
import { PRODUCT_URL } from '../../endpoint';
import ProductSidebar from './ProductSidebar';


const Product = () => {
    const Card = React.lazy(() => import('../../Components/Cards/Cards'))
    //GET/FETCH API Logic for Aceesing data from API using axios
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState();
    useEffect(() => {
        setLoader(true)
        try {
            axios.get(PRODUCT_URL)
                .then(res => {
                    console.log(res.data.data);
                    setItems(res.data.data);
                    setLoader(false)
                })
        }
        catch (err) {
            console.log(err)
            setLoader(true)
        }



    }, [])

        //check filter

    const selectFilter = (event) => {
        console.log(event)
        switch (event) {
            case "Popularity":
                console.log("a")
                // code block
            case "Low-High Price":
                // code block
            case "High-Low Price":
                // code block
            case "A-Z Order":
                const a =items.sort((a, b) => a.name.localeCompare(b.name))
                setItems(a.reverse())
                console.log(a.reverse())
            case "Z-A Order":
                // code block
            default:
            // code block
        }
    }

    //pagination

    var dataLimit = 6;
    var pageLimit = 2
    const [pages] = useState(Math.round(items.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return items.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
    //For Skeleton & Card data HTML here in 2 diff variables
    const carditemdata =
        getPaginatedData().map((productdata, i) => (
            <div className='col-lg-4 col-md-6 col-sm-6 px-1' key={i}>
                <Card id={productdata._id}
                    category={productdata.category}
                    name={productdata.name}
                    price={productdata.price}
                    imgsrc={productdata.image}
                    star={productdata.rating} />
            </div>
        ))

    const skeleton =
        [0, 1, 2, 3, 4, 5].map(() => (
            <div className='col-lg-4 col-md-6 col-sm-6 px-1 Skeleton-products' key={Math.random()}>
                <div className="skel1div"></div><br />
                <h2></h2>
                <h3></h3>
                <div style={{ display: 'flex' }}>
                    <h2></h2><h2 style={{ marginLeft: '25%' }}></h2>
                </div>
            </div>
        ))

 


    //For Get the Total lenght of product in API
    const breadcrumbheading = ' Products ' + items.length;
    return (
        <div className='product-details'>
            <BreadCrumb heading={breadcrumbheading} BC1Link='/' breadcrumb1='Home' BC3Link='/' breadcrumb3='Products' />
            <div className='Heading-back-com3'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-4'></div>
                    <div className='col-lg-8 col-md-8 col-sm-8'>
                        <div className=' d-flex  flex-nowrap'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-light fs-base mb-0 ml-4 pt-7 py-2 px-2">Sort by</span>
                                <select className="form-select compare-crite" id="compare-criteria"
                                    onChange={(e) => selectFilter(e.target.value)}>
                                    <option value="0">Select Filter</option>
                                    <option value="Popularity">Popularity</option>
                                    <option value="Low-High Price" >Low-High Price</option>
                                    <option value="High-Low Price" >High-Low Price</option>
                                    <option value="A-Z Order" >A-Z Order</option>
                                    <option value="Z-A Order">Z-A Order</option>
                                </select>
                                <span className='fs-sm text-light opacity-75 text-nowrap ms-2 d-none d-md-block'>of {items.length} products</span>
                            </div>
                            <div className='d-flex justify-content-end pro-5page'>
                                <span className='nav-link-style nav-link-light text-light me-3'
                                    onClick={goToPreviousPage}
                                >
                                    <i className="fa fa-angle-left"></i>
                                </span>
                                <span className='fs-md text-light'> {currentPage} / {pageLimit}</span>
                                <span className='nav-link-style nav-link-light text-light mx-3'
                                    onClick={goToNextPage}
                                >
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='mt-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <ProductSidebar />
                            {/* End Color */}
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-6 shoplist-leftside1'>
                            <div className='row'>
                                {/* Skeleton & Card data condition check here */}
                                {
                                    !loader ? carditemdata : skeleton
                                }
                            </div>
                            {/* pagination */}
                            {
                                items.length >= 0 ?

                                    <div className="d-flex justify-content-between pt-2">
                                        <ul className='propagination'>
                                            <li className='propage-item'>
                                                <button className={`propage-link ${currentPage === 1 ? "disabled" : ""}`}
                                                    onClick={goToPreviousPage}
                                                    disabled={currentPage === 1 ? true : false}
                                                >
                                                    <i className="fa fa-angle-left mx-2"></i>
                                                    Prev
                                                </button>
                                            </li>
                                        </ul>
                                        <ul className='propagination'>

                                            {getPaginationGroup().map((item, index) => (
                                                <li
                                                    key={index}
                                                    onClick={changePage}
                                                    style={{ cursor: "pointer" }}
                                                    className={`propage-item d-none d-sm-block ${currentPage === item ? 'active' : null}`}
                                                >
                                                    <span className='propage-link'>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className='propagination'>
                                            <li className='propage-item'>
                                                <button className={`propage-link ${currentPage === pages ? "disabled" : ""}`}
                                                    onClick={goToNextPage}
                                                    disabled={currentPage === pages ? true : false}
                                                >
                                                    Next <i className="fa fa-angle-right mx-1"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    : ""}
                            <div className='row mb-5 mt-5 shoplist-box1 align-items-center'>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-4  px-4  text-center text-sm-start '>
                                    <h4 className='fw-light mb-2' style={{ color: '#373F53' }}>Converse All Star</h4>
                                    <h3 className='mb-4'>Make Your Day Comfortable</h3>
                                    <button className='btn btn btn-sm d-block mb-2 addto-cardbtn'>Shop Now <i className="fa fa-angle-right"></i></button>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <img className='shoplist-box1img img-fluid' src={shoplistproimg1} alt='Shop list Shoes' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Product
