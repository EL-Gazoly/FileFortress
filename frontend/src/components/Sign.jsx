import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import signUpIcon from '../assets/signUpIcon.svg'
import signInIcon from '../assets/singInIcon.svg'
import SignOptions from '../components/SignOptions'
import nameInputFieldIcon from '../assets/nameInputFieldIcon.svg'
import LoginFileds from '../components/LoginFileds'
const Sign = (props) => {
    console.log(props.signUp_or_signIn)

  let  key = props.signUp_or_signIn === 'sign_in' ?  'Sign in' : 'Sign up'
  return (
    <div>
        <div className="auth-page-container">
            <Header buttonName={props.signUp_or_signIn === 'sign_in' ? 'Sign up' : 'Sign in'}/>
            <div className="auth-page-body">
                <div className="auth-page-body-left" 
                style={props.signUp_or_signIn === 'sing_up' ? {height: '429px', width: '461px' } : {height: '527px' , width: '492px' } }
                >
                    <img src={props.signUp_or_signIn === 'sign_in' ? signInIcon : signUpIcon } alt="Sign Icon" />
                </div>
                <div className="auth-page-body-right"
                style={props.signUp_or_signIn === 'sing_up' ? {height: '623px' } : {height: '554px' } }
                >
                      <div className="auth-page-body-right-firt-row">
                        <h1>{key}</h1>
                      </div>
                      <div className="auth-page-body-right-second-row">
                        <p>Fill in your credentials and click on the the {key} button</p>
                      </div>
                      {props.signUp_or_signIn === 'sign_in' ? null : 
                      <div className="auth-page-body-right-third-row">
                        <div className="first-name-input">
                          <label htmlFor="name">
                            First name
                          </label>
                          <div className="first-name-input-field">
                            <input type="text" name="name" id="name" placeholder='Your first name'/>
                            <img src={nameInputFieldIcon} alt="name-input-field-icon" />
                          </div>
                          
                        </div>
                        <div className="last-name-input">
                          <label htmlFor="name">
                            Last name
                          </label>
                          <div className="last-name-input-field">
                            <input type="text" name="name" id="name" placeholder='Your last name'/>
                            <img src={nameInputFieldIcon} alt="name-input-field-icon" />
                          </div>
                        </div>
                      </div>
}
                      <LoginFileds emailORPassword={'email'}/>

                      <LoginFileds emailORPassword={'password'}/>

                    {props.signUp_or_signIn === 'sign_in' ? 
                    
                    <div className="forget-password">
                            <p>Forgot Password?</p>
                    </div>
                    
                    
                    : null}

                      <div className="auth-page-body-right-sixth-row">
                        <button className="auth-button">{key}</button>
                      </div>
                      <div className="auth-page-body-right-seventh-row">
                        <SignOptions />
                      </div>
                      <div className="auth-page-body-right-eighth-row">
                        <p>{props.signUp_or_signIn === 'sign_up' ? 'Already have an account? ' : 'Do not have an account? '} 
                        <Link 
                         to={props.signUp_or_signIn === 'sign_in' ? '/signup' : '/login'}
                        >
                            {props.signUp_or_signIn === 'sign_in' ? 'Sign up' : 'Sign in'}
                        </Link>
                        </p> 
                      </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Sign
