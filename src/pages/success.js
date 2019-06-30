import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import SuccessMessage from '../components/SuccessMessage'

function Success() {
  return (
    <Layout>
      <SEO title="Message Sent successfully" />
      <SuccessMessage />
    </Layout>
  )
}

export default Success
