import React from 'react'

import threeGrayDots from '../assets/threeGrayDots.svg'

const FileCard = () => {
  return (
    <div className='file-card-container'>
        <div className="file-card-side-left">
            <div className="file-icon">
                PDF
            </div>
            <div className="file-name">
                    Desgin thinking process        
            </div>
        </div>
        <div className="file-card-side-right">
                <div className="file-created-date"> 
                DEC 13, 2020
                </div>
                <div className="file-size"> 
                2.5 MB
                </div>
                <div className="file-options">
                    <img src={threeGrayDots} alt="options" />
                </div>
        </div>
    </div>
  )
}

export default FileCard
