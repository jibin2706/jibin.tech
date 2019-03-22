import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark

  let { timeToRead, frontmatter } = post
  let { title, date } = frontmatter
  console.log(data)

  return (
    <Layout>
      <main className="blog">
        <div className="blog-title">
          <h1>{title}</h1>
        </div>

        <div className="blog-meta">
          <h6 className="date">{date}</h6>
          <h6 className="time">{timeToRead} mins read</h6>
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
