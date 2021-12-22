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
    <BreadCrumb heading='Tracking order: 34VB5540K83' BC1Link='/' breadcrumb1='Home' BC2Link='/' breadcrumb2='Shop' BC3Link='/' breadcrumb3='Order tracking'/>
      <div className="orderTrack">
        <div class="container py-5 mb-2 mb-md-3">
          {/* -- Details-- */}
          <div class="row gx-4 mb-4">
            <div class="col-md-4 mb-2">
              <div class="bg-light h-100 p-4 text-center rounded-3">
                <span class="text-dark me-2">Shipped via:</span>UPS Ground
              </div>
            </div>
            <div class="col-md-4 mb-2">
              <div class="bg-light h-100 p-4 text-center rounded-3">
                <span class="text-dark me-2">Status:</span>Processing order
              </div>
            </div>
            <div class="col-md-4 mb-2">
              <div class="bg-light h-100 p-4 text-center rounded-3">
                <span class="text-dark me-2">Expected date:</span>October 15,
                2019
              </div>
            </div>
          </div>
          {/* -- Progress-- */}
          <ul className="row ulrow">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li class="card-order">
                <div class="d-flex align-items-center">
                  <div class="back-circle-order bg-light">
                    <i class="fa fa-shopping-bag text-orange"></i>
                  </div>
                  <div class="ps-3">
                    <div class="media-tab-subtitle text-muted mb-1">
                      First step
                    </div>
                    <h6 class="media-tab-title text-nowrap mb-0">
                      Order placed
                    </h6>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li class="card-order">
                <div class="d-flex align-items-center">
                  <div class="back-circle-order active-card">
                    <i class="fa fa-cog text-light" aria-hidden="true"></i>
                  </div>
                  <div class="ps-3">
                    <div class="mb-1 text-orange text-order-active">
                      Second step
                    </div>
                    <h6 class="text-nowrap mb-0 text-orange">
                      Processing order
                    </h6>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li class="card-order">
                <div class="d-flex align-items-center">
                  <div class="back-circle-order bg-light">
                    <i className="fa fa-star text-orange"></i>
                  </div>
                  <div class="ps-3">
                    <div class="text-muted mb-1">Third step</div>
                    <h6 class="text-nowrap mb-0">Quality check</h6>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li class="card-order">
                <div class="d-flex align-items-center">
                  <div class="back-circle-order bg-light">
                    <i class="fa fa-gift text-orange" aria-hidden="true"></i>
                  </div>
                  <div class="ps-3">
                    <div class="text-muted mb-1">Fourth step</div>
                    <h6 class="text-nowrap mb-0">Product dispatched</h6>
                  </div>
                </div>
              </li>
            </div>
          </ul>
          <div class="d-sm-flex flex-wrap justify-content-between align-items-center text-center pt-4">
          <div class="form-check mt-2 me-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="notify-me"
              checked
            />
            <label class="form-check-label" for="notify-me">
              Notify me when order is delivered
            </label>
          </div>
          <button class="mt-2 btn-view-order Button-Red-Border Button-Full-Red text-light"
            data-bs-toggle="modal" onClick={() => setLgShow(true)}>
            View Order Details
          </button>
          <Modal centered size="lg" show={lgShow} onHide={() => setLgShow(false)} className="order-details"
          aria-labelledby="example-modal-sizes-title-lg">
             <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                Order No - 34VB5540K83
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='container' style={{"height": "260px","overflow": "auto"}}>
                    {
                       products.map((productdata,i)=>{
                         return(
                              <div className='row'>
                                <div className='col-lg-3'>
                                    <img className='product-img-ordertrack' src={productdata.imgsrc} alt=""></img>
                                </div>
                                <div className='col-lg-5 col-info-order'>
                                  <h6 className='text-muted'></h6><h6>{productdata.category}</h6>
                                  <div className='d-flex'>
                                      <p className='text-muted'>Name: &nbsp;&nbsp;</p><p className='.text-dark'>{productdata.name}</p>
                                  </div>
                                  <p className='text-primary'>{productdata.price}</p>
                                </div>
                                <div className='col-lg-2'>
                                    <h6 className='text-muted'>Quantity:</h6>
                                    <div className='d-flex justify-content-center'>
                                      <p>1</p>
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <h6 className='text-muted'>Subtotal:</h6>
                                    <p>$154.00</p> 
                                </div>
                                <hr style={{"width":"100%","textalign":"left","marginleft":"0"}}></hr>
                            </div> 
                         )
                       })
                    }
                  </div>
              </Modal.Body>
              <Modal.Footer> 
                  <div className='row bg-light'>
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
          </div>   
        </div>     
      </div>
    </>
  );
};
export default OrderTracking;
