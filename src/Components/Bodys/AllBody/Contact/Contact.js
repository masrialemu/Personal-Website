import React, { useState } from 'react'
import './contact.css'
import { AiOutlineUser,AiOutlineRight,AiOutlineLeft } from "react-icons/ai";

function Contact() {
  const [hide,show]=useState(false)
  const Action=()=>{
    show(true)
  }
  return (
    <div className='contact'>
      <div className="contacts">
      <span>Contact Us</span>
      <h3>who i'm</h3>
      <div className="Contact">
        <div className="share">
          <div>
          <h1><AiOutlineUser/></h1>
          <h1><AiOutlineUser/></h1>
          </div>
          <div>
          <h1><AiOutlineUser/></h1>
          <h1><AiOutlineUser/></h1>
          </div>
          <div>
          <h1><AiOutlineUser/></h1>
          <h1><AiOutlineUser/></h1>
          </div>
        </div>
        <div className="box">
           <form onSubmit={Action}>
          { hide && <div className="cm">{hide ? <p>The Email is Successfully Sent</p>:<p style={{backgroundColor:"red",color:"black"}}>The Email is Failed</p>}</div>}
           <input type="email" name="email" className='email' placeholder='Please, Enter Your Email' />
           <input type="Title" name="title" className='email' placeholder='Please, Enter Your Title' />
           <textarea name="desc" placeholder='Please, Enter Your Description' ></textarea>
           <div className="Btn">
           <input type="submit" value="Send" className='btn' />
           </div>
           </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact