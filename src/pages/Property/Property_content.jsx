import {React, useEffect, useState} from 'react'
import './Property_content.css'
import axios from 'axios'

export const Property_content = () => {
  const [details,setdetails]=useState([]);
  useEffect(()=>{getItem()},[])
 
 function getItem()
 {
  axios.get('http://localhost:8080/product/get').then((res)=>{
    setdetails(res.data)
    console.log(res.data);
    
  })
  
 }
  return (
    <div className="Property_content">
      <div className="feature_prop">
        <p>Our Properties</p>
        <h1>Featured Properties</h1>
      </div>
      <div className="Properties">
        {
          details.map((items,index)=>{return(
            <div className="single_props" key={index}>
              <div className="img_container">
                <img src={items.propUrl} alt="property_image" /> 
                <span className='prop_price'>$ {items.price}</span>
              </div>
              <div className="seller_content">
                <div className="sellerinfo">
                  <div className="seller_profile">
                    <div className="seller_img">
                       <img src={items.seller.url} alt="seller_image" /> 
                    </div>
                    <p>{items.seller.name}</p>
                  </div>
                  <div className="posted_date">{items.seller.time}</div>
                </div>
                <h4>{items.seller.name}</h4>
                <div className="pro_location">
                  <p className='prop_location' style={{color: '#b4adad'}}><i class="fa-solid fa-location-dot"></i>{items.propLoacation}</p>
                  <p className={items.propType==='rent'?'Prop_type rent':'Prop_type sale'}>{items.propType}</p>
                </div>
                <div className="addition_info">
                  <span><i class="fa-solid fa-bed"></i>{items.beadroom}</span>
                  <span><i class="fa-solid fa-bath"></i>{items.restroom}</span>
                  <span><i class="fa-solid fa-layer-group"></i>{items.sqft}</span>
                </div>
              </div>
            </div>
          )})
        }
      </div>
    </div>
  )
}
