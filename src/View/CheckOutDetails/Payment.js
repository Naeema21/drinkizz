import React from "react";
import { useForm } from 'react-hook-form';
import CreditCardTypes from '../../assets/images/checkout-details/cards.png'
import { Accordion } from 'react-bootstrap';
import { products } from '../../assets/Data/product';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './CheckOutDetails.css'
import CheckoutProgressBar from "./CheckoutProgressBar";
const Payment = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    next()
    reset();
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  const handleCardData = (e) => {
    e.preventDefault();
    const cardData = {
      "number": number,
      "name": name,
      "expiry": expiry,
      "CVC": cvc,
    }

    console.log(cardData)
  }
  const { go } = navigation;

  return (
    <div>
      <div className="container CheckOut-Payment">
        <div className="row">
          <div className="col-lg-8 Minus-margin-ProgressBar">
            <div className='mt-4'>
               <div className="ProgressBardesign">
                <ul id="progressbar" >
                  <li className="active"><a className="btn" href="cart"><div className="mt-2 ProgressBar-Text"><i className="fa fa-shopping-cart me-2"></i>Cart</div></a></li>
                  <li className="active"><button className="btn" onClick={() => go("details")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-user me-2" aria-hidden="true"></i>Details</div></button></li>
                  <li className="active"><button className="btn" onClick={() => go("shipping")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-user me-2" aria-hidden="true"></i>Shipping</div></button></li>
                  <li className="active"><button className="btn" onClick={() => go("payment")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-credit-card me-2"></i>Payment</div></button></li>
                  <li><button className="btn" onClick={() => go("review")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-check-square me-2"></i>Review</div></button></li>
                </ul>
              </div> 
              {/* <CheckoutProgressBar></CheckoutProgressBar> */}
              <h2 className="h5 pb-3 mb-2">Choose shipping method</h2>
              <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Pay with Credit Card</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-sm">We accept following credit cards:&nbsp;&nbsp;
                      <img className="d-inline-block align-middle" src={CreditCardTypes} width="187" alt="Cerdit Cards" /></p>
                    <div className='Credit-card-design mt-4 pt-2'>
                      <Cards
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focus} />
                      <form onSubmit={handleCardData}>
                        <div className='row mt-4'>
                          <div className='col-lg-6'>
                            <div className="form-group mb-3">
                              <input type="text"
                                name="number"
                                placeholder="Card Number"
                                minLength={16}
                                maxLength={16}
                                value={number}
                                onChange={e => setNumber(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                                className="form-control" />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className="form-group mb-3">
                              <input type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                                className="form-control" />

                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-3'>
                            <div className="form-group mb-3">
                              <input type="number"
                                name="expiry"
                                placeholder="MM/YY"
                                minLength={4}
                                maxLength={4}
                                value={expiry}
                                onChange={e => setExpiry(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                                className="form-control" />

                            </div>
                          </div>
                          <div className='col-lg-3'>
                            <input type="text"
                              name="cvc"
                              placeholder="CVC"
                              maxLength={3}
                              value={cvc}
                              onChange={e => setCvc(e.target.value)}
                              onFocus={e => setFocus(e.target.name)}
                              className="form-control" />
                          </div>
                          <div className='col-lg-6'>
                            <button className='btn d-block Button-Red-Border w-100' type="submit" >Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Pay with PayPal</Accordion.Header>
                  <Accordion.Body>
                    <p><span className="fw-medium"><b>PayPal</b></span> - the safer, easier way to pay</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div className="form-group mb-3">
                            <input type="email"
                              autoComplete="off"
                              {...register("email", { required: true })}
                              className="form-control" placeholder='E-mail' />
                            <span className="error-msg" title="invalid email address">{errors.email && "please provide valid e-mail address."}</span>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className="form-group mb-3">

                            <input type="password"
                              autoComplete="off"
                              {...register("password", { required: true })}
                              className="form-control" placeholder='Password' />
                            <span className="error-msg" title="invalid password">{errors.password && "please provide valid password"}</span>
                          </div>
                        </div>
                      </div>
                      <div className='row d-flex align-items-center'>
                        <div className='col-lg-6'>
                          <a className='text-muted'>Forgot Password ?</a>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-end'>
                          <button className='Button-Full-Red'>Log in</button>
                        </div>
                      </div>
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Redeem Reward Points</Accordion.Header>
                  <Accordion.Body>
                    <p>You currently have<span className="fw-medium">&nbsp;<b>384</b></span>&nbsp;Reward Points to spend.</p>
                    <div className="form-check d-block">
                      <input className="form-check-input" type="checkbox" id="use_points" />
                      <label className="form-check-label" for="use_points">Use my Reward Points to pay for this order.</label>
                    </div>

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className='row my-5'>
                <div className='col-lg-6'>
                  <a className='d-block btn-Gray w-100' onClick={previous}><i className="fa fa-angle-left me-2"></i>Back to Shipping</a>
                </div>
                <div className='col-lg-6'>
                  <button className='d-block Button-Full-Red w-100' type='submit' onClick={next}>Review Your Order &nbsp;<i className="fa fa-angle-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 Minus-margin'>
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

                <input type="text"
                  className="form-control" autoComplete="off" placeholder="Promo code" />
                <button className='btn Button-Red-Border d-block w-100 mt-3'>Apply promo code</button>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h3>Contact </h3>
      <ItemForm label="Phone" name="phone" value={phone} onChange={setForm} />
      <ItemForm label="E-mail" name="email" value={email} onChange={setForm} />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div> */}
    </div>
  );
};

export default Payment;
