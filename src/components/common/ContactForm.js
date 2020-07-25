import React from 'react'
import './contact-form.scss'

function ContactForm() {
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/success"
    >
      <p className="hidden">
        <label>
          Don’t fill this out if you're human:{' '}
          <input name="bot-field" aria-label="Don't fill this out if you're human" />
        </label>
      </p>
      <input type="hidden" name="form-name" aria-label="Don't fill this out if you're human" value="contact" />
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
