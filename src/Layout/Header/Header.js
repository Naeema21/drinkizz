import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import '../layout.css'


const Header = () => {
    const SignIn = React.lazy(() => import('../../Components/SignIn/SignIn'))

    const [Navigations, setNavbars] = useState(false);

    // // on scroll set hooks true
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 20) {
                setNavbars(true);
            }
        })
    });


    return (
        <div className='header fixed-top'>
            <div className='topbar py-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-3'>
                            <p>Available 24/7 at <a href='tel:(00) 33 169 7720'> (00) 33 169 7720</a></p>
                        </div>
                        <div className='col-lg-9 d-flex justify-content-end'>
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
                                    <Link to="/order-tracking">
                                        <i className='fa fa-map-marker text-danger me-2'></i>Order Tracking
                                    </Link>
                                </span> &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                <span style={{ cursor: 'pointer' }}>
                                    <SignIn />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* top bar end */}
            <Navbar collapseOnSelect expand="lg"
                style={{
                    // top: show ? '30px' : '5px',
                    backgroundColor: Navigations ? '#fbefef' : 'transparent',
                    boxShadow: Navigations ? '0px 0px 10px #000' : 'none',
                }}>
                <div className='container'>
                    <Navbar.Brand href="#home"><span className='text-dark'>&#127867;</span>Daruwale</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='justify-content-end align-items-center' >
                            <Link to="/" className='nav-link'>Home</Link>
                            <Link to="/" className='nav-link'>Account</Link>
                            <Link to="/product" className='nav-link'>Product</Link>

                            <Link to="/cart" className='nav-link'>
                                <i className='fa fa-shopping-cart'> </i>&nbsp;My Cart
                            </Link>
                            <span className='nav-link'>
                                <form className="search-bar">
                                    <input type="search" placeholder="Search" />
                                </form>
                            </span>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
           
        </div>
    )
}

export default Header
