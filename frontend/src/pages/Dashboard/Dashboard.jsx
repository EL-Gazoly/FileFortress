import React from 'react'
import './Dashboard.css'
import logo from '../../assets/logo.svg'
import Trash from '../../assets/trashLogo.svg'
import MenuItem from '../../components/MenuItem'
import Logout from '../../assets/logoutLogo.svg'
import cloudLogo from '../../assets/cloudLogo.svg'
import Starred from '../../assets/startredLogo.svg'

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
          </div>
          <div className="dashboard-right"></div>
        </div>
      
    </div>
  )
}

export default Dashboard
