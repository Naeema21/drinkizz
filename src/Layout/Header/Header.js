import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import '../layout.css'


const Header = () => {
    const SignIn = React.lazy(() => import('../../Components/SignIn/SignIn'))
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
                            <Link to="/" className='nav-link'>Home</Link>
                            <Link to="/shop" className='nav-link'>Shop</Link>
                            <Link to="/" className='nav-link'>Account</Link>
                            <Link to="/product" className='nav-link'>Product</Link>
                        </Nav>
                        <Nav>
                            <span>
                                <form className="search-bar">
                                    <input type="search" placeholder="Search" />
                                </form>
                            </span>
                            <span style={{cursor:'pointer'}}>
                                <SignIn />
                            </span>
                            <Link eventkey={2} to="/cart" className='nav-link'>
                                <span>
                                    <i className='fa fa-shopping-cart'> </i>&nbsp;My Cart
                                </span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
