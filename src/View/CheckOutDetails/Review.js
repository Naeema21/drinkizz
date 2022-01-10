import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { CART_URL } from "../../endpoint";
import OrderSummary from "../../Components/CheckOutSidebar/OrderSummary";
const Review = ({Paymentfields, fields, navigation }) => {
    const { previous, next } = navigation;
    const [Data, setData] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0)
        try {
            axios.get(CART_URL).then(res => {
                console.log(res)
                setData(res.data.data);
            })
        } catch (error) {
            console.warn(error)
        }
    }, [])
    const { go } = navigation;
    //TotalPrice
    var totalCartPrice = 0;
    const {cardnumber} = Paymentfields;
    const { firstName, lastName, phone, country, city,zip, address } = fields;
    return (
        <div className="form CheckOut-Review">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8  Minus-margin-ProgressBar">
                        <div className='mt-4'>
                            <div className="ProgressBardesign">
                                <ul id="progressbar" >
                                    <li className="active"><a className="btn" href="cart"><div className="mt-2 ProgressBar-Text"><i className="fa fa-shopping-cart me-2"></i>Cart</div></a></li>
                                    <li className="active"><button className="btn" onClick={() => go("details")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-user me-2" aria-hidden="true"></i>Details</div></button></li>
                                    <li className="active"><button className="btn" onClick={() => go("shipping")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-user me-2" aria-hidden="true"></i>Shipping</div></button></li>
                                    <li className="active"><button className="btn" onClick={() => go("payment")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-credit-card me-2"></i>Payment</div></button></li>
                                    <li className="active"><button className="btn" onClick={() => go("review")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-check-square me-2"></i>Review</div></button></li>
                                </ul>
                            </div>
                            <h2 className="h5 pb-1">Review Your Order</h2>
                            <hr />
                            {
                                Data.map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <div className='d-flex row Cart-list-item align-items-center'>
                                                <div className='d-flex align-items-center col-lg-3 col-md-3 col-sm-3 col-xs-3 Cart-list-item-img'>
                                                    <div className='p-3'>
                                                        <img src={v.image} className='img-fluid'
                                                            width="150px" height="150px" />
                                                    </div>
                                                </div>
                                                <div className='product-desc col-lg-7 col-md-7 col-sm-7 col-xs-6'><a href='/product-details'>
                                                    <h6 className='title-text-color'>{v.name}</h6>
                                                    {/* <span className='text-muted'>Size: 8.5</span> */}
                                                    <span className='text-muted'>Category: {v.category}</span>
                                                    <br />
                                                    <span className='text-muted'>Color: Black</span>
                                                    <p className='text-indigo fs-lg'>${v.price}</p>
                                                </a></div>

                                                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-3'>
                                                    <p className='text-quantity text-muted'>Quantity : <span>{v.quantity}</span></p>
                                                    <a className="text-red" href="/"><i class="fa fa-edit me-1"></i>Edit</a>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="bg-details-profile rounded-3 px-4 pt-4 mt-4 pb-2 mb-4">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4 className="h6">Shipping to:</h4>
                                    <ul className="list-unstyled fs-sm">
                                        <li>
                                            <div className="text-muted">
                                                {" "}
                                                Name:<span style={{color:"black"}}> {`${firstName}`} {`${lastName}`}</span>
                                            </div>
                                        </li>
                                        <li><span className="text-muted">Address:&nbsp;</span>{`${address}`} {`${city}`}, {`${zip}`}, {`${country}`}</li>
                                        <li><span className="text-muted">Phone:&nbsp;</span>{`${phone}`}</li>
                                    </ul>
                                    <button className="btn text-red" onClick={() => go("details")}><i class="fa fa-edit me-1"></i>Edit</button>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="h6">Payment method:</h4>
                                    <ul className="list-unstyled fs-sm">
                                        <li><span className="text-muted">Credit Card:&nbsp;</span>{`${cardnumber}`}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='row my-5'>
                            <div className='col-lg-6'>
                                <a className='d-block btn-Gray w-100' onClick={previous}><i className="fa fa-angle-left me-2"></i>Back to Payment</a>
                            </div>
                            <div className='col-lg-6'>
                                <button className='d-block Button-Full-Red w-100' type='submit' onClick={next}>Complete Order &nbsp;<i className="fa fa-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 Minus-margin'>
                        <OrderSummary></OrderSummary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
