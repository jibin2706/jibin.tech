import React from 'react'
import { Link } from 'gatsby'

import './blogList.scss'

const BlogList = ({ data }) => {
  let blog = data.allMarkdownRemark.edges

  return (
    <main>
      <div>
        <div>
          {blog.map(({ node }) => {
            let { id, timeToRead, frontmatter, fields } = node
            let { title, date, info } = frontmatter
            let { slug } = fields

            return (
              <section key={id} className="blog-list">
                <Link to={slug}>
                  <h2>{title}</h2>
                </Link>
                <div className="blog-list__meta">
                  <small>{date}</small>
                  <small>{timeToRead} mins read</small>
                </div>
                <p className="excerpt">{info}</p>
              </section>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default BlogList
