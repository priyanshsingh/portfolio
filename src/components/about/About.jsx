import React from 'react'
import './about.css'
import ME from '../assets/me_about.jpg'
import { FaAward } from 'react-icons/fa'
import { FcBiotech } from 'react-icons/fc'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FcBiotech className="about__icon" />
              <h5>Primary Stack</h5>
              <small>MERN</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6 Projects</small>
            </article>
          </div>
          <p>
            I am a MERN Stack Developer currently pursuing a Bachelor of Engineering degree from
            Chandigarh University. With a strong foundation in web development technologies and frameworks, as well as
            proficiency in Data Structures and Algorithms, I possess problem-solving abilities, making me a valuable asset to any
            development team.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>


    </section>


  )
}

export default About
