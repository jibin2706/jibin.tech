import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import './posts.scss'

function FeaturedPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { featured: { eq: true } } }, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              info
            }
          }
        }
      }
    }
  `)

  return (
    <section className="blog">
      <h2 className="portfolio__header">Featured Posts</h2>
      <h3 className="portfolio__sub-header">I write about stuff that I learn</h3>
      {data.allMdx.edges.map((post) => (
        <Link key={post.node.id} to={post.node.fields.slug} className="post">
          <h3 className="post__title">{post.node.frontmatter.title}</h3>
          <p className="post__description">{post.node.frontmatter.info}</p>
        </Link>
      ))}

      <p>
        Read more such
        <Link to="/blog/"> post here</Link>
      </p>
    </section>
  )
}

export default FeaturedPosts
