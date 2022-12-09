import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'

import Layout from '../components/layout'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <div className="max-w-md | mt-40 mx-auto">
      <h1 className="text-4xl uppercase text-center | mb-8">#Tags</h1>
      <section className="flex flex-wrap gap-4 justify-center">
        {group.map(tag => (
          <li
            className="inline-block before:content | break-all | bg-gray-800 | rounded | px-1 py-2 | list-none"
            key={tag.fieldValue}
          >
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} | {tag.totalCount}
            </Link>
          </li>
        ))}
      </section>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
