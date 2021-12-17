import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom';

const Cards = React.memo((props) => {
    return (
        <>
            <div className='card product-card'>
                <div className='pro-compare d-flex align-items-center'>
                    <Link to='#' className='btn-compare me-2'><i class="fa fa-refresh px-1"></i>Compare</Link>
                    <button data-toggle="tooltip" data-placement="top" title="Hooray!" className='btn-wishlist btn-sm'><i class="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>
                <div className='product-img'>
                    <Link to='#' className='card-img-top d-block overflow-hidden'>
                        <img className='img-fluid' src={props.imgsrc} alt="productimg" />
                    </Link>
                    <div className='px-3'>
                        <Link to='#' className='product-name d-block fs-xs'>{props.category}</Link>
                        <h3 className='product-title'>
                            <Link to='#'>{props.name}</Link>
                        </h3>
                    </div>
                    <div className='d-flex justify-content-between px-3 py-2'>
                        <div className='product-price'>
                            <span className='text-indigo'>{props.price}</span>
                        </div>
                        <div className='star-rating'>
                            {
                                Array.from(Array(props.star), (e, i) => {
                                    return <i className="fa fa-star text-orange" aria-hidden="true" key={i}></i>
                                })
                            }
                        </div>
                    </div>
                    <div className="product-actionadd px-3">
                        <button className='btn btn btn-sm d-block w-100 mb-2 addto-cardbtn'><i className="fa fa-shopping-cart px-1" aria-hidden="true"></i>Add to Card</button>
                        <div className='text-center'>
                            <Link to='#'><i className="fa fa-eye px-1" aria-hidden="true"></i>Quick view</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});
export default Cards