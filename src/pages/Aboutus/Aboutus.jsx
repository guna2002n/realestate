import React from 'react'
import './Aboutus.css'
export const Aboutus = () => {
  return (
    <div className='Aboutus'>
       <div className="about_left">

       </div>
       <div className="about_right">
            <p className='about_title'>About us</p>
            <h1 className='about_heading'>Oakberry A Real Estate Company</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <div className="About_exprence">
                <div className="about_box">
                    <h1>50</h1>
                    <p>Years of Experienced</p>
                </div>
                <div className="about_box">
                    <h1>210 K+</h1>
                    <p>Total Properties</p>
                </div>
                <div className="about_box">
                    <h1>450</h1>
                    <p>Qualified Realtors</p>
                </div>
                <div className="about_box">
                    <h1>100</h1>
                    <p>Total Branches</p>
                </div>
            </div>
            <div className="about_icon">
                <img src="	https://preview.colorlib.com/theme/oakberry/images/about-1.jpg" alt="about_icon" />
            </div>
       </div>
      

    </div>
  )
}
