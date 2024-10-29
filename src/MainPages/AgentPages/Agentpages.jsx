import React from 'react'
import { Head1 } from '../../pages/Header/Head1'
import { Head } from '../../pages/Header/Head'
import './AgentPages.css'
import { ContentImage } from '../../pages/ContentImage/ContentImage'
import { Agents } from '../../pages/Agents/Agents'
import { Footer } from '../../pages/Footer/Footer'

export const Agentpages = () => {
  return (
    <div className='Agentpages'>
        <Head1/>
        <Head/>
        <ContentImage Head='AGENT' head='Agent' />
        <Agents limit={8}/>
        <Footer/>
    </div>
  )
}
