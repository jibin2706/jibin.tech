import React from 'react'
import { Link } from 'gatsby'

import Bio from '../components/Bio'

import './blogList.scss'

const BlogList = ({ data }) => {
  let blog = data.allMarkdownRemark.edges

  return (
    <>
      <Bio isHomePage={true} />
      <main>
        <div>
          <div>
            {blog.map(({ node }) => {
              let { id, frontmatter, fields } = node
              let { title, date, info } = frontmatter
              let { slug } = fields

              return (
                <section key={id} className="blog-list">
                  <div className="blog-meta">
                    <small>{date}</small>
                  </div>
                  <Link to={slug}>
                    <h2 className="blog-title">{title}</h2>
                  </Link>
                  <p className="excerpt">{info}</p>
                </section>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default BlogList
