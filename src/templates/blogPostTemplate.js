import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import './blogPostTemplate.scss'

import SEO from '../components/seo'

export default ({ data }) => {
  const post = data.markdownRemark

  let { timeToRead, frontmatter } = post
  let { title, date, info } = frontmatter

  return (
    <Layout>
      <SEO
        title={title}
        keywords={[`blog`, `Jibin Thomas`, title]}
        description={info}
      />
      <article className="blog">
        <header className="blog-title">
          <h1>{title}</h1>
        </header>

        <div className="blog-meta">
          <span className="date">{date}</span>
          <span className="time">{timeToRead} mins read</span>
        </div>

        <main
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
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
        info
      }
    }
  }
`
