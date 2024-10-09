import React from 'react'
import './Head.css'
import {Link} from 'react-router-dom'
export const Head = () => {
  return (
    <div className="header_content">
       <div className="icon">
            <h2>Oakberry</h2><span>real estate agency</span>
       </div>
       <div className="services">
       <div className="list">
        <Link to='/home'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Properties</Link>
        <Link to='/'>Agents</Link>
        <Link to='/'>blog</Link>
        <Link to='/'>contact</Link>
       </div>
       </div>
       <div className="profile">
        <button>submit a property</button>
       </div>
    </div>
  )
}
