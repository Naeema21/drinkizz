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
    const { register, handleSubmit,reset, formState:{errors} } = useForm({mode: "onBlur"});
    const {register: register2,formState: { errors: errors2 },handleSubmit: handleSubmit2,reset:reset1} = useForm({mode: "onBlur",});
    // const {handleForm}= useForm();
    const onSubmit = data =>{
        alert(JSON.stringify(data));
        console.log(data);
        reset();
    }
    const handleSignUp =(data)=>{
        alert(JSON.stringify(data));
        console.log(data);
        reset1();
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
                <Tabs defaultactivekey="Signin" id="uncontrolled-tab-example" className="mb-3 flex-row">
                    <Tab eventKey="Signin" title="Signin" className='signin-tab' defaultactivekey="Signin">
                    <div className='Sign-in-modal'>
                    <div className="modal-body tab-content py-4">
                        <form className="" key={1} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label signup-form-label">Email address</label>
                                <input className="form-control signup-input" type="email" {...register("email",{ required: true })} />
                                <div className='text-errormsg'>{errors.email && "Please provide a valid email address."}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label signup-form-label">Password</label>
                               <input className="form-control signup-input" type="password" {...register("password",{ required: true })}/>
                               <div className='text-errormsg'>{errors.password && "Please provide a valid Password."}</div>
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
                                <form autocomplete="off" key={2} onSubmit={handleSubmit2(handleSignUp)}>
                                <div className="mb-3">
                                        <label className="form-label signup-form-label">Full Name</label>
                                        <input className="form-control signup-input" {...register2("name",{required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i})}/>
                                        <div className='text-errormsg'>
                                        {errors2.name && "Please enter your name."}
                                        {errors2?.name?.type === "maxLength" && (
                                            <p>First name cannot exceed 20 characters</p>
                                        )}
                                        {errors2?.name?.type === "pattern" && (
                                            <p>Alphabetical characters only</p>
                                        )}
                                        </div>  
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label signup-form-label">Email address</label>
                                        <input className="form-control signup-input" type="email" {...register2("emails",{ required: true })}/>
                                        <div className='text-errormsg'>{errors2.emails && "Please enter your email."}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label signup-form-label">Password</label>
                                        <div className='password-toggle'>
                                            <input className="form-control signup-input" type="password" {...register2("password1",{ required: true })}/>
                                        </div>
                                        <div className='text-errormsg'>{errors2.password1 && "Please enter your password."}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label signup-form-label">Confirm Password</label>
                                        <div className="password-toggle">
                                            <input className="form-control signup-input" type="password" {...register2("confirmpassword",{ required: true })}/>
                                        </div>
                                        <div className='text-errormsg'>{errors2.confirmpassword && "Please enter your password."}</div>
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
