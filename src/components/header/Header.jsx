/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../assets/me.png'
import Header_Socials from './Header_Socials'


const Header = () => {
  return (
    <header>
      <div className='container header__container' id='home'>
        <h5>Hello I'm</h5>
        <h1>Priyansh Singh</h1>
        <h3 className="text-light hover_mern">MERN Stack Developer</h3>
        <CTA/>
        <Header_Socials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#footer" className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default Header
