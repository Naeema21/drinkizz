import React from 'react'
import './Cards.css'
import headphone1 from '../../assets/images/Cards/headphone.jpg'


const Cards =()=>{
    return(
        <>
        <section>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                            <h2>Trending products</h2>
                            <button className='cards-moreproduct-btn btn btn-sm'>More Products<i className="fa fa-angle-right" style={{fontSize:'15px', paddingLeft:'3px'}}></i></button>
                        </div> 
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                        <div class="product-wrapper ">
                            <div class="product-img"> 
                                <a className='card-img-top'> 
                                    <img className='img-fluid' src={headphone1} alt="productimg"/>
                                </a>
                                <div class="product-action">
                                    <div class="product-action-style"> <a href="#"> <i class="fa fa-plus"></i> </a> <a href="#"> <i class="fa fa-heart"></i> </a> <a href="#"> <i class="fa fa-shopping-cart"></i> </a> </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                            <h1>hii</h1>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                            <h1>hii</h1>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                            <h1>hii</h1>
                        </div>
                        
                    </div>
                </div>
            </section>

        </>
    )
}
export default Cards