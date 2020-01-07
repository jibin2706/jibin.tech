import React from 'react'

import './Projects.scss'

function Projects() {
  return (
    <section className="portfolio__section projects">
      <h2 className="portfolio__header">Projects</h2>
      <h3 className="portfolio__sub-header">Some fun projects that I have developed</h3>
      <div className="project-container">
        <h3 className="project-header">Portfolio + Blog</h3>
        <h4 className="project-stack">Tech Stack - Gatsby (React.js), SCSS</h4>
        <a className="project-links" href="https://github.com/jibin2706/jibin.tech">
          Source Code
        </a>
      </div>

      <div className="project-container">
        <h3 className="project-header">Backslash Fest Website</h3>
        <h4 className="project-stack">Tech Stack - HTML5, CSS3, jQuery</h4>
        <a className="project-links" href="https://github.com/jibin2706/backslash">
          Source Code
        </a>
      </div>

      <div className="project-container">
        <h3 className="project-header">Park Finder</h3>
        <h4 className="project-stack">Tech Stack - Java (Native Android App), Firebase</h4>
      </div>
    </section>
  )
}

export default Projects
