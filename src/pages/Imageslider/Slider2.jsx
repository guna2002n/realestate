import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/image/img1.jpg'
import img2 from '../../assets/image/img2.avif'
import img3 from '../../assets/image/img3.webp'

export const Slider2 = () => {
  return (
    

    <Carousel
      interval={3000}      // Time interval between slides (in ms)
      pause='hover'         // Pause the carousel on hover
      controls={true}       // Show next/prev controls
      indicators={true}     // Show slide indicators
      slide={true}          // Enable sliding transition
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ objectFit: 'cover', height: '400px' }}  // Custom style
        />
        <Carousel.Caption>
          <h3 style={{ color: 'red' }}>First slide label</h3>
          <p>Custom caption for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h3 style={{ color: 'blue' }}>Second slide label</h3>
          <p>Custom caption for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h3 style={{ color: 'green' }}>Third slide label</h3>
          <p>Custom caption for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  



  )
}
