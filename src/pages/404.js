import React from 'react'

import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404: Not found</title>
    </Helmet>

    <div style={{ marginTop: '12rem', textAlign: 'center' }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
