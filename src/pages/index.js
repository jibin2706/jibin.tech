import React from 'react'
import Seo from '../components/SEO'
import Layout from '../components/layout'
import Portfolio from '../components/container/portfolio'

function index() {
  return (
    <Layout>
      <Seo
        title="Jibin Thomas — Front-End Developer and Casual Blogger"
        description="Jibin Thomas is a Front-End Web developer based in Mumbai, India. You can reach out to him at jibin.thomas2706@gmail.com. "
      />
      <Portfolio />
    </Layout>
  )
}

export default index
