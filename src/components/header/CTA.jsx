// call to action buttons
import React from 'react'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={`${process.env.PUBLIC_URL}/assets/CV.pdf`} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA
