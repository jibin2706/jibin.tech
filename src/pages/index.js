import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import BlogList from '../templates/blogList'

import '../components/layout.css'
import '../components/globals.scss'

const IndexPage = ({ data, ...props }) => (
  <>
    <SEO title="Blog by Jibin Thomas | Front-End Developer and a Causal Blogger" />

    <BlogList data={data} location={props.location} />
  </>
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
