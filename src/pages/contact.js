import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import ContactForm from '../components/common/ContactForm'

import '../styles/contact.scss'

const Contact = () => (
  <Layout>
    <SEO
      title="Contact Jibin Thomas - Front-End Web Developer"
      description="He is available for freelancing contract work. You can reach out to him at jibin.thomas2706@gmail.com"
    />

    <main className="contact">
      <h1 className="contact__heading">Hello, it’s nice to meet you!</h1>
      <p className="contact__sub-heading">
        Whether you'd like to work together, or just want to say hi, I'd love to hear from you.
      </p>

      <ContactForm />
    </main>
  </Layout>
)

export default Contact
