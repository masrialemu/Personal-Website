import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import BG from '../../Img/best.jpg'
import { AiOutlineUserAdd,AiOutlineLogout,AiOutlineClose } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import Data from '../Data/List';
function Navbar() {
  const [data,setData]=useState(Data)
  const [scroll,setScroll]=useState(false)
  const [show,setShow]=useState(false)
  const [inc,setInc]=useState(0)
  const [desc,setDesc]=useState(Data)
  const Background={backgroundImage:`url(${data[0].img})`
  ,transition:'5s',
  position:'relative',
  
}
  const Btn={bottom: `${inc*5}px`}
  let time;
  useEffect(()=>{
   time=setInterval(()=>{
      if(inc>=data.length-1){
        setInc(0)
      }
      else{
        setInc(inc+1)
      }
   },10000)

   return ()=>clearInterval(time)
 })
 useEffect(()=>{
   window.addEventListener('scroll',()=>{
    if(window.scrollY>100){
       setScroll(true)
    }
    else{
      setScroll(false)
    }
   })
 })
const ShowBtn=()=>{
  setShow(p=>!p)
}
const NavShow=()=>{
  if(show===true){
    setShow(false)
  }
  else{
    return null;
  }
}
 
  return (
    <div className={'navbar'} style={Background} onClick={NavShow}>
      <div className={!scroll ?"navbars":"navbars1"}>
        <div className="name">
         <span style={Btn}>Masri</span>
        </div>
        <div className={!show?"LList":"list"}>
      <div className="List">
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Expriance</li>
      <li>Portfolio</li>
      <li>Service</li>
      <li className='con'>Contact</li>
    </ul>
      </div>
        </div>
        <div className="login">
        <h1 className='logs' style={{position:"relative",bottom:"10px"}}><Link style={{color:"white"}} to='/login'><AiOutlineUserAdd/></Link></h1>
        </div>
        <div className="test">
        <h1 className="listsx" onClick={ShowBtn}>{!show?<BsList/>:<AiOutlineClose/>}</h1>
        </div>
      </div>
      <div className="title">
      <h3>Hello, my name is</h3>
      <h1><span><span style={{color:"white"}}>Masresha</span> Alemu</span></h1>  
      <h3>I'm Mern stack developer</h3>
      <span className='sp'><h3 style={{color:'white'}}>Coding is easy for me</h3></span>
      <button>let's Contact</button>
      </div>
    </div>
  )
}

export default Navbar