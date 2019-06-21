import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
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
