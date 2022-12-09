import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/SEO'
import BlogList from '../components/container/blogList'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext

  return (
    <Layout>
      <Seo title={`Filter blog posts by ${tag}`} description="Filtered blog post according to tags" />
      <BlogList data={data} templateTitle={`#${tag}`} />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            info
          }
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
