import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/SEO'

import './blogPostTemplate.css'

const BlogPostTemplate = ({ data, pageContext }) => {
  // const GITHUB_USERNAME = 'jibin2706'
  // const GITHUB_REPO_NAME = 'blog.jibin.tech'
  // const GITHUB_BRANCH = 'develop'

  const post = data.markdownRemark
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

      <article className="max-w-3xl | mt-20 md:mt-40 mx-auto px-4">
        <header className="mb-12">
          <div className="flex flex-wrap items-center | text-gray-400 text-sm md:text-base uppercase | space-x-4 | mb-1">
            <span>{date}</span>
          </div>
          <h1 className="text-gray-100 text-2xl md:text-3xl font-bold tracking-wide | mb-4">{title}</h1>
          <h2 className="text-gray-400 text-lg md:text-xl font-light | mb-4">{info}</h2>
          <div className="space-x-4">
            {tags.map(tag => (
              <Link
                key={tag}
                to={`/tags/${tag}`}
                className="text-gray-400 tracking-widest bg-neutral-700 | rounded | px-2 py-1"
              >
                {tag}
              </Link>
            ))}
          </div>
        </header>

        <main
          className="prose prose-invert sm:prose-lg lg:prose-xl | blog-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <hr className="bg-gray-600 | h-0.5 w-[20%] | my-12 mx-auto" />

      <section className="flex flex-wrap justify-between | max-w-3xl | mx-auto px-4 space-y-4">
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
