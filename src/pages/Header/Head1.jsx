import React from 'react'
import './Head1.css'
export const Head1 = () => {
  return (
    <div className="head1">
        <div className="head1_content1 head1_content">
            <div className="h_prof"><i className="fa-regular fa-map"></i></div>
            <div className="h_contact">
            <p className='h_f'>
                <span>Free call</span> +91 1597536545
            </p>
            <p className='h1_para'>Call us now 24/7 customer support</p>
            </div>
        </div>
        <div className="head1_content2 head1_content">
            <div className="h_prof"><i className="fa-solid fa-paper-plane"></i></div>
            <div className="h_contact">
            <p className='h_f'>Our location</p>
            <p className='h1_para'>suite 721 new york NK 10016</p>
            </div>
        </div>
        <div className="head1_content3 head1_content">
            <div className="h_prof"><i className="fa-brands fa-connectdevelop"></i></div>
            <div className="h_contact">
            <p className='h_f'>
            <span>contact</span> with us
            </p>
            <p className='h1_para'>facebook twitter bribbble</p>
            </div>
        </div>
    </div>
  )
}
