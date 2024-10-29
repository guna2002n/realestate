import {React, useEffect, useState} from 'react'
import axios from 'axios';

import './Login.css'

export const Login = () => {
  if(localStorage.getItem('token'))
    window.location='/'
    const [isChecked, setIsChecked] = useState(false);
    useEffect(()=>{
        var pass=document.getElementById('password')
        pass.type=isChecked?'text':'password'

        var form=document.getElementById('loginform').addEventListener('submit',(e)=>{
          e.preventDefault()
          var email=document.getElementById('email')
          var password=document.getElementById('password')
          var userdata={"email":email.value,"password":password.value}
          console.log(userdata);
          axios.post('http://localhost:8080/user/login',userdata).then((res)=>{
            console.log(res);
            alert('Login Successfully')
           window.localStorage.setItem('token',res.data.token)
            window.location='/'
          }).catch((err)=>{
            alert(err.response.data.data)
          })
        })
        
    },[isChecked])
  return (
    <div className="profilbox">
       <form id='loginform' action="#" >
        <h1>Login</h1>
        <input type="text" placeholder='Email or phone' name="email" id="email" />
        <input type="password" placeholder='Enter password' name="password" id="password" />
        <div className="showPass">
            <input type="checkbox" id='loginshow' checked={isChecked}  onClick={()=>{setIsChecked(isChecked?false:true)}}/><label htmlFor="loginshow">Show Password</label>
        </div>
        <button>Submit</button>
       </form>
    </div>
  )
}
