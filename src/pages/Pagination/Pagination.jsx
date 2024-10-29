import React, { useState } from 'react'
import './Pagination.css'
import { Button } from 'bootstrap';

export const Pagination = () => {
    const [totalpage,setpage]=useState(5)
    const [currentpage,setcurrentpage]=useState(1)
   
  return (
    <div className='Pagination'>
      <button><i className="fa-solid fa-less-than"></i></button>
      <div className="pagination_body">
        
        
      </div>
      <button><i className="fa-solid fa-greater-than"></i></button>
    </div>
  )
}
