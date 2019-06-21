import React from 'react'

import './contact_form.scss'

function Contact() {
  return (
    <form className="contact-form">
      <label>
        <span className="contact-form__label">Full Name</span>
        <input type="text" />
      </label>

      <label>
        <span className="contact-form__label">Email Address</span>
        <input type="email" />
      </label>

      <label>
        <span className="contact-form__label">Company / Organization</span>
        <input type="text" />
      </label>

      <label>
        <span className="contact-form__label">Message</span>
        <textarea row="20" cols="50" placeholder="Your message" />
      </label>

      <button className="btn">Send Email</button>
    </form>
  )
}

export default Contact
