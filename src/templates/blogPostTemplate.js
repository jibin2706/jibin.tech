import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

import './blogPostTemplate.scss'

import Bio from '../components/Bio'
import SEO from '../components/seo'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark

  let { timeToRead, frontmatter } = post
  let { title, date, info } = frontmatter
  let { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={title}
        keywords={[`blog`, `Jibin Thomas`, title]}
        description={info}
      />
      <Bio isHomePage={false} />
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

      <section className="read-more">
        {previous && (
          <Link className="previous" to={previous.fields.slug}>
            {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link className="next" to={next.fields.slug}>
            {next.frontmatter.title}
          </Link>
        )}
      </section>
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
