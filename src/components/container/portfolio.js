import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import BlogCard from '../common/BlogCard'
import ContactForm from '../common/ContactForm'
import { workDetails } from './work'

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
      <section className="flex flex-col justify-center | min-h-screen max-w-3xl | px-6 py-20 md:py-40 mx-auto">
        <h1 className="font-serif font-normal text-primary-red text-3xl tracking-wide md:text-4xl | mb-2">
          Hi, I'm Jibin Thomas
        </h1>
        <h2 className="text-gray-200 text-xl !leading-snug md:text-2xl">
          I'm a Frontend Developer who loves to build Web sites & applications with a strong focus on responsive
          designs, performance & future maintainability using the latest frontend technologies & best practices.
        </h2>
      </section>

      <section className="bg-primary-blue | px-6 py-20 md:py-40">
        <div className="max-w-3xl | mx-auto">
          <SectionHeader text="About Me" />
          <div className="text-lg md:text-xl !leading-normal | space-y-8">
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

      <section className="bg-secondary-blue | px-6 py-20 md:py-40">
        <div className="max-w-3xl | mx-auto">
          <SectionHeader text="Work" />
          {workDetails.map(details => {
            return (
              <div className="mb-10">
                <h3 className="text-3xl font-bold | mb-1">{details.companyName}</h3>
                <h4 className="text-xl | mb-4">{details.jobTitle}</h4>
                <div>
                  <ul className="text-lg space-y-2">
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

      <section className="bg-primary-blue | px-6 py-20 md:py-40">
        <div className="max-w-7xl | mx-auto">
          <SectionHeader text="Featured Posts" />
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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

      <section className="bg-secondary-blue | px-6 py-20 md:py-40">
        <div className="max-w-3xl | mx-auto">
          <SectionHeader text="Contact Me" />
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

function SectionHeader({ text }) {
  return (
    <div className="inline-block relative | mb-8">
      <h2 className="text-3xl md:text-2xl lg:text-5xl font-serif">{text}</h2>
      <span className="absolute right-0 -bottom-1 | bg-primary-yellow | w-[80%] h-1" aria-hidden="true" />
    </div>
  )
}

export default Portfolio
