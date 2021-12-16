import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import '../layout.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='topbar py-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <p>Available 24/7 at <a href='tel:(00) 33 169 7720'> (00) 33 169 7720</a></p>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-end'>
                            <p>
                                <span>
                                    <Link to="/">
                                        <i className='fa fa-heart-o text-danger me-2'></i>Wishlist(3)
                                    </Link>
                                </span> &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                <span>
                                    <Link to="/compare">
                                        <i className='fa fa-refresh text-danger me-2'></i>Compare(3)
                                    </Link>
                                </span> &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                <span>
                                    <Link to="/">
                                        <i className='fa fa-map-marker text-danger me-2'></i>Order Tracking
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* top bar end */}
            <Navbar collapseOnSelect expand="lg" >
                <div className='container'>
                    <Navbar.Brand href="#home">Daruwale</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#shop">Shop</Nav.Link>
                            <Nav.Link href="#account">Account</Nav.Link>
                            <Nav.Link href="/product">Product</Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link href="#serch">
                                <form className="search-bar">
                                    <input type="search" placeholder="Search" />
                                </form>
                            </Nav.Link>
                            <Nav.Link href="#deets">
                                <span>
                                    <i className='fa fa-user-o'> </i>&nbsp;Hello, sign In
                                </span>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <span>
                                    <i className='fa fa-shopping-cart'> </i>&nbsp;My Cart
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
