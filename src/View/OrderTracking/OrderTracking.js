import React from 'react';
import './OrderTracking.css';
const OrderTracking=()=>{
    return(
        <>
        <div className='orderTrack'>
        <div class="container py-5 mb-2 mb-md-3">
        {/* -- Details-- */}
        <div class="row gx-4 mb-4">
          <div class="col-md-4 mb-2">
            <div class="bg-light h-100 p-4 text-center rounded-3"><span class="text-dark me-2">Shipped via:</span>UPS Ground</div>
          </div>
          <div class="col-md-4 mb-2">
            <div class="bg-light h-100 p-4 text-center rounded-3"><span class="text-dark me-2">Status:</span>Processing order</div>
          </div>
          <div class="col-md-4 mb-2">
            <div class="bg-light h-100 p-4 text-center rounded-3"><span class="text-dark me-2">Expected date:</span>October 15, 2019</div>
          </div>
        </div>
        {/* -- Progress-- */}
        <div class="card border-0 shadow-lg">
          <div class="card-body pb-2 card-ordertracking">
            <ul class="nav nav-tabs media-tabs nav-justified">
              <li class="nav-item card-order">
                <div class="nav-link completed">
                  <div class="d-flex align-items-center">
                    <div class="media-tab-media back-circle-order bg-light"><i class="fa fa-shopping-bag text-orange"></i></div>
                    <div class="ps-3">
                      <div class="media-tab-subtitle text-muted fs-xs mb-1">First step</div>
                      <h6 class="media-tab-title text-nowrap mb-0">Order placed</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item card-order">
                <div class="nav-link active">
                  <div class="d-flex align-items-center">
                    <div class="media-tab-media back-circle-order bg-light"><i class="fa fa-cog text-orange" aria-hidden="true"></i></div>
                    <div class="ps-3">
                      <div class="media-tab-subtitle fs-xs mb-1 text-order-active">Second step</div>
                      <h6 class="media-tab-title text-nowrap mb-0 text-orange">Processing order</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item card-order">
                <div class="nav-link">
                  <div class="d-flex align-items-center">
                    <div class="media-tab-media back-circle-order bg-light"><i className='fa fa-star text-orange'></i></div>
                    <div class="ps-3">
                      <div class="media-tab-subtitle text-muted fs-xs mb-1">Third step</div>
                      <h6 class="media-tab-title text-nowrap mb-0">Quality check</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item card-order">
                <div class="nav-link">
                  <div class="d-flex align-items-center">
                    <div class="media-tab-media back-circle-order bg-light"><i class="fa fa-gift text-orange" aria-hidden="true"></i></div>
                    <div class="ps-3">
                      <div class="media-tab-subtitle text-muted fs-xs mb-1">Fourth step</div>
                      <h6 class="media-tab-title text-nowrap mb-0">Product dispatched</h6>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Footer--> */}
        <div class="d-sm-flex flex-wrap justify-content-between align-items-center text-center pt-4">
          <div class="form-check mt-2 me-3">
            <input class="form-check-input" type="checkbox" id="notify-me" checked/>
            <label class="form-check-label" for="notify-me">Notify me when order is delivered</label>
          </div><a class="btn btn-primary btn-sm mt-2 btn-view-order" href="#order-details" data-bs-toggle="modal">View Order Details</a>
        </div>
      </div>
      </div>
     </>
    )
}
export default OrderTracking;