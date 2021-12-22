import React from 'react'
const BreadCrumb = React.memo(props => {
    return (
        <>
            <div className='Heading-back-com text-white'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-6'>
                            <h2>{props.heading}</h2>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-white"><i class="fa fa-home me-2"></i><a className="text-white" href={props.BC1Link}>{props.breadcrumb1}</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href={props.BC2Link}>{props.breadcrumb2}</a></li>
                                    <li className="breadcrumb-item" aria-current="page"><a className="text-muted" href={props.BC3Link}>{props.breadcrumb3}</a></li>
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