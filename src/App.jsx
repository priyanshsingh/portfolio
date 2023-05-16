import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonial/Testimonials'
import Contact from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
// import Weather from './components/weather/Weather'
import './index.css'

const App = () => {
  return (
    <>
      <Header/> 
      {/* <Weather /> */}
      <Nav/>
      <About/> 
      <div class="horizontal-bar"></div>
      <Experience/> 
      {/* <div class="horizontal-bar"></div> */}
      <Services/> 
      <div class="horizontal-bar"></div>
      <Portfolio/> 
      {/* <div class="horizontal-bar"></div> */}
      <Testimonials/> 
      <div class="horizontal-bar"></div>
      <Contact/> 
      <Footer/> 
    </>
  )
}

export default App
