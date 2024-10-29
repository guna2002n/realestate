import React from 'react'
import './Categories.css'
import { FaBuilding } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaIndustrySolid } from "react-icons/lia";

const propertes= [
      [{city:'New York',num:'200'},{city:'Londan',num:'100'},{city:'Chicago',num:'120'},{city:'Illinois',num:'300'}],
      [{city:'California',num:'100'},{city:'Tennessee',num:'200'},{city:'Texas',num:'200'},{city:'North Carolina',num:'200'}],
      [{city:'Florida',num:'422'},{city:'Charlotte',num:'200'},{city:'Orlando',num:'200'},{city:'Atland',num:'200'}]
        ]



export const Categories = () => {
  return (
    <div className="categories">
        <div className="cat_header">
          <p>Oakberry Categories</p>
          <h1>Explore Our Categories & Places</h1>
        </div>
        <div className="cat_icone">
          <button><FaBuilding /> </button>
          <button><FaWarehouse /></button>
          <button><HiOutlineBuildingOffice2 /></button>
          <button><LiaIndustrySolid/></button>
        </div>
        <div className="cat_content">
          {
            propertes.map((item,index)=>(
              <div className="prop_row" key={index}>
             {item.map((item,index)=>(
              <div className="single_prop" key={index}>
                <span><b>{item.city}</b></span>
                <button>{item.num} Properties</button>
              </div>
             ))}
            </div>
            ))
          }
        </div>
    </div>
  )
}
