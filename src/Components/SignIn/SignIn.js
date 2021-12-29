import React, { useState } from 'react'
import { Modal, Tab, Tabs } from 'react-bootstrap';
import './SignIn.css';
import { useForm } from "react-hook-form";
const SignIn = () => {
    // for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // for signinform
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
   
    const handleSignUp =(data)=>{
        console.log(data);
    }
    return (
        <>
            <span >
                <span onClick={handleShow}>
                    <i className='fa fa-user-o text-danger'></i>&nbsp; Hello,sign In</span>
            </span>
            {/* modal for signin signup */}
            <div className='Modal-signin-up'style={{ display: !show ? 'none' : '' }}>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" id="signin_modal" aria-hidden="true" tabIndex="-1" role="dialog" centered> 
                  <div className='modalsingin-up-close'>
                    <button className="btn-close" type="button" onClick={() => handleClose(true)}></button>
                  </div>
                <Tabs defaultActiveKey="Signin" id="uncontrolled-tab-example" className="mb-3 flex-row">
                    <Tab eventKey="Signin" title="Signin" className='signin-tab' defaultActiveKey="Signin">
                    <div className='Sign-in-modal'>
                    <div className="modal-body tab-content py-4">
                        <form className="" autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label signup-form-label">Email address</label>
                                <input className="form-control signup-input" type="email" {...register("email",{ required: "Please enter your email." })} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label signup-form-label">Password</label>
                                <div>
                                    <input className="form-control signup-input" type="password" {...register("password",{ required: "Please enter your password." })}/>
                                </div>
                            </div>
                            <div className="mb-3 d-flex flex-wrap justify-content-between">
                                <div className="form-check mb-2">
                                    <input className="form-check-input sinupform" type="checkbox"/>
                                    <label className="form-check-label">Remember me</label>
                                </div>
                                <a className="signup-forgot" href="#">Forgot password?</a>
                            </div>
                            <button className="btn btn-primary btn-shadow d-block w-100 compare-btn-signup" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>    
                </Tab>
                    <Tab eventKey="Signup" title="Signup">
                    <div className='Sign-up-modal'>
                            <div className="modal-body tab-content py-4">
                                <form className="" autocomplete="off" onSubmit={handleSubmit(handleSignUp)}>
                                <div className="mb-3">
                                        <label className="form-label signup-form-label">Full Name</label>
                                        <input className="form-control signup-input" type="name" {...register("name",{ required: "Please enter your name.",maxLength:20})}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label signup-form-label">Email address</label>
                                        <input className="form-control signup-input" type="email" {...register("email",{ required: "Please enter your email.",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+/.[a-z]{2,}$" })}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label signup-form-label" {...register("password",{ required: "Please enter your password.",pattern:"(?=.*/d)(?=.*[a-z])(?=.*[A-Z]).{8,}" })}>Password</label>
                                        <div>
                                            <input className="form-control signup-input" type="password" required=""/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label signup-form-label">Confirm Password</label>
                                        <div className="password-toggle">
                                            <input className="form-control signup-input" type="password" {...register("password",{ required: "Please enter your password.",pattern:"(?=.*/d)(?=.*[a-z])(?=.*[A-Z]).{8,}"})}/>
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
        </>
    )
}
export default SignIn
