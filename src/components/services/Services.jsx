import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='service'>
      <h5>What I offer?</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* =================WEB DEVELOPMENT================= */}


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website design and development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Frontend development (HTML, CSS, JavaScript).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Backend development (server-side logic, database management).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Database management (design, optimization, data integrity, security).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web application development (integration, authentication, form handling, business logic).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web application development (integration, authentication, form handling, business logic).</p>
            </li>
          </ul>
        </article>
        {/* =================DATA ANALYSIS================= */}



        <article className="service">
          <div className="service__head">
            <h3>Data Analysis</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Providing a report to management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Completing analysis using statistical methods</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Converting data into easily understandable information</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using data to analyse critical business trends</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Monitoring data regularly for industry changes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Preparing graphs and diagrams and presenting them to the business stakeholders</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Advising management on prioritising business information</p>
            </li>
          </ul>
        </article>

        {/* =================PROGRAMMING================= */}
  

        <article className="service">
          <div className="service__head">
            <h3>Programming</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>System performance management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Technical assistance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Reviewing and upgrading current programmes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Finding and fixing bugs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Assisting with data architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing in-house software and minimising potential risk and generating reports</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services
