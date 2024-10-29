import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer1">
           
            <div className="footerh footer_offer">
                <div className="footer_head" ><h1>Oakberry</h1>
                     <span style={{display:"block",fontSize:'12px'}}>REAL ESTATE AGENCY</span>
                     </div>
                
                    <p style={{fontSize:'14px'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                

            </div>
            <div className="footerh footer_company">
                    <ul>
                        
                        <div className='footer_head'>office</div>
                        <li>Properties</li>
                        <li>Agents</li>
                        <li>Location</li>
                        <li>Client Support</li>
                    </ul>
            </div>
            <div className="footerh footer_quicklink">
                    <ul>
                        <div className='footer_head'>Company</div>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
            </div>
            <div className="footerh footer_quickLink">
                    <ul>
                        <div className='footer_head'>Quick Link</div>
                        <li>Terms & Conditions</li>
                        <li>User's Guide</li>
                        <li>Support Center</li>
                        <li>Press info</li>
                    </ul>
            </div>
            <div className="footerh footer_qustion">
                <p  className='footer_head'>Have a Questions?</p>
                <li><span><i class="fa-solid fa-map"></i></span>203 Fake St. Mountain View, San Francisco, California, USA</li>
                <li><span><i class="fa-solid fa-phone"></i></span>+91 123456789</li>
                <li><span><i class="fa-solid fa-paper-plane"></i></span>gunag123@gmail.com</li>
            </div>
        </div>
        <div className="footer2">
            <p>Copyright ©2024 All rights reserved | This template is made with  by <span style={{color:'#5EA51D'}}> Colorlib</span></p>
        </div>
    </div>
  )
}
