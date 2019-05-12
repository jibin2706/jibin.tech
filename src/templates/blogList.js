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
              let { id, timeToRead, frontmatter, fields } = node
              let { title, date, info } = frontmatter
              let { slug } = fields

              return (
                <section key={id} className="blog-list">
                  <Link to={slug}>
                    <h2>{title}</h2>
                  </Link>
                  <div className="blog-list__meta">
                    <small>Posted on {date}</small>
                  </div>
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
