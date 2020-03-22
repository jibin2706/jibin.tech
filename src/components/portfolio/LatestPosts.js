import React from 'react'
import { Link } from 'gatsby'

import './posts.scss'

function LatestPosts() {
  return (
    <section className="blog">
      <h2 className="portfolio__header">Latest Posts</h2>
      <h3 className="portfolio__sub-header">I write some stuff that I learn</h3>
      <div className="blog__container">
        <PostTemplate
          title="Next.js + Redux without disabling prerendering"
          url="preserve-prerendering-in-nextjs-when-using-redux/"
          date="Feb 02, 2020"
        />

        <PostTemplate title="2019 In Review" url="/2019-in-review/" date="Dec 30, 2019" />

        <PostTemplate title="Dark mode for the web" url="/detecting-dark-mode-in-your-web-apps/" date="Nov 24, 2019" />

        <PostTemplate
          title="Destructuring javascript objects into custom variables names and default values"
          url="/destructuring-assignment-of-objects-in-javascipt/"
          date="Oct 19, 2019"
        />

        <PostTemplate
          title="Getting started with Git - Part 1"
          url="/getting-started-with-git-part-1/"
          date="Sept 21, 2019"
        />

        <PostTemplate
          title="Different ways to get your react project started"
          url="/ways-to-get-your-react-project-started/"
          date="Sept 12, 2019"
        />

        <PostTemplate
          title="Difference between forEach and map in javascript"
          url="/difference-between-forEach-and-map-in-javascript/"
          date="Aug 24, 2019"
        />

        <PostTemplate title="Next.js + Redux" url="/nextjs+redux/" date="Aug 11, 2019" />

        <p>
          Read more such
          <Link to="/blog/"> post here</Link>
        </p>
      </div>
    </section>
  )
}

function PostTemplate({ title, url, date }) {
  return (
    <p className="post">
      <Link to={url} className="link">
        {title}
      </Link>
      <span className="date">Posted on {date}</span>
    </p>
  )
}

export default LatestPosts
