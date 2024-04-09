import React from 'react';
import { useState } from 'react';
import './Login.css';
import { FaEnvelope, FaLock,FaEye,FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [show,setShow] = useState(true)
 
const togglepassword =()=>{
    setShow(!show)
}
 
  return (
 
<div className='loginSection'>
    <div className='imgSection'>
      <img className="backgroundImg" src='https://static.vecteezy.com/system/resources/previews/005/637/993/non_2x/man-making-work-concept-in-front-of-computer-with-tutorial-free-vector.jpg' alt='background'></img>
         <img className='logo' src='/images/App Logo.png'></img>
           <h3 className='navhead'>Fieldesk <span className='span-go'>Go</span></h3>
      </div>
    <div className='formSection'>
    <form>
       <h4>Login</h4>
       <div className='inputWithIcon'>
       <FaEnvelope className='icon' />
          <input type='email' placeholder='Email' style={{paddingLeft:"30px"}}/>
        </div>
        <div className='inputWithIcon'>
          <FaLock className='icon' />
          <input type={show ? "text":"password"} placeholder='Password' style={{paddingLeft:"30px"}} />
        {show ?<FaEye className="eye-icon" onClick={togglepassword}/>:<FaEyeSlash onClick={togglepassword} className='eye-icon'/> }
               </div>
           <div className='forgotSection'>
             <a href='/forgot'>Forgot password?</a>
            
           </div>
           <button className='subBtn' type='submit'>Login</button>
         </form>
    </div>
    </div>
    
  )
}

export default Login




 