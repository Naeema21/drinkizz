import React,{useState} from 'react'
import RangeSlider from "react-bootstrap-range-slider";
import { Shoplist } from '../../assets/Data/data';
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductSidebar = () => {
     //Range Slider variable
     const [rangevalue, setValue] = useState(0);
     const handleRange = (value11) => {
         setValue(value11)
         console.log(value11);
     }
     //Color data variable
     const [colorcheck, setChecked] = useState();
     const handleClick = (values, id) => {
         console.log(values.value);
         console.log(values.checked);
         setChecked(id);
         console.log(colorcheck);
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
  
    return (
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
                                        Shoplist.map((c, i) => {
                                            return (
                                                <li key={i}><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>{c.clothes}</span><span>{c.clothes_total}</span></Link></li>
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
                                        Shoplist.map((b, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>{b.bags}</span><span>{b.bags_total}</span></Link></li>
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
                                        Shoplist.map((w, i) => {
                                            return (
                                                <li key={i}><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>{w.watches}</span><span>{w.watches_total}</span></Link></li>
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
                                        Shoplist.map((a, i) => {
                                            return (
                                                <li key={i}><Link to="#" className='shoplistitems d-flex justify-content-between align-items-center'><span>{a.accessories}</span><span>{a.accessories_total}</span></Link></li>
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
                    {/* <input type='range'  
            value={rangevalue}
            onChange={e => handleRange(e.target.value)} /> */}
                    <RangeSlider
                        value={rangevalue}
                        onChange={e => handleRange(e.target.value)}
                        tooltipPlacement='top'
                        tooltip='on'
                        variant='danger'
                    />
                </div>
                <div className='mb-2 mx-3 shoplist-tooltip'>
                    <div style={{ display: 'flex', marginLeft: '3%' }}>
                        {
                            Shoplist.map((p, i) => {
                                return (
                                    <div className='shoplistrange-line' key={i}>
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
                            <input className="form-control range-slider-value-max" value={rangevalue} />
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
                            Shoplist.map((b, i) => {
                                return (
                                    <li key={i}><div className='shoplistitems d-flex justify-content-between align-items-center'>
                                        <span><input className='form-check-input' type='checkbox' style={{ marginRight: '10px' }}
                                            value={b.brand} defaultValue={b.brand}
                                            onChange={(e) => handleBrand(e.target.value)} />{b.brand}</span></div>
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
                            Shoplist.map((s, i) => {
                                return (
                                    <li key={i}><div to="#" className='shoplistitems d-flex justify-content-between align-items-center'>
                                        <span><input className='form-check-input' type='checkbox' style={{ marginRight: '10px' }} value={s.size} onChange={(e) => handleSize(e.target.value)} />{s.size}</span></div>
                                    </li>
                                )
                            }
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
                            <div className='form-check form-option text-center mb-2 mx-1' key={i}>
                                <label className='shopform-option-label rounded-circle'
                                    style={({ borderColor: colorcheck ? "red" : "blue" })}
                                >
                                    <input className='form-check-input' type='checkbox' style={{ border: '0', background: 'none' }}
                                        value={v.color}
                                        onChange={(e) => handleClick(e.target, i)}
                                        id={i}
                                    />
                                    <span className='shopform-option-color rounded-circle' style={{ backgroundColor: v.backgroundcolor }}></span>
                                </label>
                                <label className='d-block fs-xs text-muted mt-n1' style={{ color: '#7d879c', fontSize: '12px' }}>{v.color}</label>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default ProductSidebar
