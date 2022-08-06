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
    `gatsby-transformer-json`,
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
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
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
              allMdx(
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
    // transforming mdx to html
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
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
          // adding id to headers in markdown
          // {
          //   resolve: `gatsby-remark-autolink-headers`,
          //   options: {
          //     maintainCase: false,
          //     removeAccents: true,
          //     icon: `<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path d="M22.548 9l.452-2h-5.364l1.364-6h-2l-1.364 6h-5l1.364-6h-2l-1.364 6h-6.184l-.452 2h6.182l-1.364 6h-5.36l-.458 2h5.364l-1.364 6h2l1.364-6h5l-1.364 6h2l1.364-6h6.185l.451-2h-6.182l1.364-6h5.366zm-8.73 6h-5l1.364-6h5l-1.364 6z"/></svg>`,
          //   },
          // },
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
