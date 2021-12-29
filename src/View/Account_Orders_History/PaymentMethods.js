import React,{useState} from 'react'
import { Modal } from 'react-bootstrap';
import { ModalFooter, ModalBody } from "react-bootstrap";
import { useForm } from "react-hook-form";
// images payment
import cardvisa from '../../assets/images/AccountHistory/cardvisa.png';
import cardpaypal from '../../assets/images/AccountHistory/cardpaypal.png';
import cardmaster from '../../assets/images/AccountHistory/cardmaster.png';
function PaymentMethods() {
    //useform for modal form
    const { register, handleSubmit,reset } = useForm();
     // modal for payment method  
     const [lgShowpay, setLgShowPay] = useState(false);
    const onPayment = data =>{
        console.log(data);
        reset()
    }
    return (
        <div>
             <div className="d-flex justify-content-between align-items-center px-4 mb-4">
                                                                <h6 className="text-dark fs-base mb-0 ml-4 pt-4 mt-1 ListSort">Primary payment method is used by default:</h6>
                                                                <a className="Button-Red-Border Button-Full-Red text-light me-2 mt-4 mb-0 btn-sm signoutbtn" href="#"><i className="fa fa-sign-out me-2"></i>Sign out</a>
                                                            </div>
                                                            <hr></hr>
            <div className="table-responsive fs-md mb-4">
                                                <table className="table table-hover mb-0">
                                                    <thead>
                                                    <tr>
                                                        <th>Your credit / debit cards</th>
                                                        <th>Name on card</th>
                                                        <th>Expires on</th>
                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                                <tr>
                                                                    <td className="py-3 align-middle">
                                                                    <div className="d-flex align-items-center">
                                                                        <img className="profiletab-img-card" src={cardvisa}/>
                                                                        <div className="ps-2"><span className="text-heading me-1">Visa</span>ending in 4999<span className="align-middle bg-info badge ms-2 px-2">Primary</span></div>
                                                                    </div>
                                                                    </td>
                                                                    <td className="py-3 align-middle">Susan Gardner</td>
                                                                    <td className="py-3 align-middle">08 / 2019</td>
                                                                    <td className="py-3 align-middle">
                                                                        <a className="text-muted me-2" href="#"><div className="fa fa-edit"></div></a>
                                                                        <a className="text-danger" href="#">
                                                                            <div className="fa fa-trash"></div>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-3 align-middle">
                                                                    <div className="d-flex align-items-center">
                                                                        <img className="profiletab-img-card" src={cardmaster}/>
                                                                        <div className="ps-2"><span className="text-heading me-1">Visa</span>ending in 4999</div>
                                                                    </div>
                                                                    </td>
                                                                    <td className="py-3 align-middle">Susan Gardner</td>
                                                                    <td className="py-3 align-middle">08 / 2019</td>
                                                                    <td className="py-3 align-middle">
                                                                        <a className="text-muted me-2" href="#"><div className="fa fa-edit"></div></a>
                                                                        <a className="text-danger" href="#">
                                                                            <div className="fa fa-trash"></div>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-3 align-middle">
                                                                    <div className="d-flex align-items-center">
                                                                        <img className="profiletab-img-card" src={cardpaypal}/>
                                                                        <div className="ps-2"><span className="text-heading me-1">Visa</span>ending in 4999</div>
                                                                    </div>
                                                                    </td>
                                                                    <td className="py-3 align-middle">Susan Gardner</td>
                                                                    <td className="py-3 align-middle">08 / 2019</td>
                                                                    <td className="py-3 align-middle">
                                                                        <a className="text-muted me-2" href="#"><div className="fa fa-edit"></div></a>
                                                                        <a className="text-danger" href="#">
                                                                            <div className="fa fa-trash"></div>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                    </tbody>
                                                </table>
                                                </div>
                                                <div className="text-sm-end"><button className="Button-Red-Border Button-Full-Red text-light" onClick={() => setLgShowPay(true)}>Add payment method</button></div>
                                                <Modal centered size="lg" show={lgShowpay} onHide={() => setLgShowPay(false)} className="order-details"
                                                    aria-labelledby="example-modal-sizes-title-lg">
                                                        <Modal.Header closeButton className='bg-light'>
                                                            <Modal.Title id="example-modal-sizes-title-lg" className='py-1 ml-4'>
                                                            Add a payment method
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                        <form onSubmit={handleSubmit(onPayment)}>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" {...register("paypal",{required:""})} id="PayPal" value="PayPal"/>
                                                                    <label className="form-check-label">PayPal<img className="d-inline-block align-middle card-img-pay ms-2" src={cardpaypal} alt="PayPal"/></label>
                                                                </div>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" {...register("credit / debit card",{required:""})} id="Credit / Debit card" value="Credit / Debit card"/>
                                                                    <label className="form-check-label">Credit / Debit card<img className="d-inline-block card-img-pay align-middle ms-2" src={cardmaster} alt="Credit card"/></label>
                                                                </div>
                                                                <div className="row g-3 mb-2">
                                                                    <div className="col-sm-6">
                                                                    <input className="form-control" type="number" {...register("cardname",{required:"Enter Your Card Number",maxLength:15})} placeholder="Card Number"/>
                                                                    <div className="invalid-feedback">Please fill in the card number!</div>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                    <input className="form-control" type="text" {...register("fullname",{required:"Enter Your FullName",maxLength:20})} placeholder="Full Name"/>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                    <input className="form-control" type="month" {...register("mm/yy",{required:"Enter Month year"})} placeholder="MM/YY"/>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                    <input className="form-control" type="text" {...register("cvc",{required:"Enter CVC",maxLength:3})} placeholder="CVC"/>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                    <button className="Button-Red-Border Button-Full-Red text-light d-block w-100" type="submit">Register this card</button>
                                                                    </div>
                                                                </div>
                                                            </form>     
                                                </Modal.Body>
                                                </Modal>
        </div>
    )
}

export default PaymentMethods
