import React from 'react'
import './Propertyinfo.css'
export const Propertyinfo = () => {
  return (
    <div className='property'>
        <div className="property_dtails">
            <button id='b1'>Buy Properties</button>
            <button id='b2'>Rent Properties</button>
        </div>
        <form id='pro_filter_form'>
            <div className='pro_box'>
                <span>Enter Keyword</span>
                <div className="pro_search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Enter Keyword' />
                </div>
            </div>
            <div className='pro_box'>
                <span>Property Type</span>
                <select name="property_type" id="prop_type">
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Land">Land</option>
                    <option value="Industrial">Industrial</option>
                </select>
                </div>
            <div className='pro_box'>
                <span>Location</span>
                <div className="pro_search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Enter Keyword' />
                </div>
                </div>
            <div className='pro_box'>
                <span>Price Limit</span>
                <select name="property_type" id="prop_type">
                    
                    <option value="">$100</option>
                    <option value="">$1000</option>
                    <option value="">$10000</option>
                    <option value="">$15000</option>
                    <option value="">$20000</option>
                    <option value="">$37500</option>
                    <option value="">$50000</option>
                </select>
                </div>
            <button className='pro_box pro_box_button'>SEARCH</button>
        </form>
    </div>
  )
}
