import React from 'react'
import SEO from '../components/SEO'

import '../styles/contact.scss'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <SEO
      title="Contact Jibin Thomas - Front-End Web Developer"
      description="He is a Front-End Web developer from Mumbai. You can reach out to him at jibin.thomas2706@gmail.com"
    />

    <main className="contact">
      <h1>
        Hi
        <span role="img" aria-labelledby="Hi">
          👋
        </span>
        , it’s nice to meet you.
      </h1>
      <p>
        You have any projects that I could help with? Then feel free to reach
        out to me by filling the form. I’ll get back to you quickly.
      </p>

      <ContactForm />
    </main>
  </Layout>
)

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

      <button className="btn btn--hover">SUBMIT</button>
    </form>
  )
}

export default Contact
