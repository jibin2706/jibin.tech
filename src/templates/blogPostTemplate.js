import React from 'react'
import { graphql, Link } from 'gatsby'

import './blogPostTemplate.scss'

import SEO from '../components/seo'

export default ({ data, pageContext }) => {
  const GITHUB_USERNAME = 'jibin2706'
  const GITHUB_REPO_NAME = 'blog.jibin.tech'
  const GITHUB_BRANCH = 'develop'

  const post = data.markdownRemark

  let { timeToRead, frontmatter } = post
  let { slug } = post.fields
  let { title, date, info } = frontmatter
  let { previous, next } = pageContext

  const githubEditUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/${GITHUB_BRANCH}/src/pages${slug}index.md`

  return (
    <>
      <SEO title={title} description={info} />
      <article className="blog">
        <header>
          <h1 className="blog__title">{title}</h1>
          <div className="blog__meta">
            <span>Published {date}</span>
            <span> | </span>
            <span>Reading Time: {timeToRead} mins</span>
            <span> | </span>
            <a href={githubEditUrl}>Edit on Github</a>
          </div>
          <h2 className="blog__info">{info}</h2>
        </header>

        <main
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{ maxWidth: '680px', margin: 'auto' }}
        />
      </article>

      <section className="read-more">
        {previous && (
          <Link className="btn btn--full btn--hover" to={previous.fields.slug}>
            ← {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link className="btn btn--full btn--hover" to={next.fields.slug}>
            {next.frontmatter.title} →
          </Link>
        )}
      </section>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        info
      }
    }
  }
`
