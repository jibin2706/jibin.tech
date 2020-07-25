import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import BlogList from '../components/container/blogList'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext

  return (
    <Layout>
      <SEO title={`Filter blog posts by ${tag}`} description="Filtered blog post according to tags" />
      <BlogList data={data} templateTitle={`#${tag}`} />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
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
