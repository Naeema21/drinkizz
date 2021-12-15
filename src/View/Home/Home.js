import React from 'react'
import './Home.css'
import ProductCamera from '../../assets/images/Home/banner-sm01.png'
import ProductGadget from '../../assets/images/Home/banner-sm02.png'
import ProductEarbuds from '../../assets/images/Home/banner-sm03.png'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import HomeBannerCaroucel1 from '../../assets/images/Home/Caroucel-1.jpg'
import HomeBannerCaroucel2 from '../../assets/images/Home/caroucel-2.jpg'
import HomeBannerCaroucel3 from '../../assets/images/Home/caroucel-3.jpg'
function Home() {
    const options = {
        items: 1,
        rewind: true,
        autoplay: false
    };
    return (
        <div>
            {/* banner */}
            <section className="banner-home py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 order-xl-1 pt-4 mt-3 mt-xl-0 pt-xl-0 order-2">
                            <div className="d-flex d-xl-block">
                                <div className="d-flex align-items-center bg-faded-info rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0 cardbox" >
                                    <img src={ProductCamera} className='img-fluid' width="125" alt='Camera'></img>
                                    <div className="py-4 px-2">
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6>Shop Now <i className="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center bg-faded-info rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0 cardbox-for-bg" >
                                    <img src={ProductGadget} className='img-fluid' width="125" alt='Gadget'></img>
                                    <div className="py-4 px-2">
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6>Shop Now <i className="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center bg-faded-info rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0 cardbox" >
                                    <img src={ProductEarbuds} className='img-fluid' width="125" alt='EarBuds'></img>
                                    <div className="py-4 px-2">
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6>Shop Now <i className="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 order-xl-2 order-1">
                            <OwlCarousel options={options}>
                                <div className='row display-flex align-items-center'>
                                    <div className='col-lg-6 Home-Banner-Caroucel-Text'>
                                        <span className="Banner-Carousel-Heading">World of music with</span><br />
                                        <span className="Banner-Carousel-Bold">
                                            <b>Headphones</b>
                                        </span><br />
                                        <span className='Banner-Caroucel-text'>Choose between top brands</span><br />
                                        <button>Shop Now <i className="fa fa-angle-right"></i></button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <img src={HomeBannerCaroucel1} className='img-fluid' alt='HeadSet'></img>
                                    </div>
                                </div>
                                <div className='row display-flex align-items-center'>
                                    <div className='col-lg-6 Home-Banner-Caroucel-Text'>
                                        <span className="Banner-Carousel-Heading">World of music with</span><br />
                                        <span className="Banner-Carousel-Bold">
                                            <b>Headphones</b>
                                        </span><br />
                                        <span className='Banner-Caroucel-text'>Choose between top brands</span><br />
                                        <button>Shop Now <i className="fa fa-angle-right"></i></button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <img src={HomeBannerCaroucel2} className='img-fluid' alt='VR Box'></img>
                                    </div>
                                </div>
                                <div className='row display-flex align-items-center'>
                                    <div className='col-lg-6 Home-Banner-Caroucel-Text'>
                                        <span className="Banner-Carousel-Heading">World of music with</span><br />
                                        <span className="Banner-Carousel-Bold">
                                            <b>Headphones</b>
                                        </span><br />
                                        <span className='Banner-Caroucel-text'>Choose between top brands</span><br />
                                        <button>Shop Now <i className="fa fa-angle-right"></i></button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <img src={HomeBannerCaroucel3} className='img-fluid' alt='Mobile Phone'></img>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Completed */}
            <section className='Offers-Banner'>
                <div className='container'>
                    <div className='row cardbox rounded-3 align-items-center'>
                        <div className='col-md-5'>
                            <div className='px-4'>
                            <span className='Limited-Offer-tag bg-danger'>Limited Offer</span>
                            </div>
                        </div>
                        <div className='col-md-7'></div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Home
