import React from 'react'
import './Cards.css'

const Cards=React.memo((props)=>{
    return(
        <>
            <div className='card product-card'>
                <div className='pro-compare d-flex align-items-center'>
                    <a className='btn-compare me-2'><i class="fa fa-refresh px-1"></i>Compare</a>
                    <button className='btn-wishlist btn-sm'><i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
                <div className='product-img'> 
                    <a className='card-img-top d-block overflow-hidden'> 
                        <img className='img-fluid' src={props.imgsrc} alt="productimg"/>
                    </a>
                    <div className='pro-card-txt px-3'>
                        <a className='product-name d-block fs-xs'>{props.category}</a>
                        <h3 className='product-title'>
                            <a href='#'>{props.name}</a>
                        </h3>
                    </div>
                    <div className='d-flex justify-content-between px-3'>
                        <div className='product-price'>
                            <span className='text-indigo'>{props.price}</span>
                        </div>                   
                        <div className='star-rating'>
                            {
                              Array.from(Array(props.star), (e,i) => {
                                    return <i className="fa fa-star text-orange" aria-hidden="true" key={i}></i>
                                })
                            }
                        </div>
                    </div>
                    <div className="product-actionadd px-3">
                        <button className='btn btn btn-sm d-block w-100 mb-2 addto-cardbtn'><i className="fa fa-shopping-cart px-1" aria-hidden="true"></i>Add to Card</button>
                        <div className='text-center'>
                            <a href='#'><i className="fa fa-eye px-1" aria-hidden="true"></i>Quick view</a>
                        </div>
                    </div>
                </div>
            </div>                   
        </>
    )
});
export default Cards