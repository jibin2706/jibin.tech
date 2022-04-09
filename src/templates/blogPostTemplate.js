import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import Seo from '../components/SEO'

import './blogPostTemplate.scss'

const BlogPostTemplate = ({ data, pageContext }) => {
  // const GITHUB_USERNAME = 'jibin2706'
  // const GITHUB_REPO_NAME = 'blog.jibin.tech'
  // const GITHUB_BRANCH = 'develop'

  const post = data.mdx
  let { frontmatter } = post
  let { slug } = post.fields
  let { title, date, info, tags, image } = frontmatter
  let { previous, next } = pageContext

  // const githubEditUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/${GITHUB_BRANCH}/src/pages${slug}index.md`

  const imageURL = (image && image.publicURL) || ''
  const dateObj = new Date(date)

  const articleSchema = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://jibin.tech/blog${slug}`,
    },
    headline: title,
    description: info,
    image: `https://jibin.tech${imageURL}`,
    author: {
      '@type': 'Person',
      name: 'Jibin Thomas',
      url: 'https://jibin.tech',
    },
    publisher: {
      '@type': 'Person',
      name: 'Jibin Thomas',
      url: 'https://jibin.tech',
    },
    // prettier-ignore
    datePublished: `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, 0)}-${dateObj.getDate().toString().padStart(2, 0)}`,
  }

  return (
    <Layout>
      <Seo
        title={title}
        description={info}
        type="article"
        imagePath={imageURL}
        slug={`/blog${slug}`}
        jsonSchema={[articleSchema]}
      />

      <article className="blog">
        <header className="blog__header">
          <div className="blog__meta">
            <span>{date} </span>
          </div>
          <h1 className="blog__title">{title}</h1>
          <h2 className="blog__info">{info}</h2>
          <div className="blog__tags">
            {tags.map(tag => (
              <Link key={tag} to={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </div>
        </header>

        <main className="blog-body" style={{ maxWidth: '800px', margin: 'auto' }}>
          <MDXRenderer className="blog-body">{post.body}</MDXRenderer>
        </main>
      </article>

      <hr className="blog__divider" />

      <section className="read-more">
        {previous && (
          <Link className="btn btn--full btn--hover" to={`/blog${previous.fields.slug}`}>
            « &nbsp;
            {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link className="btn btn--full btn--hover" to={`/blog${next.fields.slug}`}>
            {next.frontmatter.title}
            &nbsp; »
          </Link>
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        info
        image {
          publicURL
        }
        tags
      }
    }
  }
`

export default BlogPostTemplate
