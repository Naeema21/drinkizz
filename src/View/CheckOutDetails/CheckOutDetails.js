import React from 'react'
import './CheckOutDetails.css'
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
import MultiStepForm from './MultiStepForm'

function CheckOutDetails() {
   
    return (
        <>
            <div className='checkout-details'>
                {/* Header start*/}
                <BreadCrumb heading="Checkout"
                    breadcrumb1="Home" BC1Link="/"
                    breadcrumb2="Shop" BC2Link="/shop"
                    breadcrumb3="checkout" BC3Link="/checkout-details"
                />
                <div className='Heading-back-com2'></div>
                {/* Header End */}
                <MultiStepForm /> 
                
            </div>
        </>
    );
}


export default CheckOutDetails