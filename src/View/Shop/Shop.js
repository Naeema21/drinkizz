import React from 'react'
import './Shop.css'
import Smwatch1 from '../../assets/images/Product/Product-Desc/Smart-watch/1.jpg'
import Smwatch2 from '../../assets/images/Product/Product-Desc/Smart-watch/2.jpg'
import Smwatch3 from '../../assets/images/Product/Product-Desc/Smart-watch/3.jpg'
import Smwatch4 from '../../assets/images/Product/Product-Desc/Smart-watch/4.jpg'
import { Accordion } from 'react-bootstrap'
import { Tab, Tabs, Nav, Col, Row } from 'react-bootstrap'

function Shop() {
    return (
        <div>
            <section className='Product-Description my-4'>
                <div className='container'>
                    <div className='Product-desc-back rounded-3'>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link py-4 px-sm-4 active" href="#general" data-bs-toggle="tab" role="tab">
                                    General
                                    <span className="d-none d-sm-inline">
                                        Info
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link py-4 px-sm-4" href="#specs" data-bs-toggle="tab" role="tab">
                                    <span className="d-none d-sm-inline">
                                        Tech
                                    </span>
                                    Specs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link py-4 px-sm-4" href="#reviews" data-bs-toggle="tab" role="tab">
                                    Reviews
                                    <span className="fs-sm opacity-60">
                                        (74)
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content px-lg-3 py-4">
                            <div className="tab-pane fade active show" id="general" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-7 pe-lg-0" >
                                        {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="product-gallery">
                                            <Row >
                                                <Col sm={3} className='product-gallery-preview'>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="first" className="product-gallery-preview-item active">
                                                              
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
                                                            1234
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">
                                                            9876
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container> */}
                                         <div className="product-gallery">
                                            <div className="product-gallery-preview order-sm-2">
                                                <div className="product-gallery-preview-item active" id="first">
                                                    <img className="image-zoom" src={Smwatch1} data-zoom={Smwatch1} alt="Product image" width='80px' />
                                                    <div className="image-zoom-pane"></div>
                                                </div>
                                                <div className="product-gallery-preview-item" id="second">
                                                    <img className="image-zoom" src={Smwatch2} data-zoom={Smwatch2} alt="Product image" width='80px' />
                                                    <div className="image-zoom-pane"></div>
                                                </div>
                                                <div className="product-gallery-preview-item" id="third">
                                                    <img className="image-zoom" src={Smwatch3} data-zoom={Smwatch3} alt="Product image" width='80px' />
                                                    <div className="image-zoom-pane"></div>
                                                </div>
                                                <div className="product-gallery-preview-item" id="fourth">
                                                    <img className="image-zoom" src={Smwatch4} data-zoom={Smwatch4} alt="Product image" width='80px' />
                                                    <div className="image-zoom-pane"></div>
                                                </div>
                                            </div>

                                        </div> 
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
                                            <button className="btn btn-AddCart btn-shadow d-block w-100" type="button"><i className="ci-cart fs-lg me-2"></i>Add to Cart</button>
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shop
