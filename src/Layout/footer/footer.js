import React from 'react'
import '../layout.css';
import footer_logo_light from '../../assets/images/Footer/footer-logo-light.png';
import en from '../../assets/images/Footer/en.png';
import fr from '../../assets/images/Footer/fr.png';
import de from '../../assets/images/Footer/de.png';
import it from '../../assets/images/Footer/it.png';
import cards_alt from '../../assets/images/Footer/cards-alt.png';
import {Link} from 'react-router-dom';
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
                    <div className='container-fluid' style={{ background: "#4b566b" }}>
                        <div className='row pb-2'>
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
                                <div className='widget-sec-footer pb-2 pt-4'>
                                    <ul className='wiget-list-ul-footer text-md-start'>
                                        <h3 className="widget-heading-footer text-light pb-1">Shop departments</h3>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer' to='#'>Sneakers & Athletic</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer' to='#'>Athletic Apparel</Link>
                                        </li>

                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer' to='#'>Sandals</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Jeans</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Shirts & Tops</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Shorts</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>t-shirt</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Swimwear</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Watches</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Sunglasses</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Tops</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
                                <div className='widget-sec-footer pb-2 pt-4'>
                                    <ul className='wiget-list-ul-footer text-md-start'>
                                        <h3 className="widget-heading-footer text-light">Account & shipping info</h3>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Your account</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Shipping rates & policies</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Refunds & replacements</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Order tracking</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Delivery info</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Taxes & Fees</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='widget-sec-footer pb-2 pt-4'>
                                    <ul className='wiget-list-ul-footer text-md-start'>
                                        <h3 className="widget-heading-footer text-light pb-1">About Us</h3>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>About company</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Our team</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>Careers</Link>
                                        </li>
                                        <li className='widget-list-footer'>
                                            <Link className='widget-list-link-footer text-md-start' to='#'>News</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
                                <div className='subscription-form-antispam-footer pb-2 pt-4'>
                                    <h3 className="widget-heading-footer-stay text-light pb-1">Stay informed</h3>
                                    <form className="subscription-form-footer validate-footer" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate="">
                                        <div className="input-group flex-nowrap">
                                            <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required="" />
                                            <i className="fa fa-envelope"></i>
                                            <button className="btn btn-danger btn-subscribe-footer" type="submit" name="subscribe" style={{"backgroundcolor": "#fe3638" }}>Subscribe</button>
                                        </div>
                                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                            <input className="subscription-form-antispam-footer" type="text" name="" tabIndex="-1" />
                                        </div>
                                        <div className="widget-list-link-footer text-light opacity-50">Subscribe to our newsletter to receive early discount offers, updates and new products info.</div>
                                        <div className="subscription-status"></div>
                                    </form>
                                </div>
                                <div className="pb-2 mb-4">
                                    <h3 className="widget-heading-footer-Download text-light pb-1 download-app text-md-start">Download our app</h3>
                                    <div className="d-flex flex-wrap">
                                        <div className="me-2 mb-2">
                                            <a className="btn-market btn-download" href="#" role="button">
                                                <i className="fa fa-apple" aria-hidden="true"></i>
                                                <span className="btn-market-subtitle">Download on the</span>
                                                <span className="btn-market-title">App Store</span>
                                            </a>
                                        </div>
                                        <div className="mb-2">
                                            <a className="btn-market btn-download" href="#" role="button">
                                                <i className="fa fa-caret-right"></i>
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
                                    <div className="d-flex"><i className="fa fa-rocket text-orange"></i>
                                        <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">Fast and free delivery</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">Free delivery for all orders over $200</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
                                    <div className="d-flex"><i className="fa fa-id-card text-orange"></i>
                                        <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">Money back guarantee</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">We return money within 30 days</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
                                    <div className="d-flex"><i className="fa fa-money text-orange"></i>
                                        <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">24/7 customer support</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">Friendly 24/7 customer support</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
                                    <div className="d-flex"><i className="fa fa-support text-orange"></i>
                                        <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">Fast and free delivery</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">Free delivery for all orders over $200</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr-light mb-5" style={{color:""}} />
                            <div className="row pb-2">
                                <div className="col-md-6 text-center text-md-start mb-4">
                                    <div className="text-nowrap mb-4">
                                        <a className="d-inline-block align-middle mt-n1 me-3 text-orange" href="#">
                                            <img className="d-block" src={footer_logo_light} width="117" alt="Cartzilla" />
                                        </a>
                                        <div className="btn-group dropdown disable-autohide">
                                            <button className="btn btn-outline-light border-light btn-sm dropdown-toggle px-2" type="button" data-bs-toggle="dropdown">
                                                <img className="me-2" src={en} width="20" alt="English" />Eng / $
                                            </button>
                                                <ul class="dropdown-menu my-1 show" data-popper-placement="top-start" style={{"position":"absolute","transform": "translate(-1px, -38px)","margin":"0px","inset": "auto auto 0px 0px"}}>
                                                <li class="dropdown-item-footer">
                                                <select class="form-select form-select-sm">
                                                    <option value="usd">$ USD</option>
                                                    <option value="eur">€ EUR</option>
                                                    <option value="ukp">£ UKP</option>
                                                    <option value="jpy">¥ JPY</option>
                                                </select>
                                                </li>
                                                <li><a class="dropdown-item-footer pb-1" href="#">
                                                    <img class="me-2" src={fr} width="20" alt="Français"/>Français</a></li>
                                                <li><a class="dropdown-item-footer pb-1" href="#">
                                                    <img class="me-2" src={de} width="20" alt="Deutsch"/>Deutsch</a></li>
                                                <li><a class="dropdown-item-footer" href="#">
                                                    <img class="me-2" src={it} width="20" alt="Italiano"/>Italiano</a></li>
                                            </ul>  
                                                   
                                        </div>
                                       
                                    </div>
                                    <div className="widget-sec-footer widget-links widget-light">
                                        <ul className="widget-list-ul-footer d-flex flex-wrap justify-content-center justify-content-md-start">
                                            <li className="widget-list-footer me-4"><a className="widget-list-link-footer" href="#">Outlets</a></li>
                                            <li className="widget-list-footer me-4"><a className="widget-list-link-footer" href="#">Affiliates</a></li>
                                            <li className="widget-list-footer me-4"><a className="widget-list-link-footer" href="#">Support</a></li>
                                            <li className="widget-list-footer me-4"><a className="widget-list-link-footer" href="#">Privacy</a></li>
                                            <li className="widget-list-footer me-4"><a className="widget-list-link-footer" href="#">Terms of use</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center text-md-end mb-4">
                                    <div className="mb-3">
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="#">
                                            <i className="fa fa-pinterest"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="#">
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </div>
                                    <img className="d-inline-block" src={cards_alt} width="187" alt="Payment methods" />
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

