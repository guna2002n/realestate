import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Agents.css'

export const Agents = (props) => {
    const [card,setcard]=useState([])
   useEffect(()=>{agentcall()},[])

     async function agentcall()
    {
        console.log(props.limit);
        
        await axios.get(`http://localhost:8080/agent/get/${parseInt(props.limit)}`).then((res)=>{
            setcard(res.data)
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div className='Agents'>
        <div className="agent_heading">
        <p>meet our Agents</p>
        <h1>our Agents</h1>
        </div>
        <div className="agents_cards" style={{border:'1px solid white'}}>
            {card.map((val,index)=>(
                <div className="agent_content" key={index}>
                    <div className="agent_img">
                        { <img src={val.url} alt="" /> }
                    </div>
                    <div className="agent_info">
                        <p>Listing {val.noProp} Properties</p>
                        <h3>{val.name}</h3>
                        <div className="socialmedia">
                             <div className='media_icon'><i className="fa-brands fa-twitter"></i></div>
                             <div className='media_icon'><i className="fa-brands fa-facebook-f"></i></div>
                             <div className='media_icon'><i className="fa-brands fa-google"></i></div>
                             <div className='media_icon'><i className="fa-brands fa-instagram"></i></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
