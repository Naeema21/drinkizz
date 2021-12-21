import React, { useState } from 'react'
import { Modal, Tab, Tabs } from 'react-bootstrap';
import './SignIn.css';
const SignIn = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <span onClick={handleShow} className="nav-link">
                <span><i className='fa fa-user-o'></i>&nbsp; Hello,sign In</span>
            </span>
            {/* modal for signin signup */}
            <div className='Modal-signin-up'>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" id="signin_modal" aria-hidden="true" tabIndex="-1" role="dialog" centered> 
                <Tabs defaultActiveKey="Signin" id="uncontrolled-tab-example" className="mb-3 flex-row">
                    <Tab eventKey="Signin" title="Signin" className='signin-tab' defaultActiveKey="Signin">
                    <div className='Sign-in-modal'>
                    <div className="modal-body tab-content py-4">
                        <form className="needs-validation tab-pane fade active show" autocomplete="off" novalidate="" >
                            <div className="mb-3">
                                <label className="form-label signup-form-label" htmlFor="compare-email">Email address</label>
                                <input className="form-control signup-input" type="email" id="compare-email" placeholder="johndoe@example.com" required="" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label signup-form-label" htmlFor="compare-password">Password</label>
                                <div className="password-toggle">
                                    <input className="form-control signup-input" type="password"  required=""/>
                                </div>
                            </div>
                            <div className="mb-3 d-flex flex-wrap justify-content-between">
                                <div className="form-check mb-2">
                                    <input className="form-check-input sinupform" type="checkbox" />
                                    <label className="form-check-label" htmlFor="compare-remember">Remember me</label>
                                </div><a className="fs-sm signup-forgot" href="#">Forgot password?</a>
                            </div>
                            <button className="btn btn-primary btn-shadow d-block w-100 compare-btn-signup" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>    
                </Tab>
                    <Tab eventKey="Signup" title="Signup">
                    <div className='Sign-up-modal'>
                            <div className="modal-body tab-content py-4">
                                <form className="needs-validation tab-pane fade active show" autocomplete="off" novalidate="" >
                                <div className="mb-3">
                                        <label className="form-label signup-form-label" htmlFor="compare-fullname">Full Name</label>
                                        <input className="form-control signup-input" type="name"  required="" placeholder='Provide Your Full Name'/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label signup-form-label" htmlFor="compare-email">Email address</label>
                                        <input className="form-control signup-input" type="email"  placeholder="johndoe@example.com" required="" />
                                        <div className="compare-feedback">Please provide a valid email address.</div>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label className="form-label signup-form-label" htmlFor="compare-password">Password</label>
                                        <div className="password-toggle">
                                            <input className="form-control signup-input" type="password"  required="" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label signup-form-label" htmlFor="compare-password">Confirm Password</label>
                                        <div className="password-toggle">
                                            <input className="form-control signup-input" type="password"  required="" />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-shadow d-block w-100 compare-btn-signup" type="submit">Sign Up</button>
                                </form>
                            </div>
                        </div>     
                    </Tab>
                </Tabs>
            </Modal>
            </div>
        </div>
    )
}

export default SignIn
