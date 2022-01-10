import React from 'react';
import './Account_Orders_History.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import profile from '../../assets/images/AccountHistory/profile.png';
import { Row, Col} from "react-bootstrap";
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';

const Profile =()=> {
    const  Account_Orders_History = React.lazy(() => import('./Account_Orders_History'))
    const SignInFirst = React.lazy(() => import('../../Components/SignInFirst/SignInFirst'))
    const userId = localStorage.getItem('id')

    //useform profiles
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onProfile = data => {
        console.log(data);
        reset()
    }

    return (
        <div className='account'>
            <BreadCrumb heading='Profile' BC1Link='/' breadcrumb1='Home' BC3Link='/profile' breadcrumb3='Profile' />
            {userId ?
                <>
                    <div className='Heading-back-com2'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-8'></div>
                    </div>
                    <div className='container pb-5 mb-2 mb-md-4'>
                        {/* sidebar  onSelect={handleSelect()} */}
                        <Row>
                            <Col lg={4} className="pt-4 pt-lg-0 pe-xl-5 profile-col-sidebar">
                                <Account_Orders_History />
                            </Col>
                            {/* // check user login */}
                            <Col lg={8}>
                                <div className="d-flex justify-content-between align-items-center px-4 mb-4">
                                    <h6 className="text-dark fs-base mb-0 ml-4 pt-4 mt-1 ListSort">Update you profile details below:</h6>
                                    <Link className="Button-Red-Border Button-Full-Red text-light me-2 mt-4 mb-0 btn-sm signoutbtn" to="/"><i className="fa fa-sign-out me-2"></i>Sign out</Link>
                                </div>
                                <hr></hr>
                                <div className='pb-5 mb-2 mb-md-4'>
                                    <form autoComplete="off" onSubmit={handleSubmit(onProfile)}>
                                        <div className="bg-light rounded-3 p-4 mb-4">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded profiletab-img" src={profile} alt="" height="50px" />
                                                <div className="ps-3">
                                                    <button className="btn btn-light btn-shadow mb-2 badge-light btn-sm" type="button">
                                                        <i className="fa fa-spinner me-2"></i>Change avatar
                                                    </button>
                                                    <div className="mb-0 text-muted">Upload JPG, GIF or PNG image. 300 x 300 required.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gx-4 gy-3">
                                            <div className="col-lg-6">
                                                <label className="form-label">First Name</label>
                                                <input className="form-control" type="text" {...register("firstname", { required: true, maxLength: 10, pattern: /^[A-Za-z]+$/i })} />
                                                <div className='text-errormsg'>{errors.firstname && "Please fill firstName maximum 10 alphabets!!"}</div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="form-label">Last Name</label>
                                                <input className="form-control" type="text" {...register("lastname", { required: true, maxLength: 10, pattern: /^[A-Za-z]+$/i })} />
                                                <div className='text-errormsg'>{errors.lastname && "Please fill LastName maximum 10 alphabets!!"}</div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="form-label">Email Address</label>
                                                <input className="form-control" type="email" {...register("email", { required: true })} disabled="" />
                                                <div className='text-errormsg'>{errors.email && "Please fill Email!"}</div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="form-label">Phone Number</label>
                                                <input className="form-control" type="number" {...register("phone", { required: true, minLength: 10, maxLength: 12 })} required="" />
                                                <div className='text-errormsg'>{errors.phone && "Please fill PhoneNumber maximum 12 digits!!"}</div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="form-label">New Password</label>
                                                <div className="">
                                                    <input className="form-control" type="password" {...register("password", { required: true, pattern: "(?=.*/d)(?=.*[a-z])(?=.*[A-Z]).{8,}" })} />
                                                    <div className='text-errormsg'>{errors.password && "Please fill Password."}</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="form-label">Confirm Password</label>
                                                <div>
                                                    <input className="form-control" type="password" {...register("confirmpassword", { required: true, pattern: "(?=.*/d)(?=.*[a-z])(?=.*[A-Z]).{8,}" })} />
                                                    <div className='text-errormsg'>{errors.confirmpassword && "Please fill Password Again!"}</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <hr className="mt-2 mb-3" />
                                                <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultChecked />
                                                        <label className="form-check-label">Subscribe me to Newsletter</label>
                                                    </div>
                                                    <button className="Button-Red-Border Button-Full-Red text-light" type="submit">Update profile</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </Col>

                        </Row>
                    </div>
                </> : <SignInFirst />}
        </div>
    )
}
export default Profile
