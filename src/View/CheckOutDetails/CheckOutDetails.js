import React from 'react'
import './CheckOutDetails.css'
import MultiStepForm from './MultiStepForm'

function CheckOutDetails(navigation) {
    const { previous, next } = navigation;
    const { go } = navigation;
    return (
        <>
            <div className='checkout-details'>
                {/* Header start*/}
                <div className='Heading-back-com2'></div>
                {/* Header End */}
                <MultiStepForm /> 
                
            </div>
        </>
    );
}


export default CheckOutDetails