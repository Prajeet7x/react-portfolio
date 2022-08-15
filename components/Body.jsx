import React from 'react'
import mailLogo from '../src/assets/Icon.png'
import linkedinLogo from '../src/assets/Vector.png'

function Title() {
  return (
    <div className='title-cont'>
      <div className="title-name">Prajeet Kumar Thakur</div>
      <div className="title-position">Node.js Developer</div>
      <div className="title-website">prajeet.website</div>
    </div>
  )
}

function Socials() {
  return (
    <div className="socials-cont">
      <div className='mail-cont'>
        <img src={mailLogo} alt="" />
        <div className='email-text'>Email</div>
      </div>
      <div className='linkedin-cont'>
        <img src={linkedinLogo} alt="" />
        <div>LinkedIn</div>
      </div>
    </div>
  )
}

function AboutInterests() {
  return (
    <div className="about-interests-cont">
      <div className="content-heading">About</div>
      <div className="content-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
      <div className="content-heading">Interests</div>
      <div className="content-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
    </div>
  )
}

function Body() {
  return (
    <div className="body-cont">
      <Title />
      <Socials />
      <AboutInterests />
    </div>
  )
}

export default Body

