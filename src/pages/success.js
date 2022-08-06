import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Mail from '../images/mail.svg'

function Success() {
  return (
    <Layout>
      <Helmet>
        <title>Message Sent successfully</title>
      </Helmet>
      <div className="mt-32">
        <img className="max-w-xs | mx-auto mb-8" src={Mail} alt="Message Sent" />
        <h2 className="text-xl font-medium text-center">
          Got your message :) <br /> I will get back to you as soon as possible.
        </h2>
      </div>
    </Layout>
  )
}

export default Success
