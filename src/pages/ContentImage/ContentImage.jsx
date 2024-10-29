import React from 'react'
import './ContentImage.css'
export const ContentImage = (props) => {
  return (
    <div  className='ContentImage'>
         <p>HOME &gt; {props.content}</p>
        <h1>{props.head}</h1>
    </div>
  )
}
