import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition: 'center',
  rowGap:'20px',
  height: '110vh',
  width:'100%',
  objectFit: 'cover',
}
const headingstyle={
  width:'30%',
  textAlign: 'center',
  color:'white'

}
const messagestyle={
  width:'30%',
  textAlign: 'center',
  color:'white'
}
  

const slideImages = [
  {
    url: 'https://media.architecturaldigest.com/photos/571e97c5741fcddb16b559c9/master/w_1920%2Cc_limit/modernist-decor-inspiration-01.jpg',
    heading:'Your Propertiy is our priority',
    message:'A small river named duden flows by their place and supplies it with the necessary reglialia. It is a paradisematic country, In which roasted parts of sentences fly into your mouth'
  },
  {
    url: 'https://media.architecturaldigest.com/photos/571e97ca818277135ff9161c/master/w_1920%2Cc_limit/modernist-decor-inspiration-05.jpg',
    heading:'Let you home Be unique & stylist',
    message:'A small river named duden flows by their place and supplies it with the necessary reglialia. It is a paradisematic country, In which roasted parts of sentences fly into your mouth'
  },
  {
    url: 'https://media.architecturaldigest.com/photos/571e97c5818277135ff91610/master/w_1920%2Cc_limit/modernist-decor-inspiration-02.jpg',
    heading:'Morder House make better  Life',
    message:'A small river named duden flows by their place and supplies it with the necessary reglialia. It is a paradisematic country, In which roasted parts of sentences fly into your mouth'
  },
];
//const heading=['Your Propertiy is our priority','Let you home Be unique & stylist','Morder House make better  Life']

export const Slider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <h1 style={{...headingstyle}}>{slideImage.heading}</h1>
                <p style={{...messagestyle}}>{slideImage.message}</p>
                <button style={{backgroundColor:'#5EA51D',color:'white',border:'none',padding:'10px 25px'}}>LEARN MORE <i style={{fontSize:'14px'}} class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}