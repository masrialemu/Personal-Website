import React from 'react'
import './footer.css'
import { AiOutlineUser,AiOutlineRight,AiOutlineLeft } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer'>
        <div className="footers">
        <span>Personal Website </span>
        <h3>My name is Masresha Alemu </h3>
         <div className="Footers">
           <ul>
           <li>home</li>
           <li>about</li>
           <li>expriance</li>
           <li>portfolio</li>
           <li>service</li>
           <li>contact</li>
           </ul>
           <div className="line">
           <h1><AiOutlineUser/></h1>
           <h1><AiOutlineUser/></h1>
           <h1><AiOutlineUser/></h1>
           <h1><AiOutlineUser/></h1>
           </div>
           <p className="copy">copyright 2023</p>
         </div>
        </div>
    </div>
  )
}

export default Footer