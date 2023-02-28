import React from 'react'

const MenuItem = (item) => {
  return (
    <div className='item-container'>
        <div className='item-left'>
          <img src={item.logo} alt='logo' />
        </div>
        <div className='item-right'>
            {item.name}
        </div>
      
    </div>
  )
}

export default MenuItem
