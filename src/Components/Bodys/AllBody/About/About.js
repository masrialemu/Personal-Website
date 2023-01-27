import React, { useState } from 'react'
import './about.css'
import IMG from '../../../../Img/Masri.png'
import Data from '../../../Data/List'
import { AiFillCaretDown,AiFillCaretUp,AiOutlineRight } from "react-icons/ai";
function About() {
  const [hide,show]=useState(false)
  const [data,setData]=useState(Data)
  const Shows=()=>{
    show(sh=>!sh)
  }
  return (
    <div className='about'>
      <div className="abouts">
      <span>About Me</span>
      <h3>who i'm</h3>
         <div className="Abouts">
           <div className="img">
            <img src={IMG} alt="image"  srcset="" />
           </div>
           <div className="Text">
           <div className="text">
             {data[0].desc}
            
           </div>
           <div className="btn">
           <button>Download CV</button>
           <button>Let's Contact</button>
           </div>
           </div>
           <div className="hide">
           </div>
         </div>
         <div className="hide">
           <h1 onClick={Shows}>{!hide ? <AiFillCaretDown/>:<AiFillCaretUp/>}</h1>
           <div className={!hide ?"list":"list1"}>
             <div style={{marginLeft:"-35px"}}>
             <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> My Name:</span> Masresha Alemu</span>
             <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> My Skill:</span> MERN Stack</span>
             <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> City:</span> Addis Ababa,Ethiopia</span>
             <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Freelance:</span> Available</span>
             </div>
             <div >
             <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Phone:</span> +251979742762</span>
             <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Email:</span> masrialemu@gmail.com</span>
             <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Telegram:</span> @Masri404</span>
             <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> WhatsApp:</span> +251979742762</span>


             </div>
              </div>
         </div>
      </div>
    </div>
  )
}

export default About