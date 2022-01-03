import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios'
import { GET_CART_DATA } from "../../endpoint";
const OrderSummary = () => {
    //TotalPrice
    var totalCartPrice = 0;

    const [Data, setData] = useState([]);
    const [Empty, setEmptyData] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        try {
            axios.get(GET_CART_DATA).then(res => {
                console.log(res)
                if (res.status === 200) {
                    setData(res.data.data);
                } else if (res.status === 204) {
                    setEmptyData(true)
                }
            })
        } catch (error) {
            console.warn(error)
        }
    }, [])
    return (
        <div>
            <div className='card rounded-3 shadow-lg p-4'>
                <div className='card-head text-center'>
                    <h6>Order Summary</h6>
                    <div>
                        {
                            Data.map((value, index) => {
                                totalCartPrice += value.price * value.quantity
                                if (Empty === value._id) {
                                    return ("")
                                } else {
                                    return (
                                        <Link to="/product-details" key={index}>
                                            <div className='d-flex align-items-center border-bottom'>
                                                <div className=''>
                                                    <img src={value.image} alt='product' width="70" className='img-fluid'></img>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='mt-4 Check-out-product-body'>
                                                        <h6 className='Check-out-product-title'>{value.name}</h6>
                                                        <p className='Check-out-product-price'>${value.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                }
                            })
                        }
                        {
                            Empty ? <div>
                                <h4 className='mt-3'>Your Cart is Empty</h4>
                                <p className='mt-3'>Add items to it now.</p>
                                <div className="mt-4">
                                    <a className="Button-Full-Red block" href='/product'><i className="fa fa-shopping-cart me-2"></i>Shop Now</a>
                                </div>
                            </div>
                                : ""
                        }
                    </div>
                    <div style={{ display: Empty ? 'none' : '' }}>
                        <ul className="list-unstyled fs-sm pb-2 border-bottom mt-2">
                            <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Subtotal:</span><span className="text-end">$ {totalCartPrice}</span></li>
                            <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Shipping:</span><span className="text-end">—</span></li>
                            <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Taxes:</span><span className="text-end">$9.<small>50</small></span></li>
                            <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Discount:</span><span className="text-end">—</span></li>
                        </ul>
                        <h3 className="fw-normal text-center my-4">$ {totalCartPrice}</h3>
                        <form>
                            <input type="text"
                                className="form-control" autoComplete="off" placeholder="Promo code" />
                            <button className='btn Button-Red-Border d-block w-100 mt-3'>Apply promo code</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderSummary