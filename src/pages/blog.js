import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/SEO'
import Layout from '../components/layout'
import BlogList from '../components/container/blogList'

const IndexPage = ({ data }) => (
  <Layout>
    <Seo
      title="Blog Posts by Jibin Thomas"
      description="I write about programming which includes topics from JavaScript, CSS, IoT and more. "
    />
    <BlogList data={data} templateTitle="Articles" />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { listing: { ne: false } }, fileAbsolutePath: { regex: "/^((?!til).)*$/" } }
    ) {
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
