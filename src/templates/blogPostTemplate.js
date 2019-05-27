import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

import './blogPostTemplate.scss'

import Bio from '../components/Bio'
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
          <span>{date}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="12" />
          </svg>
          <span>{timeToRead} mins read</span>
        </div>

        <main
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <div className="blog-footer">
        <a href={githubEditUrl}>Edit on Github</a>
      </div>

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
