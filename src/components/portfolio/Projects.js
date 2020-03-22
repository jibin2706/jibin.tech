import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './projects.scss'

function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            title
            stack
            source_link
            project_link
            description
          }
        }
      }
    }
  `)

  return (
    <section className="portfolio__section projects">
      <h2 className="portfolio__header">Projects</h2>
      <h3 className="portfolio__sub-header">Some fun projects that I have developed</h3>

      {data.allProjectsJson.edges.map(project => (
        <div className="project-container" key={project.node.title}>
          <h3 className="project-header">{project.node.title}</h3>
          <h4 className="project-stack">Tech Stack - {project.node.stack}</h4>
          {project.node.description && <p dangerouslySetInnerHTML={{ __html: project.node.description }} />}
          <div>
            {project.node.source_link && (
              <a className="project-links" href={project.node.source_link}>
                Source Code
              </a>
            )}
            {project.node.project_link && (
              <a className="project-links" href={project.node.project_link}>
                Link
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects
