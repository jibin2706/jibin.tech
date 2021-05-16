import React from 'react'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import './tilList.scss'

const TilList = ({ posts }) => {
  return (
    <div className="til-list">
      <main>
        {posts.map(node => {
          return (
            <Link to={`/til/${node.frontmatter.slug}`} key={node.id}>
              <article className="til__list__card">
                <h2 className="til__list__title">{node.frontmatter.title}</h2>
                <MDXRenderer className="til-body">{node.body}</MDXRenderer>
              </article>
            </Link>
          )
        })}
      </main>
    </div>
  )
}

export default TilList
