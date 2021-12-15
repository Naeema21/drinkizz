import React from "react"
import './Home.css'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import './Home.css'
import ProductCamera from '../../assets/images/Home/banner-sm01.png'
import ProductGadget from '../../assets/images/Home/banner-sm02.png'
import ProductEarbuds from '../../assets/images/Home/banner-sm03.png'
import HomeBannerCaroucel1 from '../../assets/images/Home/Caroucel-1.jpg'
import HomeBannerCaroucel2 from '../../assets/images/Home/caroucel-2.jpg'
import HomeBannerCaroucel3 from '../../assets/images/Home/caroucel-3.jpg'
import OfferBanneripad from '../../assets/images/Home/offer-banner-1.jpg'
import { product } from '../../assets/Data/product';
import { clientCaroucel } from "../../assets/Data/data";

const Home = () => {
    const Card = React.lazy(() => import('../../Components/Cards/Cards'))
    const options = {
        items: 1,
        rewind: true,
        autoplay: false
    };
    const options2 = {
        items: 4,
        rewind: true,
        // autoplay: true,
        nav: false,
        dots: false
    };
    return (
        <div className='home'>
            {/* banner */}
            <section className="banner-home py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 order-xl-1 pt-4 mt-3 mt-xl-0 pt-xl-0 order-2">
                            <div className="d-flex d-xl-block scroll-card">
                                <div className="d-flex align-items-center bg-faded-indigo rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0 cardbox" >
                                    <img src={ProductCamera} className='img-fluid' width="125" alt='Camera'></img>
                                    <div className="py-4 px-2">
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6 className="text-indigo">Shop Now <i className="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center bg-faded-orange rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0 cardbox" >
                                    <img src={ProductGadget} className='img-fluid' width="125" alt='Gadget'></img>
                                    <div className="py-4 px-2">
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6 className="text-orange">Shop Now <i className="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center bg-faded-green rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0 cardbox" >
                                    <img src={ProductEarbuds} className="img-fluid" width="125" alt="EarBuds"></img>
                                    <div className="py-4 px-2">
                                        <div className="card-align-pro">
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6 className="text-green">Shop Now <i className="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 order-xl-2 order-1">
                            <OwlCarousel options={options}>
                                <div className="row display-flex align-items-center">
                                    <div className="col-lg-6 Home-Banner-Caroucel-Text">
                                        <span className="Banner-Carousel-Heading">World of music with</span><br />
                                        <span className="Banner-Carousel-Bold">
                                            <b>Headphones</b>
                                        </span><br />
                                        <span className="Banner-Caroucel-text">Choose between top brands</span><br />
                                        <button>Shop Now <i className="fa fa-angle-right"></i></button>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={HomeBannerCaroucel1} className="img-fluid" alt="HeadSet"></img>
                                    </div>
                                </div>
                                <div className="row display-flex align-items-center">
                                    <div className="col-lg-6 Home-Banner-Caroucel-Text">
                                        <span className="Banner-Carousel-Heading">World of music with</span><br />
                                        <span className="Banner-Carousel-Bold">
                                            <b>Headphones</b>
                                        </span><br />
                                        <span className="Banner-Caroucel-text">Choose between top brands</span><br />
                                        <button>Shop Now <i className="fa fa-angle-right"></i></button>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={HomeBannerCaroucel2} className="img-fluid" alt="VR Box"></img>
                                    </div>
                                </div>
                                <div className="row display-flex align-items-center">
                                    <div className="col-lg-6 Home-Banner-Caroucel-Text">
                                        <span className="Banner-Carousel-Heading">World of music with</span><br />
                                        <span className="Banner-Carousel-Bold">
                                            <b>Headphones</b>
                                        </span><br />
                                        <span className="Banner-Caroucel-text">Choose between top brands</span><br />
                                        <button>Shop Now <i className="fa fa-angle-right"></i></button>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={HomeBannerCaroucel3} className="img-fluid" alt="Mobile Phone"></img>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Completed */}
            <Card />

            {/* Banner Offer Start */}
            <section className='Offers-Banner'>
                <div className='container'>
                    <div className='cardbox rounded-3 py-4'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-md-5'>
                                <div className='px-5'>
                                    <span className='Limited-Offer-tag bg-danger'>Limited Offer</span>
                                    <h3 className='mt-4 mb-1 fw-light text-body'>All new</h3>
                                    <h2 className='mb-1'>Last Gen iPad Pro</h2>
                                    <p className='h5 fw-light text-body'>at discounted price. Hurry up!</p>
                                    <button className='my-4 btn'>View Offers     <i className="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <img src={OfferBanneripad} alt="Offer On ipad" className='img-fluid'></img>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Banner Offer end */}
            {/* Client Section Start */}
            <section className="client-caroucel mt-4">
                <div className="container">
                    <OwlCarousel options={options2}>
                        {
                            clientCaroucel.map((value, index) => {
                                return (
                                    <div className="border py-4" key={index}>
                                        <img src={value.img} alt="client" width="40%" className="d-block mx-auto"></img>
                                    </div>
                                );
                            })
                        }
                    </OwlCarousel>
                </div>
            </section>
            {/* Client Section End */}
            {/* Best Sellers Products Start */}
            <section className='best-sellers-products pt-5'>
                <div className='container pb-4'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-6'>
                            <div className='BS-Product'>
                                <h3 className='BS-Heading'>BestSellers</h3>
                                {
                                    product.slice(0, 4).map((value, index) => {
                                        return (
                                            <div className='BS-Product-item d-flex align-items-center ' key={index}>
                                                <div className=''>
                                                    <img src={value.imgsrc} alt='product' width="70" className='img-fluid'></img>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='mt-4'>
                                                        <h6 className='best-seller-product-title'>{value.name}</h6>
                                                        <p className='best-seller-product-price'>{value.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                                <div className='mt-4'>
                                    <a>View More <i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-6'>
                            <div className='BS-Product'>
                                <h3 className='BS-Heading'>New Arrivals</h3>
                                {
                                    product.slice(4, 8).map((value, index) => {
                                        return (
                                            <div className='BS-Product-item d-flex align-items-center ' key={index}>
                                                <div className=''>
                                                    <img src={value.imgsrc} alt='product' width="70" className='img-fluid'></img>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='mt-4'>
                                                        <h6 className='best-seller-product-title'>{value.name}</h6>
                                                        <p className='best-seller-product-price'>{value.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                                <div className='mt-4'>
                                    <a>View More <i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-6'>
                            <div className='BS-Product'>
                                <h3 className='BS-Heading'>Top Rated</h3>
                                {
                                    product.slice(8, 12).map((value, index) => {
                                        return (
                                            <div className='BS-Product-item d-flex align-items-center' key={index}>
                                                <div className=''>
                                                    <img src={value.imgsrc} alt='product' width="70" className='img-fluid'></img>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='mt-4'>
                                                        <h6 className='best-seller-product-title'>{value.name}</h6>
                                                        <p className='best-seller-product-price'>{value.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                                <div className='mt-4'>
                                    <a>View More <i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Best Sellers Products End */}
        </div>
    )
}

export default Home
