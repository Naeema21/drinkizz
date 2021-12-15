import React from 'react'
import '../layout.css';
import footer_logo_light from '../../assets/images/Footer/footer-logo-light.png';
import en from '../../assets/images/Footer/en.png';
import fr from '../../assets/images/Footer/fr.png';
import de from '../../assets/images/Footer/de.png';
import it from '../../assets/images/Footer/it.png';
import cards_alt from '../../assets/images/Footer/cards-alt.png';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <section className="container-fluid px-0">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <a className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-orange" href="blog-list-sidebar.html">
                                <div className="card-body text-center">
                                    <i className="text-orange fa fa-edit mb-2"></i>
                                    <h3 className="h5 mb-1 text-dark">Read the blog</h3>
                                    <p className="text-muted fs-sm">Latest store, fashion news and trends</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="blog-list-sidebar.html" className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-indigo">
                                <div className="card-body text-center">
                                    <i className="text-indigo fa fa-instagram mb-2"></i>
                                    <h3 className="h5 mb-1 text-dark">Follow on Instagram</h3>
                                    <p className="text-muted fs-sm">#ShopWithCartzilla</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container-fluid' style={{background:"#4b566b"}}>
                        <div className='row pb-2'>
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
                                <div className='widget-sec-footer pb-2 pt-4'>
                                    <ul className='wiget-list-ul-footer text-md-start'>
                                    <h3 className="widget-heading-footer text-light pb-1">Shop departments</h3>
                                        <li className='widget-list-footer i1'>
                                            <a className='widget-list-link-footer' href='#'>Sneakers & Athletic</a>
                                        </li>
                                        <li className='widget-list-footer i2'>
                                            <a className='widget-list-link-footer' href='#'>Athletic Apparel</a>
                                        </li>
                                     
                                        <li className='widget-list-footer i3'>
                                            <a className='widget-list-link-footer' href='#'>Sandals</a>
                                        </li>
                                        <li className='widget-list-footer i4'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Jeans</a>
                                        </li>
                                        <li className='widget-list-footer i5'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Shirts & Tops</a>
                                        </li>
                                        <li className='widget-list-footer i5'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Shorts</a>
                                        </li>
                                        <li className='widget-list-footer i5'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>t-shirt</a>
                                        </li>
                                        <li className='widget-list-footer i5'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Swimwear</a>
                                        </li>
                                        <li className='widget-list-footer i5'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Watches</a>
                                        </li>
                                        <li className='widget-list-footer i5'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Sunglasses</a>
                                        </li>
                                        <li className='widget-list-footer i5'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Tops</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
                            <div className='widget-sec-footer pb-2 pt-4'>
                                    <ul className='wiget-list-ul-footer text-md-start'>
                                    <h3 className="widget-heading-footer text-light">Account & shipping info</h3>
                                        <li className='widget-list-footer i1'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Your account</a>
                                        </li>
                                        <li className='widget-list-footer i2'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Shipping rates & policies</a>
                                        </li>
                                        <li className='widget-list-footer i3'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Refunds & replacements</a>
                                        </li>
                                        <li className='widget-list-footer i4'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Order tracking</a>
                                        </li>
                                        <li className='widget-list-footer i5'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Delivery info</a>
                                        </li>
                                        <li className='widget-list-footer i5'>
                                            <a className='widget-list-link-footer text-md-start' href='#'>Taxes & Fees</a>
                                        </li>
                                    </ul>
                             </div> 
                             <div className='widget-sec-footer pb-2 pt-4'>
                                        <ul className='wiget-list-ul-footer text-md-start'>
                                        <h3 className="widget-heading-footer text-light pb-1">About Us</h3>
                                            <li className='widget-list-footer i1'>
                                                <a className='widget-list-link-footer text-md-start' href='#'>About company</a>
                                            </li>
                                            <li className='widget-list-footer i2'>
                                                <a className='widget-list-link-footer text-md-start' href='#'>Our team</a>
                                            </li>
                                            <li className='widget-list-footer i3'>
                                                <a className='widget-list-link-footer text-md-start' href='#'>Careers</a>
                                            </li>
                                            <li className='widget-list-footer i4'>
                                                <a className='widget-list-link-footer text-md-start' href='#'>News</a>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
                                <div className='widget-sec-footer pb-2 pt-4'>
                                    <h3 className="widget-heading-footer-stay text-light pb-1">Stay informed</h3>
                                    <form className="subscription-form-footer validate-footer" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate="">
                                        <div className="input-group flex-nowrap">
                                            <i className="fa fa-envelope i-class-footer position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                        <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required=""/>
                                        <button className="btn btn-primary btn-subscribe-footer" type="submit" name="subscribe" style={{"box-shadow":"unset","background-color": "#fe3638"}}>Subscribe</button>
                                        </div>
                                        <div style={{position:"absolute", left: "-5000px"}} aria-hidden="true">
                                        <input className="subscription-form-antispam-footer" type="text" name="" tabindex="-1"/>
                                        </div>
                                        <div className="form-text text-light opacity-50">Subscribe to our newsletter to receive early discount offers, updates and new products info.</div>
                                        <div className="subscription-status"></div>
                                    </form>
                                </div>
                                <div className="pb-2 mb-4">
                                <h3 className="widget-heading-footer-Download text-light pb-1 download-app text-md-start">Download our app</h3>
                                            <div className="d-flex flex-wrap">
                                                <div className="me-2 mb-2">
                                                    <a className="btn-market btn-apple a-href-footer" href="#" role="button">
                                                        <span className="btn-market-subtitle">Download on the</span>
                                                        <span className="btn-market-title">App Store</span>
                                                    </a>
                                                </div>
                                              <div className="mb-2">
                                                    <a className="btn-market btn-google a-href-footer" href="#" role="button">
                                                        <span className="btn-market-subtitle">Download on the</span>
                                                        <span className="btn-market-title">Google Play</span>
                                                    </a>
                                                </div> 
                                            </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>
                <section>
                        <div className="pt-5 sec-2-footer">
                            <div className="container">
                                <div className="row pb-3"> 
                                    <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
                                        <div className="d-flex"><i className="fa fa-rocket" style={{"font-size":"3.25rem","color": "#fe3638"}}></i>
                                            <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">Fast and free delivery</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">Free delivery for all orders over $200</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
                                        <div className="d-flex"><i className="fa fa-id-card" style={{"font-size":"3.25rem","color": "#fe3638"}}></i>
                                            <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">Money back guarantee</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">We return money within 30 days</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
                                        <div className="d-flex"><i className="fa fa-money" style={{"font-size":"3.25rem","color": "#fe3638"}}></i>
                                            <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">24/7 customer support</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">Friendly 24/7 customer support</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
                                        <div className="d-flex"><i className="fa fa-support" style={{"font-size":"3.25rem","color": "#fe3638"}}></i>
                                            <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">Fast and free delivery</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">Free delivery for all orders over $200</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr-light mb-5"/>
                                <div className="row pb-2">
                                <div className="col-md-6 text-center text-md-start mb-4">
                                <div className="text-nowrap mb-4">
                                    <a className="d-inline-block align-middle mt-n1 me-3 a-sec-2" href="#">
                                        <img className="d-block" src={footer_logo_light} width="117" alt="Cartzilla"/>
                                    </a>
                                    <div className="btn-group dropdown disable-autohide">
                                    <button className="btn btn-outline-light border-light btn-sm dropdown-toggle px-2" type="button" data-bs-toggle="dropdown">
                                        <img className="me-2" src={en} width="20" alt="English"/>Eng / $</button>
                                    <ul className="dropdown-menu my-1">
                                        <li className="dropdown-item-footer">
                                        <select className="form-select form-select-sm">
                                            <option value="USD">$ USD</option>
                                            <option value="EUR">€ EUR</option>
                                            <option value="UKP">£ UKP</option>
                                            <option value="JPY">¥ JPY</option>
                                        </select>
                                        </li>
                                        <li>
                                            <a className="dropdown-item-footer pb-1" href="#">
                                                <img className="me-2" src={fr} width="20" alt="Français"/>Français
                                            </a>
                                        </li>
                                        <li><a className="dropdown-item-footer pb-1" href="#">
                                                <img className="me-2" src={de} width="20" alt="Deutsch"/>Deutsch
                                            </a>
                                        </li>
                                        <li><a className="dropdown-item-footer" href="#">
                                                <img className="me-2" src={it} width="20" alt="Italiano"/>Italiano
                                            </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="widget-sec-footer widget-links widget-light">
                                    <ul className="widget-list-ul-footer d-flex flex-wrap justify-content-center justify-content-md-start">
                                    <li className="widget-list-footer item2 me-4"><a className="widget-list-link-footer" href="#">Outlets</a></li>
                                    <li className="widget-list-footer item3 me-4"><a className="widget-list-link-footer" href="#">Affiliates</a></li>
                                    <li className="widget-list-footer item4 me-4"><a className="widget-list-link-footer" href="#">Support</a></li>
                                    <li className="widget-list-footer item5 me-4"><a className="widget-list-link-footer" href="#">Privacy</a></li>
                                    <li className="widget-list-footer item6 me-4"><a className="widget-list-link-footer" href="#">Terms of use</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-end mb-4">
                                <div className="mb-3">
                                    <a className="btn-social-icon-footer bs-light bs-twitter ms-2 mb-2" href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a className="btn-social-icon-footer bs-light bs-facebook ms-2 mb-2" href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a className="btn-social-icon-footer bs-light bs-instagram ms-2 mb-2" href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a className="btn-social-icon-footer bs-light bs-pinterest ms-2 mb-2" href="#">
                                        <i className="fa fa-pinterest"></i>
                                    </a>
                                    <a className="btn-social-icon-footer bs-light bs-youtube ms-2 mb-2" href="#">
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                    </div>
                                    <img className="d-inline-block" src={cards_alt} width="187" alt="Payment methods"/>
                            </div>
              
                            </div>
                            </div> 
                        </div>
                </section>
                
            </div>
        </div>
    )
}

export default Footer;

