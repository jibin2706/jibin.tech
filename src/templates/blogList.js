import React from 'react'
import { Link } from 'gatsby'
import { PoseGroup } from 'react-pose'

import Transition from '../components/Transition'

import './blogList.scss'

const BlogList = ({ data, ...props }) => {
  let blog = data.allMarkdownRemark.edges
  return (
    <>
      <PoseGroup>
        <Transition key={props.location.pathname}>
          <main>
            {blog.map(({ node }) => {
              let { id, frontmatter, fields } = node
              let { title, date, info } = frontmatter
              let { slug } = fields

              return (
                <section key={id} className="blog__list">
                  <div className="blog__list__meta">
                    <small>{date}</small>
                  </div>
                  <Link to={slug} test="123">
                    <h2 className="blog__list__title">{title}</h2>
                  </Link>
                  <p className="blog__list__info">{info}</p>
                </section>
              )
            })}
          </main>
        </Transition>
      </PoseGroup>
    </>
  )
}

export default BlogList
