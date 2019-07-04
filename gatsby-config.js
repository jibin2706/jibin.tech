module.exports = {
  siteMetadata: {
    title: `Blog — Jibin Thomas`,
    siteUrl: `https://blog.jibin.tech`,
    description: `I mainly write about stuffs that I come across while programming`,
    author: `@real_jibin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // sitemap generation
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/success'],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // rss feed at /rss.xml
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        // this base query will be merged with any queries in each feed
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const siteUrl = site.siteMetadata.siteUrl
                const postText = `
                <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at blog.jibin.tech . You can read it online by <a href="${siteUrl +
                  edge.node.fields.slug}">clicking here</a>.)</div>
              `
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    { 'content:encoded': edge.node.html + postText },
                  ],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Jibin Thomas' Personal Blog RSS Feed",
          },
        ],
      },
    },
    // markdown file are in that directory (/content/)
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `blog`, path: `${__dirname}/content/blog` },
    },
    // transforming markdown in html
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog by Jibin Thomas`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#F1F1F1`,
        theme_color: `#F1F1F1`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    // google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-133322442-4',
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    // using images in markdown file
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              quality: 100,
              withWebp: true,
              tracedSVG: true,
            },
          },
          // code highlighting
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-js',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          // copying gif and other files
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
