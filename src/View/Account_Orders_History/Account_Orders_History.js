import React, { useState,useEffect } from 'react';
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
import './Account_Orders_History.css';
import { Nav, Row, Col,Tab, ModalFooter, ModalBody } from "react-bootstrap";
import profile from '../../assets/images/AccountHistory/profile.png';
import Wishlist from './Wishlist';
import Support from './Support';
import Address from './Address';
import Orders from './Orders';
import PaymentMethods from './PaymentMethods';
import axios from 'axios';
import Profile from './Profile';
import { Link } from 'react-router-dom';
const Account_Orders_History =()=>{
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

//  change the tab url'
const [key,setKey]=useState({});
 const handleSelect=(key)=>{
        if (key === 'first')
         {
            setKey({ title: "/account-orders" })
            console.log('account-orders', key)
         }
        if(key === 'second')
         {
            setKey({ title: "account-wishlist" })
            console.log('account-wishlist', key)
         }
        if(key === 'third')
         {
            setKey({ title: "/account-tickets" })
            console.log('account-tickets', key);
         }
        if(key === 'fourth')
         {
            setKey({ title:"/account-profile"})
            console.log('account-profile',key);
         }
        if(key === 'fifth' )
         {
            setKey({ title:"/account-address"})
            console.log('account-address', key);
         }
        if(key === 'sixth')
         {
            setKey({ title:"/account-payment"})
            console.log('account-payment', key);
         }
    }
 return(
     <>
     <BreadCrumb heading='My addresses' BC1Link='/' breadcrumb1='Home' BC2Link='/' breadcrumb2='Account' BC3Link='/' breadcrumb3='Addressess'/>
        <div className='Heading-back-com2'>
            <div className='col-lg-4'></div>
            <div className='col-lg-8'></div>
        </div>
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
                                        <Nav variant="pills" className="flex-column" activeKey="first" onSelect={handleSelect()}>
                                            <ul>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first" title="account-orders" to="#account-orders">
                                                        <li className="sidebar-li">
                                                            <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                            <i className="fa fa-shopping-bag me-2"></i>Orders
                                                            <span className="text-muted ms-auto">1</span>
                                                            </div>
                                                        </li> 
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second" title="Wishlist" to="#account-wishlist">
                                                        <li className="sidebar-li">
                                                            <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                            <i className="fa fa-heart-o me-2"></i>Wishlist
                                                            <span className="text-muted ms-auto">
                                                                  {items} 
                                                                </span>
                                                            </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third" title='account-tickets' to="#account-tickets">
                                                        <li className="sidebar-li">
                                                        <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                <i className="fa fa-life-ring me-2"></i>Support tickets
                                                                <span className="text-muted ms-auto"></span>
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
                                                                    <i className="fa fa-user-o me-2"></i>Profile info
                                                                <span className="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth" title='account-address' to="#account-address">
                                                        <li className="sidebar-li">
                                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                <i className="fa fa-map-marker me-2"></i>Addresses
                                                                <span className="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="sixth" title='account-payment' to="#account-payment">
                                                        <li className="sidebar-li">
                                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                                <i className="fa fa-credit-card me-2"></i>Payment methods
                                                                <span className="text-muted ms-auto"></span>
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
                                            {/* orders */}
                                            <Tab.Pane eventKey="first"> 
                                                <Orders/>
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
                                                <Profile/>
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