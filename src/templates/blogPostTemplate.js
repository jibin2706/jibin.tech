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
        <header className="blog-header">
          <h1 className="blog-title">{title}</h1>
          <h2 className="blog-info">{info}</h2>
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
            ← {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link className="next" to={next.fields.slug}>
            {next.frontmatter.title} →
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
        date(formatString: "MMMM D, YYYY")
        info
      }
    }
  }
`
