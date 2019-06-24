import React from 'react'
import SEO from '../components/seo'

import '../components/layout.css'
import '../components/globals.scss'

import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'

const Contact = () => (
  <Layout>
    <SEO title="Contact Jibin Thomas - Front-End Developer and a Causal Blogger" />
    <main className="contact">
      <h1>Hi👋, it’s nice to meet you.</h1>
      <p>
        You have any projects that I could help with? Then feel free to reach
        out to me by filling the form. I’ll get back to you quickly.
      </p>

      <ContactForm />
    </main>
  </Layout>
)

export default Contact
