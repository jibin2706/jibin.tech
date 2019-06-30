import React from 'react'
import SEO from '../components/SEO'

import '../components/layout.css'
import '../components/globals.scss'

import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'

const Contact = () => (
  <Layout>
    <SEO
      title="Contact Jibin Thomas - Front-End Web Developer"
      description="You can contact him via email at jibin.thomas2706@gmail.com. He is available for freelancing."
    />
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
