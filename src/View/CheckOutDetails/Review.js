import React from "react";
import { products } from "../../assets/Data/product";
import { useEffect } from "react";
const Review = ({ setForm, formData, navigation }) => {
    const { previous, next } = navigation;
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="form CheckOut-Review">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className='mt-5'>
                            <h2 className="h5 pb-1">Review Your Order</h2>
                            <hr />
                            {
                                products.slice(0, 4).map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <div className='d-flex row Cart-list-item'>
                                                <div className='d-flex align-items-center col-lg-3 col-md-3 col-sm-3 col-xs-3 Cart-list-item-img'>
                                                    <div className='p-3'>
                                                        <img src={v.imgsrc} className='img-fluid'
                                                            width="150px" height="150px" />
                                                    </div>
                                                </div>
                                                <div className='product-desc col-lg-7 col-md-7 col-sm-7 col-xs-6'><a href='/product-details'>
                                                    <h6 className='title-text-color'>{v.name}</h6>
                                                    <span className='text-muted'>Size: 8.5</span><br />
                                                    <span className='text-muted'>Color: Black</span>
                                                    <p className='text-indigo fs-lg'>{v.price}</p>
                                                </a></div>

                                                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-3'>
                                                    <p className='text-quantity text-muted'>Quantity : <span>1</span></p>
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
                                        <li><span className="text-muted">Client:&nbsp;</span>Susan Gardner</li>
                                        <li><span className="text-muted">Address:&nbsp;</span>44 Shirley Ave. West Chicago, IL 60185, USA</li>
                                        <li><span className="text-muted">Phone:&nbsp;</span>+1 (808) 764 554 330</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="h6">Payment method:</h4>
                                    <ul className="list-unstyled fs-sm">
                                        <li><span className="text-muted">Credit Card:&nbsp;</span>**** **** **** 5300</li>
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
                        <div className='card rounded-3 shadow-lg p-4'>
                            <div className='card-head text-center'>
                                <h6 className="py-2">Order Summary</h6>
                                <ul className="list-unstyled fs-sm pb-2 border-bottom mt-2">
                                    <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Subtotal:</span><span className="text-end">$265.<small>00</small></span></li>
                                    <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Shipping:</span><span className="text-end">—</span></li>
                                    <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Taxes:</span><span className="text-end">$9.<small>50</small></span></li>
                                    <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Discount:</span><span className="text-end">—</span></li>
                                </ul>
                                <h3 className="fw-normal text-center my-4">$274.<small>50</small></h3>
                                <form>
                                    <input type="text"
                                        className="form-control" autoComplete="off" placeholder="Promo code" />
                                    <button className='btn Button-Red-Border d-block w-100 mt-3'>Apply promo code</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
