import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import Data from '../Data/List'
import { AiOutlineUserAdd,AiOutlineLogout } from "react-icons/ai";
function Login() {
  const Background={backgroundImage:`url(${Data[0].img})`,transition:'1s'}

  return (
    <div className='navbar' style={Background}>
      <div className={"navbars"}>
        <div className="name">
         <h1>Masri</h1>
        </div>
        <div className="list">
         <ul>
           <li>Home</li>
           <li>About</li>
           <li>Expriance</li>
           <li>Portfolio</li>
           <li>Service</li>
           <li>Contact</li>
         </ul>
        </div>
        <div className="login">
        <h1><Link style={{color:"white"}} to='/login'><AiOutlineUserAdd/></Link></h1>
        </div>
      </div>
      <div className="login">
      <form >
      <h2>Login Page</h2>
      <input type="email" className='em' name="email" placeholder='Please, Enter Your Email' />
      <input type="password" className='em' name="password"placeholder='Please, Enter Your password' />
     <div className="bt">
     <input type="submit" value="Login" className='btn' />
     </div>
      </form>
      </div>


      </div>
  )
}

export default Login