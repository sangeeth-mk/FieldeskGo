import React, { useState } from 'react';
import './forgot.css';
import { ArrowLeft } from 'lucide-react';

const Forgot = () => {

    const [password,Setpassword]=useState(true)

    const togglepassword =(event)=>{
        Setpassword(!password)
        event.preventDefault()
    }

  return (
    <div className='forgot-main'>

{ password ? <>

<div className="main-forgot">
    <div className="header">
        <ArrowLeft className='pre-arrow'/>
        <h2>verification</h2>
    </div>
    <p className='verify'>we have send you a code to verify your email address</p>

    <form>
<div className='forgot-input'>
    <input type="text" maxLength={1} />
    <input type="text" maxLength={1} />
    <input type="text" maxLength={1} />
    <input type="text" maxLength={1} />
</div>
<p className='otp'>Didn't Get The otp ?<a href="">Resend</a></p>
<button className='resend' onClick={togglepassword}>Continue</button>
    </form>
</div>
</> 
    :
    <>
    <div className='confirm-pass'>
        <div className="confirm-header">
        <ArrowLeft className='pre-arrow'/>
        <h1>forgot password</h1>
        </div>
        <p>atleast 8 characters with lowercase and uppercase letters</p>
        <form className='form-final'>
            <div className="confirm-pass-inputs">
            <label>New Password</label>
            <input type="text" />
            </div>

            <div className="confirm-pass-inputs">
            <label>Confirm Password</label>
            <input type="text" />
            </div>

            <button className='reset-final' onClick={togglepassword}>Reset Password</button>
        </form>
    </div>
    </>}
</div>
  )
}

export default Forgot;
