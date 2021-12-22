import React from 'react';
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
import './Account_Orders_History.css';
import profile from '../../assets/images/AccountHistory/profile.png';
const Account_Orders_History =()=>{
 return(
     <>
     <BreadCrumb heading='' BC1Link='/' breadcrumb1='Home' BC2Link='/' breadcrumb2='Account' BC3Link='/' breadcrumb3='Addressess'/>
     <div className='Account-Order-History'>
            <div className='container'>
                <div className='row'>
                    {/* sidebar */}
                    <div className="col-lg-4 pt-4 profile-col-sidebar">
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
                                <ul>
                                    <li class="sidebar-li">
                                        <a class="d-flex align-items-center px-4 py-3" href="#">
                                        <i class="fa fa-shopping-bag me-2"></i>Orders<span class="text-muted ms-auto">1</span>
                                        </a>
                                    </li>
                                    <li class="sidebar-li">
                                        <a class="d-flex align-items-center px-4 py-3" href="#">
                                        <i class="fa fa-heart-o me-2"></i>Wishlist<span class="text-muted ms-auto">3</span>
                                        </a>
                                    </li>
                                    <li class="sidebar-li">
                                        <a class="d-flex align-items-center px-4 py-3" href="#">
                                        <i class="fa fa-life-ring me-2"></i>Support tickets<span class="text-muted ms-auto"></span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="bg-light px-4 py-3">
                                        <h6 class="text-muted">Account settings</h6>
                                    </div>
                                    <ul>
                                        <li class="sidebar-li">
                                            <a class="d-flex align-items-center px-4 py-3" href="#">
                                            <i class="fa fa-user-o me-2"></i>Profile info<span class="text-muted ms-auto"></span>
                                            </a>
                                        </li>
                                        <li class="sidebar-li">
                                            <a class="d-flex align-items-center px-4 py-3" href="#">
                                            <i class="fa fa-map-marker me-2"></i>Addresses<span class="text-muted ms-auto"></span>
                                            </a>
                                        </li>
                                        <li class="sidebar-li">
                                            <a class="d-flex align-items-center px-4 py-3" href="#">
                                            <i class="fa fa-credit-card me-2"></i>Payment methods<span class="text-muted ms-auto"></span>
                                            </a>
                                        </li>
                                    </ul>  
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        {/* <div class="d-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
                            <h6 class="text-dark">List of your registered addresses:</h6>
                            <a class="btn btn-primary" href="#">
                                <i class="fas fa-sign-out-alt me-2"></i>Sign out
                            </a>
                        </div> */}
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
                    </div>
                </div>
            </div>
        </div>
     </>
 )
}
export default Account_Orders_History;