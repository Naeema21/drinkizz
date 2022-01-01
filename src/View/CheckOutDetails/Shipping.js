import React from "react";
import { useEffect } from "react";
import OrderSummary from "../../Components/CheckOutSidebar/OrderSummary";

const Shipping = ({ setForm, formData, navigation }) => {
  const { address, city, state, zip } = formData;

  const { previous, next } = navigation;
   const { go } = navigation;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
 

  return (
    <div className="Checkout-Shipping" id="shipping">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 Minus-margin-ProgressBar">
            <form>
              <div className='mt-4'>
                <div className="ProgressBardesign">
                  <ul id="progressbar" >
                    <li className="active"><a className="btn" href="cart"><div className="mt-2 ProgressBar-Text"><i className="fa fa-shopping-cart me-2"></i>Cart</div></a></li>
                    <li className="active"><button className="btn" onClick={() => go("details")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-user me-2" aria-hidden="true"></i>Details</div></button></li>
                    <li className="active"><button className="btn" onClick={() => go("shipping")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-user me-2" aria-hidden="true"></i>Shipping</div></button></li>
                    <li><button className="btn" onClick={() => go("payment")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-credit-card me-2"></i>Payment</div></button></li>
                    <li><button className="btn" onClick={() => go("review")}><div className="mt-2 ProgressBar-Text"><i className="fa fa-check-square me-2"></i>Review</div></button></li>
                  </ul>
                </div>
                <h2 className="h5 pb-3 mb-2">Choose shipping method</h2>
                <div className="table-responsive">
                  <form>
                    <table className="table table-hover fs-sm border-top">
                      <thead>
                        <tr>
                          <th className="align-middle"></th>
                          <th className="align-middle SM-table-heading">Shipping method</th>
                          <th className="align-middle SM-table-heading">Delivery time</th>
                          <th className="align-middle SM-table-heading">Handling fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='p-3'>
                            <div className="mb-4">
                              <input className="form-check-input" type="radio" id="courier" value="shipping-method" name="shipping-method" aria-required checked={true} />
                              <label className="form-check-label" for="courier"></label>
                            </div>
                          </td>
                          <td className="align-middle"><span className="SM-table-heading">Courier</span><br /><span className="text-muted SM-Address-D">All addresses (default zone), United States &amp; Canada</span></td>
                          <td className="align-middle text-muted SM-Address-D">2 - 4 days</td>
                          <td className="align-middle text-muted SM-Address-D">$26.50</td>
                        </tr>
                        <tr>
                          <td className='p-3'>
                            <div className="mb-4">
                              <input className="form-check-input" type="radio" id="local" name="shipping-method" required />
                              <label className="form-check-label" for="local"></label>
                            </div>
                          </td>
                          <td className="align-middle"><span className="SM-table-heading">Local Shipping</span><br /><span className="text-muted SM-Address-D">All addresses (default zone), United States &amp; Canada</span></td>
                          <td className="align-middle text-muted SM-Address-D">up to one week</td>
                          <td className="align-middle text-muted SM-Address-D">$10.00</td>
                        </tr>
                        <tr>
                          <td className='p-3'>
                            <div className="mb-4">
                              <input className="form-check-input" type="radio" id="flat" name="shipping-method" required />
                              <label className="form-check-label" for="flat"></label>
                            </div>
                          </td>
                          <td className="align-middle"><span className="SM-table-heading">Flat Rate</span><br /><span className="text-muted SM-Address-D">All addresses (default zone)</span></td>
                          <td className="align-middle text-muted SM-Address-D">5 - 7 days</td>
                          <td className="align-middle text-muted SM-Address-D">$33.85</td>
                        </tr>
                        <tr>
                          <td className='p-3'>
                            <div className="mb-4">
                              <input className="form-check-input" type="radio" id="ups" name="shipping-method" />
                              <label className="form-check-label" for="ups"></label>
                            </div>
                          </td>
                          <td className="align-middle"><span className="SM-table-heading">UPS Ground Shipping</span><br /><span className="text-muted SM-Address-D">All addresses (default zone)</span></td>
                          <td className="align-middle text-muted SM-Address-D">4 - 6 days</td>
                          <td className="align-middle text-muted SM-Address-D">$18.00</td>
                        </tr>
                        <tr>
                          <td className='p-3'>
                            <div className="mb-4">
                              <input className="form-check-input" type="radio" id="pickup" name="shipping-method" />
                              <label className="form-check-label" for="pickup"></label>
                            </div>
                          </td>
                          <td className="align-middle"><span className="SM-table-heading">Local Pickup from store</span><br /><span className="text-muted SM-Address-D">All addresses (default zone)</span></td>
                          <td className="align-middle text-muted SM-Address-D">—</td>
                          <td className="align-middle text-muted SM-Address-D">$0.00</td>
                        </tr>
                        <tr>
                          <td className='p-3'>
                            <div className="mb-4">
                              <input className="form-check-input" type="radio" id="locker" name="shipping-method" />
                              <label className="form-check-label" for="locker"></label>
                            </div>
                          </td>
                          <td className="align-middle"><span className="SM-table-heading">Pick Up at Cartzilla Locker</span><br /><span className="text-muted SM-Address-D">All addresses (default zone), United States &amp; Canada</span></td>
                          <td className="align-middle text-muted SM-Address-D">—</td>
                          <td className="align-middle text-muted SM-Address-D">$9.99</td>
                        </tr>
                        <tr>
                          <td className='p-3'>
                            <div className="mb-4">
                              <input className="form-check-input" type="radio" id="global-export" name="shipping-method" />
                              <label className="form-check-label" for="global-export"></label>
                            </div>
                          </td>
                          <td className="align-middle"><span className="SM-table-heading">Cartzilla Global Export</span><br /><span className="text-muted SM-Address-D fs-sm">All addresses (default zone), outside United States</span></td>
                          <td className="align-middle text-muted SM-Address-D">3 - 4 days</td>
                          <td className="align-middle text-muted SM-Address-D">$25.00</td>
                        </tr>
                        <tr>
                          <td className='p-3'>
                            <div className="mb-4">
                              <input className="form-check-input" type="radio" id="same-day" name="shipping-method" />
                              <label className="form-check-label" for="same-day"></label>
                            </div>
                          </td>
                          <td className="align-middle"><span className="SM-table-heading">Same-Day Delivery</span><br /><span className="text-muted SM-Address-D">Only United States</span></td>
                          <td className="align-middle text-muted SM-Address-D">—</td>
                          <td className="align-middle text-muted SM-Address-D">$34.00</td>
                        </tr>
                        <tr>
                          <td className='p-3'>
                            <div className="mb-4">
                              <input className="form-check-input" type="radio" id="international" name="shipping-method" />
                              <label className="form-check-label" for="international"></label>
                            </div>
                          </td>
                          <td className="align-middle"><span className="SM-table-heading">International Shipping</span><br /><span className="text-muted SM-Address-D">All addresses (default zone)</span></td>
                          <td className="align-middle text-muted SM-Address-D">up to 15 days</td>
                          <td className="align-middle text-muted SM-Address-D">$27.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
                <div className='row my-5'>
                  <div className='col-lg-6'>
                    <a className='d-block btn-Gray w-100' onClick={previous}><i className="fa fa-angle-left me-2"></i>Back to address</a>
                  </div>
                  <div className='col-lg-6'>
                    <button className='d-block Button-Full-Red w-100' type='submit' onClick={next}>Proceed to Payment &nbsp;<i className="fa fa-angle-right"></i></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='col-lg-4 Minus-margin'>
            <OrderSummary></OrderSummary>
          </div>
        </div>
      </div>
      {/* <h3>Address</h3>
      <ItemForm
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
      />
      <ItemForm label="City" name="city" value={city} onChange={setForm} />
      <StateDrop label="State" name="state" value={state} onChange={setForm} />
      <ItemForm label="Zip" name="zip" value={zip} onChange={setForm} />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div> */}
    </div>
  );
};

export default Shipping;
