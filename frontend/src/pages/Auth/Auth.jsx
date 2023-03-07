import './Auth.css'
import React from 'react'
import Sign from '../../components/Sign'

const Auth = (props) => {
  return (  
    <div className='container'>  
      <Sign signUp_or_signIn={props.signUp_or_signIn} />
    </div>
  )
}

export default Auth
