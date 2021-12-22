import React from 'react'
const BreadCrumb = React.memo(props => {
    return (
        <>
            <div className='Heading-back-com text-white'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-6'>
                            <h2>Your Cart</h2>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><i class="fa fa-home me-2"></i><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
                                    <li className="breadcrumb-item active" aria-current="page"><a href="/cart">Cart</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})


export default BreadCrumb