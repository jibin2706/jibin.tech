import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Portfolio from '../templates/portfolio'

function index() {
  return (
    <Layout>
      <SEO
        title="Jibin Thomas - Front-End Web Developer"
        description="I write about programming which includes topics from JavaScript, CSS, Flutter, IoT and more. "
      />
      <Portfolio />
    </Layout>
  )
}

export default index
