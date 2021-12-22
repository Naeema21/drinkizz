import React from 'react'
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';

const CheckOutDetails = () => {
    return (
        <>
        <div className='checkout-details'>
             {/* Header start*/}
             <BreadCrumb heading="Checkout" 
            breadcrumb1="Home" BC1Link="/"
            breadcrumb2="Shop" BC2Link="/shop"
            breadcrumb3="checkout" BC3Link="/checkout-details"
            />
            {/* Header End */}
            <div className='checkout-details-body'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'></div>
                        <div className='col-lg-4'></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default CheckOutDetails