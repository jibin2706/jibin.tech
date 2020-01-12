import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BlogList from '../templates/blogList'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Blog Posts by Jibin Thomas"
      description="I write about programming which includes topics from JavaScript, CSS, IoT and more. "
    />
    <BlogList data={data} templateTitle="Articles" />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            info
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
