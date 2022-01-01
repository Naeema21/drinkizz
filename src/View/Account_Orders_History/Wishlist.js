import React, { useState, useEffect } from 'react'
import './Account_Orders_History.css';
import axios from 'axios';
import swal from 'sweetalert';
import { GET_WISHLIST_DATA } from "../../endpoint"
import NoDataInCart from '../../Components/NoDataFound/NoDataInCart';
function Wishlist() {
    //skeleton
    const [Loder, setLoader] = useState(false)
    //get data from Api
    const [items, setItems] = useState([]);
    const [Empty, setEmptyData] = useState(false)
    useEffect(() => {
        setLoader(true)
        try {
            axios.get(GET_WISHLIST_DATA)
                .then(res => {
                    if (res.status === 200) {
                        setItems(res.data.data);
                        setLoader(false)
                    } else if (res.status === 204) {
                        setEmptyData(true)
                        setLoader(false)
                    }
                })
        } catch (error) {
            console.warn(error)
            setLoader(true)
        }
    }, [])
    const [deleteId, setDeleteId] = useState();
    const Deletecart = (ids) => {
        axios.delete(GET_WISHLIST_DATA + "/" + ids).then(res => {
            console.log(res.status)
            if (res.status === 200) {
                swal({
                    title: "Removed From Wishlist!",
                    timer: 2000,
                }).then(() => {
                    setDeleteId(ids)
                })
            } else {
                swal({
                    title: "Try Again!",
                })

            }

        })
    }
    //Load more button
    const [noOfElement, setnoOfElement] = useState(3);
    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement)
    }

    const slice = items.slice(0, noOfElement)

    // console.log(res.data.data.id);

    //Skeleton start
    const WishListItemCard = slice.map((productdata, i) => {
        if (deleteId === productdata._id) {
            return ("")
        } else {
            return (
                <div className='row' key={i}>
                    <div className="d-sm-flex justify-content-between mt-lg-4 mb-4 pb-3 pb-sm-2">
                        <div className='col-lg-4'>
                            <div className='d-block d-sm-flex align-items-start text-center text-sm-start'>
                                <img className="wishlist-img" src={productdata.image} alt="Product" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-block d-sm-flex align-items-start text-center text-sm-start'>
                                <div className="pt-2 product-order-wishlist">
                                    <h3 className="text-dark font-weight-bold fs-base text-sm-start mb-2">{productdata.category}</h3>
                                    <div className="fs-sm"><span className="text-muted me-2">Name:</span>{productdata.name}</div>
                                    <div className="fs-sm"><span className="text-muted me-2">Brand:</span>Tommy Hilfiger</div>
                                    <div className="fs-sm"><span className="text-muted me-2">Color:</span>Khaki</div>
                                    <div className="fs-sm"><span className="text-muted me-2">Size:</span>{productdata.size}</div>
                                    <div className="fs-lg text-accent pt-2 mb-4 text-primary fw-bold">{productdata.price}</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className='d-block d-sm-flex align-items-start text-center text-sm-start trash-wishlist'>
                                <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => Deletecart(productdata._id)}><i className="fa fa-trash me-2"></i>Remove</button>
                            </div>
                        </div>
                    </div>
                    <hr style={{ "width": "100%", "textalign": "left", "marginleft": "0" }}></hr>
                </div>
            )
        }
    })
    const SkeletonWishListItem = [0, 1, 2].map(() => {
        return (
            <div key={Math.random()}>
                <div className='row Skeleton-Cart'>
                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3 Cart-list-item-img'>
                        <div className='p-3 Cart-skeleton-img'>
                        </div>
                    </div>
                    <div className='product-desc col-lg-7 col-md-7 col-sm-7 col-xs-6'><a href='/product-details'>
                        <h6 className='title-text-color'></h6>
                        <span><p> </p></span>
                        <span><p> </p></span>
                        <span><p> </p></span>

                        <h4> </h4>
                    </a></div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-3 Delete-Cart-Item'>
                        <p className='text-quantity'></p>
                        <h4></h4>
                        <p> </p>
                    </div>
                </div>
                <hr />
            </div>
        )
    })
    return (
        <div>
            <div className='container'>
                <div className="d-flex justify-content-between align-items-center px-4 mb-4">
                    <h6 className="text-dark fs-base mb-0 ml-4 pt-4 mt-1 ListSort">List of your registered addresses:</h6>
                    <a className="Button-Red-Border Button-Full-Red text-light me-2 mt-4 mb-0 btn-sm signoutbtn" href="#"><i className="fa fa-sign-out me-2"></i>Sign out</a>
                </div>
                <hr style={{ "width": "100%", "textalign": "left", "marginleft": "0", "color": "black", "height": "3px" }}></hr>
                {
                    !Loder ? WishListItemCard : SkeletonWishListItem
                }
                {
                    Empty ? <NoDataInCart /> : ""
                }
                {
                    items.length > 0 && items.length >= noOfElement ?
                        <div className='row my-4'>
                            <button className='btn Button-Blue-Border d-block w-100' onClick={() => loadMore()}>
                                <i className='fa fa-refresh'></i>&nbsp; &nbsp; Load More</button>
                        </div>
                        : ""
                }
            </div>

        </div>

    )
}

export default Wishlist
