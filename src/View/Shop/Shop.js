import React from 'react'
import './Shop.css'
import Smwatch1 from '../../assets/images/Product/Product-Desc/Smart-watch/1.jpg'
import Smwatch2 from '../../assets/images/Product/Product-Desc/Smart-watch/2.jpg'
import Smwatch3 from '../../assets/images/Product/Product-Desc/Smart-watch/3.jpg'
import Smwatch4 from '../../assets/images/Product/Product-Desc/Smart-watch/4.jpg'
import { Accordion } from 'react-bootstrap'
import { Tab, Tabs, Nav, Col, Row } from 'react-bootstrap'
import ProductDescImg from '../../assets/images/Product/Product-Desc/Smart-watch/prod-desc-text.jpg'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import Card from '../../Components/Cards/Cards'
import { products } from '../../assets/Data/product'
import BTearphones from '../../assets/images/Product/Product-Desc/Smart-watch/BT-Earphones.jpg'
import CTSMwatch from '../../assets/images/Product/Product-Desc/Smart-watch/5.jpg'
import SmWatchCharger from '../../assets/images/Product/Product-Desc/Smart-watch/Smartwatch-charger.jpg'
import Smwatch1Large from '../../assets/images/Product/Product-Desc/Smart-watch/large1.jpg'
import Smwatch2Large from '../../assets/images/Product/Product-Desc/Smart-watch/large2.jpg'
import Smwatch3Large from '../../assets/images/Product/Product-Desc/Smart-watch/large3.jpg'
import Smwatch4Large from '../../assets/images/Product/Product-Desc/Smart-watch/large4.jpg'
import { ReviewComments } from '../../assets/Data/data'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

