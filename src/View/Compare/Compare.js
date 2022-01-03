import React, { useState } from 'react';
import './Compare.css';
import i1 from '../../assets/images/Compare/01.jpg';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
const Compare = () => {
    const [summary, setSummary] = useState();
    return (
        <>
        <BreadCrumb heading='Product comparison' BC1Link='/' breadcrumb1='Home' BC3Link='/compare' breadcrumb3='Comparison'/>
            {/* compare section start */}
            <div className='Compare'>
                <div className='container py-5 mb-2'>
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className='table table-bordered table-layout-fixed fs-sm' style={{ "minwidth": "45rem" }}>
                                <thead>
                                    <tr>
                                        <td className="align-middle">
                                            <select className="form-select compare-crite" id="compare-criteria"
                                            onChange={(e)=>setSummary(e.target.value)}>
                                                <option value="all">Comparison criteria</option>
                                                <option value="summary">Summary</option>
                                                <option value="general" >General</option>
                                                <option value="multimedia" >Multimedia</option>
                                                <option value="performance">Performance</option>
                                            </select>
                                            <div className="form-text"> Choose criteria to filter table below.</div>
                                            <div className="pt-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="differences" />
                                                    <label className="form-check-label" htmlFor="differences">Show differences only</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center px-4 pb-4">
                                            <Link className="btn btn-sm d-block w-100 text-danger mb-2" to="product-details">
                                                <i className="fa fa-trash-o me-1"></i>Remove
                                            </Link>
                                            <Link className="d-inline-block mb-3" to="product-details">
                                                <img src={i1} width="80" alt="Apple iPhone Xs Max" />
                                            </Link>
                                            <h6 className="product-title">
                                                <Link className='product-name' to="product-details">Apple iPhone Xs Max </Link>
                                            </h6>
                                            <Link to="/cart"><button className="Button-Full-Red" type="button"><span className='skeleton-loader-background2'>Add to Cart</span></button></Link>
                                        </td>
                                        <td className="text-center px-4 pb-4">
                                            <Link className="btn btn-sm d-block w-100 text-danger mb-2" to="product-details">
                                                <i className="fa fa-trash-o me-1"></i>Remove
                                            </Link>
                                            <Link className="d-inline-block mb-3" to="product-details">
                                                {/* <img src={i2}  alt="Google Pixel 3 XL" className='skeleton-loader-background1' /> */}
                                                <div className='skeleton-loader-background1' />
                                            </Link>
                                            <h6 className="product-title">
                                                <Link className='product-name' to="product-details"><h6 className='skeleton-loader-background'></h6></Link>
                                            </h6>
                                            <button className="Button-Full-Red" type="button"><span className='skeleton-loader-background2'>Add to Cart</span></button>
                                        </td>
                                        <td className="text-center px-4 pb-4">
                                            <Link className="btn btn-sm d-block w-100 text-danger mb-2" to="product-details">
                                                <i className="fa fa-trash-o me-1"></i>Remove
                                            </Link>
                                            <Link className="d-inline-block mb-3" to="product-details">
                                                {/* <img src={i3} alt="Samsung Galaxy S10+" className='skeleton-loader-background1'/> */}
                                                <div className='skeleton-loader-background1' />
                                            </Link>
                                            <h6 className="product-title">
                                                <Link className='product-name' to="product-details"><h6 className='skeleton-loader-background'></h6></Link>
                                            </h6>
                                            <button className="Button-Full-Red" type="button"><span className='skeleton-loader-background2'>Add to Cart</span></button>
                                        </td>
                                    </tr>
                                </thead>
                                {/* first Summary table */}
                                <tbody id="table-data-summary" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Summary</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Performance</th>
                                        <td>Hexa Core</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Display</th>
                                        <td>6.5-inch</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Storage</th>
                                        <td>64 GB</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Camera</th>
                                        <td>Dual 12-megapixel</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Battery</th>
                                        <td>3,174 mAh</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                </tbody>
                                <tbody id="summary" className='showsummary' data-filter-target="" >
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Summary</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Performance</th>
                                        <td>Hexa Core</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Display</th>
                                        <td>6.5-inch</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Storage</th>
                                        <td>64 GB</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Camera</th>
                                        <td>Dual 12-megapixel</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Battery</th>
                                        <td>3,174 mAh</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                </tbody>
                                {/* General Table */}
                                <tbody id="general" data-filter-target="" >
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">General</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Quick charging</th>
                                        <td>Yes</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Operating system</th>
                                        <td>iOS v12</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Sim slots</th>
                                        <td>Single SIM, GSM</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Launch date</th>
                                        <td>September 12, 2018 (Official)</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Sim size</th>
                                        <td>SIM1: Nano</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Network</th>
                                        <td>4G: Available (supports Indian bands) 3G: Available, 2G: Available</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Fingerprint sensor</th>
                                        <td>None (Face ID)</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                </tbody>
                                {/* MultiMedia table */}
                                <tbody id="multimedia" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Multimedia</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Loudspeaker</th>
                                        <td>Yes</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">FM radio</th>
                                        <td>No</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Headphone jack</th>
                                        <td>No</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                </tbody>
                                {/* Performance Table */}
                                <tbody id="performance" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Performance</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Processor</th>
                                        <td>Apple A12 Bionic</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Graphics</th>
                                        <td>Apple GPU (4-core graphics)</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Architecture</th>
                                        <td>64 bit</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">RAM</th>
                                        <td>4 GB</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                </tbody>
                                {/* Design Table */}
                                <tbody id="design" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Design</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Build material</th>
                                        <td>Case: AluminiumBack: Mineral Glass</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Thickness</th>
                                        <td>7.7 mm</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Width</th>
                                        <td>70.9 mm</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Height</th>
                                        <td>143.6 mm</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Weight</th>
                                        <td>174 grams</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Waterproof</th>
                                        <td>Yes Water resistant (up to 30 minutes in a depth of 1 meter), IP67</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Colors</th>
                                        <td>Silver, Space Grey</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                </tbody>
                                {/* Dispaly Table */}
                                <tbody id="display" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Display</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Display type</th>
                                        <td>Super Retina OLED</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Pixel density</th>
                                        <td>458 ppi</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Screen protection</th>
                                        <td>Yes</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Screen size</th>
                                        <td>6.5 inches</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Screen resolution</th>
                                        <td>1125 x 2436 pixels</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Touch screen</th>
                                        <td>Yes, 3D Touch Touchscreen, Multi-touch</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                </tbody>
                                {/* Storage Table */}
                                <tbody id="storage" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Storage</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Internal memory</th>
                                        <td>64 GB</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Expandable memory</th>
                                        <td>No</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                </tbody>
                                {/* Camera Table */}
                                <tbody id="camera" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Camera</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Settings</th>
                                        <td>Exposure compensation, ISO control</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Aperture</th>
                                        <td>F2.2</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Camera features</th>
                                        <td>10 x Digital zoom, Optical zoom, Auto flash, Face detection, Touch to focus</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Image resolution</th>
                                        <td>4000 x 3000 pixels</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Sensor</th>
                                        <td>BSI sensor</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Autofocus</th>
                                        <td>Yes</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Shooting modes</th>
                                        <td>Continuos shooting, High dynamic range mode (HDR), Burst mode</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Optical image stabilisation</th>
                                        <td>Yes, Dual optical image stabilization</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Flash</th>
                                        <td>Yes, Retina flash</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                </tbody>
                                {/* Battery Table */}
                                <tbody id="battery" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Battery</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Talktime</th>
                                        <td>Up to 21 hours(4G)</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Quick charging</th>
                                        <td>Yes, fast, 50 % in 30 minutes</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Wireless charging</th>
                                        <td>Yes</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Type</th>
                                        <td>Li-ion</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Capacity</th>
                                        <td>3,174 mAh</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                </tbody>
                                {/* Price Table */}
                                <tbody id="price" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Price &amp; rating</th>
                                        <th>Apple iPhone Xs Max</th>
                                        <th>Google Pixel 3 XL</th>
                                        <th>Samsung Galaxy S10+</th>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Price</th>
                                        <td>$1,099</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Rating</th>
                                        <td>4.5/5</td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                        <td><h6 className='skeleton-loader-background'></h6></td>
                                    </tr>
                                    <tr className='text-center'>
                                        <th></th>
                                        <td>
                                            <button className="Button-Full-Red " type="button">Add to Cart</button>
                                        </td>
                                        <td>
                                            <button className="Button-Full-Red " type="button"><span className='skeleton-loader-background2'>Add to Cart</span></button>
                                        </td>
                                        <td>
                                            <button className="Button-Full-Red " type="button"><span className='skeleton-loader-background2'>Add to Cart</span></button>
                                        </td>
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
