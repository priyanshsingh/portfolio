/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i79cze1', 'template_xhpo8fd', form.current, 'ZSWxXzfGS-QpgE8TV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.currentTarget.reset()
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>priyanshsingh1401@gmail.com</h5>
            <a href="mailto:priyanshsingh1401@gmail.com" target='_blank'>Send an Email</a>
          </article>
          <article className="contact__option">
            <FaInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>priyanshsingh_07</h5>
            <a href="https://www.instagram.com/priyanshsingh_07/" target='_blank'>Send a DM</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 7310756276</h5>
            <a href="https://api.whatsapp.com/send?phone=7310756276" target='_blank'>Send a WhatsApp Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email ID' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
