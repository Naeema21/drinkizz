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
                <span> <i className='fa fa-user-o'> </i>&nbsp; Hello,sign In</span>
            </span >
            {/* modal */}
            <Modal show={show} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter" centered>
                {/* <Modal.Body>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 flex-row">
                        <Tab eventkey="home" title="Sign In">
                            home
                        </Tab>
                        <Tab eventkey="profile" title="Sign Up" id="uncontrolled-tab-example1">
                            profile
                        </Tab>
                    </Tabs>
                </Modal.Body> */}
                <div class="modal-header">
                    <ul class="nav nav-tabs nav-header-sign-in" role="tablist">
                    <li class="nav-item signin-btn"><a class="nav-link fw-medium active" href="#" ><i class="fa fa-lock me-2 mt-n1"></i>Sign in</a></li>
                    <li class="nav-item signup-btn"><a class="nav-link fw-medium text-orange" href="#"><i class="fa fa-user me-2 mt-n1"></i>Sign up</a></li>
                    </ul>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className='Sign-in-modal'>
                    <div className="modal-body tab-content py-4">
                        <form className="needs-validation tab-pane fade active show" autocomplete="off" novalidate="" id="signin-tab">
                            <div className="mb-3">
                                <label className="form-label signup-form-label" for="compare-email">Email address</label>
                                <input className="form-control signup-input" type="email" id="compare-email" placeholder="johndoe@example.com" required="" />
                                <div className="compare-feedback">Please provide a valid email address.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label signup-form-label" for="compare-password">Password</label>
                                <div className="password-toggle">
                                    <input className="form-control signup-input" type="password" id="-password" required="" />
                                </div>
                            </div>
                            <div className="mb-3 d-flex flex-wrap justify-content-between">
                                <div className="form-check mb-2">
                                    <input className="form-check-input sinupform" type="checkbox" id="compare-remember" />
                                    <label className="form-check-label" for="compare-remember">Remember me</label>
                                </div><a className="fs-sm signup-forgot" href="#">Forgot password?</a>
                            </div>
                            <button className="btn btn-primary btn-shadow d-block w-100 compare-btn-signup" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SignIn
