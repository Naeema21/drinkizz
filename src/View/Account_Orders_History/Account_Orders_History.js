import React, { useState } from 'react';
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
import './Account_Orders_History.css';
import { useForm } from "react-hook-form";
import { products } from '../../assets/Data/product';
import { account } from '../../assets/Data/account';
import { Nav, Row, Col,Tab, ModalFooter, ModalBody } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import profile from '../../assets/images/AccountHistory/profile.png';
// images payment
import cardpaypal from '../../assets/images/AccountHistory/cardpaypal.png';
import cardmaster from '../../assets/images/AccountHistory/cardmaster.png';
import cardvisa from '../../assets/images/AccountHistory/cardvisa.png';
const Account_Orders_History =()=>{
    const { register, handleSubmit, reset } = useForm();
    // modal for support ticket
    const [lgShow, setLgShow] = useState(false);
    // modal for payment method  
    const [lgShowpay, setLgShowPay] = useState(false);
    // const handleSelect(key) {
    //     if (key === first)
    //      {
    //         setState({ heading: "" })
    //      }
    //      if(key === second)
    //      {
    //         setState({ heading: "" })
    //      }
    //      if(key === third)
    //      {
    //         setState({ heading: "" })
    //      }
    // }  
 return(
     <>
     <BreadCrumb heading='My addresses' BC1Link='/' breadcrumb1='Home' BC2Link='/' breadcrumb2='Account' BC3Link='/' breadcrumb3='Addressess'/>
     <div className='Heading-back-com2'>
         <div className='row mb-4 py-4'>
         <div className='col-lg-4'></div>
         <div className='col-lg-8'>
                    <div className="d-flex justify-content-between align-items-center">
                                <h6 className="text-light fs-base mb-0 ml-4 py-4 pt-4">List of your registered addresses:</h6>
                                <a className="Button-Red-Border Button-Full-Red text-light me-2 mb-0 signoutbtn" href="#"><i className="fa fa-sign-out me-2"></i>Sign out</a>
                                </div>
                    </div>
                    </div>
        </div>
     <div className='Account-Order-History'>
           <div className='container-fluid pb-5 mb-2 mb-md-4'>
                    {/* sidebar */}
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col lg={4} className="pt-4 pt-lg-0 pe-xl-5 profile-col-sidebar">
                                    <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
                                        <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                                            <div className="d-md-flex align-items-center">
                                                <div className='position-relative img-boreder-profile'>
                                                    <span className="ToolTip-img bg-warning position-absolute">384</span>
                                                    <img className='profile-orderhistory' src={profile} alt=""></img>
                                                </div>
                                            </div>
                                            <div className='justify-content-center align-items-center text-md-start ps-md-3 p-4'>
                                                <h6>Susan Gardner</h6>
                                                <span className='text-primary'>s.gardner@example.com</span>
                                            </div>
                                        </div> 
                                    <div id="account-menu">
                                        <div className="bg-light px-4 py-3">
                                           <h6 className="text-muted">Dashboard</h6>
                                        </div>
                                        <Nav variant="pills" className="flex-column">
                                            <ul>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first" title="account-orders">
                                                        <li className="sidebar-li">
                                                            <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                            <i className="fa fa-shopping-bag me-2"></i>Orders<span className="text-muted ms-auto">1</span>
                                                            </div>
                                                        </li> 
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second" title='account-wishlist'>
                                                        <li className="sidebar-li">
                                                            <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                            <i className="fa fa-heart-o me-2"></i>Wishlist<span className="text-muted ms-auto">3</span>
                                                            </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third" title='account-tickets'>
                                                        <li className="sidebar-li">
                                                        <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                <i className="fa fa-life-ring me-2"></i>Support tickets<span className="text-muted ms-auto"></span>
                                                        </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </ul>
                                            <div className="bg-light px-4 py-3">
                                                <h6 className="text-muted">Account settings</h6>
                                            </div>
                                             <ul>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth" title='account-profile'>
                                                        <li className="sidebar-li">
                                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                    <i className="fa fa-user-o me-2"></i>Profile info<span className="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth" title='account-address'>
                                                        <li className="sidebar-li">
                                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                <i className="fa fa-map-marker me-2"></i>Addresses<span className="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="sixth" title='account-payment'>
                                                        <li className="sidebar-li">
                                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                <i className="fa fa-credit-card me-2"></i>Payment methods<span className="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                             </ul>
                                        </Nav>            
                                    </div>
                                </div> 
                            </Col>
                            <Col sm={12} lg={8}>
                                <Tab.Content>
                                        <Tab.Pane eventKey="first"> 
                                                 {/* Orders list */}
                                            <div className="table-responsive fs-md mb-4">
                                            <table className="table table-hover mb-0">
                                                <thead>
                                                <tr>
                                                    <th>Order #</th>
                                                    <th>Date Purchased</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">34VB5540K83</a></td>
                                                    <td className="py-3">May 21, 2019</td>
                                                    <td className="py-3"><span className="badge bg-info m-0">In Progress</span></td>
                                                    <td className="py-3">$358.75</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">78A643CD409</a></td>
                                                    <td className="py-3">December 09, 2018</td>
                                                    <td className="py-3"><span className="badge bg-danger m-0">Canceled</span></td>
                                                    <td className="py-3"><span>$760.50</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">112P45A90V2</a></td>
                                                    <td className="py-3">October 15, 2018</td>
                                                    <td className="py-3"><span className="badge bg-warning m-0">Delayed</span></td>
                                                    <td className="py-3">$1,264.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">28BA67U0981</a></td>
                                                    <td className="py-3">July 19, 2018</td>
                                                    <td className="py-3"><span className="badge bg-success m-0">Delivered</span></td>
                                                    <td className="py-3">$198.35</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">502TR872W2</a></td>
                                                    <td className="py-3">April 04, 2018</td>
                                                    <td className="py-3"><span className="badge bg-success m-0">Delivered</span></td>
                                                    <td className="py-3">$2,133.90</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">47H76G09F33</a></td>
                                                    <td className="py-3">March 30, 2018</td>
                                                    <td className="py-3"><span className="badge bg-success m-0">Delivered</span></td>
                                                    <td className="py-3">$86.40</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div> 
                                            {/* Pagination */}
                                            <nav className="d-flex justify-content-between pt-2" aria-label="Page navigation">
                                                <ul className="pagination">
                                                    <li className="order-page"><a className="page-link text-dark" href="#"><i className="fa fa-angle-left me-2"></i>Prev</a></li>
                                                </ul>
                                                <ul className="pagination">
                                                    <li className="order-page d-sm-none"><span className="page-link page-link-static">1 / 5</span></li>
                                                    <li className="order-page active d-none d-sm-block" aria-current="page">
                                                        <span className="page-link text-light">1<span className="visually-hidden">(current)</span></span>
                                                    </li>
                                                    <li className="d-block"><a className="page-link text-dark" href="#">2</a></li>
                                                    <li className="d-block"><a className="page-link text-dark" href="#">3</a></li>
                                                    <li className="d-block"><a className="page-link text-dark" href="#">4</a></li>
                                                    <li className="d-block"><a className="page-link text-dark" href="#">5</a></li>
                                                </ul>
                                                <ul className="pagination">
                                                    <li className="order-page"><a className="page-link text-dark" href="#" aria-label="Next">Next<i className="fa fa-angle-right ms-2"></i></a></li>
                                                </ul>
                                            </nav>
                                            </Tab.Pane>
                                            {/* WishList */}
                                            <Tab.Pane eventKey="second">
                                            <div className='container'>
                                            {
                                                products.slice(0,3).map((productdata,i)=>{
                                                    return(
                                                    <div className='row'>
                                                    <div className="d-sm-flex justify-content-between mt-lg-4 mb-4 pb-3 pb-sm-2">
                                                            <div className='col-lg-4'>
                                                                <div className='d-block d-sm-flex align-items-start text-center text-sm-start'>
                                                                    <img className="wishlist-img" src={productdata.imgsrc} alt="Product"/>
                                                                </div>   
                                                                </div>
                                                            <div className='col-lg-6'>
                                                                <div className='d-block d-sm-flex align-items-start text-center text-sm-start'>
                                                                <div className="pt-2 product-order-wishlist">
                                                                <h3 className="text-dark font-weight-bold fs-base text-sm-start mb-2">{productdata.category}</h3>
                                                                <div className="fs-sm"><span className="text-muted me-2">Brand:</span>Tommy Hilfiger</div>
                                                                <div className="fs-sm"><span className="text-muted me-2">Color:</span>Khaki</div>
                                                                <div className="fs-lg text-accent pt-2 text-primary">$79.<small>50</small></div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-2'>
                                                                <div className='d-block d-sm-flex align-items-start text-center text-sm-start'>
                                                                        <button className="btn btn-outline-danger btn-sm" type="button"><i className="fa fa-trash me-2"></i>Remove</button>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <hr style={{"width":"100%","textalign":"left","marginleft":"0"}}></hr>
                                                    </div>
                                                      )
                                                    })
                                                 }
                                            </div>
                                            </Tab.Pane>
                                            {/*Support Ticket*/}
                                            <Tab.Pane eventKey="third">
                                              <div className="table-responsive mb-4">
                                                  <table className="table table-hover mb-0">
                                                    <thead>
                                                    <tr>
                                                        <th>Ticket Subject</th>
                                                        <th>Date Submitted | Updated</th>
                                                        <th>Type</th>
                                                        <th>Priority</th>
                                                        <th>Status</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="py-3"><a className="nav-link-style text-dark fw-bold" href="#">My new ticket</a></td>
                                                        <td className="py-3">09/27/2019 | 09/30/2019</td>
                                                        <td className="py-3">Website problem</td>
                                                        <td className="py-3"><span className="bg-warning badge m-0 px-2">High</span></td>
                                                        <td className="py-3"><span className="bg-success badge m-0 px-2">Open</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3"><a className="nav-link-style text-dark fw-bold" href="#">Another ticket</a></td>
                                                        <td className="py-3">08/21/2019 | 08/23/2019</td>
                                                        <td className="py-3">Partner request</td>
                                                        <td className="py-3"><span className="bg-info badge m-0 px-2">Medium</span></td>
                                                        <td className="py-3"><span className="bg-secondary badge m-0 px-2">Closed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3"><a className="nav-link-style text-dark fw-bold" href="#">Yet another ticket</a></td>
                                                        <td className="py-3">11/19/2018 | 11/20/2018</td>
                                                        <td className="py-3">Complaint</td>
                                                        <td className="py-3"><span className="bg-danger badge m-0 px-2">Urgent</span></td>
                                                        <td className="py-3"><span className="bg-secondary badge m-0 px-2">Closed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3"><a className="nav-link-style text-dark fw-bold" href="#">My old ticket</a></td>
                                                        <td className="py-3">06/19/2018 | 06/20/2018</td>
                                                        <td className="py-3">Info inquiry</td>
                                                        <td className="py-3"><span className="bg-success badge m-0 px-2">Low</span></td>
                                                        <td className="py-3"><span className="bg-secondary badge m-0 px-2">Closed</span></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                <div className="text-end pt-4">
                                                    <button className="Button-Red-Border Button-Full-Red text-light" onClick={() => setLgShow(true)}>Submit new ticket</button>
                                                </div>
                                                </div>
                                                <Modal centered size="lg" show={lgShow} onHide={() => setLgShow(false)} className="order-details"
                                                    aria-labelledby="example-modal-sizes-title-lg">
                                                        <Modal.Header closeButton className='bg-light'>
                                                            <Modal.Title id="example-modal-sizes-title-lg" className='py-1 ml-4'>
                                                            Submit new ticket
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                        <p className="text-muted fs-sm">We normally respond tickets within 2 business days.</p>
                                                        <div className="row gx-4 gy-3">
                                                            <div className="col-12">
                                                            <input className="form-control" type="text"/>
                                                            <label>Subject</label>
                                                            <div className="invalid-feedback">Please fill in the subject line!</div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                            <select className="form-select">
                                                                <option value="">Choose type</option>
                                                                <option value="Website problem">Website problem</option>
                                                                <option value="Partner request">Partner request</option>
                                                                <option value="Complaint">Complaint</option>
                                                                <option value="Info inquiry">Info inquiry</option>
                                                            </select>
                                                            </div>
                                                            <div className="col-sm-6">
                                                            <select className="form-select">
                                                                <option value="">How urgent is your issue?</option>
                                                                <option value="Urgent">Urgent</option>
                                                                <option value="High">High</option>
                                                                <option value="Medium">Medium</option>
                                                                <option value="Low">Low</option>
                                                            </select>
                                                            </div>
                                                            <div className="col-12">
                                                            <textarea className="form-control bg-light" rows="8"></textarea>
                                                            </div>
                                                            <div className="col-12">
                                                            <input className="form-control" type="file"/>
                                                            </div>
                                                        </div>
                                                        </Modal.Body>
                                                        <ModalFooter>
                                                        <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                                                        <button className="Button-Red-Border Button-Full-Red text-light" type="submit">Submit Ticket</button>
                                                        </ModalFooter>
                                                </Modal>
                                            </Tab.Pane>
                                            {/* Profile Info */}
                                            <Tab.Pane eventKey="fourth">
                                            <div className='pb-5 mb-2 mb-md-4'>
                                            <form autocomplete="off" onSubmit={handleSubmit}>
                                            <div className="bg-light rounded-3 p-4 mb-4">
                                                <div className="d-flex align-items-center">
                                                    <img className="rounded profiletab-img" src={profile} alt=""/>
                                                <div className="ps-3">
                                                    <button className="btn btn-light btn-shadow mb-2 badge-light btn-sm" type="button">
                                                        <i className="fa fa-spinner me-2"></i>Change avatar
                                                    </button>
                                                    <div className="mb-0 text-muted">Upload JPG, GIF or PNG image. 300 x 300 required.</div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="row gx-4 gy-3">
                                                <div className="col-lg-6">
                                                <label className="form-label">First Name</label>
                                                <input className="form-control" type="text" {...register("firstname",{ required: "Please enter your first name." })}/>
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label">Last Name</label>
                                                <input className="form-control" type="text" {...register("lastname",{ required: "Please enter your last name." })}/>
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label">Email Address</label>
                                                <input className="form-control" type="email" {...register("email",{ required: "Please enter your email." })} disabled=""/>
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label">Phone Number</label>
                                                <input className="form-control" type="text" {...register("phone",{ required: "Please enter your phone number." })} required=""/>
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label">New Password</label>
                                                <div className="">
                                                    <input className="form-control" type="password" {...register("password",{ required: "Please enter your password." })}/>
                                                    <label className="">
                                                    <input className="" type="checkbox"/>
                                                    <span className=""></span>
                                                    </label>
                                                </div>
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label">Confirm Password</label>
                                                <div>
                                                    <input className="form-control" type="password" {...register("confirmpassword",{ required: "Please enter your password." })}/>
                                                    <label>
                                                    <input type="checkbox"/>
                                                    </label>
                                                </div>
                                                </div>
                                                <div className="col-12">
                                                <hr className="mt-2 mb-3"/>
                                                <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                    <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" checked/>
                                                    <label className="form-check-label">Subscribe me to Newsletter</label>
                                                    </div>
                                                    <button className="Button-Red-Border Button-Full-Red text-light" type="button">Update profile</button>
                                                </div>
                                                </div>
                                            </div>
                                            </form>
                                            </div>
                                            </Tab.Pane>
                                            {/* Addressess */}
                                            <Tab.Pane eventKey="fifth">
                                            <div className="table-responsive fs-md">
                                            <table className="table table-hover mb-0">
                                                <thead>
                                                <tr>
                                                    <th>Address</th>
                                                    <th>Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                             
                                                     <tr>
                                                                    <td className="py-3 align-middle">396 Lillian Blvd, Holbrook, NY 11741, USA<span className="align-middle badge bg-info ms-2">Primary</span></td>
                                                                    <td className="py-3 align-middle">
                                                                        <a className="me-2 py-3" href="#"><i className="fa fa-edit"></i></a>
                                                                        <a className="text-danger py-3 ml-2" href="#">
                                                                            <div className="fa fa-trash"></div>
                                                                        </a>
                                                                    </td>
                                                    </tr>
                                                    <tr>
                                                                    <td className="py-3 align-middle">769, Industrial, West Chicago, IL 60185, USA</td>
                                                                    <td className="py-3 align-middle">
                                                                        <a className="me-2 py-3" href="#"><i className="fa fa-edit"></i></a>
                                                                        <a className="text-danger py-3 ml-2" href="#">
                                                                            <div className="fa fa-trash"></div>
                                                                        </a>
                                                                    </td>
                                                    </tr>
                                                    <tr>
                                                                    <td className="py-3 align-middle">514 S. Magnolia St. Orlando, FL 32806, USA</td>
                                                                    <td className="py-3 align-middle">
                                                                        <a className="me-2 py-3" href="#"><i className="fa fa-edit"></i></a>
                                                                        <a className="text-danger py-3 ml-2" href="#">
                                                                            <div className="fa fa-trash"></div>
                                                                        </a>
                                                                    </td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                            </div>
                                            </Tab.Pane>
                                            {/* Payment Methods */}
                                            <Tab.Pane eventKey="sixth">
                                            <div className="table-responsive fs-md mb-4">
                                                <table className="table table-hover mb-0">
                                                    <thead>
                                                    <tr>
                                                        <th>Your credit / debit cards</th>
                                                        <th>Name on card</th>
                                                        <th>Expires on</th>
                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            account.acc9.map((acc,i)=>{
                                                                return(
                                                                    <tr>
                                                                    <td className="py-3 align-middle">
                                                                    <div className="d-flex align-items-center">
                                                                        <img className="profiletab-img-card" src={acc.cardimg}/>
                                                                        <div className="ps-2"><span className="text-heading me-1">Visa</span>ending in 4999<span className="align-middle bg-info badge ms-2 px-2">Primary</span></div>
                                                                    </div>
                                                                    </td>
                                                                    <td className="py-3 align-middle">Susan Gardner</td>
                                                                    <td className="py-3 align-middle">08 / 2019</td>
                                                                    <td className="py-3 align-middle"><a className="me-2" href="#"><i className="fa fa-edit"></i></a>
                                                                    <a className="text-danger" href="#">
                                                                        <div className="fa fa-trash"></div></a></td>
                                                                </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                                </div>
                                                <div className="text-sm-end"><button className="Button-Red-Border Button-Full-Red text-light" onClick={() => setLgShowPay(true)}>Add payment method</button></div>
                                                <Modal centered size="lg" show={lgShowpay} onHide={() => setLgShowPay(false)} className="order-details"
                                                    aria-labelledby="example-modal-sizes-title-lg">
                                                        <Modal.Header closeButton className='bg-light'>
                                                            <Modal.Title id="example-modal-sizes-title-lg" className='py-1 ml-4'>
                                                            Add a payment method
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                        
                                                <div className="form-check mb-4">
                                                    <input className="form-check-input" type="radio"/>
                                                    <label className="form-check-label">PayPal<img className="d-inline-block align-middle card-img-pay ms-2" src={cardpaypal} alt="PayPal"/></label>
                                                </div>
                                                <div className="form-check mb-4">
                                                    <input className="form-check-input" type="radio" checked=""/>
                                                    <label className="form-check-label">Credit / Debit card<img className="d-inline-block card-img-pay align-middle ms-2" src={cardmaster} alt="Credit card"/></label>
                                                </div>
                                                <div className="row g-3 mb-2">
                                                    <div className="col-sm-6">
                                                    <input className="form-control" type="text" placeholder="Card Number"/>
                                                    <div className="invalid-feedback">Please fill in the card number!</div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                    <input className="form-control" type="text" placeholder="Full Name"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                    <input className="form-control" type="text" placeholder="MM/YY"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                    <input className="form-control" type="text" placeholder="CVC"/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                    <button className="Button-Red-Border Button-Full-Red text-light d-block w-100" type="submit">Register this card</button>
                                                    </div>
                                                </div>
                                                </Modal.Body>
                                                </Modal>
                                            </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
        </div>
     </>
 )
}
export default Account_Orders_History;