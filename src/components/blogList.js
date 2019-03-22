import React from "react"
import { Link } from "gatsby"

const BlogList = ({ data }) => {
  let blog = data.allMarkdownRemark.edges

  return (
    <main>
      <small>
        <h5 style={{ marginBottom: `0.5em` }}> Latest Posts</h5>
      </small>

      <div>
        {blog.map(({ node }) => {
          let { id, timeToRead, excerpt, frontmatter, fields } = node
          let { title, date } = frontmatter
          let { slug } = fields

          return (
            <div key={id} className="blog-list">
              <Link to={slug}>
                <h1>{title}</h1>
              </Link>
              <div className="blog-list__meta">
                <small>{date}</small>
                <small>{timeToRead} mins read</small>
              </div>
              <p>{excerpt}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default BlogList
