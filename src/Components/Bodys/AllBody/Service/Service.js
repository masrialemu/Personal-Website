import React,{useState} from 'react'
import './service.css'
import { AiOutlineUser,AiOutlineRight,AiOutlineLeft } from "react-icons/ai";
function Service() {
  const [state, setstate] = useState(0)
  const Left=()=>{
    if(state<=0){
      state(3)
    }
    else{
      setstate(state-1)
    }
  }
  const Right=()=>{
    console.log(state)
    if(state>=3){
      state(0)
    }
    else{
      setstate(state+1)
    }
   
  }
  const style={
    right: `${state*280}px`
  }
  return (
    <div className='service'>
      <div className="services">
      <span>My Service</span>
      <h3>who i'm</h3>
      <div className="Serr">
      <h1 className="bt"><AiOutlineLeft onClick={Left}/></h1>
      <div className="Ser">
      <div className="Services">
      <div className="lss" style={style}>
        
         <h3>Web Development</h3>
         <p>
         I do some reserches before I start the job. To 
         choose the right way for the job.
         </p>
        </div>
        <div className="lss" style={style} >
        <h1><AiOutlineUser/></h1>
         <h3>Beautiful Code</h3>
         <p>
         Working on the way of writing code to make it 
         better and clean readable for everyone.
         </p>
         </div>
         <div className="lss" style={style}>
         <h1><AiOutlineUser/></h1>
          <h3>Fully Responsive</h3>
          <p>
          I design my websites to be responsive and work 
          on different devices properly.
          </p>
         </div>

         <div className="lss" style={style}>
         <h1><AiOutlineUser/></h1>
          <h3>Quick Learner</h3>
          <p>
          I always ready to learn something new things 
          and I have the ability of Quick learner.
          </p>
         </div>

         <div className="lss" style={style}>
         <h1><AiOutlineUser/></h1>
          <h3>Online</h3>
          <p>
          I am always available and easy to reach.
          </p>
         </div>

         <div className="lss" style={style}>
         <h1><AiOutlineUser/></h1>
          <h3>Made with Love</h3>
          <p>
          Is it really open source if it's not made with love? Always 
          be certain when you use our website.
          </p>
         </div>
     </div>
      </div>
      <h1 className='bt'><AiOutlineRight onClick={Right} /></h1>

      </div>
           </div>
           </div>
  )
}

export default Service