import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/image/65fa5e6535ec537dc53bd0d1_modern house ideas-p-800.webp'
import img2 from '../../assets/image/65fa5e6535ec537dc53bd0d1_modern house ideas-p-800.webp'
import img3 from'../../assets/image/SaterDesignCollectionInc-158253-Modern-House-Styles-Blogbanner1_1000x.jpg'
import './Slider.css'

export const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img  className='sliderImage' src={img1} alt="Slider 1" />
        <Carousel.Caption>
          <h2>Let Your Home Be Unique & Stylist</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='sliderImage' src={img2} alt="Slider" />
        <Carousel.Caption>
          <h2>Modern House Make Better Life</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='sliderImage' src={img3} alt="Slider" />
        <Carousel.Caption>
          <h2>Third slide label</h2>
          <p>
          A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
