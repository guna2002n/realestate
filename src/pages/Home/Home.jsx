import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'
import { Slider } from '../Imageslider/Slider';
import { Head1 } from '../Header/Head1';
import { Head } from '../Header/Head';
import { Propertyinfo } from '../Content/Propertyinfo';
import { Categories } from '../Content/Categories';

export const Home = () => {
  
  return (
   <>
    <Head1/>
    <Head/>
    <Slider/>
    <div className="cont">
    <Propertyinfo/>
    </div>

    </>
  )
}
