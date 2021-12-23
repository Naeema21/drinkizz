import React from 'react';
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
import './Account_Orders_History.css';
import { Nav, Row, Col,Tab } from "react-bootstrap";
import profile from '../../assets/images/AccountHistory/profile.png';
const Account_Orders_History =()=>{
 return(
     <>
     <BreadCrumb heading='' BC1Link='/' breadcrumb1='Home' BC2Link='/' breadcrumb2='Account' BC3Link='/' breadcrumb3='Addressess'/>
     <div className='Account-Order-History'>
            <div className='container'>
                <div className='row'>
                    {/* sidebar */}
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={4} className="pt-4 profile-col-sidebar">
                                    <div class="bg-white rounded-3 shadow-lg pt-1 mb-5">
                                        <div class="d-flex justify-content-between align-items-center text-center text-md-start p-4">
                                            <div class="d-flex align-items-center">
                                                <div className='img-thumbnail rounded-circle position-relative'>
                                                    <span class="ToolTip-img bg-warning position-absolute">384</span>
                                                    <img className='profile-orderhistory' src={profile} alt=""></img>
                                                </div>
                                            </div>
                                            <div className='justify-content-center align-items-center ps-md-3'>
                                                <h5>Susan Gardner</h5>
                                                <h6>s.gardner@example.com</h6>
                                            </div>
                                        </div> 
                                   
                                    <div id="account-menu">
                                        <div class="bg-light px-4 py-3">
                                           <h6 class="text-muted">Dashboard</h6>
                                        </div>
                                        <Nav variant="pills" className="flex-column">
                                            <ul>
                                            <Nav.Item>
                                                    <Nav.Link eventKey="dashbord">
                                                        <li class="sidebar-li">
                                                            <div class="d-flex align-items-center px-2 py-1">
                                                            <i class="fa fa-dashbord me-2"></i>Dashbord<span class="text-muted ms-auto"></span>
                                                            </div>
                                                        </li> 
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="default">
                                                        <li class="sidebar-li">
                                                            <div class="d-flex align-items-center px-2 py-1">
                                                            <i class="fa fa-shopping-bag me-2"></i>Orders<span class="text-muted ms-auto">1</span>
                                                            </div>
                                                        </li> 
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">
                                                        <li class="sidebar-li">
                                                            <div class="d-flex align-items-center px-2 py-1">
                                                            <i class="fa fa-heart-o me-2"></i>Wishlist<span class="text-muted ms-auto">3</span>
                                                            </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">
                                                        <li class="sidebar-li">
                                                        <div class="d-flex align-items-center px-2 py-1">
                                                                <i class="fa fa-life-ring me-2"></i>Support tickets<span class="text-muted ms-auto"></span>
                                                        </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </ul>
                                            <div class="bg-light px-4 py-3">
                                                <h6 class="text-muted">Account settings</h6>
                                            </div>
                                             <ul>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">
                                                        <li class="sidebar-li">
                                                                <div class="d-flex align-items-center px-2 py-1">
                                                                    <i class="fa fa-user-o me-2"></i>Profile info<span class="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth">
                                                        <li class="sidebar-li">
                                                                <div class="d-flex align-items-center px-2 py-1">
                                                                <i class="fa fa-map-marker me-2"></i>Addresses<span class="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth">
                                                        <li class="sidebar-li">
                                                                <div class="d-flex align-items-center px-2 py-1">
                                                                <i class="fa fa-credit-card me-2"></i>Payment methods<span class="text-muted ms-auto"></span>
                                                                </div>
                                                        </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                             </ul>
                                        </Nav>            
                                    </div>
                                    </div> 
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                            <Tab.Pane eventKey="dashbord">
                                            <div class="table-responsive fs-md">
                                                <table class="table table-hover mb-0">
                                                    <thead>
                                                    <tr>
                                                        <th>Address</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td class="py-3 align-middle">396 Lillian Blvd, Holbrook, NY 11741, USA
                                                            <span class="align-middle badge bg-info ms-2">Primary</span>
                                                        </td>
                                                        <td class="py-3 align-middle">
                                                            <a href="#" data-bs-toggle="tooltip"><i class="fa fa-edit me-2"></i></a>
                                                            <a class="text-danger" href="#" data-bs-toggle="tooltip">
                                                            <div class="fa fa-trash"></div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="py-3 align-middle">769, Industrial, West Chicago, IL 60185, USA</td>
                                                        <td class="py-3 align-middle">
                                                            <a href="#" data-bs-toggle="tooltip"><i class="fa fa-edit me-2"></i></a>
                                                            <a class="text-danger" href="#">
                                                            <div class="fa fa-trash"></div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="py-3 align-middle">514 S. Magnolia St. Orlando, FL 32806, USA</td>
                                                        <td class="py-3 align-middle">
                                                            <a href="#" data-bs-toggle="tooltip"><i class="fa fa-edit me-2"></i></a>
                                                            <a class="text-danger" href="#">
                                                            <div class="fa fa-trash"></div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="default">
                                                hii how r u
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="first">
                                                hii
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                hello
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                hello hi
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="forth">
                                                hello  hiiiiii
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fifth">
                                                hello hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                                            </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </div>
     </>
 )
}
export default Account_Orders_History;