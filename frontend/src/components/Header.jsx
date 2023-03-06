import React from 'react'
import { Link } from 'react-router-dom'
import fileFortressLogo from '../assets/fileFortressLogo.svg'
const Header = ({buttonName}) => {
  return (
    <div className="page-header">
        <div className="page-header-right">
            <img src={fileFortressLogo} alt="File Fortress Logo" />
        </div>
        <div className="page-header-left">
            <Link to="#" className='about-us'>About Us</Link>
            <Link to="#" className='searvice'>Searvice</Link>
            <Link to="#" className='sign-up-button'>Contact Us</Link>
            <Link to="/login">
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
