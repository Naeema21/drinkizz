import React, { useState } from 'react';
import './Compare.css';
import i1 from '../../assets/images/Compare/01.jpg';
import i2 from '../../assets/images/Compare/02.jpg';
import i3 from '../../assets/images/Compare/03.jpg';
import { compare } from '../../assets/Data/compare';
const Compare = () => {
    //Summary
    const [summary, setSummary] = useState(false);
    const [general, setGeneral] = useState(false);
    const [multimedia, setMultimedia] = useState(false);
    const [performance, setPerformance] = useState(false);
    return (
        <>
            <div className='Compare'>
                <div className='container  py-5 mb-2'>
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className='table table-bordered table-layout-fixed fs-sm' style={{ "minwidth": "45rem" }}>
                                <thead>
                                    <tr>
                                        <td className="align-middle">
                                            <select className="form-select compare-crite" id="compare-criteria" data-filter-trigger="">
                                                <option value="all">Comparison criteria</option>
                                                <option value="summary">Summary</option>
                                                <option value="general" onClick={() => { general ? setGeneral(true) : setGeneral(false) }}>General</option>
                                                <option value="multimedia" onClick={() => { multimedia ? setMultimedia(true) : setMultimedia(false) }}>Multimedia</option>
                                                <option value="performance" onClick={() => { performance ? setPerformance(false) : setPerformance(true) }}>Performance</option>
                                                {/*<option value="design" onClick={() => {design ? setDesign(false) : setDesign(true)}}>Design</option>
                                            <option value="display" onClick={() => {display ? setDisplay(false) : setDisplay(true)}}>Display</option>
                                            <option value="storage" onClick={() => {storage ? setStorage(false) : setStorage(true)}}>Storage</option>
                                            <option value="camera" onClick={() => {camera ? setCamera(false) : setCamera(true)}}>Camera</option>
                                            <option value="battery" onClick={() => {battery ? setBattery(false) : setBattery(true)}}>Battery</option>
                                            <option value="price" onClick={() => {price ? setPrice(false) : setPrice(true)}}>Price &amp; rating</option> */}
                                            </select>
                                            <div className="form-text"> Choose criteria to filter table below.</div>
                                            <div className="pt-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="differences" />
                                                    <label className="form-check-label" for="differences">Show differences only</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center px-4 pb-4">
                                            <a className="btn btn-sm d-block w-100 text-danger mb-2" href="#">
                                                <i className="fa fa-trash me-1"></i>Remove
                                            </a>
                                            <a className="d-inline-block mb-3" href="#">
                                                <img src={i1} width="80" alt="Apple iPhone Xs Max" />
                                            </a>
                                            <h6 className="product-title">
                                                <a className='product-name' href="#">Apple iPhone Xs Max</a>
                                            </h6>
                                            <button className="btn btn-danger b-Addtocart btn-sm" type="button">Add to Cart</button>
                                        </td>
                                        <td className="text-center px-4 pb-4">
                                            <a className="btn btn-sm d-block w-100 text-danger mb-2" href="#">
                                                <i className="fa fa-trash me-1"></i>Remove
                                            </a>
                                            <a className="d-inline-block mb-3" href="#">
                                                <img src={i2} width="80" alt="Google Pixel 3 XL" />
                                            </a>
                                            <h6 className="product-title">
                                                <a className='product-name' href="#">Google Pixel 3 XL</a>
                                            </h6>
                                            <button className="btn btn-danger b-Addtocart btn-sm" type="button">Add to Cart</button>
                                        </td>
                                        <td className="text-center px-4 pb-4">
                                            <a className="btn btn-sm d-block w-100 text-danger mb-2" href="#">
                                                <i className="fa fa-trash me-1"></i>Remove
                                            </a>
                                            <a className="d-inline-block mb-3" href="#">
                                                <img src={i3} width="80" alt="Samsung Galaxy S10+" />
                                            </a>
                                            <h6 className="product-title">
                                                <a className='product-name' href="#">Samsung Galaxy S10+
                                                </a>
                                            </h6>
                                            <button className="btn btn-danger b-Addtocart btn-sm" type="button">Add to Cart</button>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody id="table-data-summary" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Summary</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Performance</th>
                                        <td>Hexa Core</td>
                                        <td>Octa Core</td>
                                        <td>Octa Core</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Display</th>
                                        <td>6.5-inch</td>
                                        <td>6.3-inch</td>
                                        <td>6.4-inch</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Storage</th>
                                        <td>64 GB</td>
                                        <td>64 GB</td>
                                        <td>128 GB</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Camera</th>
                                        <td>Dual 12-megapixel</td>
                                        <td>12.2-megapixel</td>
                                        <td>12,16,12-megapixel</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Battery</th>
                                        <td>3,174 mAh</td>
                                        <td>3,430 mAh</td>
                                        <td>4,100 mAh</td>
                                    </tr>
                                </tbody>
                                <tbody id="summary" className='showsummary' data-filter-target="" style={{ display: summary ? "block" : 'none' }}>
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Summary</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Performance</th>
                                        <td>Hexa Core</td>
                                        <td>Octa Core</td>
                                        <td>Octa Core</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Display</th>
                                        <td>6.5-inch</td>
                                        <td>6.3-inch</td>
                                        <td>6.4-inch</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Storage</th>
                                        <td>64 GB</td>
                                        <td>64 GB</td>
                                        <td>128 GB</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Camera</th>
                                        <td>Dual 12-megapixel</td>
                                        <td>12.2-megapixel</td>
                                        <td>12,16,12-megapixel</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Battery</th>
                                        <td>3,174 mAh</td>
                                        <td>3,430 mAh</td>
                                        <td>4,100 mAh</td>
                                    </tr>
                                </tbody>
                                <tbody id="general" data-filter-target="" style={{ display: general ? "block" : "none" }}>
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">General</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Quick charging</th>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Operating system</th>
                                        <td>iOS v12</td>
                                        <td>Android v9.0 Pie	</td>
                                        <td>Android v9.0 with Samsung One UI	</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Sim slots</th>
                                        <td>Single SIM, GSM</td>
                                        <td>Single SIM, GSM</td>
                                        <td>Hybrid SIM slot, GSM</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Launch date</th>
                                        <td>September 12, 2018 (Official)</td>
                                        <td>November 1, 2018 (Official)</td>
                                        <td>February 20, 2019 (Official)</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Sim size</th>
                                        <td>SIM1: Nano</td>
                                        <td>SIM1: Nano</td>
                                        <td>SIM1: Nano SIM2: Nano (Hybrid)</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Network</th>
                                        <td>4G: Available (supports Indian bands) 3G: Available, 2G: Available</td>
                                        <td>4G: Available (supports Indian bands) 3G: Available, 2G: Available</td>
                                        <td>4G: Available (supports Indian bands) 3G: Available, 2G: Available</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Fingerprint sensor</th>
                                        <td>None (Face ID)</td>
                                        <td>Back cover</td>
                                        <td>In-screen</td>
                                    </tr>
                                </tbody>
                                <tbody id="multimedia" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Multimedia</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Loudspeaker</th>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">FM radio</th>
                                        <td>No</td>
                                        <td>No</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Headphone jack</th>
                                        <td>No</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                    </tr>
                                </tbody>
                                <tbody id="performance" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Performance</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Processor</th>
                                        <td>Apple A12 Bionic</td>
                                        <td>Qualcomm Snapdragon 845 (2.5GHz octa-core)</td>
                                        <td>Octa-core Qualcomm Snapdragon 855</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Graphics</th>
                                        <td>Apple GPU (4-core graphics)</td>
                                        <td>Adreno 630</td>
                                        <td>Mali-G72 MP18</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Architecture</th>
                                        <td>64 bit</td>
                                        <td>64 bit</td>
                                        <td>64 bit</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">RAM</th>
                                        <td>4 GB</td>
                                        <td>4 GB</td>
                                        <td>8 GB</td>
                                    </tr>
                                </tbody>
                                <tbody id="design" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Design</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Build material</th>
                                        <td>Case: AluminiumBack: Mineral Glass</td>
                                        <td>Case: AluminiumBack: Aluminium</td>
                                        <td>Case: AluminiumBack: Mineral Glass</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Thickness</th>
                                        <td>7.7 mm</td>
                                        <td>7.9 mm</td>
                                        <td>8.5 mm</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Width</th>
                                        <td>70.9 mm</td>
                                        <td>76.7 mm</td>
                                        <td>73.8 mm</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Height</th>
                                        <td>143.6 mm</td>
                                        <td>157.9 mm</td>
                                        <td>158.1 mm</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Weight</th>
                                        <td>174 grams</td>
                                        <td>175 grams</td>
                                        <td>189 grams</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Waterproof</th>
                                        <td>Yes Water resistant (up to 30 minutes in a depth of 1 meter), IP67</td>
                                        <td>Yes Water resistant (up to 30 minutes in a depth of 1 meter), IP67</td>
                                        <td>Yes Water resistant (up to 30 minutes in a depth of 1.5 meter), IP68</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Colors</th>
                                        <td>Silver, Space Grey</td>
                                        <td>Black, Black and White</td>
                                        <td>Midnight Black, Coral Blue, Lilac Purple</td>
                                    </tr>
                                </tbody>
                                <tbody id="display" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Display</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Display type</th>
                                        <td>Super Retina OLED</td>
                                        <td>'flexible' OLED</td>
                                        <td>Super AMOLED</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Pixel density</th>
                                        <td>458 ppi</td>
                                        <td>522 ppi</td>
                                        <td>522 ppi</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Screen protection</th>
                                        <td>Yes</td>
                                        <td>Corning Gorilla Glass v5</td>
                                        <td>Corning Gorilla Glass v5</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Screen size</th>
                                        <td>6.5 inches</td>
                                        <td>6.3 inches</td>
                                        <td>6.4 inches</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Screen resolution</th>
                                        <td>1125 x 2436 pixels</td>
                                        <td>1440 x 2880 pixels</td>
                                        <td>1440 x 2960 pixels	</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Touch screen</th>
                                        <td>Yes, 3D Touch Touchscreen, Multi-touch</td>
                                        <td>Yes, Capacitive Touchscreen, Multi-touch</td>
                                        <td>Yes, Capacitive Touchscreen, Multi-touch</td>
                                    </tr>
                                </tbody>
                                <tbody id="storage" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Storage</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Internal memory</th>
                                        <td>64 GB</td>
                                        <td>64 GB</td>
                                        <td>128 GB</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Expandable memory</th>
                                        <td>No</td>
                                        <td>No</td>
                                        <td>Yes Up to 1 TB</td>
                                    </tr>
                                </tbody>
                                <tbody id="camera" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Camera</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Settings</th>
                                        <td>Exposure compensation, ISO control</td>
                                        <td>Exposure compensation, ISO control</td>
                                        <td>Exposure compensation</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Aperture</th>
                                        <td>F2.2</td>
                                        <td>F2.4</td>
                                        <td>F1.7</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Camera features</th>
                                        <td>10 x Digital zoom, Optical zoom, Auto flash, Face detection, Touch to focus</td>
                                        <td>Fixed zocus</td>
                                        <td>Wide angle selfie</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Image resolution</th>
                                        <td>4000 x 3000 pixels</td>
                                        <td>4000 x 3000 pixels</td>
                                        <td>4000 x 3000 pixels</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Sensor</th>
                                        <td>BSI sensor</td>
                                        <td>CMOS image sensor</td>
                                        <td>CMOS image sensor</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Autofocus</th>
                                        <td>Yes</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Shooting modes</th>
                                        <td>Continuos shooting, High dynamic range mode (HDR), Burst mode</td>
                                        <td>Continuos shooting, High dynamic range mode (HDR)</td>
                                        <td>Continuos shooting, High dynamic range mode (HDR)</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Optical image stabilisation</th>
                                        <td>Yes, Dual optical image stabilization</td>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Flash</th>
                                        <td>Yes, Retina flash</td>
                                        <td>Yes, Dual LED flash</td>
                                        <td>Yes, LED flash</td>
                                    </tr>
                                </tbody>
                                <tbody id="battery" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Battery</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Talktime</th>
                                        <td>Up to 21 hours(4G)</td>
                                        <td>Up to 24 hours(4G)</td>
                                        <td>Up to 25 hours(4G)</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Quick charging</th>
                                        <td>Yes, fast, 50 % in 30 minutes</td>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Wireless charging</th>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Type</th>
                                        <td>Li-ion</td>
                                        <td>Li-ion</td>
                                        <td>Li-ion</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Capacity</th>
                                        <td>3,174 mAh</td>
                                        <td>3,430 mAh</td>
                                        <td>4,100 mAh</td>
                                    </tr>
                                </tbody>
                                <tbody id="price" data-filter-target="">
                                    <tr className="heading-table-compare">
                                        <th className="text-uppercase text-dark">Price &amp; rating</th>
                                        <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                                        <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Price</th>
                                        <td>$1,099</td>
                                        <td>$899</td>
                                        <td>$1,000</td>
                                    </tr>
                                    <tr>
                                        <th className="text-dark">Rating</th>
                                        <td>4.5/5</td>
                                        <td>4.5/5</td>
                                        <td>4.5/5</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td>
                                            <button className="btn btn-danger d-block w-100 b-Addtocart" type="button">Add to Cart</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger d-block w-100 b-Addtocart" type="button">Add to Cart</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger d-block w-100 b-Addtocart" type="button">Add to Cart</button>
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
