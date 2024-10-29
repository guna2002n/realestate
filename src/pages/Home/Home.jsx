import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Head1 } from '../Header/Head1';
import { Head } from '../Header/Head';
import { Propertyinfo } from '../Content/Propertyinfo';
import { Categories } from '../Content/Categories';
import { Slider } from '../Slider/Slider';
import { Property_content } from '../Property/Property_content';
import { Video_edit } from '../vedieo_player/Video_edit';
import { Aboutus } from '../Aboutus/Aboutus';
import { BestPlace } from '../bestplace/BestPlace';
import { Agents } from '../Agents/Agents';
import { Blogs } from '../Blog/Blogs';
import { Image_sample } from '../sample_image/Image_sample';
import { Footer } from '../Footer/Footer';
import { CardSlider } from '../Slider/CardSlider';

export const Home = () => {
  if(localStorage.getItem('token'))
    console.log(localStorage.getItem('token'))
  else{
  alert('please Login ')
  window.location='/login'
  }
  return (
    
   <div className='home'>
     <Head1/>
      <Head/>
    <Slider/> 
      <div className="cont">
    <Propertyinfo/>
    <Categories/>
    <Property_content/>
    
    <Video_edit/>
    <Aboutus/>
    <BestPlace/>
    <CardSlider/>
    <Agents limit={4}/> 
    <Blogs/>
    <Image_sample/>
    <Footer/>
    </div>
    
    </div>
    
  )
}
