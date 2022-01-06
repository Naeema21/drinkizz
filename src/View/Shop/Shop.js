import React, { useState, useEffect } from 'react'
import './Shop.css'
import Smwatch1 from '../../assets/images/Product/Product-Desc/Smart-watch/1.jpg'
import { Accordion } from 'react-bootstrap'
import { Tab, Tabs, Nav, Col, Row } from 'react-bootstrap'
import ProductDescImg from '../../assets/images/Product/Product-Desc/Smart-watch/prod-desc-text.jpg'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { products } from '../../assets/Data/product'
import BTearphones from '../../assets/images/Product/Product-Desc/Smart-watch/BT-Earphones.jpg'
import CTSMwatch from '../../assets/images/Product/Product-Desc/Smart-watch/5.jpg'
import SmWatchCharger from '../../assets/images/Product/Product-Desc/Smart-watch/Smartwatch-charger.jpg'
import { ReviewComments } from '../../assets/Data/data'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import axios from 'axios'
import { PRODUCT_URL, WISHLIST_URL } from '../../endpoint'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { CART_URL } from '../../endpoint'

const Shop = (({ match },) => {
    const BreadCrumb = React.lazy(() => import('../../Components/BreadCrumb/Breadcrumb'))
    const Card = React.lazy(() => import('../../Components/Cards/Cards'))
    const [Data, setData] = useState({})
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        swal({
            title: "Thank You!",
            text: "Your Responce is Precious..",
            icon: "success",
        })
        reset();
    }

    const handleSubmitWsishlist = () => {
        const data2 = {
            "userId": localStorage.getItem('id'),
            "productId": Data._id,
        };
        if (data2.userId === null) {
            swal({
                title: "login please",
                timer: 2000
            })
        } else {
            axios.post(WISHLIST_URL, data2)
                .then(response => {
                    console.log("Status: ", response.status);
                    console.log("Data: ", response.data);
                    if (response.status === 201) {
                        swal({
                            title: response.data.message,
                            timer: 2000,
                        })
                    } else {
                        swal({
                            title: "Try Again!",
                        })
                    }
                }).catch(error => {
                    console.error('Something went wrong!', error);
                });
        }
    }

    const handleSubmitCart = () => {
        const DataToCart = {
            "userId": localStorage.getItem('id'),
            "productId": Data._id,
            "quantity": Data.quantity
        }
        if (DataToCart.userId === null) {
            swal({
                title: "login please",
                timer: 2000
            })
        } else {
            axios.post(CART_URL, DataToCart)
                .then(response => {
                    console.log("Status: ", response.status);
                    console.log("Data: ", response.data);
                    if (response.status === 201) {
                        swal({
                            title: response.data.message,
                            timer: 2000
                        })
                    } else {
                        swal({
                            title: "Try Again"
                        })
                    }
                }).catch(error => {
                    console.error('Something went wrong !', error);
                });
        }
    }
    const options = {
        items: 4,
        rewind: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i className='fa fa-chevron-left'></i>", "<i className='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    };
    const options3 = {
        items: 1,
        rewind: true,
        autoplay: false,
        dots: true
    }
    useEffect(() => {
        axios.get(PRODUCT_URL + "/" + match.params.id).then((res) => {
            setData(res.data)
        })
    }, [match.params.id])
    return (
        <div>
            {/* Header */}
            <BreadCrumb
                heading={Data.name}
                breadcrumb1="Home" BC1Link="/"
                breadcrumb2="Shop" BC2Link="/shop"
                breadcrumb3="Product Descripton" BC3Link=""
            />
            <div className='Heading-back-com2'> </div>
            <section className='Product-Description my-4'>
                <div className='container'>
                    <div className='Product-desc-back rounded-3 '>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="" defaultActiveKey="general">
                            {/* Tabfirst General Info start */}
                            <Tab eventKey="general" title=" General Info" className='py-4 px-sm-4'>
                                <div className="tab-content px-lg-3">
                                    <div className="tab-pane fade active show" id="general" role="tabpanel">
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-lg-5 pe-lg-0 " >
                                                <img src={Data.image} className='img-fluid' width="70%"></img>
                                            </div>
                                            <div className="col-lg-6 pt-4 pt-lg-0">
                                                <div className="product-details ms-auto pb-3">
                                                    <div className='h3 product-desc-price'>$ {Data.price}</div>
                                                </div>
                                                <div className='mb-4'>
                                                    <span className='Desc-text-heading'>Color:</span>
                                                    <span className='text-muted'>Color Option</span>
                                                </div>
                                                {/* <div className="position-relative mb-5 pb-3">
                                                    <label className='color-circle-box'><input style={{ backgroundColor: '#f25540' }} name='color' type='radio' /></label>
                                                    <label className='color-circle-box'><input style={{ backgroundColor: '#65805b' }} name='color' type='radio' /></label>
                                                    <label className='color-circle-box'><input style={{ backgroundColor: '#f5f5f5' }} name='color' type='radio' /></label>
                                                    <label className='color-circle-box'><input style={{ backgroundColor: '#333' }} name='color' type='radio' /></label>
                                                    <div className="product-badge product-available mt-n1">Product available</div>
                                                </div> */}
                                                <div className="d-flex align-items-center pt-2 pb-4">
                                                    <select className="form-select me-3" style={{ width: "5rem" }}
                                                        defaultValue={Data.quantity}
                                                    >
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                    <button className="Button-Full-Red d-block w-100" data-toggle="tooltip" data-placement="top" onClick={handleSubmitCart}><i className="fa fa-shopping-cart me-2"></i>Add to Cart</button>
                                                </div>
                                                <div className="d-flex mb-4">
                                                    <div className="w-100 me-3">
                                                        <button className="btn-Gray d-block w-100" data-toggle="tooltip" data-placement="top" title="Hooray!" onClick={handleSubmitWsishlist} type="button"><i className="fa fa-heart-o me-2" style={{ color: "gray" }}></i><span className="d-none d-sm-inline">Add to </span>Wishlist</button>
                                                    </div>
                                                    <div className="w-100">
                                                        <Link className="btn-Gray d-block w-100" type="button" href='/compare'><i className="fa fa-refresh me-2" style={{ color: "gray" }}></i>Compare</Link>
                                                    </div>
                                                </div>
                                                <Accordion>
                                                    <div>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header><i className="fa fa-shipping-fast"></i>Shipping options</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="d-flex justify-content-between border-bottom pb-2">
                                                                    <div>
                                                                        <div className="fw-semibold text-dark">Local courier shipping</div>
                                                                        <div className="fs-sm text-muted">2 - 4 days</div>
                                                                    </div>
                                                                    <div>$16.50</div>
                                                                </div>
                                                                <div className="d-flex justify-content-between border-bottom py-2">
                                                                    <div>
                                                                        <div className="fw-semibold text-dark">UPS ground shipping</div>
                                                                        <div className="fs-sm text-muted">4 - 6 days</div>
                                                                    </div>
                                                                    <div>$19.00</div>
                                                                </div>
                                                                <div className="d-flex justify-content-between pt-2">
                                                                    <div>
                                                                        <div className="fw-semibold text-dark">Local pickup from store</div>
                                                                        <div className="fs-sm text-muted">—</div>
                                                                    </div>
                                                                    <div>$0.00</div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header><i className="fa fa-map-marker-alt"></i>Find in local store</Accordion.Header>
                                                            <Accordion.Body>
                                                                <select className="form-select">
                                                                    <option value="">Select your country</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="France">France</option>
                                                                    <option value="Germany">Germany</option>
                                                                    <option value="Spain">Spain</option>
                                                                    <option value="UK">United Kingdom</option>
                                                                    <option value="USA">USA</option>
                                                                </select>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </div>
                                                </Accordion>
                                                <label className="form-label d-inline-block align-middle my-4 me-3">Share:</label>
                                                <a className="btn-share btn-twitter me-2 my-2" href="#"><i className="fa fa-twitter"></i>Twitter</a>
                                                <a className="btn-share btn-instagram me-2 my-2" href="#"><i className="fa fa-instagram"></i>Instagram</a>
                                                <a className="btn-share btn-facebook my-2" href="#"><i className="fa fa-facebook-f"></i>Facebook</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            {/* Tab General Specs End */}
                            {/* Tab Tech Specs start */}
                            <Tab eventKey="specs" title="Tech Specs" className='py-4 px-sm-4'>
                                <div className="tab-pane fade active show" id="specs" role="tabpanel">
                                    <div className="row d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                                        <div className="col-lg-4 col-sm-8 d-flex align-items-center me-md-3"><img src={Data.image} width="90" alt="Product thumb" />
                                            <div className="ps-3">
                                                <h6 className="fs-base mb-2">{Data.name}</h6>
                                                <div className="h3 C-Tprice">${Data.price}<small>99</small></div>
                                            </div>
                                        </div>
                                        <div className=" col-lg-5 col-sm-8 d-flex align-items-center pt-3">
                                            <select className="form-select me-2 w-50" >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <button className="Button-Full-Red d-block w-100" data-toggle="tooltip" data-placement="top" onClick={handleSubmitCart}><i className="fa fa-shopping-cart me-2"></i>Add to Cart</button>
                                            <div className="me-2">
                                                <button className="btn btn-small-desc" style={{ marginLeft: '7px' }} onClick={handleSubmitWsishlist} type="button"><i className="fa fa-heart-o" style={{ color: "gray" }}></i></button>
                                            </div>
                                            <div>
                                                <Link className="btn btn-small-desc" to='/compare'><i className="fa fa-refresh" style={{ color: "gray" }}></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='product-desc'>
                                    <h3 className="h6">Product Descripton</h3>
                                    <p>{Data.description}</p>

                                    </div>
                                    <div className="row pt-2">
                                        <div className="col-lg-5 col-sm-6">
                                            <h3 className="h6">Product Details</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Name:</span><span>{Data.name}</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Category:</span><span>{Data.category}</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Sub Category:</span><span>{Data.subCategory}</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Price:</span><span>${Data.price}</span></li>
                                                
                                            </ul>

                                        </div>
                                        <div className="col-lg-2 col-sm-6">
                                          

                                        </div>
                                        <div className="col-lg-5 col-sm-6">
                                            <h3 className="h6">Product Details</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                        
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Price:</span><span>${Data.price}</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Size:</span><span>{Data.size}</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Food Pairing:</span><span>{Data.FoodPairing}</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">ABV:</span><span className='Specs-text-align'>{Data.ABV}</span></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            {/* Tab Tech Specs end */}
                            {/* Tab Reviews Start */}
                            <Tab eventKey="reviews" title="Reviews" className='py-4 px-sm-4'>
                                <div className="row d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                                    <div className="col-lg-4 col-sm-8 d-flex align-items-center me-md-3"><img src={Data.image} width="90" alt="Product thumb" />
                                        <div className="ps-3">
                                            <h6 className="fs-base mb-2">{Data.name}</h6>
                                            <div className="h3 C-Tprice">${Data.price}<small>99</small></div>
                                        </div>
                                    </div>
                                    <div className=" col-lg-5 col-sm-8 d-flex align-items-center pt-3">
                                        <select className="form-select me-2 w-50" >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button className="Button-Full-Red d-block w-100" data-toggle="tooltip" data-placement="top" onClick={handleSubmitCart}><i className="fa fa-shopping-cart me-2"></i>Add to Cart</button>
                                        <div className="me-2">
                                            <button className="btn btn-small-desc" style={{ marginLeft: '7px' }} onClick={handleSubmitWsishlist} type="button"><i className="fa fa-heart-o" style={{ color: "gray" }}></i></button>
                                        </div>
                                        <div>
                                            <a className="btn btn-small-desc" href='/compare'><i className="fa fa-refresh" style={{ color: "gray" }}></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='row Shop-PD-Review border-bottom pb-4'>
                                    <div className='col-lg-4 col-md-5'>
                                        <h2 className="h3 mb-4">74 Reviews</h2>
                                        <i className="fa fa-star me-1"></i><i className="fa fa-star me-1"></i><i className="fa fa-star me-1"></i><i className="fa fa-star me-1"></i><i className="fa fa-star me-1" ></i>
                                    </div>
                                    <div className='col-lg-8 col-md-7 Shop-PD-Review-line'>
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted me-1" style={{ marginTop: '-5px' }}>5</span><i className="fa fa-star me-1"></i></div>
                                            <div className="w-100">
                                                <div className="progress" style={{ height: '4px' }}>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div><span className="text-muted ms-3">43</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted me-1" style={{ marginTop: '-5px' }}>4</span><i className="fa fa-star me-1"></i></div>
                                            <div className="w-100">
                                                <div className="progress" style={{ height: '4px' }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '30%', backgroundColor: '#a7e453' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div><span className="text-muted ms-3">16</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted me-1" style={{ marginTop: '-5px' }}>3</span><i className="fa fa-star me-1"></i></div>
                                            <div className="w-100">
                                                <div className="progress" style={{ height: '4px' }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '17%', backgroundColor: '#ffda75' }} aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div><span className="text-muted ms-3">9</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted me-1" style={{ marginTop: '-5px' }}>2</span><i className="fa fa-star me-1"></i></div>
                                            <div className="w-100">
                                                <div className="progress" style={{ height: '4px' }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '9%', backgroundColor: '#fea569' }} aria-valuenow="9" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div><span className="text-muted ms-3">4</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted me-1" style={{ marginTop: '-5px' }}>1</span><i className="fa fa-star me-1"></i></div>
                                            <div className="w-100">
                                                <div className="progress" style={{ height: '4px' }}>
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '4%' }} aria-valuenow="4" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div><span className="text-muted ms-3">2</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='row py-4'>
                                    <div className='col-md-7'>
                                        <div className="d-flex justify-content-end pb-4">
                                            <div className="d-flex flex-nowrap align-items-center">
                                                <label className="fs-sm text-muted text-nowrap me-2 d-none d-sm-block" htmlFor="sort-reviews">Sort by:</label>
                                                <select className="form-select form-select-sm" id="sort-reviews">
                                                    <option>Newest</option>
                                                    <option>Oldest</option>
                                                    <option>Popular</option>
                                                    <option>High rating</option>
                                                    <option>Low rating</option>
                                                </select>
                                            </div>
                                        </div>
                                        {
                                            ReviewComments.map((value, index) => {
                                                return (
                                                    <div className="pb-4 mb-4 border-bottom" key={index}>
                                                        <div className="d-flex mb-3">
                                                            <div className="d-flex align-items-center me-4 pe-2"><img className="rounded-circle" src={value.profileimg} width="50" alt="Rafael Marquez" />
                                                                <div className="ps-3">
                                                                    <h6 className="mb-0">{value.Name}</h6><span className="Review-comment-date text-muted">{value.Date}</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="star-rating"><i className="fa fa-star "></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star "></i></div>
                                                                <div className="Review-comment-date text-muted">{value.UsefulReview}</div>
                                                            </div>
                                                        </div>
                                                        <p className="mb-2">{value.Comment}</p>
                                                        <ul className="list-unstyled pt-1">
                                                            <li className="mb-1"><span className="fw-medium">Pros:&nbsp;</span><span className='Review-comment-ProCons'>{value.Pros}</span></li>
                                                            <li className="mb-1"><span className="fw-medium">Cons:&nbsp;</span><span className='Review-comment-ProCons'>{value.Cons}</span></li>
                                                        </ul>
                                                        <div className="Like-Dislike">
                                                            <button className="btn Like-btn"><i className="fa fa-thumbs-up"></i>&nbsp;{value.Like}</button>
                                                            <button className="btn DisLike-btn" ><i className="fa fa-thumbs-down"></i>&nbsp;{value.Dislike}</button>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    <div className='col-md-5 mt-2 pt-4 mt-md-0 pt-md-0 '>
                                        <div className='Review-Comment-Form rounded-3'>
                                            <h3 className="h4 pb-2">Write a review</h3>
                                            <form onSubmit={handleSubmit(onSubmit)} >
                                                <div className="form-group mb-3">
                                                    <label className='form-label'>Your Name<span style={{ color: 'red' }}>*</span></label>
                                                    <input type="text"
                                                        {...register("name", {
                                                            required: true,
                                                            pattern: {
                                                                value: "^[A-Za-z]$",
                                                                message: "please enter valid name"
                                                            },
                                                            minLength: 3, maxLength: 60
                                                        })}
                                                        className="form-control" autoComplete="off" placeholder="" />
                                                    <span className="error-msg" title="name required">{errors.name && "Please enter your name."}</span>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label className='form-label'>Your Email<span style={{ color: 'red' }}>*</span></label>
                                                    <input
                                                        type="email"
                                                        autoComplete="off"
                                                        {...register("email", {
                                                            required: true,
                                                        })}
                                                        className="form-control"
                                                    />
                                                    <span className="error-msg" title="invalid email address">{errors.email && "please provide valid e-mail address."}</span>
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label className='form-label'>Rating<span style={{ color: 'red' }}>*</span></label>
                                                    <select className="form-select" required="" id="review-rating" {...register("comment", {
                                                        required: true,
                                                    })}>
                                                        <option value="">Choose rating</option>
                                                        <option value="5">5 stars</option>
                                                        <option value="4">4 stars</option>
                                                        <option value="3">3 stars</option>
                                                        <option value="2">2 stars</option>
                                                        <option value="1">1 star</option>
                                                    </select><span className="error-msg" title="invlid subject">{errors.comment && "Please Choose Rating"}</span>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label className='form-label'>Review<span style={{ color: 'red' }}>*</span></label>
                                                    <textarea autoComplete="off"
                                                        placeholder=""
                                                        {...register("comment", {
                                                            required: true,
                                                        })}
                                                        className="form-control" rows="4"  ></textarea>
                                                    <span className="error-msg" title="invlid subject">{errors.comment && "Please write a review."}</span>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label className='form-label'>Pros</label>
                                                    <input type="text"
                                                        {...register("Pros", {
                                                            minLength: 3, maxLength: 60
                                                        })}
                                                        className="form-control" autoComplete="off"
                                                    // placeholder="Seperated by comma" 
                                                    />
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label className='form-label'>Cons</label>
                                                    <input type="text"
                                                        {...register("cons", {
                                                            minLength: 3, maxLength: 60
                                                        })}
                                                        className="form-control" autoComplete="off"
                                                    // placeholder="Seperated by comma" 
                                                    />
                                                </div>
                                                <div className="form-group ">
                                                    <button className="Button-Full-Red w-100" type="submit">
                                                        <span>Submit a Review</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            {/* Tab Reviews end */}
                        </Tabs>
                    </div>
                </div>
            </section>
            {/* <section className='Choose-Your-Style'>
                <div className="container pt-lg-3 pb-4 pb-sm-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 ">
                            <h2 className="h3 pb-2">Choose your style</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <img src={ProductDescImg} alt="Product description" className='img-fluid' />
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                        </div>
                    </div>
                </div>

            </section> */}
            <hr className="mb-5"></hr>
            <section className='You-May-Also-like-Product mb-5'>
                <div className='container'>
                    <h2 className="h3 text-center pb-4">You may also like</h2>
                    <OwlCarousel options={options}>
                        {products.slice(0, 8).map((productdata, i) => (
                            <div key={i}>
                                <Card category={productdata.category} name={productdata.name} price={productdata.price} imgsrc={productdata.imgsrc} star={productdata.star} />
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>
            <section className='Cheaper-Together'>
                <div className="container pt-lg-1 pb-5 mb-md-3">
                    <div className="card-CT card-body pt-5">
                        <h2 className="h3 text-center pb-4">Cheaper together</h2>
                        <OwlCarousel options={options3}>
                            <div className='row Cheap-To-item align-items-center justify-content-center d-flex'>
                                <div className='col-md-3 col-sm-4'>
                                    <div className=" text-center mx-auto">
                                        <a className="card-img-top d-block overflow-hidden" href="#">
                                            <img src={CTSMwatch} alt="Product" className='img-fluid' /></a>
                                        <div className="card-body py-2"><span className="d-inline-block CT_bg rounded-1 py-1 px-2 mb-3">Your product</span>
                                            <h3 className="product-title fs-sm"><a href="#">Smartwatch Youth Edition</a></h3>
                                            <div className="C-Tprice">$124.<small>99</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-2 align-items-center justify-content-center d-flex">
                                    <div className="display-4 fw-light text-muted px-4">+</div>
                                </div>
                                <div className='col-md-3 col-sm-4'>
                                    <div className=" text-center mx-auto">
                                        <a className="card-img-top d-block overflow-hidden" href="#">
                                            <img src={BTearphones} alt="Product" className='img-fluid' />
                                        </a>
                                        <div className="card-body py-2"><span className="d-inline-block bg-danger fs-ms text-white rounded-1 py-1 px-2 mb-3">-15%</span>
                                            <h3 className="product-title fs-sm"><a href="#">Bluetooth Headset Air (White)</a></h3>
                                            <div className="C-Tprice"><span className="text-accent">$59.<small>00  </small></span>
                                                <del className="fs-sm C-Tprice text-muted">  $69.<small>00</small></del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-2 align-items-center justify-content-center d-flex">
                                    <div className="display-4 fw-light text-muted px-4">=</div>
                                </div>
                                <div className="col-md-4 pt-3">
                                    <div className="bg-CT-Box p-4 rounded-3 text-center mx-auto ">
                                        <div className="h3 product-price-CT-box mb-3 me-1">$183.<small>99</small></div>
                                        <button className="Button-Full-Red px-3" type="button">Purchase together</button>
                                    </div>
                                </div>
                            </div>

                            <div className='row Cheap-To-item align-items-center justify-content-center d-flex'>
                                <div className='col-md-3 col-sm-4'>
                                    <div className=" text-center mx-auto">
                                        <a className="card-img-top d-block overflow-hidden" href="#">
                                            <img src={CTSMwatch} alt="Product" className='img-fluid' /></a>
                                        <div className="card-body py-2"><span className="d-inline-block CT_bg rounded-1 py-1 px-2 mb-3">Your product</span>
                                            <h3 className="product-title fs-sm"><a href="#">Smartwatch Youth Edition</a></h3>
                                            <div className="C-Tprice">$124.<small>99</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-2 align-items-center justify-content-center d-flex">
                                    <div className="display-4 fw-light text-muted px-4">+</div>
                                </div>
                                <div className='col-md-3 col-sm-4'>
                                    <div className=" text-center mx-auto">
                                        <a className="card-img-top d-block overflow-hidden" href="#">
                                            <img src={SmWatchCharger} alt="Product" className='img-fluid' />
                                        </a>
                                        <div className="card-body py-2"><span className="d-inline-block bg-danger fs-ms text-white rounded-1 py-1 px-2 mb-3">-20%</span>
                                            <h3 className="product-title fs-sm"><a href="#">Smart Watch Wireless Charger</a></h3>
                                            <div className="C-Tprice"><span className="text-accent">$16.<small>00  </small></span>
                                                <del className="fs-sm C-Tprice text-muted">  $20.<small>00</small></del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-2 align-items-center justify-content-center d-flex">
                                    <div className="display-4 fw-light text-muted px-4">=</div>
                                </div>
                                <div className="col-md-4 pt-3">
                                    <div className="bg-CT-Box p-4 rounded-3 text-center mx-auto ">
                                        <div className="h3 product-price-CT-box mb-3 me-1">$183.<small>99</small></div>
                                        <button className="Button-Full-Red px-3" type="button">Purchase together</button>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </div>
    )
});

export default Shop
