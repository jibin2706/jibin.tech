import React from 'react'

import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Mail from '../images/mail.svg'

import '../styles/success.scss'

function Success() {
  return (
    <Layout>
      <Helmet>
        <title>Message Sent successfully</title>
      </Helmet>
      <div className="message-success">
        <img className="message-success__image" src={Mail} alt="message send" />
        <h1>I got your message!</h1>
        <h2 className="message--secondary">
          Thank you very much for your message. I will get back to you as soon
          as possible.
        </h2>
      </div>
    </Layout>
  )
}

export default Success
