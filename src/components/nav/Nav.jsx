import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}>
        <AiOutlineHome />
        <span className="tooltip">Home</span>
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}>
        <AiOutlineUser />
        <span className="tooltip">About</span>
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}>
        <BiBook />
        <span className="tooltip">Skills</span>
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''}>
        <RiServiceLine />
        <span className="tooltip">Portfolio</span>
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}>
        <BiMessageSquareDetail />
        <span className="tooltip">Contact</span>
      </a>
    </nav>
  );
}

export default Nav;
