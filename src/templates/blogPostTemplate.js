import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import './blogPostTemplate.scss'

import SEO from '../components/seo'

export default ({ data }) => {
  const post = data.markdownRemark

  let { timeToRead, frontmatter } = post
  let { title, date } = frontmatter
  console.log(data)

  return (
    <Layout>
      <SEO title={title} keywords={[`add keyword`]} />
      <main className="blog">
        <div className="blog-title">
          <h1>{title}</h1>
        </div>

        <div className="blog-meta">
          <span className="date">{date}</span>
          <span className="time">{timeToRead} mins read</span>
        </div>

        <div
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "Do MMMM,YYYY")
      }
    }
  }
`
