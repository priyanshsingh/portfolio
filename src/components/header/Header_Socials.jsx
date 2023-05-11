import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Header_Socials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/priyanshsingh1401" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/priyanshsingh" target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href="https://www.instagram.com/priyanshsingh_07/" target="_blank" rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default Header_Socials
