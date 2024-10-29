import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Signup.css'

export const Signup = () => {
  if(localStorage.getItem('token'))
    window.location='/'
  const [isChecked,setIsChecked]=useState(false)

  useEffect( ()=>{
    changepass() 
    var form=document.getElementById('signup').addEventListener('submit',async(e)=>{
      e.preventDefault();
      var name=document.getElementById('name')
      var email=document.getElementById('email')
      var password=document.getElementById('password')
      const newuser={"name":name.value,"email":email.value,"password":password.value}      
      var res= await axios.post('http://localhost:8080/user/save',newuser).then(()=>{
        alert('signup successfully')
        window.location='/login'
      }).catch((error)=>console.log(error)  )
      console.log(res);

      
      
    })
  },[isChecked])
  function changepass()
  {
    var pass=document.getElementById('password')
    pass.type=isChecked?'text':'password'
  }
  return (
    <div className='Signup'>
            <form id='signup' action="#">
                <h1>Signup </h1>
                    <input type="text"placeholder='Enter the Email ' name="email" id="email" />
                    <input type="text"placeholder='Enter the Name' name="name" id="name" />
                    <input type="password"placeholder='Enter the password' name="password" id="password" />
                    <div className="showPassword">
                      <input type="checkbox" checked={isChecked} onClick={()=>setIsChecked(isChecked?false:true)} name="" id="show_password"  />
                      <label htmlFor="show_password"> show password</label>
                    </div>
                    <div className="userlocation">
                      <div className="countriebox">
                           <label htmlFor="countrie">select countrie</label>
                           <select name="country" defaultValue='india' id="countrie">
                              <option value=""  >countrie</option>
                          </select>
                      </div>
                      <div className="statebox">
                           <label htmlFor="state">select countrie</label>
                           <select name="state"  defaultValue='tamilnadu' id="state">
                              <option value="" >state</option>
                          </select>
                      </div>
                    </div>
                    <button>Submit</button>
               
            </form>
    </div>
  )
}