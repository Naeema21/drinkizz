import React from 'react'
import './Home.css'
import ProductCamera from '../../assets/images/HomePage/banner-sm01.png'
import ProductGadget from '../../assets/images/HomePage/banner-sm02.png'
import ProductEarbuds from '../../assets/images/HomePage/banner-sm03.png'
function Home() {
    return (
        <div>
            <section className="banner-home py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <img src={ProductCamera} className='img-fluid'></img>
                                    </div>
                                    <div className='col-lg-6 justify-content-center align-items-center d-flex '>
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6>Shop Now <i class="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-for-bg">
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <img src={ProductGadget} className='img-fluid'></img>
                                    </div>
                                    <div className='col-lg-6 justify-content-center align-items-center d-flex '>
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6>Shop Now <i class="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <img src={ProductEarbuds} className='img-fluid'></img>
                                    </div>
                                    <div className='col-lg-6 justify-content-center align-items-center d-flex '>
                                        <div className='card-align-pro'>
                                            <h5>Next Gen <br /><b>Video</b> with <b>360 Cam</b></h5>
                                            <h6>Shop Now <i class="fa fa-angle-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
