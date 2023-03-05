import './Landing.css'
import React from 'react'
import { Link } from 'react-router-dom'
import fileFortressLogo from '../../assets/fileFortressLogo.svg'
import landingPageLogo from '../../assets/landingPageLogo.svg'
const Landing = () => {
  return (
    <div className='container'>
        <div className="landing-page-container">
            <div className="landing-page-header">
                <div className="landing-page-header-right">
                    <img src={fileFortressLogo} alt="File Fortress Logo" />
                </div>
                <div className="landing-page-header-left">
                    <Link to="#" className='about-us'>About Us</Link>
                    <Link to="#" className='searvice'>Searvice</Link>
                    <Link to="#" className='sign-up-button'>Contact Us</Link>
                    <Link to="/login">
                        <button className='login-button'>Login</button>
                    </Link>
                </div>
            </div>
            <div className="landing-page-body">
                <div className="landing-page-body-left">
                    <div className="landing-page-body-title">
                      Fully Managed Cloud Storage
                    </div>
                    <div className="landing-page-body-subtitle">
                    Effortlessly Store and Access Your Data with Our Fully Managed Cloud Storage Solutions                
                    </div>

                    <div className="landing-page-body-button">
                        <Link to="/dashboard">
                            <button className='signup-button'>Explore</button>
                        </Link>
                    </div>  
                </div>
                <div className="landing-page-body-right">
                    <div className="landing-page-body-right-image">
                        <img src={landingPageLogo} alt="Landing Page Logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
