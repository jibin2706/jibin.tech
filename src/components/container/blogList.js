import React from 'react'
import { Link } from 'gatsby'

const BlogList = ({ data, templateTitle }) => {
  let blog = data.allMdx.edges
  return (
    <div className="max-w-6xl | mx-auto md:mt-40">
      <section className="text-gray-100 text-center | mb-8">
        {templateTitle === 'Articles' ? (
          <h1 className="text-xl tracking-wider sm:text-2xl">
            Articles
            <span className="block | text-base tracking-normal sm:text-lg | mt-1">
              I write about random stuff that I come across while developing for the web.
            </span>
          </h1>
        ) : (
          <h1 className="text-xl tracking-wider sm:text-2xl">{templateTitle}</h1>
        )}
      </section>

      <main className="grid md:grid-cols-2 gap-8 | p-4">
        {blog.map(({ node }) => {
          let { id, frontmatter, fields } = node
          let { title, date, info } = frontmatter
          let { slug } = fields

          return (
            <Link to={`/blog${slug}`} key={id}>
              <article className="border border-gray-500 rounded-lg | h-full | px-5 py-8">
                <h2 className="inline-block | text-xl font-bold | mb-4">{title}</h2>
                <p className="text-lg text-gray-400 | mb-4">{info}</p>
                <div className="text-sm text-gray-400 uppercase">{date}</div>
              </article>
            </Link>
          )
        })}
      </main>
    </div>
  )
}

export default BlogList
