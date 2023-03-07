import React from 'react'
import { Link } from 'react-router-dom'
import fileFortressLogo from '../assets/fileFortressLogo.svg'
const Header = ({buttonName}) => {
  return (
    <div className="page-header">
      <Link to="/">
        <div className="page-header-right">
            <img src={fileFortressLogo} alt="File Fortress Logo" />
        </div>
      </Link>
        <div className="page-header-left">
            <Link to="#" className='about-us'>About Us</Link>
            <Link to="#" className='sign-up-button'>Contact Us</Link>
            <Link to={buttonName === 'Sign in' ? '/login' : '/signup'}>
                <button className='login-button'>{buttonName}</button>
            </Link>
        </div>
</div>
  )
}

Header.defaultProps = {
  buttonName: 'Sign in'
}

export default Header
