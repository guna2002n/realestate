import React, { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
    const [page,setpage]=useState(1)
    const pageinfo=(data)=>{setpage(data)}
  return (

    <div className="parent">
         <h1 style={{display:'block'}}>parent</h1>
         <h1>{page}</h1>
         <Child pageinfo={pageinfo} page={page} />
    </div>
   
  )
}
