import React from 'react'
import { Link } from 'gatsby'

import './blogList.scss'

const BlogList = ({ data, templateTitle }) => {
  let blog = data.allMarkdownRemark.edges
  return (
    <>
      <h1 className="main__list__header">{templateTitle}</h1>
      <main className="main__list">
        {blog.map(({ node }) => {
          let { id, frontmatter, fields } = node
          let { title, date, info } = frontmatter
          let { slug } = fields

          return (
            <>
              <section key={id} className="blog__list">
                <div className="blog__list__meta">
                  <small>{date}</small>
                </div>
                <Link to={slug}>
                  <h2 className="blog__list__title">{title}</h2>
                </Link>
                <p className="blog__list__info">{info}</p>
              </section>
            </>
          )
        })}
      </main>
    </>
  )
}

export default BlogList
