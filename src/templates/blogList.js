import React from 'react'
import { Link } from 'gatsby'

import './blogList.scss'

const BlogList = ({ data, templateTitle }) => {
  let blog = data.allMdx.edges
  return (
    <div className="blog-list">
      {templateTitle === 'Articles' ? (
        <h1 className="main__list__header">
          Articles
          <span>I write about random stuff that I come across while developing for the web.</span>
        </h1>
      ) : (
        <h1 className="main__list__header">{templateTitle}</h1>
      )}

      <main className="main__list">
        {blog.map(({ node }) => {
          let { id, frontmatter, fields } = node
          let { title, date, info } = frontmatter
          let { slug } = fields

          return (
            <Link to={slug} key={id} className="blog__list">
              <article>
                <div className="blog__list__meta">
                  <small>{date}</small>
                </div>
                <h2 className="blog__list__title">{title}</h2>
                <p className="blog__list__info">{info}</p>
              </article>
            </Link>
          )
        })}
      </main>
    </div>
  )
}

export default BlogList
