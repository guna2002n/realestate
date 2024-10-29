  import React from 'react'
import './Head.css'
import {Link} from 'react-router-dom'
export const Head = () => {
  function scroolbar()
  {
    console.log('method call');
    
    var profile=document.getElementsByClassName('services').item(0)
    console.log("click");
    if(profile.classList.contains('activeservice'))
    {
      profile.classList.remove('activeservice')
      profile.classList.add('deactiveservice')
    }else{
      profile.classList.remove('deactiveservice')
      profile.classList.add('activeservice')
    }
  }
  return (
    <div className="header_content">
       <div className="icon">
            <h2>Oakberry</h2><span>real estate agency</span>
       </div>
       
       <div className="services ">
       
       <div className="list"  >
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/Properties'>Properties</Link>
        <Link to='/agent'>Agents</Link>
        <Link to='/'>blog</Link>
        <Link to='/'>contact</Link>
       </div>
       </div>
       
       <div className="profile">
        <button onClick={()=>{
          localStorage.removeItem('token') 
          window.location='/login'
          }}>submit a property</button>
       </div>
       <div className="menu" onClick={scroolbar}>
       <i class="fa-solid fa-bars"></i><span>MENU</span>
       </div>
    </div>
  )
}
