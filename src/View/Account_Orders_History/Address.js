import React,{useState} from 'react'
import { ModalFooter, ModalBody } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import './Account_Orders_History.css';
import { useForm } from "react-hook-form";
function Address() {
    const { register, handleSubmit } = useForm();
    const onAddress = data => console.log(data);
    // modal functionality close
    const handleClose = () => setLgShowAddress(false);
     //modal for Address Method
    const [lgShowAddress,setLgShowAddress]=useState(false);
    return (
        <div>
             <div className="table-responsive fs-md">
                                            <table className="table table-hover mb-0">
                                                <thead>
                                                <tr>
                                                    <th>Address</th>
                                                    <th>Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                             
                                                     <tr>
                                                                    <td className="py-3 align-middle">396 Lillian Blvd, Holbrook, NY 11741, USA<span className="align-middle badge bg-info ms-2">Primary</span></td>
                                                                    <td className="py-3 align-middle">
                                                                        <a className="text-muted me-2 py-3" href="#"><i className="fa fa-edit"></i></a>
                                                                        <a className="text-danger py-3 ml-2" href="#">
                                                                            <div className="fa fa-trash"></div>
                                                                        </a>
                                                                    </td>
                                                    </tr>
                                                    <tr>
                                                                    <td className="py-3 align-middle">769, Industrial, West Chicago, IL 60185, USA</td>
                                                                    <td className="py-3 align-middle">
                                                                        <a className="text-muted me-2 py-3" href="#"><i className="fa fa-edit"></i></a>
                                                                        <a className="text-danger py-3 ml-2" href="#">
                                                                            <div className="fa fa-trash"></div>
                                                                        </a>
                                                                    </td>
                                                    </tr>
                                                    <tr>
                                                                    <td className="py-3 align-middle">514 S. Magnolia St. Orlando, FL 32806, USA</td>
                                                                    <td className="py-3 align-middle">
                                                                        <a className="text-muted me-2 py-3" href="#"><i className="fa fa-edit"></i></a>
                                                                        <a className="text-danger py-3 ml-2" href="#">
                                                                            <div className="fa fa-trash"></div>
                                                                        </a>
                                                                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="text-sm-end pt-4"><button className='Button-Red-Border Button-Full-Red text-light' onClick={() => setLgShowAddress(true)}>Add new address</button></div>
                                            <Modal centered size="lg" show={lgShowAddress} onHide={() => setLgShowAddress(false)} className="order-details"
                                                    aria-labelledby="example-modal-sizes-title-lg">
                                                        <Modal.Header closeButton className='bg-light'>
                                                            <Modal.Title id="example-modal-sizes-title-lg" className='py-1 ml-4'>
                                                            Add a new address
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                        <form autoComplete='off' onSubmit={handleSubmit(onAddress)}>
                                                            <div className="row gx-4 gy-3">
                                                                <div className="col-sm-6">
                                                                <label className="form-label">First name</label>
                                                                <input className="form-control" type="text" {...register("fname")}/>
                                                                <div className="invalid-feedback">Please fill in you first name!</div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                <label className="form-label">Last name</label>
                                                                <input className="form-control" type="text" {...register("lname")}/>
                                                                <div className="invalid-feedback">Please fill in you last name!</div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                <label className="form-label">Company</label>
                                                                <input className="form-control" type="text" {...register("company")}/>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                <label className="form-label">Country</label>
                                                                <select className="form-select form-control" {...register("country")}>
                                                                    <option value="">Select country</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="France">France</option>
                                                                    <option value="Germany">Germany</option>
                                                                    <option value="Spain">Spain</option>
                                                                    <option value="UK">United Kingdom</option>
                                                                    <option value="USA">USA</option>
                                                                </select>
                                                                <div className="invalid-feedback">Please select your country!</div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                <label className="form-label">City</label>
                                                                <input className="form-control" {...register("city",{ required: "Please fill in your city!." })}/>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                <label className="form-label">Line 1</label>
                                                                <input className="form-control" type="text" {...register("addressL1",{ required: "Please fill in your address!." })}/>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                <label className="form-label">Line 2</label>
                                                                <input className="form-control" {...register("addressL2")}/>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                <label className="form-label">ZIP code</label>
                                                                <input className="form-control" type="text" {...register("zipcode",{ required: "Please add your ZIP code!." ,maxLength:6})}/>
                                                                </div>
                                                                <div className="col-12">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" {...register("primary_address",{ required: "Make this address primary."})}/>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <button className="Button-Red-Border Button-Full-Red text-light mt-2" type="submit">Add address</button>
                                                            </form>
                                                        </Modal.Body>
                                                        <ModalFooter>
                                                        <button className="btn btn-secondary" type="submit" onClick={handleClose}>Close</button>
                                                        </ModalFooter>
                                            </Modal>
                                            </div>
        </div>
    )
}

export default Address
