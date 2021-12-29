import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Wishlist() {
      //get data from Api
      const[items,setItems]=useState([]);
      useEffect(()=> {   
          axios.get(`https://daruwale.herokuapp.com/public/wishlist`)
          .then(res => 
              {
              console.log(res);
              console.log(res.data.data);
              setItems(res.data.data); 
              console.log(items);
          })    
   }, [])
//    delete data from Api
   const deleteUser = (id)=> {
    axios.delete(`https://daruwale.herokuapp.com/public/wishlist/${id}`)
     .then(res => {
         console.log(res);
         console.log(res.data.data.id);
         if(res.status === 200)
            {
                console.log("message: Record Deleted Successfully")
            }
     })
    }
    return (
        <div>
             <div className='container'>
                                            {
                                                items.slice(0,3).map((productdata,i)=>{
                                                    return(
                                                    <div className='row'>
                                                    <div className="d-sm-flex justify-content-between mt-lg-4 mb-4 pb-3 pb-sm-2">
                                                            <div className='col-lg-4'>
                                                                <div className='d-block d-sm-flex align-items-start text-center text-sm-start'>
                                                                    <img className="wishlist-img" src={productdata.image} alt="Product"/>
                                                                </div>   
                                                                </div>
                                                            <div className='col-lg-6'>
                                                                <div className='d-block d-sm-flex align-items-start text-center text-sm-start'>
                                                                <div className="pt-2 product-order-wishlist">
                                                                <h3 className="text-dark font-weight-bold fs-base text-sm-start mb-2">{productdata.category}</h3>
                                                                <div className="fs-sm"><span className="text-muted me-2">Name:</span>{productdata.name}</div>
                                                                <div className="fs-sm"><span className="text-muted me-2">Brand:</span>Tommy Hilfiger</div>
                                                                <div className="fs-sm"><span className="text-muted me-2">Color:</span>Khaki</div>
                                                                <div className="fs-sm"><span className="text-muted me-2">Size:</span>{productdata.size}</div>
                                                                <div className="fs-lg text-accent pt-2 text-primary fw-bold">{productdata.price}</div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-2'>
                                                                <div className='d-block d-sm-flex align-items-start text-center text-sm-start trash-wishlist'>
                                                                        <button className="btn btn-outline-danger btn-sm" type="button" onClick={()=>deleteUser(productdata._id)}><i className="fa fa-trash me-2"></i>Remove</button>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <hr style={{"width":"100%","textalign":"left","marginleft":"0"}}></hr>
                                                    </div>
                                                      )
                                                    })
                                                 }
                                            </div>
            
        </div>
    )
}

export default Wishlist
