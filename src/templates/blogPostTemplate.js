import React from 'react'
import { graphql, Link } from 'gatsby'

import './blogPostTemplate.scss'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import SocialShare from '../components/SocialShare'

export default ({ data, pageContext }) => {
  // const GITHUB_USERNAME = 'jibin2706'
  // const GITHUB_REPO_NAME = 'blog.jibin.tech'
  // const GITHUB_BRANCH = 'develop'

  const post = data.markdownRemark
  let { timeToRead, frontmatter } = post
  let { slug } = post.fields
  let { title, date, info, tags, image } = frontmatter
  let { previous, next } = pageContext

  // const githubEditUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/${GITHUB_BRANCH}/src/pages${slug}index.md`

  const imageURL = (image && image.publicURL) || ''

  return (
    <Layout>
      <SEO
        title={title}
        description={info}
        type="article"
        imagePath={imageURL}
        slug={slug}
      />

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

      <article className="blog">
        <header>
          <h1 className="blog__title">{title}</h1>
          <div className="blog__meta">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zM8 16H4v4h4v-4zm6 0h-4v4h4v-4zm-6-6H4v4h4v-4zm16-8v22H0V2h3v1c0 1.103.897 2 2 2s2-.897 2-2V2h10v1c0 1.103.897 2 2 2s2-.897 2-2V2h3zm-2 6H2v14h20V8zm-2-7a1 1 0 10-2 0v2a1 1 0 102 0V1zM6 3a1 1 0 11-2 0V1a1 1 0 112 0v2z"></path>
              </svg>
              {date}{' '}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23 5v13.883L22 19V3c-3.895.119-7.505.762-10.002 2.316C9.502 3.762 5.896 3.119 2 3v16l-1-.117V5H0v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1H24V5h-1zM11 18.645c-1.946-.772-4.137-1.269-7-1.484V5.11c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484V7.032c2.004-1.247 4.648-1.725 7-1.922v12.051z"></path>
              </svg>{' '}
              {timeToRead} mins read
            </span>
          </div>
          <h2 className="blog__info">{info}</h2>
          <div className="blog__tags">
            {tags.map(tag => (
              <Link key={tag} to={`/tags/${tag}`}>
                #{tag} &nbsp;
              </Link>
            ))}
          </div>
          <hr className="blog__divider" />
        </header>

        {/* <SocialShare
          title={title}
          slug={slug}
          body={info}
          hashtags={tags}
          showHeader={false}
        /> */}

        <main
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{ maxWidth: '720px', margin: 'auto' }}
        />
      </article>

      <hr />
      <SocialShare
        title={title}
        slug={slug}
        body={info}
        hashtags={tags}
        showHeader={true}
      />

      <section className="read-more">
        {previous && (
          <Link className="btn btn--full btn--hover" to={previous.fields.slug}>
            <svg
              fill="currentColor"
              height="1em"
              width="1em"
              viewBox="0 0 40 40"
              style={{
                verticalAlign: 'sub',
              }}
            >
              <path d="M33.4 18.4v3.2H13l9.3 9.4-2.3 2.4L6.6 20 20 6.6 22.3 9 13 18.4h20.4z" />
            </svg>
            &nbsp;
            {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link className="btn btn--full btn--hover" to={next.fields.slug}>
            {next.frontmatter.title}
            &nbsp;
            <svg
              fill="currentColor"
              height="1em"
              width="1em"
              viewBox="0 0 40 40"
              style={{
                verticalAlign: 'sub',
              }}
            >
              <path d="M20 6.6L33.4 20 20 33.4 17.7 31l9.3-9.4H6.6v-3.2H27L17.7 9z" />
            </svg>
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
        image {
          publicURL
        }
        tags
      }
    }
  }
`
