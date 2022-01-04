import React from 'react'
import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../layout.css'
const Header = () => {
    const SignIn = React.lazy(() => import('../../Components/SignIn/SignIn'))
    const [Navigation, setNavbar] = useState(false);
    const [expanded, setExpanded] = useState(false);
    //on scroll set hooks true
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 20) {
                setNavbar(true);
            }
        })
    }, []);

    const scrollgoTop = () => {
        window.scrollTo({ top: 0 });
    };

   

    return (
        <div className='header fixed-top'>
            <Navbar collapseOnSelect expand="lg" expanded={expanded}
                className=" bg-theme" style={{
                    // top: show ? '30px' : '5px',
                    backgroundColor: '#363e4e',
                }}>

                <Container>
                    <Navbar.Brand to="/">
                        <i className='fa fa-phone'></i> <a href='tel:(00) 33 169 7720' className='text-white'> (00) 33 169 7720</a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"
                        onClick={() => setExpanded(expanded ? false : "expanded")} />
                    <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end ">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link "
                                to="/product" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Product
                            </NavLink>
                            <NavLink className="nav-link "
                                to="/compare" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Compare
                            </NavLink>
                            <NavLink className="nav-link "
                                to="/order-tracking" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Order Tracking
                            </NavLink>
                            <NavLink className="nav-link "
                                to="/account-orders-history" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Account
                            </NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='sub-header py-2'
                style={{
                    background: Navigation ? '#fff' : 'transpernt',
                }}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-3'>
                            <Link to="/" className='logo'><span className='text-dark'>&#127867;</span>Daruwale</Link>
                        </div>

                        <div className='col-lg-5'>
                            <input type="text" className='form-control search-bar'
                                placeholder='Search For Product' />
                        </div>
                        <div className='col-lg-4 d-flex justify-content-center 
                        align-items-center justify-content-around signin'>

                            <div>
                                <span>
                                    <Link to="/cart" className='sub-header-link'>
                                        <i className='fa fa-shopping-cart text-danger'> </i> &nbsp;My Cart
                                    </Link>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <Link to="/account-orders-history#account-wishlist" className='sub-header-link'>
                                        <i className='fa fa-heart-o text-danger'> </i> &nbsp;Wishlist
                                    </Link>
                                </span>
                            </div>
                            <div>
                                <SignIn />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header
