import React from 'react'
import googleIcon from '../assets/googleIcon.svg'
import facebookIcon from '../assets/facebookIcon.svg'
import githubIcon from '../assets/githubIcon.svg'

const SignOptions = () => {
  return (
    <div className='Sign-options-container'>
        <div className="Sign-options-top">
            OR
        </div>
        <div className="Sign-options-bottom">
            <img src={googleIcon} alt="google Icon" />
            <img src={facebookIcon} alt="facebook Icon" />
            <img src={githubIcon} alt="github Icon" />
        </div>

    </div>
  )
}

export default SignOptions
