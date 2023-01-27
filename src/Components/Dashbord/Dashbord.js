import React from 'react'
import './dashbord.css'
import Img from '../../Img/best.jpg'
function Dashbord() {
  return (
    <div className='dashbord'>
     <div className="dashbords">
       <table>
         <tr className='main'>
         <td>Navbar</td>
         <td>About</td>
         <td>Skill</td>
         <td>Services</td>
         <td>Portfolio</td>
         <td>Contact</td>
         </tr>
         <td style={{border:"2px solid black"}}>
          <span>Background-Image</span>
        <div className="all">
        <div className="bk">
         <img src={Img} alt="image" style={{width:"200px",height:"200px"}} />
          <div className="btn">
          <button>Change</button>
          <button>Cancel</button>
          </div>
         </div>

         <div className="bk">
         <img src={Img} alt="image" style={{width:"200px",height:"200px"}} />
          <div className="btn">
          <button>Change</button>
          <button>Cancel</button>
          </div>
         </div>
        </div>

        <div className="all">
        <div className="bk">
         <img src={Img} alt="image" style={{width:"200px",height:"200px"}} />
          <div className="btn">
          <button>Change</button>
          <button>Cancel</button>
          </div>
         </div>

         <div className="bk">
         <img src={Img} alt="image" style={{width:"200px",height:"200px"}} />
          <div className="btn">
          <button>Change</button>
          <button>Cancel</button>
          </div>
         </div>
        </div>
        <td style={{border:"2px solid black"}}>
         <span>Background-name</span>
         <div className="name">
         <h2>Masri</h2>
         <div className="btn">
         <button>Change</button>
          <button>Cancel</button>
         </div>
         </div>
         <div className="name">
         <h2>Masri</h2>
         <div className="btn">
         <button>Change</button>
          <button>Cancel</button>
         </div>
         </div>
         <div className="name">
         <h2>Masri</h2>
         <div className="btn">
         <button>Change</button>
          <button>Cancel</button>
         </div>
         </div>
         </td>
         <span>Background-Box</span>
         <div className="box">
         <div className="boxs">
         <h3>Hello, my name is</h3>
          <h1>Masresha Alemu</h1>
          <h3>I'm Mern stack developer</h3>
          <h3>Codinf is easy for me</h3>
          <div className="btn">
          <button>Change</button>
          <button>Cancel</button>
          </div>
         </div>

         </div>
         </td>
         
       </table>
     </div>
    
    </div>
  )
}

export default Dashbord