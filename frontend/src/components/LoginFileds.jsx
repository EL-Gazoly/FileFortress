import React from 'react'
import emailInputFieldIcon from '../assets/emailInputFieldIcon.svg'
import passwordInputFieldIcon from '../assets/passwordInputFieldIcon.svg'

const LoginFileds = (props) => {
  let key = props.emailORPassword === 'email' ? 'email' : 'password'
  return (
    <div>
   
           <div className="login-form-input">
                <label htmlFor="email">
                  {props.emailORPassword === 'email' ? 'Email Address' : 'Password'}
                </label>
                <div className="login-input-field">
                    <input type={key} 
                    name={key} 
                    id={key} 
                     placeholder={props.emailORPassword === 'email' ? 'Your email address' : 'Your password'} 
                     />
                    <img src={props.emailORPassword === 'email' ? emailInputFieldIcon : passwordInputFieldIcon}  alt="icon" />
                </div>
                </div>

    </div>
  )
}

export default LoginFileds
