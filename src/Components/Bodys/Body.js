import React from 'react'
import About from './AllBody/About/About'
import Exp from './AllBody/Exp/Exp'
import Port from './AllBody/Port/Port'
import Service from './AllBody/Service/Service'
import Contact from './AllBody/Contact/Contact'
import './body.css'
function Body() {
  return (
    <div className='body'>
    <About/>
    <Exp/>
    <Port/>
    <Service/>
    <Contact/>
    </div>
  )
}

export default Body