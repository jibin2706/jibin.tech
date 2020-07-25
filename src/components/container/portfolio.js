import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import BlogCard from '../common/BlogCard'
import ContactForm from '../common/ContactForm'

import './portfolio.scss'

function Portfolio() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { featured: { eq: true } } }, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              info
              date(formatString: "MMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <main className="portfolio">
      <section className="hero mw-800 mx-auto">
        <h1 className="hero__heading">Hi I'm Jibin Thomas</h1>
        <h2 className="hero__sub-heading">
          I’m a front-end developer, focused towards developing good looking websites with a primary focus on
          performance and future maintainability.
        </h2>
      </section>

      <section className="about-me">
        <div className="mw-800 mx-auto">
          <h2 className="portfolio__header">About Me</h2>
          <div className="about-me__description">
            <p>
              I'm a frontend developer based in Mumbai, India. I was born in 1998 and raised in Mumbai. I graduated from
              Wilson College in Bachelor of Science in Information Technology, tho everything that I know for the web is
              through self-learning.
            </p>
            <p>Currently, I'm working at Pepper Content as a Frontend Developer working on things that I love.</p>
            <p>
              While I'm not coding, you can find me playing chess or cricketing, reading fictional books, or binging on
              Netflix.
            </p>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="mw-800 mx-auto">
          <h2 className="portfolio__header">Work</h2>
          <div className="work__details">
            <h3>Pepper Content</h3>
            <div className="work__info">
              <h4>Frontend Developer</h4>
            </div>
          </div>
          <div className="work__details">
            <h3>The Souled Store</h3>
            <div className="work__info">
              <h4>Jr. Frontend Developer</h4>
            </div>
            <div>
              <ul className="work__responsibilites">
                <li>
                  Migrating the site from SPA into SSR using Next.js for boosting SEO and decreasing the first load
                  time.
                </li>
                <li>
                  Transformed the transactional and marketing email templates into improved designs, keeping in line
                  with the brand identity.
                </li>
                <li>Collaborated with the SEO team to remodel on-page SEO using best practices.</li>
                <li>
                  Created new APIs on Falcon (Python) and automate sitemap generation and order health status updates on
                  slack.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-posts ">
        <div className="mw-1800 mx-auto">
          <h2 className="portfolio__header">Featured Posts</h2>
          <div className="featured-posts__grid">
            {data.allMdx.edges.map(post => (
              <Link key={post.node.id} to={post.node.fields.slug}>
                <BlogCard
                  title={post.node.frontmatter.title}
                  description={post.node.frontmatter.info}
                  date={post.node.frontmatter.date}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-me">
        <div className="mw-800 mx-auto">
          <h2 className="portfolio__header">Contact Me</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default Portfolio
