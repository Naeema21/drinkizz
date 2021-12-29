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
    const { register, handleSubmit } = useForm();
     // modal for payment method  
     const [lgShowpay, setLgShowPay] = useState(false);
    const onPayment = data => console.log(data);
    return (
        <div>
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
                                                                    <input className="form-check-input" type="radio" {...register("paypal")}/>
                                                                    <label className="form-check-label">PayPal<img className="d-inline-block align-middle card-img-pay ms-2" src={cardpaypal} alt="PayPal"/></label>
                                                                </div>
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="radio" {...register("credit / debit card")} checked=""/>
                                                                    <label className="form-check-label">Credit / Debit card<img className="d-inline-block card-img-pay align-middle ms-2" src={cardmaster} alt="Credit card"/></label>
                                                                </div>
                                                                <div className="row g-3 mb-2">
                                                                    <div className="col-sm-6">
                                                                    <input className="form-control" type="text" {...register("cardname",{maxLength:15})} placeholder="Card Number"/>
                                                                    <div className="invalid-feedback">Please fill in the card number!</div>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                    <input className="form-control" type="text" {...register("fullname",{maxLength:20})} placeholder="Full Name"/>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                    <input className="form-control" type="month" {...register("mm/yy")} placeholder="MM/YY"/>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                    <input className="form-control" type="text" {...register("cvc",{maxLength:3})} placeholder="CVC"/>
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
