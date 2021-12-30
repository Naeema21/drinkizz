import React from 'react'
import './Cart.css'
import { Accordion } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
import axios from 'axios'
import { GET_CART_DATA } from "../../endpoint";
import { useState, useEffect } from "react";
import swal from 'sweetalert';
import NoDataInCart from './NoDataInCart';
const Cart = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    const [Data, setData] = useState([]);
    const [deleteId, setDeleteId] = useState();
    const [Loder, setLoader] = useState(false)
    const[Empty , setEmptyData] = useState(false)

    //get data
    useEffect(() => {
        setLoader(true)
        try {
            axios.get(GET_CART_DATA).then(res => {
                if (res.status === 200) {
                    setData(res.data.data);
                    setLoader(false)
                }else if(res.status === 204){
                    setEmptyData(true)
                    setLoader(false)
                }
            })
        } catch (error) {
            console.warn(error)
            setLoader(true)
        }
    }, [])


    // card delete
    const Deletecart = (ids) => {
        axios.delete(GET_CART_DATA + "/" + ids).then(res => {
            console.log(res.status)
            if (res.status === 200) {
                swal({
                    title: "Removed From Wishlist!",
                    timer: 2000,
                }).then(() => {
                    setDeleteId(ids)
                    window.location.reload()
                })
            } else {
                swal({
                    title: "Try Again!",
                })

            }

        })
    }
    
    //card item
    const CartItemCards = Data.slice(0, 4).map((v, i) => {
        if (deleteId === v._id) {
            return ("")
        } else {
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
                            {/* <span className='text-muted'>Size: {v.size}</span> */}
                            <span className='text-muted'>Category: {v.category}</span>
                            <br />
                            <span className='text-muted'>Color: Black</span>
                            <p className='text-indigo fs-lg'>${v.price}</p>
                        </a></div>

                        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-3 Delete-Cart-Item'>
                            <p className='text-quantity'>Quantity</p>
                            <input type="number" defaultValue={v.quantity} className='quanity-bar' /><br />
                            <a className='text-red remove-link mt-2' onClick={() => Deletecart(v._id)}><i className='fa fa-close'></i>&nbsp;Remove
                            </a>
                        </div>
                    </div>
                    <hr />
                </div>
            )
        }
    })

    //skeleton
    const SkeletonCartItem = [0, 1, 2].map(() => {
        return (
            <div key={Math.random()}>
                <div className='row Skeleton-Cart'>
                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3 Cart-list-item-img'>
                        <div className='p-3 Cart-skeleton-img'>
                        </div>
                    </div>
                    <div className='product-desc col-lg-7 col-md-7 col-sm-7 col-xs-6'><a href='/product-details'>
                        <h6 className='title-text-color'></h6>
                        <span><p> </p></span>
                        <span><p> </p></span>
                        <h4> </h4>
                    </a></div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-3 Delete-Cart-Item'>
                        <p className='text-quantity'></p>
                        <h4></h4>
                        <p> </p>
                    </div>
                </div>
                <hr />
            </div>
        )
    })


    return (
        <div className='cart'>
            {/* Header start*/}
            <BreadCrumb heading="Your Cart"
                breadcrumb1="Home" BC1Link="/"
                breadcrumb2="Shop" BC2Link="/shop"
                breadcrumb3="cart" BC3Link="/cart"
            />
            <div className='Heading-back-com2'> </div>
            {/*------------- Header End--------------------- */}
            {/* -------------------Cart list started ------------------*/}
            <div className='container Cart-list'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='row pt-4 pb-5'>
                            <div className='col-6'>
                                <h6 className='text-white'>Products</h6>
                            </div>
                            <div className='col-6 d-flex justify-content-end'>
                                <a href='/product' className='btn Button-Red-Border btn-sm'> <i className="fa fa-angle-left me-2"></i> Continue Shopping</a>
                            </div>
                        </div>
                        {/* --------------condition checking---------------------------*/}
                        {
                            !Loder ? CartItemCards : SkeletonCartItem
                        }
                         {
                            Empty ?  <NoDataInCart/> :""
                        }
                        
                        {/* ----------------------------------------------------------- */}
                        <div className='row my-4'>
                            <a href='/product' className='btn Button-Blue-Border d-block w-100'>
                                <i className='fa fa-refresh'></i>&nbsp; &nbsp; Load More</a>
                        </div>

                    </div>
                    {/*------------------------- Additional Comments start------------- */}
                    <div className='col-lg-4'>
                        <div className='card rounded-3 shadow-lg p-4'>
                            <div className='card-head text-center'>
                                <h5>Subtotal</h5>
                                <h3>$265.00</h3>
                                <hr />
                            </div>
                            <div className="card-body">
                                <span class="badge bg-info  me-2">Note</span>
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
                                                <button className='btn Button-Red-Border w-100'>Apply promo code</button>
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
                                                    })} /><span className="error-msg" title="invlid subject">{errors.code && "Please provide valid code"}</span>
                                                </div>
                                                <button className="btn Button-Red-Border d-block w-100" type="submit">Calculate shipping</button>
                                            </form>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                            </Accordion>
                            <br />
                            <a className='Button-Full-Red' href='/checkout-details'>Proceed to Checkout</a>
                        </div>
                    </div>
                </div>
                {/* Additional Comments end */}
            </div>
            {/* Cart List end */}
        </div>
    )
}

export default Cart
