module.exports = {
  siteMetadata: {
    title: `Blog | Jibin Thomas`,
    siteUrl: `https://blog.jibin.tech`,
    description: `Blog by Jibin Thomas`,
    author: `@jibin2706`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // for creating custom url for blog posts
    `gatsby-plugin-slug`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // markdown file are in that directory (/src/pages/)
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/src/pages/` },
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
              quality: 80,
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
        ],
      },
    },
    // google fonts plugin
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`400`, `900`],
          },
          {
            family: `Muli`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
