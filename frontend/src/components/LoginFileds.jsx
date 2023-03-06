import React from 'react'
import emailInputFieldIcon from '../assets/emailInputFieldIcon.svg'
import passwordInputFieldIcon from '../assets/passwordInputFieldIcon.svg'

const LoginFileds = () => {
  return (
    <div>
           <div className="login-form-email">
                <label htmlFor="email">Email Address</label>
                <div className="email-input-field">
                    <input type="email" name="email" id="email" placeholder='Your email addreess'/>
                    <img src={emailInputFieldIcon} alt="email icon" />
                </div>
                </div>
                <div className="login-form-password">
                <label htmlFor="password">Password</label>
                <div className="password-input-field">
                    <input type="password" name="password" id="password" placeholder='Your password'/>
                    <img src={passwordInputFieldIcon} alt="password icon" />
                </div>
            </div>
      
    </div>
  )
}

export default LoginFileds
