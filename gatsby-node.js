const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      blogPosts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { listing: { ne: false } }, fileAbsolutePath: { regex: "/^((?!til).)*$/" } }
      ) {
        nodes {
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    const blogPosts = result.data.blogPosts.nodes

    createBlogPages(blogPosts, createPage)
    createTagPages(blogPosts, createPage)
  })
}

function createBlogPages(posts, createPage) {
  posts.forEach((node, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]

    createPage({
      path: `/blog${node.fields.slug}`,
      component: path.resolve(`./src/templates/blogPostTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        previous,
        next,
      },
    })
    return posts
  })
}

function createTagPages(posts, createPage) {
  const tagTemplate = path.resolve(`./src/templates/tagsTemplate.js`)

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, node => {
    if (_.get(node, 'frontmatter.tags')) {
      tags = tags.concat(node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}
