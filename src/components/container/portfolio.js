import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import BlogCard from '../common/BlogCard'
import ContactForm from '../common/ContactForm'
import { workDetails } from './work'

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
        <h1 className="hero__heading">Hi, I'm Jibin Thomas</h1>
        <h2 className="hero__sub-heading">
          I'm a Frontend Developer who loves to build Web sites & applications with a strong focus on responsive
          designs, performance & future maintainability using the latest frontend technologies & best practices.
        </h2>
      </section>

      <section className="about-me">
        <div className="mw-800 mx-auto">
          <h2 className="portfolio__header">About Me</h2>
          <div className="about-me__description">
            <p>
              Hi, I'm Jibin Thomas. I'm a frontend developer based in Mumbai, India. Currently, I'm working as a Senior
              Frontend Developer at Pepper Content building Peppertype & marketing pages. Previously I worked at The
              Souled Store as a UI Developer.
            </p>
            <p>
              I'm passionate about web development and love to stay updated about the latest technology trends. Apart
              from programming, I love to play FPS games like Counter-Strike: Global Offensive & Valorant with my
              friends, read fictional books, and binge on TV series.
            </p>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="mw-800 mx-auto">
          <h2 className="portfolio__header">Work</h2>
          {workDetails.map(details => {
            return (
              <div className="work__details">
                <h3>{details.companyName}</h3>
                <div className="work__info">
                  <h4>{details.jobTitle}</h4>
                </div>
                <div>
                  <ul>
                    {details.contributions.map((contribution, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: contribution }} />
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="featured-posts ">
        <div className="mw-1800 mx-auto">
          <h2 className="portfolio__header">Featured Posts</h2>
          <div className="featured-posts__grid">
            {data.allMdx.edges.map(post => (
              <Link key={post.node.id} to={`/blog${post.node.fields.slug}`}>
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
