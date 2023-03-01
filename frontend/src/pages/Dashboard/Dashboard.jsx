import React from 'react'
import './Dashboard.css'
import logo from '../../assets/logo.svg'
import Trash from '../../assets/trashLogo.svg'
import MenuItem from '../../components/MenuItem'
import Logout from '../../assets/logoutLogo.svg'
import cloudLogo from '../../assets/cloudLogo.svg'
import Starred from '../../assets/startredLogo.svg'
import ProgressBar from '../../components/ProgressBar'
import whiteCloudLogo from '../../assets/whiteCloudLogo.svg'

const MenuItemList = [
  {sname: 'Fortress' , logo: cloudLogo , path: '/dashboard'},
  {sname: 'Stared' , logo: Starred , path: '#'},
  {sname: 'Trash' , logo: Trash , path: '#'},
  {sname: 'Logout' , logo: Logout, path: '#'},
]

const Dashboard = () => {
  return (
    <div>
        <div className="dashboard-container">
          <div className="dashboard-left">
              <div className="dashboard-left-list">
                <div className="dashboard-left-list-top">
                     <button className="logo">
                    <img src={logo} alt="logo" />                  
                </button>
                <div className="menu-list">
                  {MenuItemList.map((item, index) => (
                    <div key={index}>
                      
                    <MenuItem name={item.sname} logo={item.logo}  path={item.path} />
                    </div>
                  ))} 
                </div>
                </div>
             
                <div className="dashboard-left-footer">
                  <div className="dashboard-left-footer-firs-row">
                    <div>
                      <img src={whiteCloudLogo} alt="logo" />
                      <span>Storage</span>
                    </div>
                      <p>27%</p>                    
                  </div>
                  <div className="dashboard-left-footer-second-row">
                    <ProgressBar used={27} /> 
                  </div>
                  <div className='dashboard-left-footer-third-row'>
                    27/100 GB Used
                  </div>
                </div>
              </div>
          </div>
          <div className="dashboard-right"></div>
        </div>
      
    </div>
  )
}

export default Dashboard
