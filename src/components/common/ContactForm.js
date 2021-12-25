import React from 'react'
import './contact-form.scss'

function ContactForm() {
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      action="https://formsubmit.co/jibin.thomas2706@gmail.com"
    >
      <input type="text" name="_honey" style={{ display: 'none' }} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Contact Form - jibin.tech" />
      <label>
        <span className="contact-form__label">Name</span>
        <input type="text" name="name" aria-label="Name" required />
      </label>

      <label>
        <span className="contact-form__label">Email Address</span>
        <input type="email" name="email" aria-label="Email Address" required />
      </label>

      <label>
        <span className="contact-form__label">Company / Organization</span>
        <input type="text" name="company_name" aria-label="Company name" />
      </label>

      <label>
        <span className="contact-form__label">Message</span>
        <textarea row="20" cols="50" name="message" aria-label="Message" required />
      </label>

      <button className="btn btn--filled btn--full">Reach out to me</button>
    </form>
  )
}

export default ContactForm
