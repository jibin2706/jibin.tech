module.exports = {
  siteMetadata: {
    title: `Jibin Thomas`,
    siteUrl: `https://jibin.tech`,
    description: `I mainly write about web technologies like react, javascript, css and random stuffs that I come across while programming`,
    author: {
      name: `Jibin Thomas`,
    },
    social: {
      twitter: '@real_jibin',
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-twitter`,
    // sitemap generation
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ['/success', '/tags/*'],
      },
    },
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
                <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at blog.jibin.tech . You can read it online by <a href="${
                  siteUrl + edge.node.fields.slug
                }">clicking here</a>.)</div>
              `
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } },
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
    // blog posts are in `/content/blog/`
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `blog`, path: `${__dirname}/content/blog` },
    },
    // json data
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `data`, path: `${__dirname}/src/data/` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jibin Thomas`,
        short_name: `Jibin Thomas`,
        start_url: `/`,
        background_color: `#F1F1F1`,
        theme_color: `#F1F1F1`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    // ga4
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-BW9N348CTR'],
        pluginConfig: {
          head: true,
        },
      },
    },
    // transforming markdown to html
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // using images in markdown file
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              quality: 100,
              withWebp: true,
            },
          },
          // code highlighting
          'gatsby-remark-code-titles',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
          // copying gif and other files
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: '#035388',
        showSpinner: false,
        trickleSpeed: 400,
      },
    },
  ],
}
