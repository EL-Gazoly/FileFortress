import React, {useRef} from 'react'
import './DashboardRight.css'
import searchLogo from '../../assets/searchLogo.svg'
import uploadLogo from '../../assets/uploadLogo.svg'
// import helpLogo from '../../assets/helpLogo.svg'
const DashboardRight = () => {
  const searchRef = useRef(null)
  const handelSearchClick = () => {
    searchRef.current.focus()
  }
  return (
    <div className='dashboard-right-container'>
      <div className="dashboard-right-first-row">
        <div className="dashboard-right-first-row-search" onClick={handelSearchClick}>
          <img src={searchLogo} alt="search" />
          <input type="text" placeholder="Search" ref={searchRef} />
        </div>
        <div className="dashboard-right-first-row-end">
            
            <div className="dashboard-right-first-row-end-user-profile">
               <div className="dashboard-right-first-row-end-user-profile-image">
                <div>
                     AG
                </div>
              </div>
              <div className="dashboard-right-first-row-end-user-profile-name">
                <p>Someone</p>
              </div>
              <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNzI0NjggNy41NDIwN0MzLjk0NjU3IDcuMzIwMTggNC4yOTM3OSA3LjMwMDAxIDQuNTM4NDcgNy40ODE1NUw0LjYwODU3IDcuNTQyMDdMOS45OTk5NiAxMi45MzMyTDE1LjM5MTQgNy41NDIwN0MxNS42MTMyIDcuMzIwMTggMTUuOTYwNSA3LjMwMDAxIDE2LjIwNTEgNy40ODE1NUwxNi4yNzUyIDcuNTQyMDdDMTYuNDk3MSA3Ljc2Mzk2IDE2LjUxNzMgOC4xMTExOCAxNi4zMzU4IDguMzU1ODVMMTYuMjc1MiA4LjQyNTk1TDEwLjQ0MTkgMTQuMjU5M0MxMC4yMiAxNC40ODEyIDkuODcyNzkgMTQuNTAxMyA5LjYyODEyIDE0LjMxOThMOS41NTgwMiAxNC4yNTkzTDMuNzI0NjggOC40MjU5NUMzLjQ4MDYxIDguMTgxODcgMy40ODA2MSA3Ljc4NjE0IDMuNzI0NjggNy41NDIwN1oiIGZpbGw9IiM4RThFOEUiLz4KPC9zdmc+Cg==' alt='arrow' />
            </div>
        </div>
      
      </div>

      <div className="dashboard-right-second-row">
            <div className="dashboard-right-second-row-title">
                Dashboard
             </div>
             <button className="dashboard-right-second-row-button">
                  <p>Upload File</p>
                  <img src={uploadLogo} alt="upload" />
             </button>
      </div>
    </div>
  )
}

export default DashboardRight
