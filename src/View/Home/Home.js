import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import './Home.css'
import ProductCamera from '../../assets/images/HomePage/banner-sm01.png'
import ProductGadget from '../../assets/images/HomePage/banner-sm02.png'
import ProductEarbuds from '../../assets/images/HomePage/banner-sm03.png'
import HomeBannerCaroucel1 from '../../assets/images/HomePage/Caroucel-1.jpg'
import HomeBannerCaroucel2 from '../../assets/images/HomePage/caroucel-2.jpg'
import HomeBannerCaroucel3 from '../../assets/images/HomePage/caroucel-3.jpg'


const Home =()=> {
    const options = {
        items: 1,
        rewind: true,
        autoplay: false
    };
    return (
        <div className='home'>
            {/* Banner start */}
            <section className="banner-home py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className='row d-flex align-items-center'>
                                    <div className='col-lg-6'>
                                        <img src={ProductCamera} className='img-fluid' alt='Camera'></img>
                                    </div>
                                    <div className='col-lg-6 justify-content-center align-items-center d-flex '>
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6>Shop Now <i className="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-for-bg">
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <img src={ProductGadget} className='img-fluid' alt='Gadget'></img>
                                    </div>
                                    <div className='col-lg-6 justify-content-center align-items-center d-flex '>
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6>Shop Now <i className="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <img src={ProductEarbuds} className='img-fluid' alt='EarBuds'></img>
                                    </div>
                                    <div className='col-lg-6 justify-content-center align-items-center d-flex '>
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6>Shop Now <i className="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
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
            {/* Banner end */}
    

        </div>
    )
}

export default Home
