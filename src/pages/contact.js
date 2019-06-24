import React from 'react'
import SEO from '../components/seo'

import '../components/layout.css'
import '../components/globals.scss'

import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'

const Contact = () => (
  <Layout>
    <SEO title="Contact Jibin Thomas - Front-End Developer and a Causal Blogger" />
    <div
      style={{ maxWidth: '600px', marginTop: '2rem', animation: 'fade 0.2s' }}
    >
      <h1>Hi👋, it’s nice to meet you.</h1>
      <p>
        You have any projects that I could help with? Then feel free to reach
        out to me by filling the form. I’ll get back to you quickly.
      </p>

      <ContactForm />
    </div>
  </Layout>
)

export default Contact
