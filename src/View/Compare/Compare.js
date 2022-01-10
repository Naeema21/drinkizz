import React from 'react';
import './Compare.css';

const Compare = () => {
    return (
        <>
            <div className='nav-container'></div>

            {/* compare section start */}
            <div className='Compare'>
                <div className='container py-5 mb-2'>
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className='table table-bordered table-layout-fixed fs-sm'>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Compare;
