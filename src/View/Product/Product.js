import React,{ useState } from 'react'
import './product.css'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { products } from '../../assets/Data/product'
import shoplistproimg1 from '../../assets/images/Product/shoplist-proimg1.jpg'
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

const Product =()=> {
    const Card = React.lazy(() => import('../../Components/Cards/Cards'))
    // const [ rangevalue, setRangevalue ] = useState(50); 
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <div className='shadow py-4 px-3' style={{borderRadius:'0.4375rem'}}>
                                <div className='mb-4'>
                                    <h4 className='shoplist1-catetxt'>Categories</h4>
                                </div>
                                {/* start Categories */}
                                <div className='border-bottom'>
                                <Accordion>
                                    <Accordion.Item eventKey="0"style={{border:'none'}}>
                                        <Accordion.Header>Clothings</Accordion.Header>
                                        <Accordion.Body className='px-1'>
                                            <form className="shoplistsearch-bar">
                                                <input type="search" placeholder="Search" />
                                            </form>
                                            <div className='shopsidebar-content'>
                                                <ul className='shoplist-ul'>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>View all</span><span>1,953</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Blazers & Suits</span><span>235</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Blouses</span><span>410</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Cardigans & Jumpers</span><span>107</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Dresses</span><span>93</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Hoodie & Sweatshirts</span><span>122</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Jackets & Coats</span><span>133</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Jeans</span><span>1,953</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Lingerie all</span><span>103</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Maternity Wear</span><span>167</span></Link></li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1"style={{border:'none'}}>
                                        <Accordion.Header>Bags</Accordion.Header>
                                        <Accordion.Body className='px-1'>
                                            <form className="shoplistsearch-bar">
                                                <input type="search" placeholder="Search" />
                                            </form>
                                            <div className='shopsidebar-content'>
                                                <ul className='shoplist-ul'>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>View all</span><span>1,953</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Blazers & Suits</span><span>235</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Blouses</span><span>410</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Cardigans & Jumpers</span><span>107</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Dresses</span><span>93</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Hoodie & Sweatshirts</span><span>122</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Jackets & Coats</span><span>133</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Jeans</span><span>1,953</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Lingerie all</span><span>103</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Maternity Wear</span><span>167</span></Link></li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2"style={{border:'none'}}>
                                        <Accordion.Header>Watches</Accordion.Header>
                                        <Accordion.Body className='px-1'>
                                            <form className="shoplistsearch-bar">
                                                <input type="search" placeholder="Search" />
                                            </form>
                                            <div className='shopsidebar-content'>
                                                <ul className='shoplist-ul'>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>View all</span><span>1,953</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Blazers & Suits</span><span>235</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Blouses</span><span>410</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Cardigans & Jumpers</span><span>107</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Dresses</span><span>93</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Hoodie & Sweatshirts</span><span>122</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Jackets & Coats</span><span>133</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Jeans</span><span>1,953</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Lingerie all</span><span>103</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Maternity Wear</span><span>167</span></Link></li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3"style={{border:'none'}}>
                                        <Accordion.Header>Accesories</Accordion.Header>
                                        <Accordion.Body className='px-1'>
                                            <form className="shoplistsearch-bar">
                                                <input type="search" placeholder="Search" />
                                            </form>
                                            <div className='shopsidebar-content'>
                                                <ul className='shoplist-ul'>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>View all</span><span>1,953</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Blazers & Suits</span><span>235</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Blouses</span><span>410</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Cardigans & Jumpers</span><span>107</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Dresses</span><span>93</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Hoodie & Sweatshirts</span><span>122</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Jackets & Coats</span><span>133</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Jeans</span><span>1,953</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Lingerie all</span><span>103</span></Link></li>
                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Maternity Wear</span><span>167</span></Link></li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>   
                                </div>  
                                {/* End Categories */}
                                {/* start Price */}
                                <div className='mb-2 mt-3'>
                                    <h4 className='shoplist1-catetxt'>Price</h4>
                                </div>
                                <div className='border-bottom'>  
                                    <div className='mb-2 shoplist-tooltip'>
                                    <input type="range" min="1" max="100"  className='shoplist-slider'/>
                                    </div> 
                                    {/* <RangeSlider
                                    value={rangevalue}
                                    onChange={changeEvent => setRangevalue(changeEvent.target.value)}
                                    /> */}
                                    <div className='d-flex pb-4 pt-2'>
                                        <div className='w-50 pe-2 me-2'>
                                            <div className='input-group input-group-sm'>
                                                <span className='input-group-text' style={{backgroundColor:'#fff'}}>$</span>
                                                <input className="form-control range-slider-value-min" />
                                            </div>
                                        </div>
                                        <div className='w-50 ps-2'>
                                            <div className='input-group input-group-sm'>
                                                <span className='input-group-text' style={{backgroundColor:'#fff'}}>$</span>
                                                <input className="form-control range-slider-value-max"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Price */}
                                {/* start Brand */}
                                <div className='mb-2 mt-3'>
                                    <h4 className='shoplist1-catetxt'>Brand</h4>
                                </div>
                                <div className='border-bottom'>
                                    <form className="shoplistsearch-bar">
                                        <input type="search" placeholder="Search" />
                                    </form>
                                    <div className='shopsidebar-content'>
                                        <ul className='shoplist-ul'>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Adidas</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Armani</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Ann Tylor</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Banana Repblic</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Bilabong</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Alibong</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>Cello</span></Link></li>
                                        </ul>
                                    </div>
                                </div>  
                                {/* End Brand */}
                                 {/* start Size */}
                                 <div className='mb-2 mt-3'>
                                    <h4 className='shoplist1-catetxt'>Size</h4>
                                </div>
                                <div className='border-bottom'>
                                <form className="shoplistsearch-bar">
                                        <input type="search" placeholder="Search" />
                                    </form>
                                    <div className='shopsidebar-content'>
                                        <ul className='shoplist-ul'>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>XS</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>L</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>M</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>XL</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>39</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>69</span></Link></li>
                                            <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>78</span></Link></li>

                                        </ul>
                                    </div> 
                                </div>  
                                {/* End Size */}
                                {/* start Color */}
                                <div className='mb-2 mt-3'>
                                    <h4 className='shoplist1-catetxt'>Color</h4>
                                </div>
                                <div className='d-flex flex-wrap px-3'>
                                    <div className='form-check form-option text-center mb-2 mx-1'>
                                        <input className='form-check-input' type='checkbox' />
                                        <label className='shopform-option-label rounded-circle'>
                                            <span className='shopform-option-color rounded-circle' style={{backgroundColor:'#b3c8db'}}></span>
                                        </label>
                                    </div>
                                    <div className='form-check form-option text-center mb-2 mx-1'>
                                        <input className='form-check-input' type='checkbox' />
                                        <label className='shopform-option-label rounded-circle'>
                                            <span className='shopform-option-color rounded-circle' style={{backgroundColor:'#b3c8db'}}></span>
                                        </label>
                                    </div>
                                    <div className='form-check form-option text-center mb-2 mx-1'>
                                        <input className='form-check-input' type='checkbox'/>
                                        <label className='shopform-option-label rounded-circle'>
                                            <span className='shopform-option-color rounded-circle' style={{backgroundColor:'#ca7295'}}></span>
                                        </label>
                                    </div>
                                    <div className='form-check form-option text-center mb-2 mx-1'>
                                        <input className='form-check-input' type='checkbox'/>
                                        <label className='shopform-option-label rounded-circle'>
                                            <span className='shopform-option-color rounded-circle' style={{backgroundColor:'#9a8480'}}></span>
                                        </label>
                                    </div>
                                    
                                </div>
                                <div className='d-flex flex-wrap px-3'>
                                    <div className='form-check form-option text-center mb-2 mx-1'>
                                        <input className='form-check-input' type='checkbox' style={{color:'blue grey'}}/>
                                        <label className='shopform-option-label rounded-circle'>
                                            <span className='shopform-option-color rounded-circle' style={{backgroundColor:'#ff7072'}}></span>
                                        </label>
                                    </div>
                                    <div className='form-check form-option text-center mb-2 mx-1'>
                                        <input className='form-check-input' type='checkbox' />
                                        <label className='shopform-option-label rounded-circle'>
                                            <span className='shopform-option-color rounded-circle' style={{backgroundColor:'#b3c8db'}}></span>
                                        </label>
                                    </div>
                                    <div className='form-check form-option text-center mb-2 mx-1'>
                                        <input className='form-check-input' type='checkbox' style={{color:'blue grey'}}/>
                                        <label className='shopform-option-label rounded-circle'>
                                            <span className='shopform-option-color rounded-circle' style={{backgroundColor:'#696dc8'}}></span>
                                        </label>
                                    </div>
                                    <div className='form-check form-option text-center mb-2 mx-1'>
                                        <input className='form-check-input' type='checkbox' style={{color:'blue grey'}}/>
                                        <label className='shopform-option-label rounded-circle'>
                                            <span className='shopform-option-color rounded-circle' style={{backgroundColor:'#4e4d4d'}}></span>
                                        </label>
                                    </div>
                                </div>
                             {/* End Color */}

                            </div>                                                                
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-8 shoplist-leftside1'>
                            <div className='row'>
                                {/* Using Map Function to access the data & send to card */}
                                {products.slice(0,6).map((productdata,i) => (
                                    <div className='col-lg-4 col-md-6 col-sm-12' key={i}>
                                        <Card category={productdata.category} name={productdata.name} price={productdata.price} imgsrc={productdata.imgsrc} star={productdata.star} />
                                    </div>
                                ))}                              
                            </div>
                            <div className='row mb-5 mt-5'>
                                <div className='col-lg-6 col-md-6 col-sm-6 py-4  px-4  text-center text-sm-start shoplist-box1'>
                                    <h4 className='fw-light mb-2' style={{color:'#373F53'}}>Converse All Star</h4>
                                    <h3 className='mb-4'>Make Your Day Comfortable</h3>
                                    <button className='btn btn btn-sm d-block mb-2 addto-cardbtn'>Shop Now <i className="fa fa-angle-right"></i></button>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <img className='shoplist-box1img img-fluid' src={shoplistproimg1} alt='Shop list Shoes'/>   
                                </div>
                            </div>
                            <div className='row'>
                                {/* Using Map Function to access the data & send to card */}
                                {products.slice(6,12).map((productdata,i) => (
                                    <div className='col-lg-4 col-md-4 col-sm-4' key={i}>
                                        <Card category={productdata.category} name={productdata.name} price={productdata.price} imgsrc={productdata.imgsrc} star={productdata.star} />
                                    </div>
                                ))}                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Product
