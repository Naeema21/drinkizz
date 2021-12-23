import React from "react";
const Submit = ({ navigation }) => {
    const { go } = navigation;
    return (
        <div>
            <div className="container pb-2 mb-sm-4">
                <div className="pt-2">
                    <div className="card py-2 mt-sm-3">
                        <div className="card-body text-center">
                            <h2 className="h4 pb-3">Thank you for your order!</h2>
                            <p className="fs-sm mb-2">Your order has been placed and will be processed as soon as possible.</p>
                            <p className="fs-sm mb-2">Make sure you make note of your order number, which is <span className="fw-medium">34VB5540K83.</span></p>
                            <p className="fs-sm">You will be receiving an email shortly with confirmation of your order. <u>You can now:</u></p>
                            
                            <a className='btn-Gray me-3 ' href='/'><i className="fa fa-angle-left me-2"></i>Back to Shopping</a>
                            
                            <a className='Button-Full-Red ' href="/order-tracking" >&nbsp;Track order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submit;
