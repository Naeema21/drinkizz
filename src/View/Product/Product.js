import React,{useEffect,useState} from 'react'
import './product.css'
import { Accordion } from 'react-bootstrap'
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { Link } from 'react-router-dom'
import shoplistproimg1 from '../../assets/images/Product/shoplist-proimg1.jpg'
import { Shoplist } from '../../assets/Data/data';
import  axios  from "axios";
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb'


const Product = () => {
      //Summary
      const [LowHighPrice, setLowHighPrice] = useState(false);
      const [HighLowPrice, setHighLowPrice] = useState(false);
      const [AverageRating, setAverageRating] = useState(false);
      const [AZOrder, setAZOrder] = useState(false);
      const [ZAOrder, setZAOrder] = useState(false);

    const Card = React.lazy(() => import('../../Components/Cards/Cards'))
//Range Slider variable
    const [ rangevalue, setValue ] = useState(0); 
    const handleRange = (value11) =>{
        setValue(value11)
        console.log(value11);
    }
//Color data variable
    const handleClick = (values) => {
        console.log(values);
    }
//Size variable
    const [size, setSize] = useState()
    const handleSize = (values1) => {
        setSize(values1)
        console.log(values1);
    }
 //Brand variable
    const [brand, setBrand] = useState()
    const handleBrand = (values2) => {
        setBrand(values2)
        console.log(values2);
    }
//GET/FETCH API Logic for Aceesing data from API using axios
const [items, setItems] = useState([]);
useEffect(()=> {
    axios.get(`https://daruwale.herokuapp.com/public/product`)
    .then(res => {
        console.log(res);
        console.log(res.data.data);
        setItems(res.data.data);
        console.log(items);
    })
    .catch(err =>{
        console.log(err)
    })
}, [])
const [checked, setChecked] = useState(false);

    return (
        <>
            <BreadCrumb heading='Shop grid left sidebar' BC1Link='/' breadcrumb1='Home' BC2Link='/' breadcrumb2='Products' BC3Link='/' breadcrumb3='Products left sidebar'/>
            <div className='Heading-back-com3'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-4'></div>
                        <div className='col-lg-8 col-md-8 col-sm-8'>
                            <div className=' d-flex align-items-center flex-nowrap'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-light fs-base mb-0 ml-4 py-4 pt-7 px-2">Sort by</span>
                                    <select className="form-select compare-crite" id="compare-criteria">
                                        <option value="all">Popularity</option>
                                        <option value="Low-High Price" onClick={() => { LowHighPrice ? setLowHighPrice(true) : setLowHighPrice(false) }}>Low-High Price</option>
                                        <option value="High-Low Price" onClick={() => { HighLowPrice ? setHighLowPrice(true) : setHighLowPrice(false) }}>High-Low Price</option>
                                        <option value="Average Rating" onClick={() => { AverageRating ? setAverageRating(true) : setAverageRating(false) }}>Average Rating</option>
                                        <option value="A-Z Order" onClick={() => { AZOrder ? setAZOrder(false) : setAZOrder(true) }}>A-Z Order</option>
                                        <option value="Z-A Order" onClick={() => { ZAOrder ? setZAOrder(false) : setZAOrder(true) }}>Z-A Order</option>
                                    </select>      
                                    <span className='fs-sm text-light opacity-75 text-nowrap ms-2 d-none d-md-block'>of 287 products</span>                          
                                </div>
                                <div className='d-flex px-4 justify-content-end'>
                                    <Link className='nav-link-style nav-link-light text-light me-3'>
                                        <i class="fa fa-angle-left"></i>
                                    </Link>
                                    <span className='fs-md text-light'>1 / 5</span>
                                    <Link className='nav-link-style nav-link-light text-light mx-3'>
                                        <i class="fa fa-angle-right"></i>
                                    </Link>
                                </div>
                             </div>
                         
                        </div>
                </div>
            </div>

            <section className='mt-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='shadow py-4 px-3 shoplistbox'>
                                <div className='mb-4'>
                                    <h4 className='shoplist1-catetxt'>Categories</h4>
                                </div>
                                {/* start Categories */}
                                <div className='border-bottom'>
                                    <Accordion>
                                        <Accordion.Item eventKey="0" style={{ border: 'none' }}>
                                            <Accordion.Header>Clothings</Accordion.Header>
                                            <Accordion.Body className='px-1'>
                                                <form className="shoplistsearch-bar">
                                                    <input type="search" placeholder="Search" />
                                                </form>
                                                <div className='shopsidebar-content'>
                                                    <ul className='shoplist-ul'>
                                                        {
                                                            Shoplist.map((c,i)=>{
                                                                return(
                                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>{c.clothes}</span><span>{c.clothes_total}</span></Link></li>
                                                                )
                                                            })
                                                        }                           
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1" style={{ border: 'none' }}>
                                            <Accordion.Header>Bags</Accordion.Header>
                                            <Accordion.Body className='px-1'>
                                                <form className="shoplistsearch-bar">
                                                    <input type="search" placeholder="Search" />
                                                </form>
                                                <div className='shopsidebar-content'>
                                                    <ul className='shoplist-ul'>
                                                        {
                                                            Shoplist.map((b,i)=>{
                                                                return(
                                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>{b.bags}</span><span>{b.bags_total}</span></Link></li>
                                                                )
                                                            })
                                                        }                                               
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2" style={{ border: 'none' }}>
                                            <Accordion.Header>Watches</Accordion.Header>
                                            <Accordion.Body className='px-1'>
                                                <form className="shoplistsearch-bar">
                                                    <input type="search" placeholder="Search" />
                                                </form>
                                                <div className='shopsidebar-content'>
                                                    <ul className='shoplist-ul'>
                                                        {
                                                            Shoplist.map((w,i)=>{
                                                                return(
                                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>{w.watches}</span><span>{w.watches_total}</span></Link></li>
                                                                )
                                                            })
                                                        } 
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" style={{ border: 'none' }}>
                                            <Accordion.Header>Accesories</Accordion.Header>
                                            <Accordion.Body className='px-1'>
                                                <form className="shoplistsearch-bar">
                                                    <input type="search" placeholder="Search" />
                                                </form>
                                                <div className='shopsidebar-content'>
                                                    <ul className='shoplist-ul'>
                                                        {
                                                            Shoplist.map((a,i)=>{
                                                                return(
                                                                    <li><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>{a.accessories}</span><span>{a.accessories_total}</span></Link></li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                {/* End Categories */}
                                {/* start Price */}
                                <div className='mb-2 mt-3'>
                                    <h4 className='shoplist1-catetxt'>Price</h4>
                                </div>
                                <div className='border-bottom'>
                                <div className='mx-3 mt-6'>
                                <RangeSlider
                                    value={rangevalue}
                                    onChange={e => handleRange(e.target.value)}
                                    tooltipPlacement='top'
                                    tooltip='on'
                                    variant='danger'
                                    />
                                    </div>
                                    <div className='mb-2 mx-3 shoplist-tooltip'>
                                      <div style={{display:'flex',marginLeft:'3%'}}> 
                                      {
                                          Shoplist.map((p,i)=>{
                                              return(
                                                <div className='shoplistrange-line'>
                                                    <div className='shoplistange-linediv2'>
                                                        <div className='shoplistange-value'>{p.price}</div>
                                                    </div>
                                                </div>
                                              )
                                          })
                                      }
                                        </div>
                                    </div>

                                    <div className='d-flex pb-4 pt-2 mx-4'>
                                        <div className='w-50 pe-2 me-2'>
                                            <div className='input-group input-group-sm'>
                                                <span className='input-group-text' style={{ backgroundColor: '#fff' }}>$</span>
                                                <input className="form-control range-slider-value-min" value="0" />
                                            </div>
                                        </div>
                                        <div className='w-50 ps-2'>
                                            <div className='input-group input-group-sm'>
                                                <span className='input-group-text' style={{ backgroundColor: '#fff' }}>$</span>
                                                <input className="form-control range-slider-value-max" value={rangevalue}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Price */}
                                {/* start Brand */}
                                <div className='mb-2 mt-3'>
                                    <h4 className='shoplist1-catetxt'>Brand</h4>
                                </div>
                                <div className='border-bottom'>
                                    <form className="shoplistsearch-bar">
                                        <input type="search" placeholder="Search" />
                                    </form>
                                    <div className='shopsidebar-content'>
                                        <ul className='shoplist-ul'>
                                            {
                                                Shoplist.map((b,i) =>{
                                                    return(
                                                        <li><div to="#" className='shoplistitems d-flex justify-content-between align-items-center'>
                                                            <span><input className='form-check-input' type='checkbox' style={{marginRight:'10px'}}
                                                             value={b.brand} defaultValue={b.brand}
                                                             onChange={(e)=>handleBrand(e.target.value)} />{b.brand}</span></div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/* End Brand */}
                                {/* start Size */}
                                <div className='mb-2 mt-3'>
                                    <h4 className='shoplist1-catetxt'>Size</h4>
                                </div>
                                <div className='border-bottom'>
                                    <form className="shoplistsearch-bar">
                                        <input type="search" placeholder="Search" />
                                    </form>
                                    <div className='shopsidebar-content'>
                                        <ul className='shoplist-ul'>
                                            {
                                               Shoplist.map((s,i)=>{
                                                   return(
                                                        <li><div to="#" className='shoplistitems d-flex justify-content-between align-items-center'>
                                                            <span><input className='form-check-input' type='checkbox' style={{marginRight:'10px'}} value={s.size} onChange={(e)=>handleSize(e.target.value)}/>{s.size}</span></div>
                                                        </li>
                                                   )}
                                                )}
                                        </ul>
                                    </div>
                                </div>
                                {/* End Size */}
                                {/* start Color */}
                                <div className='mb-2 mt-3'>
                                    <h4 className='shoplist1-catetxt'>Color</h4>
                                </div>
                                <div className='d-flex flex-wrap px-1'>
                                {
                                Shoplist.map((v, i) => {
                                return (
                                    <div className='form-check form-option text-center mb-2 mx-1'>
                                        <label className='shopform-option-label rounded-circle'>
                                        <input className='form-check-input' type='checkbox' checked={checked} style={{border:'0', background:'none'}}
                                         value={v.color} 
                                         onChange={(e)=>handleClick(e.target.value)}
                                         style={({ backgroundColor: setChecked ? "blue" : "red"})}              
                                         />
                                            <span className='shopform-option-color rounded-circle' style={{ backgroundColor: v.backgroundcolor}}></span>
                                        </label>
                                        <label className='d-block fs-xs text-muted mt-n1' style={{color:'#7d879c',fontSize:'12px'}}>{v.color}</label>
                                    </div>
                                    )})
                                }
                                </div>
                                {/* End Color */}
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-6 shoplist-leftside1'>
                            <div className='row'>
                                {/* Using Map Function to access the data & send to card */}
                                {items.slice(0, 6).map((productdata, i) => (
                                    <div className='col-lg-4 col-md-6 col-sm-12 px-1' key={i}>
                                        <Card id={productdata._id} category={productdata.category} name={productdata.name} price={productdata.price} imgsrc={productdata.image} star={productdata.rating} />
                                    </div>
                                ))}
                            </div>
                            <div className='row mb-5 mt-5'>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-4  px-4  text-center text-sm-start shoplist-box1'>
                                    <h4 className='fw-light mb-2' style={{ color: '#373F53' }}>Converse All Star</h4>
                                    <h3 className='mb-4'>Make Your Day Comfortable</h3>
                                    <button className='btn btn btn-sm d-block mb-2 addto-cardbtn'>Shop Now <i className="fa fa-angle-right"></i></button>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <img className='shoplist-box1img img-fluid' src={shoplistproimg1} alt='Shop list Shoes' />
                                </div>
                            </div>
                            <div className='row'>
                                {/* Using Map Function to access the data & send to card */}
                                {items.slice(6, 12).map((productdata, i) => (
                                    <div className='col-lg-4 col-md-6 col-sm-12  px-1' key={i}>
                                        <Card id={productdata._id} category={productdata.category} name={productdata.name} price={productdata.price} imgsrc={productdata.image} star={productdata.rating} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Product
