import React from "react";
import { products } from '../../assets/Data/product';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
const Shipping = ({ setForm, formData, navigation }) => {
  const { address, city, state, zip } = formData;

  const { previous, next } = navigation;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className='mt-5'>
              <h2 className="h5 pb-3 mb-2">Choose shipping method</h2>
              <div className="table-responsive">
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
                        <div className="form-check mb-4">
                          <input className="form-check-input" type="radio" id="courier" name="shipping-method" checked="" />
                          <label className="form-check-label" for="courier"></label>
                        </div>
                      </td>
                      <td className="align-middle"><span className="SM-table-heading">Courier</span><br /><span className="text-muted SM-Address-D">All addresses (default zone), United States &amp; Canada</span></td>
                      <td className="align-middle text-muted SM-Address-D">2 - 4 days</td>
                      <td className="align-middle text-muted SM-Address-D">$26.50</td>
                    </tr>
                    <tr>
                      <td className='p-3'>
                        <div className="form-check mb-4">
                          <input className="form-check-input" type="radio" id="local" name="shipping-method" />
                          <label className="form-check-label" for="local"></label>
                        </div>
                      </td>
                      <td className="align-middle"><span className="SM-table-heading">Local Shipping</span><br /><span className="text-muted SM-Address-D">All addresses (default zone), United States &amp; Canada</span></td>
                      <td className="align-middle text-muted SM-Address-D">up to one week</td>
                      <td className="align-middle text-muted SM-Address-D">$10.00</td>
                    </tr>
                    <tr>
                      <td className='p-3'>
                        <div className="form-check mb-4">
                          <input className="form-check-input" type="radio" id="flat" name="shipping-method" />
                          <label className="form-check-label" for="flat"></label>
                        </div>
                      </td>
                      <td className="align-middle"><span className="SM-table-heading">Flat Rate</span><br /><span className="text-muted SM-Address-D">All addresses (default zone)</span></td>
                      <td className="align-middle text-muted SM-Address-D">5 - 7 days</td>
                      <td className="align-middle text-muted SM-Address-D">$33.85</td>
                    </tr>
                    <tr>
                      <td className='p-3'>
                        <div className="form-check mb-4">
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
                        <div className="form-check mb-4">
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
                        <div className="form-check mb-4">
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
                        <div className="form-check mb-4">
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
                        <div className="form-check mb-4">
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
                        <div className="form-check mb-4">
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
          </div>
          <div className='col-lg-4 Minus-margin'>
            <div className='card rounded-3 shadow-lg p-4'>
              <div className='card-head text-center'>
                <h6>Order Summary</h6>
                <div>
                  {
                    products.slice(0, 4).map((value, index) => {
                      return (
                        <Link to="/product-details" key={index}>
                          <div className='d-flex align-items-center border-bottom'>
                            <div className=''>
                              <img src={value.imgsrc} alt='product' width="70" className='img-fluid'></img>
                            </div>
                            <div className='d-flex align-items-center'>
                              <div className='mt-4 Check-out-product-body'>
                                <h6 className='Check-out-product-title'>{value.name}</h6>
                                <p className='Check-out-product-price'>{value.price}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })
                  }
                </div>
                <ul className="list-unstyled fs-sm pb-2 border-bottom mt-2">
                  <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Subtotal:</span><span className="text-end">$265.<small>00</small></span></li>
                  <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Shipping:</span><span className="text-end">—</span></li>
                  <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Taxes:</span><span className="text-end">$9.<small>50</small></span></li>
                  <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD"><span className="me-2">Discount:</span><span className="text-end">—</span></li>
                </ul>
                <h3 className="fw-normal text-center my-4">$274.<small>50</small></h3>
                <form>
                  <input type="text"
                    className="form-control" autoComplete="off" placeholder="Promo code" />
                  <button className='btn Button-Red-Border d-block w-100 mt-3'>Apply promo code</button>
                </form>
              </div>
            </div>
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
