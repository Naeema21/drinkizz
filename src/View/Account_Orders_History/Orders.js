import React from 'react'
import { Link } from 'react-router-dom';
import './Account_Orders_History.css';
function Orders() {
    return (
        <div>
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
                                        </div><Link className="Button-Red-Border Button-Full-Red text-light me-2 mt-2 mb-0 btn-sm signoutbtn" to="#"><i className="fa fa-sign-out me-2"></i>Sign out</Link>
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
                                                    <td className="py-3"><Link className="text-dark fw-bold" to="#">34VB5540K83</Link></td>
                                                    <td className="py-3 px-4">May 21, 2019</td>
                                                    <td className="py-3"><span className="badge bg-info bg-opacity-60 bg-lighten-xl m-0">In Progress</span></td>
                                                    <td className="py-3 px-4">$358.75</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><Link className="text-dark fw-bold" to="#">78A643CD409</Link></td>
                                                    <td className="py-3 px-4">December 09, 2018</td>
                                                    <td className="py-3"><span className="badge bg-danger bg-opacity-60 bg-lighten-xl m-0">Canceled</span></td>
                                                    <td className="py-3 px-4"><span>$760.50</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><Link className="text-dark fw-bold" to="#">112P45A90V2</Link></td>
                                                    <td className="py-3 px-4">October 15, 2018</td>
                                                    <td className="py-3"><span className="badge bg-warning bg-opacity-60 bg-lighten-xl m-0">Delayed</span></td>
                                                    <td className="py-3 px-4">$1,264.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><Link className="text-dark fw-bold" to="#">28BA67U0981</Link></td>
                                                    <td className="py-3 px-4">July 19, 2018</td>
                                                    <td className="py-3"><span className="badge bg-success bg-opacity-60 bg-lighten-xl m-0">Delivered</span></td>
                                                    <td className="py-3 px-4">$198.35</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><Link className="text-dark fw-bold" to="#">502TR872W2</Link></td>
                                                    <td className="py-3 px-4">April 04, 2018</td>
                                                    <td className="py-3"><span className="badge bg-success bg-opacity-60 bg-lighten-xl m-0">Delivered</span></td>
                                                    <td className="py-3 px-4">$2,133.90</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3"><Link className="text-dark fw-bold" to="#">47H76G09F33</Link></td>
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
                                                    <li className="order-page"><Link className="page-link text-dark" to="#"><i className="fa fa-angle-left me-2"></i>Prev</Link></li>
                                                </ul>
                                                <ul className="pagination">
                                                    <li className="order-page d-sm-none"><span className="page-link page-link-static">1</span></li>
                                                    <li className="order-page active d-none d-sm-block" aria-current="page">
                                                        <span className="page-link text-light">1<span className="visually-hidden">(current)</span></span>
                                                    </li>
                                                    <li className="d-block"><Link className="page-link text-dark" to="#">2</Link></li>
                                                    <li className="d-block"><Link className="page-link text-dark" to="#">3</Link></li>
                                                    <li className="d-block"><Link className="page-link text-dark" to="#">4</Link></li>
                                                    <li className="d-block"><Link  className="page-link text-dark" to="#">5</Link></li>
                                                </ul>
                                                <ul className="pagination">
                                                    <li className="order-page"><Link  className="page-link text-dark" to="#" aria-label="Next">Next<i className="fa fa-angle-right ms-2"></i></Link></li>
                                                </ul>
                                            </nav>
            
        </div>
    )
}

export default Orders;
