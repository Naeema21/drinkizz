import React from "react";
import EmptyCart from '../../assets/images/checkout-details/empty_cart.jpeg'

const NoDataInCart = () => {
    return (
        <div>
            <div className=" row d-flex justify-content-center">
                <div className="col-6">
                    <img src={EmptyCart} className="" alt="empty-cart" height="300px" ></img>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-6 text-center">
                <h4>Your Cart is Empty</h4>
                <p>Add items to it now.</p>
                <div className="mt-4">
                <a className="Button-Full-Red block" href='/product'><i className="fa fa-shopping-cart me-2"></i>Shop Now</a>
                </div>
                </div>
                
            </div>

        </div>
    )
}
export default NoDataInCart;