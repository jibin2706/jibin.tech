/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, keywords, title, type, imagePath, slug }) {
  const { site, allFile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author {
              name
            }
            social {
              twitter
            }
          }
        }
        allFile(filter: { name: { eq: "Logo-Square" } }) {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `
  )

  const siteUrl = site.siteMetadata.siteUrl
  const metaDescription = description || site.siteMetadata.description
  const metaTwitterAuthor = site.siteMetadata.social.twitter
  const metaImagePath = imagePath || allFile.edges[0].node.publicURL
  const metaUrl = slug && siteUrl + slug

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={siteUrl + metaImagePath} />
      {slug && <link rel="canonical" href={metaUrl} />}

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={siteUrl + metaImagePath} />
      <meta property="og:type" content={type} />

      {/* Twitter Card tags */}
      {!imagePath ? (
        <meta name="twitter:card" content="summary" />
      ) : (
        <meta name="twitter:card" content="summary_large_image" />
      )}
      <meta name="twitter:creator" content={metaTwitterAuthor} />
      <meta name="twitter:site" content={metaTwitterAuthor} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={siteUrl + metaImagePath} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  type: 'website',
  keywords: ['Web Development', 'Freelancer', 'Front-End Developer', 'javascript', 'CSS', 'blog'],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['website', 'article']),
}

export default SEO
