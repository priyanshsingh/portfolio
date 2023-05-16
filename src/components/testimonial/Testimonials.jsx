import React from 'react'
import './testimonials.css'
import T1 from '../assets/mern.png'
import T2 from '../assets/c++.png'
import T3 from '../assets/data.png'
import T4 from '../assets/ml.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: T1,
    name: 'MERN Stack',
    desc: 'The MERN stack is a collection of popular open-source technologies used to build full-stack web applications. It consists of MongoDB, ExpressJS, ReactJS, and NodeJS. These technologies work together seamlessly to allow developers to build powerful, efficient, and scalable web applications.'
  },
  {
    image: T2,
    name: 'Programming in C++',
    desc: 'C++ is a general-purpose programming language that is widely used for developing complex applications such as operating systems, browsers, games, and more. It is a high-performance language that allows developers to write efficient and optimized c'
  },
  {
    image: T3,
    name: 'Data Analysis',
    desc: 'Data analysis is the process of examining and interpreting data in order to draw conclusions and insights from it. PowerBI is a popular data analysis tool that allows users to connect to a wide range of data sources, visualize data, and create interactive reports and dashboards.'
  },
  {
    image: T4,
    name: 'Machine Learning',
    desc: 'Machine learning is a subfield of artificial intelligence that involves teaching computers to learn from data and make predictions or decisions based on that data. It is used in a wide range of applications, from image and speech recognition to natural language processing and recommendation systems.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What set of technologies do I know?</h5>
      <h2>Tech Stacks</h2>
      <Swiper className="container testimonials__container mySwiper"
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination]}
      >

        {
          data.map(({ image, name, desc }, index) => {
            return (
              <>
                <SwiperSlide key={index} className='testimonial'>
                  <p className='slide__text'>Swipe to Slide</p>
                  <div className="tech_avatar">
                    <img src={image} alt="" />
                  </div>
                  <h5 className='tech__name'>{name}</h5>
                  <small className='tech__desc'>{desc}</small>
                </SwiperSlide>
              </>
            )

          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
