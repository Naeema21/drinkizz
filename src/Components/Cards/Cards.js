import React, { useState } from 'react'
import './Cards.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';

const Cards = React.memo((props) => {
//POST data for Add to card
const [showDangerAlert, setshowDangerAlert] = useState(false);

// const[deleteId , setDeleteId]=useState();

    const data = { name:props.name, category :props.category,price:props.price,size :1,quantity:1,image:props.imgsrc};
    const handleSubmit = () => {
    axios.post(`https://daruwale.herokuapp.com/public/cart/${props.id}`, data)
    .then(response => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data); 
        if (response.status === 201) {
            swal({
                title:response.data.message,
                timer:2000,
            })
        } else {
            swal({
                title: "Try Again!",
            })          
        }
                    
    }).catch(error => {
        console.error('Something went wrong!', error);
    });
}
//POST data for WishList of card
    const data2 = {name:props.name, category :props.category,price:props.price,size :1,image:props.imgsrc,rating:props.star};
        const handleSubmit2 = () => {
        axios.post(`https://daruwale.herokuapp.com/public/wishlist/${props.id}`, data2)
        .then(response => {
            console.log("Status: ", response.status);
            console.log("Data: ", response.data); 
            if (response.status === 201) {
                swal({
                    title:response.data.message,
                    timer:2000,
                })
            } else {
                swal({
                    title: "Try Again!",
                })          
            }        
        }).catch(error => {
            console.error('Something went wrong!', error);
        });
        }
    return (
        <> 
            <div className='card product-card mt-3 mb-3'>
                <div className='pro-compare d-flex align-items-center'>
                    <Link to='/compare' className='btn-compare me-2'><i className="fa fa-refresh px-1"></i>Compare</Link>
                    <button onClick={handleSubmit2} data-toggle="tooltip" data-placement="top" title="Hooray!" className='btn-wishlist btn-sm'><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>
                <div className='product-img'>
                    <Link to='/product-details' className='card-img-top d-block overflow-hidden'>
                        <img className='img-fluid' src={props.imgsrc} alt="productimg" />
                    </Link>
                    <div className='px-3'>
                        <Link to='/product-details' className='product-name d-block fs-xs'>{props.category}</Link>
                        <h3 className='product-title'>
                            <Link to='/product-details'>{props.name}</Link>
                        </h3>
                    </div>
                    <div className='d-flex justify-content-between px-3 py-2'>
                        <div className='product-price'>
                            <span className='text-indigo'>${props.price}</span>
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
                        <button className='btn btn btn-sm d-block w-100 mb-2 addto-cardbtn' onClick={handleSubmit}>
                            <i className="fa fa-shopping-cart px-1" aria-hidden="true"></i>
                            Add to Cart</button>                                           
                        <div className='text-center'>
                            <Link to='/product-details'>
                                <i className="fa fa-eye px-1" aria-hidden="true"></i>
                                Quick view</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});
export default Cards