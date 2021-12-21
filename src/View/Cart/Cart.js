import React from 'react'
import './Cart.css'
import { products } from '../../assets/Data/product'
import { Accordion } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

const Cart = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (
        <div className='cart'>
            <div className='Heading-back-com text-white'>
                <div className='container '>
                    <div className='row py-4'>
                        <div className='col-6'>
                            <h2>Your Cart</h2>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            {/* <div className='Cart-Path'>
                            <span className='me-2'>Home</span>
                            <span><i className="fa fa-angle-right me-2"></i></span>
                            <span className='me-2'>Shop</span>
                            <span><i className="fa fa-angle-right me-2"></i></span>
                            <span className='me-2'>Cart</span>
                            <span><i className="fa fa-angle-right me-2"></i></span>
                        </div> */}

                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><i class="fa fa-home me-2"></i><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
                                    <li className="breadcrumb-item active" aria-current="page"><a href="/cart">Cart</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className='row py-4'>
                        <div className='col-6'>
                            <h6>Products</h6>
                        </div>
                        <div className='col-6'>
                            <button className='btn Button-C-1 btn-sm'> <i className="fa fa-angle-left me-2"></i> Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>

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
                            <Accordion>
                                <div>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Apply Promo Code</Accordion.Header>
                                        <Accordion.Body>
                                            <form>
                                                <div className="form-group mb-3">
                                                    <input type="text"
                                                        className="form-control" autoComplete="off" placeholder="promo code" />
                                                </div>
                                                <button className='btn Button-C-1 w-100'>Apply promo code</button>
                                            </form>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Shipping Estimates</Accordion.Header>
                                        <Accordion.Body>
                                            <form onSubmit={handleSubmit(onSubmit)} >
                                                <div className="mb-3">
                                                    <select className="form-select" required="" {...register("country", {
                                                            required: true,
                                                        })}>
                                                        <option value="">Choose your country</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Belgium">Belgium</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Finland">Finland</option>
                                                        <option value="Mexico">Mexico</option>
                                                        <option value="New Zealand">New Zealand</option>
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="United States">United States</option>
                                                    </select><span className="error-msg" title="invlid subject">{errors.country && "Please Choose Country"}</span>
                                                    
                                                </div>
                                                <div className="mb-3">
                                                    <select className="form-select" required="" {...register("city", {
                                                            required: true,
                                                        })}>
                                                        <option value="">Choose your city</option>
                                                        <option value="Bern">Bern</option>
                                                        <option value="Brussels">Brussels</option>
                                                        <option value="Canberra">Canberra</option>
                                                        <option value="Helsinki">Helsinki</option>
                                                        <option value="Mexico City">Mexico City</option>
                                                        <option value="Ottawa">Ottawa</option>
                                                        <option value="Washington D.C.">Washington D.C.</option>
                                                        <option value="Wellington">Wellington</option>
                                                    </select><span className="error-msg" title="invlid subject">{errors.city && "Please Choose City"}</span>
                                                </div>
                                                <div className="mb-3">
                                                    <input className="form-control" type="text" placeholder="ZIP / Postal code" required="" {...register("code", {
                                                            required: true,
                                                        })}/><span className="error-msg" title="invlid subject">{errors.code && "Please provide valid code"}</span>
                                                </div>
                                                <button className="btn Button-C-1 d-block w-100" type="submit">Calculate shipping</button>
                                            </form>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                            </Accordion>
                            <button className='Button-C-2'>Proceed to Checkout</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
