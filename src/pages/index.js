import React from 'react'
import Seo from '../components/SEO'
import Layout from '../components/layout'
import Portfolio from '../components/container/portfolio'

function index() {
  return (
    <Layout>
      <Seo
        title="Jibin Thomas - Software Engineer. Blogger. Gamer. Tech Enthusiast."
        description="Jibin Thomas is a Frontend Developer who loves to build web applications with a strong focus on responsive designs, performance & future maintainability."
        slug="/"
      />
      <Portfolio />
    </Layout>
  )
}

export default index
