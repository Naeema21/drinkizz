import React from 'react'
import '../layout.css'
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
                            <a className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-indigo" href="#">
                                <div className="card-body text-center">
                                    <i className="text-indigo fa fa-instagram mb-2"></i>
                                    <h3 className="h5 mb-1 text-dark">Follow on Instagram</h3>
                                    <p className="text-muted fs-sm">#ShopWithCartzilla</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer;

