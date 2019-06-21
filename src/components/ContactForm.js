import React from 'react'

import './contact_form.scss'

function Contact() {
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/success"
    >
      <p class="hidden">
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <label>
        <span className="contact-form__label">Full Name</span>
        <input type="text" name="name" required />
      </label>

      <label>
        <span className="contact-form__label">Email Address</span>
        <input type="email" name="email" required />
      </label>

      <label>
        <span className="contact-form__label">Company / Organization</span>
        <input type="text" name="company_name" />
      </label>

      <label>
        <span className="contact-form__label">Message</span>
        <textarea
          row="20"
          cols="50"
          placeholder="Your message"
          name="message"
          required
        />
      </label>

      <button className="btn">Send Email</button>
    </form>
  )
}

export default Contact
