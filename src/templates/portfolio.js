import React from 'react'

import Skills from '../components/portfolio/Skills'
import Projects from '../components/portfolio/Projects'
import LatestPosts from '../components/portfolio/LatestPosts'

import './portfolio.scss'

function portfolio() {
  return (
    <main className="portfolio">
      <section className="hero">
        <h1 className="hero__heading">Hi, I'm Jibin Thomas</h1>
        <h2 className="hero__sub-heading">
          I’m a front-end developer, directed towards developing good looking websites with a primary focus on
          performance and future maintainability.
        </h2>
      </section>

      <Skills />
      <Projects />
      <LatestPosts />
    </main>
  )
}

export default portfolio
