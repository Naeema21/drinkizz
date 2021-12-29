import React,{useState} from 'react'
import './Account_Orders_History.css';
import { useForm } from "react-hook-form";
import { Modal } from 'react-bootstrap';
import { ModalFooter, ModalBody } from "react-bootstrap";
function Support() {
    //useform for modal form
    const { register, handleSubmit,reset } = useForm();
    const onSupport = data =>{
        console.log(data);
        reset()
    }
     // modal functionality close
     const handleClose = () => setLgShow(false);
     // modal for support ticket
     const [lgShow, setLgShow] = useState(false);
    return (
        <>
      {/*Support_Ticket*/}  
      <div class="d-flex justify-content-between align-items-center pt-lg-2 pb-4 pb-lg-5 mb-lg-3">
              <div class="d-flex align-items-center">
                <label class="d-none d-lg-block fs-sm text-light text-nowrap opacity-75 me-2 text-dark">Sort tickets:</label>
                <label class="d-lg-none fs-sm text-nowrap opacity-75 me-2 text-dark">Sort tickets:</label>
                <select class="form-select" id="ticket-sort">
                  <option>All</option>
                  <option>Open</option>
                  <option>Closed</option>
                </select>
              </div><a class="Button-Red-Border Button-Full-Red text-light me-2 mt-2 mb-0 btn-sm signoutbtn" href="#"><i class="fa fa-sign-out me-2"></i>Sign out</a>
            </div>
            <hr></hr>
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
                        <label className='form-label'>Subject</label>
                        <input className="form-control" type="text" {...register("subject")}/>
                        <div className="invalid-feedback">Please fill in the subject line!</div>
                        </div>
                        <div className="col-sm-6">
                        <label className='form-label'>Type</label>
                        <select className="form-select form-control" {...register("choosetype")}>
                            <option value="">Choose type</option>
                            <option value="Website problem">Website problem</option>
                            <option value="Partner request">Partner request</option>
                            <option value="Complaint">Complaint</option>
                            <option value="Info inquiry">Info inquiry</option>
                        </select>
                        </div>
                        <div className="col-sm-6">
                        <label className='form-label'>Priority</label>
                        <select className="form-select form-control" {...register("issue")}>
                            <option value="">How urgent is your issue?</option>
                            <option value="Urgent">Urgent</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        </div>
                        <div className="col-12">
                            <label className='form-label'>Describe your issue</label>
                        <textarea className="form-control bg-light" rows="8" {...register("message")}></textarea>
                        </div>
                        <div className="col-12">
                        <input className="form-control" type="file" {...register("file")}/>
                        </div>
                    </div>
                    <hr></hr>
                        <div className='closemodal d-flex'>
                        <button className="Button-Red-Border Button-Full-Red text-light" type="submit">Submit Ticket</button>
                        <button className="btn btn-secondary closeModal_Submit" type="button" onClick={handleClose}>Close</button> 
                        </div>
                </form>
                </Modal.Body>
        </Modal>
 
    </>
    )
}
export default Support
