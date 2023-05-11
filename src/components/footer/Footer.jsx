import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoTwitter } from 'react-icons/io'
import LOGO from '../assets/logo.png'
import './footer.css'


const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#top">
        <img src={LOGO} alt="logo" className='footer__image' />
      </a>
      <a href="#top" className='footer__logo'>Priyansh Singh</a>

      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Tech Stacks</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Priyansh Singh. All Rights Reserved.
        </small>
      </div>

    </footer>
  )
}

export default Footer
