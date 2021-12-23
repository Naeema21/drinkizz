import React,{useState} from 'react';
import "./OrderTracking.css";
import { products } from '../../assets/Data/product'
import { Modal } from 'react-bootstrap';
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';

const OrderTracking = (props) => {
  // modal display functionality
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
    {/* breadcrumb for OrderTracking */}
    <BreadCrumb heading='Tracking order: 34VB5540K83' BC1Link='/' breadcrumb1='Home' BC2Link='/' breadcrumb2='Shop' BC3Link='/' breadcrumb3='Order tracking'/>
      <div className="orderTrack">
        <div className="container py-5 mb-2 mb-md-3">
          {/* -- Details-- */}
          <div className="row gx-4 mb-4">
            <div className="col-md-4 mb-2">
              <div className="bg-light h-100 p-4 text-center rounded-3">
                <span className="text-dark me-2">Shipped via:</span>UPS Ground
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="bg-light h-100 p-4 text-center rounded-3">
                <span className="text-dark me-2">Status:</span>Processing order
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="bg-light h-100 p-4 text-center rounded-3">
                <span className="text-dark me-2">Expected date:</span>October 15,
                2019
              </div>
            </div>
          </div>
          {/* -- Progress-- */}
          <ul className="row ulrow">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li className="card-order">
                <div className="d-flex align-items-center">
                  <div className="back-circle-order bg-light">
                    <i className="fa fa-shopping-bag text-orange"></i>
                  </div>
                  <div className="ps-3">
                    <div className="media-tab-subtitle text-muted mb-1">
                      First step
                    </div>
                    <h6 className="media-tab-title text-nowrap mb-0">
                      Order placed
                    </h6>
                  </div>
                </div>
              </li>
            </div>
            {/* active card */}
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li className="card-order">
                <div className="d-flex align-items-center">
                  <div className="back-circle-order active-card">
                    <i className="fa fa-cog text-light" aria-hidden="true"></i>
                  </div>
                  <div className="ps-3">
                    <div className="mb-1 text-orange text-order-active">
                      Second step
                    </div>
                    <h6 className="text-nowrap mb-0 text-orange">
                      Processing order
                    </h6>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li className="card-order">
                <div className="d-flex align-items-center">
                  <div className="back-circle-order bg-light">
                    <i className="fa fa-star text-orange"></i>
                  </div>
                  <div className="ps-3">
                    <div className="text-muted mb-1">Third step</div>
                    <h6 className="text-nowrap mb-0">Quality check</h6>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li className="card-order">
                <div className="d-flex align-items-center">
                  <div className="back-circle-order bg-light">
                    <i className="fa fa-gift text-orange" aria-hidden="true"></i>
                  </div>
                  <div className="ps-3">
                    <div className="text-muted mb-1">Fourth step</div>
                    <h6 className="text-nowrap mb-0">Product dispatched</h6>
                  </div>
                </div>
              </li>
            </div>
          </ul>
          <div className="d-sm-flex flex-wrap justify-content-between align-items-center text-center pt-4">
          <div className="form-check mt-2 me-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="notify-me"
              checked
            />
            <label className="form-check-label" for="notify-me">
              Notify me when order is delivered
            </label>
          </div>
          {/* button for open modal */}
          <button className="mt-2 btn-view-order Button-Red-Border Button-Full-Red text-light"
            data-bs-toggle="modal" onClick={() => setLgShow(true)}>
            View Order Details
          </button>
          {/* modal for order Tracking Product */}
          <Modal centered size="lg" show={lgShow} onHide={() => setLgShow(false)} className="order-details"
          aria-labelledby="example-modal-sizes-title-lg">
             <Modal.Header closeButton className='bg-light'>
                <Modal.Title id="example-modal-sizes-title-lg" className='py-1 ml-4'>
                Order No - 34VB5540K83
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='container' style={{"height": "360px","overflow": "auto"}}>
                    {
                       products.map((productdata,i)=>{
                         return(
                           <>
                              <div className='row' style={{"padding":"5px 10px 5px 10px"}}>
                                <div className='col-lg-3'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                         <img className='product-img-ordertrack' src={productdata.imgsrc} alt=""></img>
                                    </div>
                                </div>
                                <div className='col-lg-5'>
                                      <h6 className='text-muted font-weight-bold d-flex justify-content-center'>{productdata.category}</h6>
                                      <div className="d-flex justify-content-center"><span className="text-muted me-2">Size:</span>8.5</div>
                                      <div className="d-flex justify-content-center"><span className="text-muted me-2">Color:</span>White & Blue</div>
                                      <p className='text-primary d-flex justify-content-center'>{productdata.price}</p>
                                </div>
                                <div className='col-lg-2'>
                                      <h6 className='text-muted d-flex justify-content-center align-items-center'>Quantity</h6>
                                      <div className='d-flex justify-content-center align-items-center'>
                                        <p>1</p>
                                      </div>
                                </div>
                                <div className='col-lg-2'>
                                    <h6 className='text-muted d-flex justify-content-center align-items-center'>Subtotal</h6>
                                    <div className='d-flex justify-content-center align-items-center'>
                                      <p>$154.00</p> 
                                    </div>
                                </div>
                                
                            </div> 
                            <hr style={{"width":"100%","textalign":"left","marginleft":"0"}}></hr>
                            </>
                         )
                       })
                    } 
                  </div>
              </Modal.Body>
              <Modal.Footer> 
                  <div className='row bg-light py-3'>
                    <div className='col-lg-3'>
                      <p className='foot-text'>Subtotal: $265.00</p>
                    </div>
                    <div className='col-lg-3'>
                      <p className='foot-text'>Shipping: $22.50</p>
                    </div>
                    <div className='col-lg-3'>
                      <p className='foot-text'>Tax: $9.50</p>
                    </div>
                    <div className='col-lg-3'>
                      <p className='foot-text'>Total: $297.00</p>
                    </div> 
                </div>
                </Modal.Footer>
          </Modal>
          {/* Modal End */}
          </div>   
        </div>     
      </div>
    </>
  );
};
export default OrderTracking;
