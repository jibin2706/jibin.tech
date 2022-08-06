import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/SEO'
import ContactForm from '../components/common/ContactForm'

const Contact = () => (
  <Layout>
    <Seo
      title="Contact Jibin Thomas - Front-End Web Developer"
      description="He is available for freelancing contract work. You can reach out to him at jibin.thomas2706@gmail.com"
    />

    <main className="max-w-3xl | mt-40 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold | mb-2">Hello, it’s nice to meet you!</h1>
      <p className="text-xl font-light | max-w-lg | mb-8">
        Whether you'd like to work together, or just want to say hi, I'd love to hear from you.
      </p>

      <ContactForm />
    </main>
  </Layout>
)

export default Contact
