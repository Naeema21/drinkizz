import React from 'react'
import './Cart.css'
import { products } from '../../assets/Data/product'

const Cart = () => {
    return (
        <div className='cart bg-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        {
                            products.slice(0, 4).map((v, i) => {
                                return (
                                    <div key={i}>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <div className='p-3'>
                                                <img src={v.imgsrc} className='img-fluid'
                                                    width="150px" height="150px" />
                                            </div>
                                            <div>
                                                <h6>{v.name}</h6>
                                                <span>Size: 8.5</span><br />
                                                <span>Color: Black</span>
                                                <p className='text-indigo'>{v.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6>Quantity</h6>
                                            <input type="number" defaultValue="1" className='quanity-bar' /><br />
                                            <a className='text-orange remove-link mt-2'><i className='fa fa-close'></i>&nbsp;Remove</a>
                                        </div>
                                    </div>
                                    <hr />
                                    </div>
                                )
                            })
                        }
                        <div className='row my-4'>
                        <button className='btn btn-outline-primary'>
                            <i className='fa fa-refresh'></i>&nbsp; &nbsp; Update Cart</button>
                        </div>
    
                    </div>
                    <div className='col-lg-4'>
                        <div className='card rounded-3 shadow-lg p-4'>
                            <div className='card-head text-center'>
                                <h5>Subtotal</h5>
                                <h3>$265.00</h3>
                                <hr />
                            </div>
                            <div className="card-body">
                                <span class="badge bg-indigo  me-2">Note</span>
                                <label>Additional Comments</label>
                                <textarea className='form-control mt-2'
                                    rows="5"></textarea>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
