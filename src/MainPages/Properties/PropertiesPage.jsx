import React from 'react'
import './PropertiesPage.css'
import { Head1 } from '../../pages/Header/Head1'
import { Head } from '../../pages/Header/Head'
import { ContentImage } from '../../pages/ContentImage/ContentImage'
import { Property_content } from '../../pages/Property/Property_content'
import { Propertyinfo } from '../../pages/Content/Propertyinfo'
import { Footer } from '../../pages/Footer/Footer'

export const PropertiesPage = () => {
  return (
    <div className='PropertiesPage'>
      <Head1/>
      <Head/>
      <ContentImage head='Properties' content='PROPERTIES'/>
      <div className="cont">
        <Propertyinfo/>
        <Property_content/>
        <Footer/>
      </div>
    </div>
  )
}
