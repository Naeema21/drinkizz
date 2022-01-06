import React, { useState,useEffect } from 'react';
import './Compare.css';
import i1 from '../../assets/images/Compare/01.jpg';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
import { GET_CART_DATA } from "../../endpoint";
import { PRODUCT_URL } from '../../endpoint';
import swal from 'sweetalert';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
const Compare = (props) => {
    const { useState } = React;
    //Summary
    //toggle the table row
    const [showText, setShowText] = useState(false);
    //const [summary, setSummary] = useState(false);
    const [general, setGeneral] = useState(false);
    const [multimedia, setMultimedia] = useState(false);
    const [performance, setPerformance] = useState(false);
    const [design,setDesign]= useState(false);
    const [display,setDisplay]=useState(false);
    const [storage,setStorage]=useState(false);
    const [camera,setCamera]=useState(false);
    const [battery,setBattery]=useState(false);
    const [price,setPrice]=useState(false);
    
    //   set option value
    const getInitialState = () => {
        const value = "All";
        return value;
      };
      const [value, setValue] = useState(getInitialState);
      // functionality for filter and search
      const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
        if(value === 'summary')
        {
            setShowText(!showText);
        }
        if(value === 'general')
        {
            setGeneral(!general); 
        }
        if(value === 'multimedia')
        {
            setMultimedia(!multimedia);
        }
        if(value === 'performance')
        {
            setPerformance(!performance)
        }
        if(value === 'design')
        {
            setDesign(!design);
        }
        if(value === 'display')
        {
            setDisplay(!display);
        }
        if(value ==='storage')
        {
            setStorage(!storage);
        }
        if(value ==='camera')
        {
            setCamera(!camera);
        }
        if(value ==='battery')
        {
            setBattery(!battery);  
        }
        if(value === 'price')
        {
            setPrice(!price);
        }
      };
      //get data from Api product
      
      const[items,setItems]=useState('');
      const[datas,setDatas]=useState('');
      const { id } = useParams();
      let prod=[];
      const item =prod;
      console.log(item);
    //   prod.push(1);
    //   console.log(prod);
    //   prod.push(2);
    //   console.log(prod);
    //   prod.pop();
  
    const reqOne = axios.get(`https://daruwale.herokuapp.com/public/product/61d6af401b54a6b256420eb4`);
    const reqTwo = axios.get(`https://daruwale.herokuapp.com/public/product/61d59adba8e333a8f8db1b07`);
    
    axios.all([reqOne, reqTwo]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      setItems(responseOne.data);
      const responseTwo = responses[1]
      setDatas(responseTwo.data);
    })).catch(errors => {
      // react on errors.
    })


        //  axios.get(`https://daruwale.herokuapp.com/public/product/${id}`)
        // .then(res => 
        //     {
        //      prod.push(res.data); 
        //      console.log(prod);
        // })   

        // axios.get(`https://daruwale.herokuapp.com/public/product/61d59adba8e333a8f8db1b07`)
        // .then(res => 
        //     {
        //      prod.push(res.data); 
        //      console.log(prod);  
        //      //setData(prod);
        //      console.log();    
        // }) 
        //61d6af401b54a6b256420eb4
    return (
        <> 
    
        <BreadCrumb heading='Product comparison' BC1Link='/' breadcrumb1='Home' BC3Link='/compare' breadcrumb3='Comparison'/>
            {/* compare section start */}
            <div className='Compare'>
                <div className='container py-5 mb-2'>
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className='table table-bordered table-layout-fixed fs-sm'>
                                {/* style={{ "minwidth": "45rem" }} */}
                                <thead>
                                    <tr>
                                        <div className='row'>
                                        <div className='col-lg-3'>
                                        <div className='compare-by-img'> 
                                          <td className="align-middle">
                                            <select className="form-select compare-crite" id="compare-criteria" value={value} onChange={handleChange} >
                                                <option value="All">Comparison criteria</option>
                                                <option value="summary">Summary</option>
                                                <option value="general" >General</option>
                                                <option value="multimedia" >Multimedia</option>
                                                <option value="performance">Performance</option>
                                                <option value="design">Design</option>
                                                <option value="display">Display</option>
                                                <option value="storage">Storage</option>
                                                <option value="camera">Camera</option>
                                                <option value="battery">Battery</option>
                                                <option value="price">Price</option>
                                            </select>
                                            <div className="form-text"> Choose criteria to filter table below.</div>
                                            <div className="pt-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="differences" />
                                                    <label className="form-check-label" htmlFor="differences">Show differences only</label>
                                                </div>
                                            </div>
                                        </td>
                                        </div> 
                                        <hr></hr>
                                        <tbody>
                                        <tr className="heading-table-compare">
                                            <td><th className="text-uppercase text-dark">Summary</th></td>
                                        </tr>
                                        <tr>
                                        <td className="text-uppercase text-dark">category</td>
                                        </tr>
                                        <tr>
                                            <td className="text-uppercase text-dark">price</td>
                                        </tr>
                                        <tr>
                                            <td className="text-uppercase text-dark">size</td>
                                        </tr>
                                        <tr>
                                            <td className="text-uppercase text-dark">rating</td>
                                        </tr>
                                        <tr>
                                            <td className="text-uppercase text-dark">FoodPairing</td>
                                        </tr>
                                        <tr>
                                            <td className="text-uppercase text-dark">ABV</td>
                                        </tr>
                                        <tr>
                                            <td className="text-uppercase text-dark">subCategory</td>
                                        </tr>
                                        <tr>
                                            <td className="text-uppercase text-dark">description</td>
                                        </tr>
                                       </tbody>
                                        </div>
                                                 <div className='col-lg-3'> 
                                                 <tbody>
                                                 <div className='compare-by-img'>
                                                        <td className="text-center px-4 pb-4"> 
                                                                <Link className="btn btn-sm d-block w-100 text-danger mb-2" to="/product">
                                                                    <i className="fa fa-trash-o me-1"></i>Remove 
                                                                </Link>
                                                                <Link className="d-inline-block mb-3" to="product-details">
                                                                    <img className="compare-img" src={items.image} alt="Apple iPhone Xs Max"/>
                                                                </Link>
                                                                <h6 className="product-title">
                                                                    <Link className='product-name' to="product-details">{items.name}</Link>
                                                                </h6>
                                                                <Link to="/cart"><button className="Button-Full-Red" type="button">Add to Product</button></Link>
                                                        </td>
                                                    </div>
                                                        <hr></hr>
                                                        
                                                            <tr className="heading-table-compare">
                                                                <th className="text-uppercase text-dark">Summary</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{items.category}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{items.price}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{items.size}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{items.rating}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{items.FoodPairing}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{items.ABV}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{items.subCategory}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{items.description}</td>
                                                            </tr>
                                                        </tbody>
                                                </div>
                                            <div className='col-lg-3'>
                                            <tbody>
                                               <div className='compare-by-img'> 
                                                <td className="text-center px-4 pb-4"> 
                                                        <Link className="btn btn-sm d-block w-100 text-danger mb-2" to="/product">
                                                                    <i className="fa fa-trash-o me-1"></i>Remove 
                                                        </Link>
                                                        <Link className="d-inline-block mb-3" to="product-details">
                                                                    <img className="compare-img" src={datas.image} alt="Apple iPhone Xs Max"/>
                                                        </Link>
                                                        <h6 className="product-title">
                                                        <Link className='product-name' to="product-details">{datas.name}</Link>
                                                        </h6>
                                                        <Link to="/cart"><button className="Button-Full-Red" type="button">Add to Product</button></Link>
                                                </td> 
                                                </div>
                                                <hr></hr>
                                                         
                                                            <tr className="heading-table-compare">
                                                                <th className="text-uppercase text-dark">Summary</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{items.category}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{datas.price}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{datas.size}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{datas.rating}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{datas.FoodPairing}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{datas.ABV}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{datas.subCategory}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark">{datas.description}</td>
                                                            </tr>
                                                        </tbody>

                                           
                                        </div>
                                        <div className='col-lg-3'>
                                        <tbody>
                                            <div className='compare-by-img'> 
                                                <td className="text-center px-4 pb-4">
                                                    <Link className="btn btn-sm d-block w-100 text-danger mb-2" to="product-details">
                                                    <h6 className='skeleton-loader-background4'>
                                                        {/* <i className="fa fa-trash-o me-1"></i> */}
                                                    </h6>    
                                                    </Link>
                                                    <Link className="d-inline-block mb-3" to="product-details">
                                                        {/* <img src={i2}  alt="Google Pixel 3 XL" className='skeleton-loader-background1' /> */}
                                                        <div className='skeleton-loader-background1' />
                                                    </Link>
                                                    <h6 className="product-title">
                                                        <Link className='product-name' to="product-details"><h6 className='skeleton-loader-background'></h6></Link>
                                                    </h6>
                                                    {/* <button className="Button-Full-Red" type="button"> */}
                                                        <span className='skeleton-loader-background3'></span>
                                                    {/* </button> */}
                                                </td>
                                                </div>
                                                <hr></hr>
                                                         
                                                            <tr className="heading-table-compare">
                                                                <th className="text-uppercase text-dark">Summary</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark"><h6 className='skeleton-loader-background'></h6></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-dark"></td>
                                                            </tr>
                                                        </tbody>
                                         
                                        </div>
                                        </div>
                                    </tr> 
                                </thead>
                                
                            </table>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Compare;
