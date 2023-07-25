import React from 'react'
import './experience.css'
// import { BsPatchCheckFill } from 'react-icons/bs'
import { FaJava } from 'react-icons/fa'
import { CgCPlusPlus } from 'react-icons/cg'
import { FaPython } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiPowerbi } from 'react-icons/si'
import { SiJupyter } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { SiOverleaf } from 'react-icons/si'
import { SiMicrosoftoffice } from 'react-icons/si'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills do I have?</h5>
      <h2>My Skill-Set</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                  <h4>HTML</h4>
                </a>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  <h4>CSS</h4>
                </a>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <h4>JavaScript</h4>
                </a>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">
                  <h4>Bootstrap</h4>
                </a>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/docs/getting-started.html">
                  <h4>ReactJS</h4>
                </a>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/docs">
                  <h4>Tailwind</h4>
                </a>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* ================Backend Dev ====================== */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/docs/">
                  <h4>NodeJS</h4>
                </a>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://expressjs.com/en/starter/installing.html">
                  <h4>Express</h4>
                </a>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://expressjs.com/en/starter/installing.html">
                  <h4>MongoDB</h4>
                </a>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://dev.mysql.com/doc/">
                  <h4>MySQL</h4>
                </a>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://dev.mysql.com/doc/">
                  <h4>Python</h4>
                </a>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        {/* ================Programming Languages====================== */}

        <div className="experience__backend">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <CgCPlusPlus className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://en.cppreference.com/w/">
                  <h4>C++</h4>
                </a>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaJava className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.oracle.com/en/java/">
                  <h4>Java</h4>
                </a>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.python.org/3/">
                  <h4>Python</h4>
                </a>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <h4>JavaScript</h4>
                </a>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <TbSql className="experience__details-icon" />
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/sql/">
                  <h4>SQL</h4>
                </a>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* ================Tools====================== */}

        <div className="experience__backend">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaGithub className="experience__details-icon" />
              <div>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <h4>Git/GitHub</h4>
                </a>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJupyter className="experience__details-icon" />
              <div>
              <a href="https://jupyter.org/documentation" target="_blank" rel="noopener noreferrer">
                  <h4>Jupyter</h4>
                </a>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPowerbi className="experience__details-icon" />
              <div>
              <a href="https://docs.microsoft.com/en-us/power-bi/" target="_blank" rel="noopener noreferrer">
                  <h4>PowerBI</h4>
                </a>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <SiOverleaf className="experience__details-icon" />
              <div>
              <a href="https://www.latex-project.org/help/documentation/" target="_blank" rel="noopener noreferrer">
                  <h4>Latex</h4>
                </a>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMicrosoftoffice className="experience__details-icon" />
              <div>
                <a href="https://www.microsoft.com/en-in/microsoft-365" target="_blank" rel="noopener noreferrer">
                  <h4>MS Office</h4>
                </a>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
