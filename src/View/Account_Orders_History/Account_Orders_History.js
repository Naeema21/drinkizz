import React, { useState,useEffect } from 'react';
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
import './Account_Orders_History.css';
import { useForm } from "react-hook-form";
import { products } from '../../assets/Data/product';
//import { account } from '../../assets/Data/account';
import { Nav, Row, Col,Tab, ModalFooter, ModalBody } from "react-bootstrap";
import profile from '../../assets/images/AccountHistory/profile.png';
import Wishlist from './Wishlist';
import Support from './Support';
import Address from './Address';
import PaymentMethods from './PaymentMethods';
import axios from 'axios';
const Account_Orders_History =()=>{
    // payments modal
    const { register, handleSubmit,reset,formState:{errors} } = useForm();
    const onProfile = data => 
    {
        console.log(data); 
        reset()
    }
     //get data from Api
     const[items,setItems]=useState([]);
     useEffect(()=> {   
         axios.get(`https://daruwale.herokuapp.com/public/wishlist`)
         .then(res => 
             {
             console.log(res);
             console.log(res.data.data);
             console.log(res.data.totalwishlist);
             setItems(res.data.totalwishlist); 
             console.log(items);
         })    
  }, [])
//  const Wishlist = ' Wishlist '+ items.length;
//  console.log(Wishlist);
 return(
     <>
     <BreadCrumb heading='My addresses' BC1Link='/' breadcrumb1='Home' BC2Link='/' breadcrumb2='Account' BC3Link='/' breadcrumb3='Addressess'/>

     <div className='Account-Order-History'>
           <div className='container pb-5 mb-2 mb-md-4'>
                    {/* sidebar  onSelect={handleSelect()} */}
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
                                                    <Nav.Link eventKey="first" title="account-orders" href="#account-orders">
                                                        <li className="sidebar-li">
                                                            <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                            <i className="fa fa-shopping-bag me-2"></i>Orders<span className="text-muted ms-auto">1</span>
                                                            </div>
                                                        </li> 
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second" title="Wishlist" href="#account-wishlist">
                                                        <li className="sidebar-li">
                                                            <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                            <i className="fa fa-heart-o me-2"></i>Wishlist
                                                            <span className="text-muted ms-auto">{Wishlist.length}</span>
                                                            </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third" title='account-tickets' href="#account-tickets">
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
                                                    <Nav.Link eventKey="fourth" title='account-profile' href="#account-profile">
                                                        <li className="sidebar-li">
                                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                    <i className="fa fa-user-o me-2"></i>Profile info<span className="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth" title='account-address' href="#account-address">
                                                        <li className="sidebar-li">
                                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                <i className="fa fa-map-marker me-2"></i>Addresses<span className="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="sixth" title='account-payment' href="#account-payment">
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
                                        <div className="d-flex justify-content-between align-items-center pt-lg-2 pb-4 pb-lg-5 mb-lg-3">
                                        <div className="d-flex align-items-center">
                                            <label className="d-none d-lg-block fs-sm text-light text-nowrap opacity-75 me-2 text-dark">Sort orders:</label>
                                            <label className="d-lg-none fs-sm text-nowrap opacity-75 me-2 text-dark">Sort orders:</label>
                                            <select className="form-select" id="order-sort">
                                            <option>All</option>
                                            <option>Delivered</option>
                                            <option>In Progress</option>
                                            <option>Delayed</option>
                                            <option>Canceled</option>
                                            </select>
                                        </div><a className="Button-Red-Border Button-Full-Red text-light me-2 mt-4 mb-0 btn-sm signoutbtn" href="#"><i className="fa fa-sign-out me-2"></i>Sign out</a>
                                        </div>
                                                       <hr style={{"width":"100%","textalign":"left","marginleft":"0","color":"black","height":"3px"}}></hr>
                                                 {/* Orders list */}
                                            <div className="table-responsive fs-md mb-4">
                                            <table className="table table-hover mb-0">
                                                <thead>
                                                <tr>
                                                    <th>Order #</th>
                                                    <th className='px-4'>Date Purchased</th>
                                                    <th>Status</th>
                                                    <th className='px-4'>Total</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">34VB5540K83</a></td>
                                                    <td className="py-3 px-4">May 21, 2019</td>
                                                    <td className="py-3"><span className="badge bg-info bg-opacity-60 bg-lighten-xl m-0">In Progress</span></td>
                                                    <td className="py-3 px-4">$358.75</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">78A643CD409</a></td>
                                                    <td className="py-3 px-4">December 09, 2018</td>
                                                    <td className="py-3"><span className="badge bg-danger bg-opacity-60 bg-lighten-xl m-0">Canceled</span></td>
                                                    <td className="py-3 px-4"><span>$760.50</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">112P45A90V2</a></td>
                                                    <td className="py-3 px-4">October 15, 2018</td>
                                                    <td className="py-3"><span className="badge bg-warning bg-opacity-60 bg-lighten-xl m-0">Delayed</span></td>
                                                    <td className="py-3 px-4">$1,264.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">28BA67U0981</a></td>
                                                    <td className="py-3 px-4">July 19, 2018</td>
                                                    <td className="py-3"><span className="badge bg-success bg-opacity-60 bg-lighten-xl m-0">Delivered</span></td>
                                                    <td className="py-3 px-4">$198.35</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">502TR872W2</a></td>
                                                    <td className="py-3 px-4">April 04, 2018</td>
                                                    <td className="py-3"><span className="badge bg-success bg-opacity-60 bg-lighten-xl m-0">Delivered</span></td>
                                                    <td className="py-3 px-4">$2,133.90</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><a className="text-dark fw-bold" href="#">47H76G09F33</a></td>
                                                    <td className="py-3 px-4">March 30, 2018</td>
                                                    <td className="py-3"><span className="badge bg-success bg-opacity-60 bg-lighten-xl m-0">Delivered</span></td>
                                                    <td className="py-3 px-4">$86.40</td>
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
                                                    <li className="order-page d-sm-none"><span className="page-link page-link-static">1</span></li>
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
                                                <Wishlist/>
                                            </Tab.Pane>
                                            {/* Support Ticket */}
                                            <Tab.Pane eventKey="third">
                                                <Support/>
                                            </Tab.Pane>
                                            {/* Profile Info */}
                                            <Tab.Pane eventKey="fourth">
                                            <div className="d-flex justify-content-between align-items-center px-4 mb-4">
                                                                <h6 className="text-dark fs-base mb-0 ml-4 pt-4 mt-1 ListSort">Update you profile details below:</h6>
                                                                <a className="Button-Red-Border Button-Full-Red text-light me-2 mt-4 mb-0 btn-sm signoutbtn" href="#"><i className="fa fa-sign-out me-2"></i>Sign out</a>
                                                            </div>
                                            <hr></hr>
                                            <div className='pb-5 mb-2 mb-md-4'>
                                            <form autoComplete="off" onSubmit={handleSubmit(onProfile)}>
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
                                                <input className="form-control" type="text" {...register("firstname",{ required: true, maxLength: 10 })}/>
                                                <div className='text-errormsg'>{errors.firstname && "Please fill firstName maximum 10 alphabets!!"}</div>
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label">Last Name</label>
                                                <input className="form-control" type="text" {...register("lastname",{ required: true, maxLength: 10 })}/>
                                                <div className='text-errormsg'>{errors.lastname && "Please fill LastName maximum 10 alphabets!!"}</div>
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label">Email Address</label>
                                                <input className="form-control" type="email" {...register("email",{ required:true })} disabled=""/>
                                                <div className='text-errormsg'>{errors.email && "Please fill Email!"}</div>
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label">Phone Number</label>
                                                <input className="form-control" type="number" {...register("phone",{ required: true, minLength:10, maxLength: 12 })} required=""/>
                                                <div className='text-errormsg'>{errors.phone && "Please fill PhoneNumber maximum 12 digits!!"}</div>
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label">New Password</label>
                                                <div className="">
                                                    <input className="form-control" type="password" {...register("password",{ required: true })}/>
                                                    <div className='text-errormsg'>{errors.password && "Please fill Password."}</div>
                                                </div>
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label">Confirm Password</label>
                                                <div>
                                                    <input className="form-control" type="password" {...register("confirmpassword",{ required: true,pattern:"(?=.*/d)(?=.*[a-z])(?=.*[A-Z]).{8,}" })}/>
                                                    <div className='text-errormsg'>{errors.confirmpassword && "Please fill Password Again!"}</div>
                                                </div>
                                                </div>
                                                <div className="col-12">
                                                <hr className="mt-2 mb-3"/>
                                                <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                    <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultChecked/>
                                                    <label className="form-check-label">Subscribe me to Newsletter</label>
                                                    </div>
                                                    <button className="Button-Red-Border Button-Full-Red text-light" type="submit">Update profile</button>
                                                </div>
                                                </div>
                                            </div>
                                            </form>
                                            </div>
                                            </Tab.Pane>
                                            {/* Addressess */}
                                            <Tab.Pane eventKey="fifth">
                                                <Address/>
                                            </Tab.Pane>
                                            {/* Payment Methods */}
                                            <Tab.Pane eventKey="sixth">
                                                <PaymentMethods/>
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