## How to get started?

1.  Clone the repository
2.  `npm install`
3.  `npm run start` to start the development server
    or

    `npm run build` to develop the production build. The source files will be in the public directory.

## Adding post to the blog

All the post resides in the `src/pages/<folder-name>`

Create a folder and markdown file named index.md

## Structure of the blog post `index.md`

**Basic structure example**

```
---
title: 'title of the post'
data: '2019-04-01'
path: '/url-of-the-post'
info: 'short info which will be displayed on the homepage below blog title'
---

Here you should start writing you post
```

## Adding Google Analytics

Edit tracking Id with your Google Anaytics tracking ID

There are many more parameter that you can set. For more info [visit here](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/?=analy)

## Adding Sitemap

Add your site url in `gatsby.config.js` file

```
module.export = {
    siteMetadata: {
        siteUrl: `https://www.example.com`,
        ...
    },
    ...
}
```
