import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import SEO from '../components/SEO'

import './blogPostTemplate.scss'

export default ({ data, pageContext }) => {
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

  return (
    <Layout>
      <SEO title={title} description={info} type="article" imagePath={imageURL} slug={slug} />
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Article",
            "headline": "${title}",
            "datePublished": "${date}",
            "author": {
              "@type": "Person",
              "name": "Jibin Thomas"
            },
            "image": "${'https://blog.jibin.tech' + imageURL}"
          }`,
          }}
        />
      </Helmet>

      <article className="blog">
        <header>
          <div className="blog__meta">
            <span>{date} </span>
          </div>
          <h1 className="blog__title">{title}</h1>
          <h2 className="blog__info">{info}</h2>
          <div className="blog__tags">
            {tags.map((tag) => (
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
          <Link className="btn btn--full btn--hover" to={previous.fields.slug}>
            « &nbsp;
            {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link className="btn btn--full btn--hover" to={next.fields.slug}>
            {next.frontmatter.title}
            &nbsp; »
          </Link>
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
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
