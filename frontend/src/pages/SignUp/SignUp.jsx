import './SignUp.css'
import React from 'react'
import signUpIcon from '../../assets/signUpIcon.svg'
import nameInputFieldIcon from '../../assets/nameInputFieldIcon.svg'
import emailInputFieldIcon from '../../assets/emailInputFieldIcon.svg'
import passwordInputFieldIcon from '../../assets/passwordInputFieldIcon.svg'
import Header from '../../components/Header'

const SignUp = () => {
  return (  
    <div className='container'>  
      <div className="signup-page-container">
            <Header />
            <div className="signup-page-body">
                <div className="signup-page-body-left">
                    <img src={signUpIcon} alt="Sign Up Icon" />
                </div>
                <div className="signup-page-body-right">
                      <div className="signup-page-body-right-firt-row">
                        <h1>Sign Up</h1>
                      </div>
                      <div className="signup-page-body-right-second-row">
                        <p>Fill in your credentials and click on the the Sign up button</p>
                      </div>
                      <div className="signup-page-body-right-third-row">
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
                      <div className="signup-page-body-right-fourth-row">
                        <label htmlFor="email">Email Address</label>
                        <div className="email-input-field">
                          <input type="email" name="email" id="email" placeholder='Your email addreess'/>
                          <img src={emailInputFieldIcon} alt="email icon" />
                        </div>
                      </div>
                      <div className="signup-page-body-right-fifth-row">
                        <label htmlFor="password">Password</label>
                        <div className="password-input-field">
                          <input type="password" name="password" id="password" placeholder='Your password'/>
                          <img src={passwordInputFieldIcon} alt="password icon" />
                        </div>
                      </div>
                      <div className="signup-page-body-right-sixth-row">
                        <button className="signup-button">Sign up</button>
                      </div>
                      <div className="signup-page-body-right-seventh-row">
                        <p>OR</p>
                      </div>
                      <div className="signup-page-body-right-eighth-row">
                        <div className="sign-up-options">

                        </div>
                      </div>
                      <div className="signup-page-body-right-ninth-row">
                        <p>Already have an account? <a href="#">Sign In</a></p> 
                      </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default SignUp
