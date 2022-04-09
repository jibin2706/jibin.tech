import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import Seo from '../components/SEO'

import './blogPostTemplate.scss'

const TilPostTemplate = ({ data }) => {
  let { frontmatter, body } = data.post
  let { title, date, info, slug } = frontmatter

  return (
    <Layout>
      <Seo title={title} description={info} type="article" slug={slug} />

      <article className="blog">
        <header className="blog__header">
          <div className="blog__meta">
            <span>{date} </span>
          </div>
          <h1 className="blog__title">{title}</h1>
          <h2 className="blog__info">{info}</h2>
        </header>

        <main className="blog-body" style={{ maxWidth: '800px', margin: 'auto' }}>
          <MDXRenderer className="blog-body">{body}</MDXRenderer>
        </main>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        slug
      }
    }
  }
`

export default TilPostTemplate
