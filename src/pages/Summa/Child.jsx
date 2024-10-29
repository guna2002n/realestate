import React from 'react'

export const Child = ({pageinfo,page}) => {
    console.log("child");
    
  return (
   <div className="child">
     <h1 style={{display:'block'}}>child</h1>
     <p>{pageinfo}</p>
     <button onClick={()=>{pageinfo(--page)
     }}>prev</button>{page}<button onClick={()=>{pageinfo(++page)}}>Next</button>
   </div>
   
   
  )
}
