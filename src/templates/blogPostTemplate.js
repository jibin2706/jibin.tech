import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import './blogPostTemplate.scss'

import facebookIcon from '../images/facebook.svg'
import twitterIcon from '../images/twitter.svg'
import linkIcon from '../images/social-normal.svg'

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

      {/* social media sharing */}
      <div className="social-bar">
        <p className="info">Share this post</p>
        <div>
          <a href="http://">
            <img className="share" src={facebookIcon} alt="facebook" />
          </a>
          <a href="http://">
            <img className="share" src={twitterIcon} alt="twitter" />
          </a>
          <a href="http://">
            <img className="share" src={linkIcon} alt="link" />
          </a>
        </div>
      </div>
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
