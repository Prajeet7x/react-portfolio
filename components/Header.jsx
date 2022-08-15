import React from 'react'
import photo from '../src/assets/profile-pic.jpg'

function Header() {
  return (
    <div className="header-cont">
      <img src={photo} alt="" className='profile-cont' />
    </div>
  )
}

export default Header