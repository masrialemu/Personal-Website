import React, { useState } from 'react'
import './port.css'
import Data from './../../../Data/List'
function Port() {
const [data,setData]=useState(Data)
  return (
    <div className='port'>
      <div className="ports">
      <span>My Portfolio</span>
      <h3>who i'm</h3>
      <div className="Ports">
        <div className="lport">
           <img src={data[0].img} alt={data[0].name}  />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>
           <img src={data[0].img} alt={data[0].name}  />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>

           <img src={data[0].img} alt={data[0].name}  />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>
        </div>
     
         <div className="lport">
           <img src={data[0].img} alt={data[0].name}  />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>

           <img src={data[0].img} alt={data[0].name}  />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>

           <img src={data[0].img} alt={data[0].name}  />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>
        </div>

        
      </div>
      </div>
    </div>
  )
}

export default Port