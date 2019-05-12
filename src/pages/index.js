import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogList from '../templates/blogList'

import '../components/colors.scss'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Blog | Jibin Thomas" keywords={[`blog`, `Jibin Thomas`]} />

    <BlogList data={data} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            info
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
