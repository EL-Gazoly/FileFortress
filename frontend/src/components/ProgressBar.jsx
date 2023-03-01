import React from 'react'


const ProgressBar = ({used}) => {
    const containerStyles = {
        height: '12px',
        width: '100%',
        backgroundColor: "#6672FB",
        borderRadius: 50,
        
      }
      const fillerStyles = {
        height: '100%',
        width: `${used}%`,
        backgroundColor: "#F8B849",
        borderRadius: 'inherit',
      }
    

  return (
    <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
    </div>  
  );
}

export default ProgressBar
