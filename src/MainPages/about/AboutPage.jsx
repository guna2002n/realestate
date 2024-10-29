import React from 'react'
import { Head1 } from '../../pages/Header/Head1'
import '../about/AboutPage.css'
import { Head } from '../../pages/Header/Head'
import { Aboutus } from '../../pages/Aboutus/Aboutus'
import { Video_edit } from '../../pages/vedieo_player/Video_edit'
import { BestPlace } from '../../pages/bestplace/BestPlace'
import { CardSlider } from '../../pages/Slider/CardSlider'
import { Image_sample } from '../../pages/sample_image/Image_sample'
import { ContentImage } from '../../pages/ContentImage/ContentImage'

export const AboutPage = () => {
  return (
    <div className="aboutpage">
      <Head1/>
      <Head/>
     <ContentImage  head='About Us' content='ABOUT US'/>
        <Aboutus/>
        <Video_edit/>
        <BestPlace/>
        <CardSlider/>
        <Image_sample/>
        
    </div>
    
  
  )
}
