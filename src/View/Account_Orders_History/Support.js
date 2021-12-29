import React,{useState} from 'react'
import './Account_Orders_History.css';
import { useForm } from "react-hook-form";
import { Modal } from 'react-bootstrap';
import { ModalFooter, ModalBody } from "react-bootstrap";
function Support() {
    //useform for modal form
    const { register, handleSubmit } = useForm();
    const onSupport = data => console.log(data);
     // modal functionality close
     const handleClose = () => setLgShow(false);
     // modal for support ticket
     const [lgShow, setLgShow] = useState(false);
    return (
        <>
      {/*Support_Ticket*/}  
      <div className="table-responsive mb-4">
          <table className="table table-hover mb-0">
            <thead>
            <tr>
                <th>Ticket Subject</th>
                <th>Date Submitted | Updated</th>
                <th>Type</th>
                <th>Priority</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="py-3"><a className="nav-link-style text-dark fw-bold" href="#">My new ticket</a></td>
                <td className="py-3">09/27/2019 | 09/30/2019</td>
                <td className="py-3">Website problem</td>
                <td className="py-3"><span className="badge bg-warning m-0 px-2">High</span></td>
                <td className="py-3"><span className="badge bg-success bg-lighten-xl m-0 px-2">Open</span></td>
            </tr>
            <tr>
                <td className="py-3"><a className="nav-link-style text-dark fw-bold" href="#">Another ticket</a></td>
                <td className="py-3">08/21/2019 | 08/23/2019</td>
                <td className="py-3">Partner request</td>
                <td className="py-3"><span className="badge bg-info m-0 px-2">Medium</span></td>
                <td className="py-3"><span className="badge bg-secondary m-0 px-2 text-dark">Closed</span></td>
            </tr>
            <tr>
                <td className="py-3"><a className="nav-link-style text-dark fw-bold" href="#">Yet another ticket</a></td>
                <td className="py-3">11/19/2018 | 11/20/2018</td>
                <td className="py-3">Complaint</td>
                <td className="py-3"><span className="badge bg-danger m-0 px-2">Urgent</span></td>
                <td className="py-3"><span className="badge bg-secondary m-0 px-2 text-dark">Closed</span></td>
            </tr>
            <tr>
                <td className="py-3"><a className="nav-link-style text-dark fw-bold" href="#">My old ticket</a></td>
                <td className="py-3">06/19/2018 | 06/20/2018</td>
                <td className="py-3">Info inquiry</td>
                <td className="py-3"><span className="badge bg-success bg-lighten-xl m-0 px-2">Low</span></td>
                <td className="py-3"><span className="badge bg-secondary bg-lighten-xl m-0 px-2 text-dark">Closed</span></td>
            </tr>
            </tbody>
        </table>
        <div className="text-end pt-4">
            <button className="Button-Red-Border Button-Full-Red text-light" onClick={() => setLgShow(true)}>Submit new ticket</button>
        </div>
        </div>
        <Modal centered size="lg" show={lgShow} onHide={() => setLgShow(false)} className="order-details"
            aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton className='bg-light'>
                    <Modal.Title id="example-modal-sizes-title-lg" className='py-1 ml-4'>
                    Submit new ticket
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form autoComplete='off' onSubmit={handleSubmit(onSupport)}>
                    <p className="text-muted fs-sm">We normally respond tickets within 2 business days.</p>
                    <div className="row gx-4 gy-3">
                        <div className="col-12">
                        <input className="form-control" type="text" {...register("subject")}/>
                        <label>Subject</label>
                        <div className="invalid-feedback">Please fill in the subject line!</div>
                        </div>
                        <div className="col-sm-6">
                        <select className="form-select form-control" {...register("choosetype")}>
                            <option value="">Choose type</option>
                            <option value="Website problem">Website problem</option>
                            <option value="Partner request">Partner request</option>
                            <option value="Complaint">Complaint</option>
                            <option value="Info inquiry">Info inquiry</option>
                        </select>
                        </div>
                        <div className="col-sm-6">
                        <select className="form-select form-control" {...register("issue")}>
                            <option value="">How urgent is your issue?</option>
                            <option value="Urgent">Urgent</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        </div>
                        <div className="col-12">
                        <textarea className="form-control bg-light" rows="8" {...register("message")}></textarea>
                        </div>
                        <div className="col-12">
                        <input className="form-control" type="file" {...register("file")}/>
                        </div>
                    </div>
                    <button className="Button-Red-Border Button-Full-Red text-light mt-2 float-right" type="submit">Submit Ticket</button>
                </form>
                </Modal.Body>
                 <ModalFooter>
                    <button className="btn btn-secondary" type="button" onClick={handleClose}>Close</button>   
                </ModalFooter>
        </Modal>
 
    </>
    )
}
export default Support
