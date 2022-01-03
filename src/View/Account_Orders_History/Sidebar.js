import React, { useState,useEffect } from 'react';
import axios from 'axios';
import profile from '../../assets/images/AccountHistory/profile.png';
import Wishlist from './Wishlist';
import Support from './Support';
import Address from './Address';
import Orders from './Orders';
import PaymentMethods from './PaymentMethods';
import Profile from './Profile';
import { Nav, Row, Col,Tab, ModalFooter, ModalBody } from "react-bootstrap";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Sidebar() {
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
    const Wishlist1 = ' Wishlist '+ items.length;
    console.log(Wishlist1);
    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                
           {/* <Col lg={4} className="pt-4 pt-lg-0 pe-xl-5 profile-col-sidebar"> */}
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
                                                 {/* <LinkContainer to="/orders"> */}
                                                    <Nav.Link eventKey="first" title="account-orders" to="#account-orders">
                                                            <li className="sidebar-li">
                                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                <i className="fa fa-shopping-bag me-2"></i>Orders<span className="text-muted ms-auto">1</span>
                                                                <Link to="/orders">
                                                                <i className='fa fa-arrow-right' aria-hidden="true"></i>
                                                                </Link>
                                                                </div>
                                                            </li>
                                                    </Nav.Link>
                                                {/* </LinkContainer> */}
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second" title="Wishlist" to="#account-wishlist">
                                                        <li className="sidebar-li">
                                                            <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                            <i className="fa fa-heart-o me-2"></i>Wishlist
                                                            <span className="text-muted ms-auto">
                                                                  {Wishlist1.length}
                                                                </span>
                                                            </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third" title='account-tickets' to="#account-tickets">
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
                                                    <Nav.Link eventKey="fourth" title='account-profile' to="#account-profile">
                                                        <li className="sidebar-li">
                                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                    <i className="fa fa-user-o me-2"></i>Profile info<span className="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth" title='account-address' to="#account-address">
                                                        <li className="sidebar-li">
                                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                <i className="fa fa-map-marker me-2"></i>Addresses<span className="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="sixth" title='account-payment' to="#account-payment">
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
                            {/* </Col> */}
            
            </Tab.Container>
        </div>
    )
}

export default Sidebar
