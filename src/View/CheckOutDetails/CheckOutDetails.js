import React from 'react'
import './CheckOutDetails.css'
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
import { Tab, Tabs } from 'react-bootstrap'
import checkoutProfile from '../../assets/images/checkout-details/checkout-profile.jpg'
import { useForm } from 'react-hook-form';
import { products } from '../../assets/Data/product';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import CreditCardTypes from '../../assets/images/checkout-details/cards.png'

const CheckOutDetails = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (
        <>
            <div className='checkout-details'>
                {/* Header start*/}
                <BreadCrumb heading="Checkout"
                    breadcrumb1="Home" BC1Link="/"
                    breadcrumb2="Shop" BC2Link="/shop"
                    breadcrumb3="checkout" BC3Link="/checkout-details"
                />
                <div className='Heading-back-com2'> </div>
                {/* Header End */}
                <div className='checkout-details-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="" defaultActiveKey="details">
                                    {/* Tab cart start */}
                                    <Tab eventKey="cart" title="Cart" className='py-4 px-sm-4'>
                                        <div className='mt-4'>
                                            sdfgh
                                        </div>
                                    </Tab>
                                    {/* Tab cart end */}
                                    {/* Tab details start */}
                                    <Tab eventKey="details" title="Details" className='py-4 px-sm-4'>
                                        <div className='mt-4'>
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
                                                    <a className="btn btn-sm btn-edit " href="/"><i class="fa fa-edit me-1"></i>Edit profile</a>
                                                </div>
                                            </div>
                                            <h2 className="h6 pt-3 pb-3 mb-3 border-bottom">Shipping address</h2>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className='row'>
                                                    <div className='col-lg-6'>
                                                        <div className="form-group mb-3">
                                                            <label className='form-label'>First Name</label>
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
                                                            <input type="text"
                                                                {...register("lastname", {
                                                                    required: true, pattern: { value: "^[A-Za-z]$", message: "please enter valid name" },
                                                                    minLength: 3, maxLength: 60
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
                                                                {...register("email", { required: true })}
                                                                className="form-control" />
                                                            <span className="error-msg" title="invalid email address">{errors.email && "please provide valid e-mail address."}</span>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div className="form-group mb-3">
                                                            <label className='form-label'>Phone Number</label>
                                                            <input type="number"
                                                                autoComplete="off"
                                                                {...register("phonenumber", { required: true })}
                                                                className="form-control" />
                                                            <span className="error-msg" title="invalid email address">{errors.phonenumber && "please provide valid e-mail address."}</span>
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
                                                            <select class="form-select" id="checkout-country" {...register("country", {
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
                                                            <label className='form-label'>Country</label>
                                                            <select className="form-select" id="checkout-city" {...register("city", {
                                                                required: true
                                                            })}>
                                                                <option value="">Choose country</option>
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
                                                    <input className="form-check-input" type="checkbox" checked id="same-address" />
                                                    <label className="form-check-label" for="same-address">Same as shipping address</label>
                                                </div>
                                                <div className='row my-5'>
                                                    <div className='col-lg-6'>
                                                        <a className='d-block btn-Gray w-100' href='/cart'><i className="fa fa-angle-left me-2"></i>Back to Cart</a>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <button className='d-block Button-Full-Red w-100' type='submit'>Proceed to Shipping &nbsp;<i className="fa fa-angle-right"></i></button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </Tab>
                                    {/* Tab details end */}
                                    {/* Tab Shipping start */}
                                    <Tab eventKey="shipping" title="Shipping" className='py-4 px-sm-4'>
                                        <div className='mt-5'>
                                            <h2 className="h5 pb-3 mb-2">Choose shipping method</h2>
                                            <div className="table-responsive">
                                                <table className="table table-hover fs-sm border-top">
                                                    <thead>
                                                        <tr>
                                                            <th className="align-middle"></th>
                                                            <th className="align-middle SM-table-heading">Shipping method</th>
                                                            <th className="align-middle SM-table-heading">Delivery time</th>
                                                            <th className="align-middle SM-table-heading">Handling fee</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className='p-3'>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" id="courier" name="shipping-method" checked="" />
                                                                    <label className="form-check-label" for="courier"></label>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle"><span className="SM-table-heading">Courier</span><br /><span className="text-muted SM-Address-D">All addresses (default zone), United States &amp; Canada</span></td>
                                                            <td className="align-middle text-muted SM-Address-D">2 - 4 days</td>
                                                            <td className="align-middle text-muted SM-Address-D">$26.50</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='p-3'>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" id="local" name="shipping-method" />
                                                                    <label className="form-check-label" for="local"></label>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle"><span className="SM-table-heading">Local Shipping</span><br /><span className="text-muted SM-Address-D">All addresses (default zone), United States &amp; Canada</span></td>
                                                            <td className="align-middle text-muted SM-Address-D">up to one week</td>
                                                            <td className="align-middle text-muted SM-Address-D">$10.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='p-3'>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" id="flat" name="shipping-method" />
                                                                    <label className="form-check-label" for="flat"></label>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle"><span className="SM-table-heading">Flat Rate</span><br /><span className="text-muted SM-Address-D">All addresses (default zone)</span></td>
                                                            <td className="align-middle text-muted SM-Address-D">5 - 7 days</td>
                                                            <td className="align-middle text-muted SM-Address-D">$33.85</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='p-3'>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" id="ups" name="shipping-method" />
                                                                    <label className="form-check-label" for="ups"></label>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle"><span className="SM-table-heading">UPS Ground Shipping</span><br /><span className="text-muted SM-Address-D">All addresses (default zone)</span></td>
                                                            <td className="align-middle text-muted SM-Address-D">4 - 6 days</td>
                                                            <td className="align-middle text-muted SM-Address-D">$18.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='p-3'>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" id="pickup" name="shipping-method" />
                                                                    <label className="form-check-label" for="pickup"></label>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle"><span className="SM-table-heading">Local Pickup from store</span><br /><span className="text-muted SM-Address-D">All addresses (default zone)</span></td>
                                                            <td className="align-middle text-muted SM-Address-D">—</td>
                                                            <td className="align-middle text-muted SM-Address-D">$0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='p-3'>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" id="locker" name="shipping-method" />
                                                                    <label className="form-check-label" for="locker"></label>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle"><span className="SM-table-heading">Pick Up at Cartzilla Locker</span><br /><span className="text-muted SM-Address-D">All addresses (default zone), United States &amp; Canada</span></td>
                                                            <td className="align-middle text-muted SM-Address-D">—</td>
                                                            <td className="align-middle text-muted SM-Address-D">$9.99</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='p-3'>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" id="global-export" name="shipping-method" />
                                                                    <label className="form-check-label" for="global-export"></label>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle"><span className="SM-table-heading">Cartzilla Global Export</span><br /><span className="text-muted SM-Address-D fs-sm">All addresses (default zone), outside United States</span></td>
                                                            <td className="align-middle text-muted SM-Address-D">3 - 4 days</td>
                                                            <td className="align-middle text-muted SM-Address-D">$25.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='p-3'>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" id="same-day" name="shipping-method" />
                                                                    <label className="form-check-label" for="same-day"></label>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle"><span className="SM-table-heading">Same-Day Delivery</span><br /><span className="text-muted SM-Address-D">Only United States</span></td>
                                                            <td className="align-middle text-muted SM-Address-D">—</td>
                                                            <td className="align-middle text-muted SM-Address-D">$34.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='p-3'>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" id="international" name="shipping-method" />
                                                                    <label className="form-check-label" for="international"></label>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle"><span className="SM-table-heading">International Shipping</span><br /><span className="text-muted SM-Address-D">All addresses (default zone)</span></td>
                                                            <td className="align-middle text-muted SM-Address-D">up to 15 days</td>
                                                            <td className="align-middle text-muted SM-Address-D">$27.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='row my-5'>
                                                <div className='col-lg-6'>
                                                    <a className='d-block btn-Gray w-100' href='/cart'><i className="fa fa-angle-left me-2"></i>Back to Cart</a>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <button className='d-block Button-Full-Red w-100' type='submit'>Proceed to Payment &nbsp;<i className="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    {/* Tab Shipping end */}
                                    {/* Tab payment start */}
                                    <Tab eventKey="payment" title="Payment" className='py-4 px-sm-4'>
                                        <div className='mt-4'>
                                            <h2 className="h5 pb-3 mb-2">Choose shipping method</h2>
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Pay with Credit Card</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p className="fs-sm">We accept following credit cards:&nbsp;&nbsp;<img className="d-inline-block align-middle" src={CreditCardTypes} width="187" alt="Cerdit Cards" /></p>
                                                        <div className='Credit-card-design'>
                                                            <div className='row d-flex justify-content-center'>
                                                                <div className='col-5'>
                                                                    <div className='card'>

                                                                        <label>1</label>
                                                                        <label>2</label>
                                                                        <label>3</label>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <form>
                                                                <div className='row mt-4'>
                                                                    <div className='col-lg-6'>
                                                                        <div className="form-group mb-3">
                                                                            <input type="number"
                                                                                placeholder='Card Number'
                                                                                autoComplete="off"
                                                                                {...register("cardnumber", { required: true })}
                                                                                className="form-control" />
                                                                            <span className="error-msg" title="invalid card number">{errors.cardnumber && "please provide valid card number."}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-6'>
                                                                        <div className="form-group mb-3">
                                                                            <input type="text"
                                                                                placeholder="Full Name"
                                                                                {...register("fullname", {
                                                                                    required: true,
                                                                                    minLength: 3
                                                                                })}
                                                                                className="form-control" autoComplete="off" />
                                                                            <span className="error-msg" title="name required">{errors.fullname && "Please enter your name."}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-lg-3'>
                                                                        <div className="form-group mb-3">
                                                                            <input
                                                                                type="text"
                                                                                id="inputExpDate"
                                                                                placeholder="MM / YY"
                                                                                maxlength='7'
                                                                                {...register("inputExpDate", {
                                                                                    required: true,
                                                                                    minLength: 3
                                                                                })}  className="form-control"/>
                                                                                <span className="error-msg" title="Exp date required">{errors.inputExpDate && "Please enter card Exp date."}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-3'>
                                                                    <input type="password" className="cvv" placeholder="CVV"
                                                                    {...register("inputExpDate", {
                                                                        required: true,
                                                                        minLength: 3
                                                                    })}  className="form-control"/>
                                                                    </div>
                                                                    <div className='col-lg-6'>
                                                                        <button className='btn d-block Button-Red-Border w-100' type='submit'>Submit</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <form>

                                                        </form>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Pay with PayPal</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p class="fs-sm">We accept following credit cards:&nbsp;&nbsp;<img class="d-inline-block align-middle" src={CreditCardTypes} width="187" alt="Cerdit Cards" /></p>
                                                        <form>

                                                        </form>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Redeem Reward Points</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p class="fs-sm">We accept following credit cards:&nbsp;&nbsp;<img class="d-inline-block align-middle" src={CreditCardTypes} width="187" alt="Cerdit Cards" /></p>
                                                        <form>

                                                        </form>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </Tab>
                                    {/* Tab payment end */}
                                    {/* Tab review start */}
                                    <Tab eventKey="review" title="Review" className='py-4 px-sm-4'>
                                        <div className='mt-4'>
                                            sdfgh
                                        </div>
                                    </Tab>
                                    {/* Tab review end */}
                                </Tabs>
                            </div>
                            <div className='col-lg-4'>
                                <div className='card rounded-3 shadow-lg p-4'>
                                    <div className='card-head text-center'>
                                        <h6>Order Summary</h6>
                                        <div>
                                            {
                                                products.slice(0, 4).map((value, index) => {
                                                    return (
                                                        <Link to="/product-details" key={index}>
                                                            <div className='d-flex align-items-center border-bottom'>
                                                                <div className=''>
                                                                    <img src={value.imgsrc} alt='product' width="70" className='img-fluid'></img>
                                                                </div>
                                                                <div className='d-flex align-items-center'>
                                                                    <div className='mt-4 Check-out-product-body'>
                                                                        <h6 className='Check-out-product-title'>{value.name}</h6>
                                                                        <p className='Check-out-product-price'>{value.price}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    );
                                                })
                                            }
                                        </div>
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
            </div>
        </>
    )
}


export default CheckOutDetails