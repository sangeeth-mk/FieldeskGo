import React from 'react';
import './forgotpw.css'

function ForgotPw() {
  return (
    <div className='forgot'>
         <div className='forgot-section'>
          <div className='heading'>
            <h3 style={{marginBottom:"30px",backgroundColor:"#FC8019"}} className='header'>Forgot Password</h3>
          </div>
           <p>Enter your registered email address and we will send an OTP to reset your password</p>
          <input type="text" placeholder='Enter the registered email' /><br></br>
          <button className='cancelBtn'>Cancel</button>
          <button className='submitBtn'>Submit</button>
        </div>
    </div>
     
  )
}

export default ForgotPw
