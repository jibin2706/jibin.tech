import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import TilList from '../components/container/tilList'

const TILPage = ({ data }) => {
  console.log(data.posts.nodes)

  return (
    <Layout>
      <SEO title="Today I Learned by Jibin Thomas" description="Byte sized information on things I learned today" />
      <TilList posts={data.posts.nodes} />
    </Layout>
  )
}

export default TILPage

export const query = graphql`
  {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { listing: { ne: false } }, fileAbsolutePath: { regex: "//til//" } }
    ) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")
          slug
        }
        body
      }
    }
  }
`
