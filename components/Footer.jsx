import React from 'react'
import Facebook from '../src/assets/facebook.png'
import Twitter from '../src/assets/twitter.png'
import Instagram from '../src/assets/instagram.png'
import GitHub from '../src/assets/gitHub.png'

function Footer() {
  return (
    <div className="footer-cont">
      <div className="logo-cont"><img src={Facebook} alt="" /></div>
      <div className="logo-cont"><img src={Twitter} alt="" /></div>
      <div className="logo-cont"><img src={Instagram} alt="" /></div>
      <div className="logo-cont"><img src={GitHub} alt="" /></div>
    </div>
  )
}

export default Footer