function Shop() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = () => {
        swal({
            title: "Thank You!",
            text: "Your Responce is Precious..",
            icon: "success",
        })
        reset();
    }
    const options = {
        items: 4,
        rewind: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i className='fa fa-chevron-left'></i>", "<i className='fa fa-chevron-right'></i>"]
    };
    const options3 = {
        items: 1,
        rewind: true,
        autoplay: false,
        dots: true
    }
    return (
        <div>
            <section className='Product-Description my-4'>
                <div className='container'>
                    <div className='Product-desc-back rounded-3 '>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="" defaultActiveKey="general">
                            <Tab eventKey="general" title=" General Info" className='py-4 px-sm-4'>
                                <div className="tab-content px-lg-3 py-4">
                                    <div className="tab-pane fade active show" id="general" role="tabpanel">
                                        <div className="row">
                                            <div className="col-lg-7 pe-lg-0" >
                                                <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="product-gallery" >
                                                    <Row >
                                                        <Col sm={3} className='product-gallery-preview' className="flex-column">
                                                            <Nav variant="pills" >
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="first" className="product-gallery-preview-item ">
                                                                        <img className="image-zoom" src={Smwatch1} data-zoom={Smwatch1} alt="Product image" width='80px' />
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="second" className="product-gallery-preview-item">
                                                                        <img className="image-zoom" src={Smwatch2} data-zoom={Smwatch2} alt="Product image" width='80px' />
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="third" className="product-gallery-preview-item">
                                                                        <img className="image-zoom" src={Smwatch3} data-zoom={Smwatch3} alt="Product image" width='80px' />
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="fourth" className="product-gallery-preview-item" >
                                                                        <img className="image-zoom" src={Smwatch4} data-zoom={Smwatch4} alt="Product image" width='80px' />
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                            </Nav>
                                                        </Col>
                                                        <Col sm={9}>
                                                            <Tab.Content>
                                                                <Tab.Pane eventKey="first">
                                                                    <img src={Smwatch1Large} className='img-fluid' width="100%"></img>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="second">
                                                                    <img src={Smwatch2Large} className='img-fluid' width="100%"></img>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="third">
                                                                    <img src={Smwatch3Large} className='img-fluid' width="100%"></img>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="fourth">
                                                                    <img src={Smwatch4Large} className='img-fluid' width="100%"></img>
                                                                </Tab.Pane>
                                                            </Tab.Content>
                                                        </Col>
                                                    </Row>
                                                </Tab.Container>
                                            </div>
                                            <div className="col-lg-5 pt-4 pt-lg-0">
                                                <div className="product-details ms-auto pb-3">
                                                    <div className='h3 product-desc-price'>"$124.
                                                        <small>99</small></div>
                                                </div>
                                                <div className='mb-4'>
                                                    <span className='Desc-text-heading'>Color:</span>
                                                    <span className='text-muted'>Color Option</span>
                                                </div>
                                                <div className="position-relative me-n4 mb-3">
                                                    <div className="form-check form-option form-check-inline mb-2">
                                                        <input className="form-check-input" type="radio" name="color" id="color1" data-bs-label="colorOption" value="Dark blue/Orange" checked="" />
                                                        <label className="form-option-label rounded-circle" for="color1"><span className="form-option-color rounded-circle" style={{ backgroundColor: '#f25540' }}></span></label>
                                                    </div>
                                                    <div className="form-check form-option form-check-inline mb-2">
                                                        <input className="form-check-input" type="radio" name="color" id="color2" data-bs-label="colorOption" value="Dark blue/Green" />
                                                        <label className="form-option-label rounded-circle" for="color2"><span className="form-option-color rounded-circle" style={{ backgroundColor: '#65805b' }}></span></label>
                                                    </div>
                                                    <div className="form-check form-option form-check-inline mb-2">
                                                        <input className="form-check-input" type="radio" name="color" id="color3" data-bs-label="colorOption" value="Dark blue/White" />
                                                        <label className="form-option-label rounded-circle" for="color3"><span className="form-option-color rounded-circle" style={{ backgroundColor: '#f5f5f5' }}></span></label>
                                                    </div>
                                                    <div className="form-check form-option form-check-inline mb-2">
                                                        <input className="form-check-input" type="radio" name="color" id="color4" data-bs-label="colorOption" value="Dark blue/Black" />
                                                        <label className="form-option-label rounded-circle" for="color4"><span className="form-option-color rounded-circle" style={{ backgroundColor: '#333' }}></span></label>
                                                    </div>
                                                    <div className="product-badge product-available mt-n1">Product available</div>
                                                </div>
                                                <div className="d-flex align-items-center pt-2 pb-4">
                                                    <select className="form-select me-3" style={{ width: "5rem" }}>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                    <button className="btn btn-AddCart btn-shadow d-block w-100" type="button"><i className="fa fa-shopping-cart"></i>Add to Cart</button>
                                                </div>
                                                <div className="d-flex mb-4">
                                                    <div className="w-100 me-3">
                                                        <button className="btn btn-WishList d-block w-100" type="button"><i className="fa fa-heart" style={{ color: "gray" }}></i><span className="d-none d-sm-inline"> Add to </span>Wishlist</button>
                                                    </div>
                                                    <div className="w-100">
                                                        <button className="btn btn-WishList d-block w-100" type="button"><i className="fa fa-heart" style={{ color: "gray" }}></i>Compare</button>
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
                                                                <select class="form-select">
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
                            <Tab eventKey="specs" title="Tech Specs" className='py-4 px-sm-4'>
                                <div className="tab-pane fade active show" id="specs" role="tabpanel">
                                    <div className="row d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                                        <div className="col-lg-4 col-sm-5 d-flex align-items-center me-md-3"><img src={Smwatch1} width="90" alt="Product thumb" />
                                            <div className="ps-3">
                                                <h6 className="fs-base mb-2">Smartwatch Youth Edition</h6>
                                                <div className="h3 C-Tprice">$124.<small>99</small></div>
                                            </div>
                                        </div>
                                        <div className=" col-lg-4 col-sm-5 d-flex align-items-center pt-3">
                                            <select className="form-select me-2 w-50" >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <button className="btn btn-AddCart btn-shadow block w-100" ><i className="fa fa-shopping-cart"></i>Add to Cart</button>
                                            <div className="me-2">
                                                <button className="btn btn-small-desc" style={{ marginLeft: '7px' }} ><i className="fa fa-heart" style={{ color: "gray" }}></i></button>
                                            </div>
                                            <div>
                                                <button className="btn btn-small-desc"><i className="fa fa-heart" style={{ color: "gray" }}></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row pt-2">
                                        <div className="col-lg-5 col-sm-6">
                                            <h3 className="h6">General specs</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Model:</span><span>Amazfit Smartwatch</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Gender:</span><span>Unisex</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Smartphone app:</span><span>Amazfit Watch</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">OS campitibility:</span><span>Android / iOS</span></li>
                                            </ul>
                                            <h3 className="h6">Physical specs</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Shape:</span><span>Rectangular</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Body material:</span><span>Plastics / Ceramics</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Band material:</span><span>Silicone</span></li>
                                            </ul>
                                            <h3 className="h6">Display</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Display type:</span><span>Color</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Display size:</span><span>1.28"</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Screen resolution:</span><span>176 x 176</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Touch screen:</span><span>No</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-5 col-sm-6 offset-lg-1">
                                            <h3 className="h6">Functions</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Phone calls:</span><span>Incoming call notification</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Monitoring:</span><span>Heart rate / Physical activity</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">GPS support:</span><span>Yes</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Sensors:</span><span>Heart rate, Gyroscope, Geomagnetic, Light sensor</span></li>
                                            </ul>
                                            <h3 className="h6">Battery</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Battery:</span><span>Li-Pol</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Battery capacity:</span><span>190 mAh</span></li>
                                            </ul>
                                            <h3 className="h6">Dimensions</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Dimensions:</span><span>195 x 20 mm</span></li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Weight:</span><span>32 g</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="reviews" title="Reviews" className='py-4 px-sm-4'>
                                <div className="row d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                                    <div className="col-lg-4 col-sm-5 d-flex align-items-center me-md-3"><img src={Smwatch1} width="90" alt="Product thumb" />
                                        <div className="ps-3">
                                            <h6 className="fs-base mb-2">Smartwatch Youth Edition</h6>
                                            <div className="h3 C-Tprice">$124.<small>99</small></div>
                                        </div>
                                    </div>
                                    <div className=" col-lg-4 col-sm-5 d-flex align-items-center pt-3">
                                        <select className="form-select me-2 w-50" >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button className="btn btn-AddCart btn-shadow block w-100" ><i className="fa fa-shopping-cart"></i>Add to Cart</button>
                                        <div className="me-2">
                                            <button className="btn btn-small-desc" style={{ marginLeft: '7px' }} ><i className="fa fa-heart" style={{ color: "gray" }}></i></button>
                                        </div>
                                        <div>
                                            <button className="btn btn-small-desc"><i className="fa fa-heart" style={{ color: "gray" }}></i></button>
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
                                                <label className="fs-sm text-muted text-nowrap me-2 d-none d-sm-block" for="sort-reviews">Sort by:</label>
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
                                                    <div className="pb-4 mb-4 border-bottom">
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
                                                    <label className='form-label'>Your Name</label>
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
                                                    &nbsp; &nbsp;<span className="error-msg" title="name required">{errors.name && "Will be displayed on the comment."}</span>
                                                </div>


                                                <div className="form-group mb-3">
                                                    <label className='form-label'>Your Email</label>
                                                    <input
                                                        type="email"
                                                        autoComplete="off"
                                                        placeholder=" Email Address"
                                                        {...register("email", {
                                                            required: true,
                                                        })}
                                                        className="form-control"
                                                    />
                                                    &nbsp; &nbsp;<span className="error-msg" title="invalid email address">{errors.email && "Authentication only - we won't spam you."}</span>
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label className='form-label'>Rating</label>
                                                    <select className="form-select" required="" id="review-rating">
                                                        <option value="">Choose rating</option>
                                                        <option value="5">5 stars</option>
                                                        <option value="4">4 stars</option>
                                                        <option value="3">3 stars</option>
                                                        <option value="2">2 stars</option>
                                                        <option value="1">1 star</option>
                                                    </select>
                                                </div>


                                                <div className="form-group mb-3">
                                                    <label className='form-label'>Review</label>
                                                    <textarea autoComplete="off"
                                                        placeholder=""
                                                        {...register("comment", {
                                                            required: true,
                                                        })}
                                                        className="form-control" rows="4"  ></textarea>
                                                    &nbsp; &nbsp;<span className="error-msg" title="invlid subject">{errors.comment && "Your review must be at least 50 characters."}</span>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label className='form-label'>Pros</label>
                                                    <input type="text"
                                                        {...register("Pros", {
                                                            minLength: 3, maxLength: 60
                                                        })}
                                                        className="form-control" autoComplete="off" placeholder="Seperated by comma" />
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label className='form-label'>Cons</label>
                                                    <input type="text"
                                                        {...register("cons", {
                                                            minLength: 3, maxLength: 60
                                                        })}
                                                        className="form-control" autoComplete="off" placeholder="Seperated by comma" />
                                                </div>
                                                <div className="form-group ">
                                                    <button className="btn btn-AddCart w-100" type="submit">
                                                        <span>Submit a Review</span>
                                                    </button>
                                                </div>
                                            </form>

                                        </div>

                                    </div>

                                </div>
                            </Tab>
                        </Tabs>


                    </div>
                </div>
            </section>
            <section className='Choose-Your-Style'>
                <div className="container pt-lg-3 pb-4 pb-sm-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="h3 pb-2">Choose your style</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <img src={ProductDescImg} alt="Product description" />
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                        </div>
                    </div>
                </div>

            </section>
            <hr class="mb-5"></hr>
            <section className='You-May-Also-like-Product mb-5'>
                <div className='container'>
                    <h2 class="h3 text-center pb-4">You may also like</h2>
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
                <div class="container pt-lg-1 pb-5 mb-md-3">
                    <div class="card-CT card-body pt-5">
                        <h2 class="h3 text-center pb-4">Cheaper together</h2>
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
                                        <button className="btn btn-AddCart px-3" type="button">Purchase together</button>
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
                                        <button className="btn btn-AddCart px-3" type="button">Purchase together</button>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shop
