import React from 'react'
import './CardSlider.css'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const CardSlider = () => {
    const image=[
        'https://preview.colorlib.com/theme/oakberry/images/gallery-1.jpg.webp',
        'https://preview.colorlib.com/theme/oakberry/images/gallery-2.jpg.webp',
        'https://preview.colorlib.com/theme/oakberry/images/gallery-3.jpg.webp',
        'https://preview.colorlib.com/theme/oakberry/images/gallery-4.jpg.webp',
        'https://preview.colorlib.com/theme/oakberry/images/gallery-5.jpg.webp',
        'https://preview.colorlib.com/theme/oakberry/images/gallery-6.jpg.webp'
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive:[{
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
            }]
//    autoplaySpeed: 2000,
      };
      const client=[
        {
            cname:'Roger Scott',
            position:'Marketing Manager',
            comment:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image:'https://preview.colorlib.com/theme/oakberry/images/person_1.jpg.webp'
        },
        {
            cname:'Roger Scott',
            position:'Marketing Manager',
            comment:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image:'https://preview.colorlib.com/theme/oakberry/images/person_2.jpg.webp'
        },
        {
            cname:'Roger Scott',
            position:'Marketing Manager',
            comment:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image:'https://preview.colorlib.com/theme/oakberry/images/person_3.jpg.webp'
        },
        {
            cname:'Roger Scott',
            position:'Marketing Manager',
            comment:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image:'https://preview.colorlib.com/theme/oakberry/images/person_1.jpg.webp'
        },
        {
            cname:'Roger Scott',
            position:'Marketing Manager',
            comment:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image:'https://preview.colorlib.com/theme/oakberry/images/person_2.jpg.webp'
        },
        {
            cname:'Roger Scott',
            position:'Marketing Manager',
            comment:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image:'https://preview.colorlib.com/theme/oakberry/images/person_3.jpg.webp'
        }
      ]
  return (
   <div className="ourclient">
    <div className="client_content">
        <p>Testimonial</p>
        <h1>Clients We Help</h1>
            </div>
     <div className='CardSlider'>
       <Slider {...settings}>
       { client.map((val,index)=>
            <div className='card_slider' key={index}>
                <i class="fa-solid fa-comments"></i>
                <p>{val.comment}</p>
                <div className="client_profil">
                    <div className="clint_img">
                        <img src={val.image} alt="" />
                    </div>
                    <div className="client_details">
                        <h4>{val.cname}</h4>
                        <p>{val.position}</p>
                    </div>
                </div>
            </div>
    )}
        </Slider> 
    </div>
   </div>
  )
}
