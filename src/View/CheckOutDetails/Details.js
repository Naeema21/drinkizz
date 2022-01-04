import React from "react";
import { useForm } from 'react-hook-form';
import checkoutProfile from '../../assets/images/checkout-details/checkout-profile.jpg'
import { useEffect } from "react";
import OrderSummary from "../../Components/CheckOutSidebar/OrderSummary";

const Details = ({ setForm, formData, navigation }) => {
    // const OrderSummary = React.lazy(() => import('../../Components/CheckOutSidebar/OrderSummary'))
    const ItemForm = React.lazy(() => import('./ItemForm'))
    const { previous, next } = navigation;
    const { firstName, lastName } = formData;

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        next()
        reset();
    }
    const { go } = navigation;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className="container CheckOut-Details">
                <div className="row">
                    <div className="col-lg-8 Minus-margin-ProgressBar">
                        <div className='mt-4'>
                            {/* Steps */}
                            <div className="ProgressBardesign">
                                <ul id="progressbar" >
                                    <li className="active"><a className="btn" href="cart"><div className="mt-2 ProgressBar-Text"><i className="fa fa-shopping-cart me-2"></i>Cart</div></a></li>
                                    <li className="active"><button className="btn" onClick={() => go("details")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-user me-2" aria-hidden="true"></i>Details</div></button></li>
                                    <li><button className="btn" onClick={() => go("shipping")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-user me-2" aria-hidden="true"></i>Shipping</div></button></li>
                                    <li><button className="btn" onClick={() => go("payment")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-credit-card me-2"></i>Payment</div></button></li>
                                    <li><button className="btn" onClick={() => go("review")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-check-square me-2"></i>Review</div></button></li>
                                </ul>
                            </div>

                            {/* Steps end */}
                            <div className='row p-4 rounded-3 bg-details-profile'>
                                <div className='col-lg-9'>
                                    <div className="d-flex align-items-center">
                                        <div className="img-thumbnail rounded-circle position-relative flex-shrink-0">
                                            <span className="badge bg-orange position-absolute" data-bs-toggle="tooltip" title="" data-bs-original-title="Reward points">384</span>
                                            <img className="rounded-circle" src={checkoutProfile} width="90" alt="Susan Gardner" />
                                        </div>
                                        <div className="ps-3 ">
                                            <h3 className="mb-0 checkout-profile-name">Susan Gardner</h3><span className="text-indigo fs-sm">s.gardner@example.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 align-items-center d-flex justify-content-end'>
                                    <a className="btn btn-sm btn-edit " href="/account-orders-history"><i class="fa fa-edit me-1"></i>Edit profile</a>
                                </div>
                            </div>
                            <h2 className="h6 pt-3 pb-3 mb-3 border-bottom">Shipping address</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>First Name</label>
                                            {/* <ItemForm 
                                                name="firstName"
                                                value={firstName}
                                                onSubmit={setForm}
                                                required={true}
                                            /> */}
                                            <input type="text"

                                                {...register("firstname", {
                                                    required: true, pattern: { value: "^[A-Za-z]$", message: "please enter valid name" },
                                                    minLength: 3, maxLength: 60
                                                })}
                                                className="form-control" autoComplete="off" placeholder="" /> 
                                            <span className="error-msg" title="name required">{errors.firstname && "Please enter your name."}</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Last Name</label>
                                            {/* <ItemForm
                                               
                                                name="lastName"
                                                value={lastName}
                                                onChange={setForm}
                                                required={true}
                                                
                                            /> */}
                                            <input type="text"

                                                {...register("lastname", {
                                                    required: true, pattern:
                                                        { value: "^[A-Za-z]$", message: "please enter valid name" },
                                                    minLength: 3,
                                                    maxLength: 60
                                                })}
                                                className="form-control" autoComplete="off" placeholder="" />
                                            <span className="error-msg" title="name required">{errors.lastname && "Please enter your name."}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Your Email</label>
                                            <input type="email"
                                                autoComplete="off"
                                                {...register("email", {
                                                    required: true,
                                                })}
                                                className="form-control" />
                                            <span className="error-msg" title="invalid email address">{errors.email && "please provide valid e-mail address."}</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Phone Number</label>
                                            <input type="text"
                                                autoComplete="off"
                                                {...register("phonenumber", {
                                                    required: true,
                                                    maxLength: 10
                                                })}
                                                className="form-control" />
                                            <span className="error-msg" title="invalid email address">{errors.phonenumber && "please provide valid phone number."}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Company</label>
                                            <input type="text"
                                                autoComplete="off"
                                                {...register("company", { required: true })}
                                                className="form-control" />
                                            <span className="error-msg" title="invalid email address">{errors.company && "please provide valid e-mail address."}</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Country</label>
                                            <select className="form-select" id="checkout-country" {...register("country", {
                                                required: true
                                            })}>
                                                <option value="">Choose country</option>
                                                <option>Australia</option>
                                                <option>Canada</option>
                                                <option>France</option>
                                                <option>Germany</option>
                                                <option>Switzerland</option>
                                                <option>USA</option>
                                            </select><span className="error-msg" title="invlid country">{errors.country && "Please Choose Country"}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>City</label>
                                            <select className="form-select" id="checkout-city" {...register("city", {
                                                required: true
                                            })}>
                                                <option value="">Choose city</option>
                                                <option>Australia</option>
                                                <option>Canada</option>
                                                <option>France</option>
                                                <option>Germany</option>
                                                <option>Switzerland</option>
                                                <option>USA</option>
                                            </select><span className="error-msg" title="invlid city">{errors.city && "Please Choose City"}</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Zip-code</label>
                                            <input type="number"
                                                autoComplete="off"
                                                {...register("zipcode", { required: true })}
                                                className="form-control" />
                                            <span className="error-msg" title="invalid email zipcode">{errors.zipcode && "please provide valid zip code."}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Address 1</label>
                                            <input type="text"
                                                {...register("address1", {
                                                    required: true, pattern: { value: "^[A-Za-z]$", message: "please enter valid name" },
                                                    minLength: 3, maxLength: 60
                                                })}
                                                className="form-control" autoComplete="off" placeholder="" />
                                            <span className="error-msg" title="address required">{errors.address1 && "Please enter your address."}</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="form-group mb-3">
                                            <label className='form-label'>Address 2</label>
                                            <input type="text"
                                                {...register("address2", {
                                                    required: true, pattern: { value: "^[A-Za-z]$", message: "please enter valid name" },
                                                    minLength: 3, maxLength: 60
                                                })}
                                                className="form-control" autoComplete="off" placeholder="" />
                                            <span className="error-msg" title="address required">{errors.address2 && "Please enter your address."}</span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="h6 pt-3 pb-3 mb-3 border-bottom">Shipping address</h2>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="same-address" />
                                    <label className="form-check-label" for="same-address">Same as shipping address</label>
                                </div>
                                <div className='row my-5'>
                                    <div className='col-lg-6'>
                                        <a className='d-block btn-Gray' href='/cart'><i className="fa fa-angle-left me-2"></i>Back to Cart</a>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button className='d-block Button-Full-Red w-100' type='submit'>Proceed to Shipping &nbsp;<i className="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </form>

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

export default Details;
