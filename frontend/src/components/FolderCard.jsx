import React from 'react'
import FolderLogo from '../assets/FolderLogo.svg'
import threeDots from '../assets/threeDots.svg'
import filesLogo from '../assets/filesLogo.svg'
import clockLogo from '../assets/clockLogo.svg'
const FolderCard = () => {

  return (
    <div className='folder-card-container'>
        <div className="folder-card-top">
            <div className="folder-card-first-row">
                <div className="folder-logo-container">
                  <img src={FolderLogo} alt="folder-logo" />
                </div>
                <img src={threeDots} alt="three-dots" />
            </div>

            <div className="folder-card-second-row">
              Desgin Shift
            </div>

            <div className="folder-card-second-row">
            </div>

        </div>

        <div className="folder-card-bottom">
            <div className="folder-card-third-row">
                <img src={filesLogo} alt="files-logo" />
                <p>10 Files</p>
            </div>

            <div className="folder-card-fourth-row">
              <img src={clockLogo} alt="clock-logo" />
              <p>Created on Dec 13,2019</p>
            </div>
        </div>
      

        
    </div>
  )
}

export default FolderCard
