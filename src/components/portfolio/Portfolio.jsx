import React from 'react'
import './portfolio.css'
import IMG1 from '../assets/p1.webp'
import IMG2 from '../assets/p2.webp'
import IMG3 from '../assets/p3.webp'
import IMG4 from '../assets/p4.webp'
import IMG5 from '../assets/p5.webp'
import IMG6 from '../assets/p6.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Algorithm Vision',
    github: 'https://github.com/priyanshsingh',
    demo: 'https://github.com/priyanshsingh'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Movies Recommendation System',
    github: 'https://github.com/priyanshsingh',
    demo: 'https://github.com/priyanshsingh'
  },
  {
    id: 3,
    image: IMG3,
    title: 'BlogPost WebApp',
    github: 'https://github.com/priyanshsingh',
    demo: 'https://github.com/priyanshsingh'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Say Hello',
    github: 'https://github.com/priyanshsingh',
    demo: 'https://github.com/priyanshsingh'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Hospital Management System',
    github: 'https://github.com/priyanshsingh',
    demo: 'https://github.com/priyanshsingh'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Google Lookalike',
    github: 'https://github.com/priyanshsingh',
    demo: 'https://github.com/priyanshsingh'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects and Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>GitHub</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
