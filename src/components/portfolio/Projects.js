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
            image
          }
        }
      }
    }
  `)

  return (
    <section className="portfolio__section mw-1200 mx-auto">
      <h2 className="portfolio__header">Projects</h2>
      <h3 className="portfolio__sub-header">Some fun projects that I have developed</h3>

      <div className="grid-desktop--2">
        {data.allProjectsJson.edges.map((project) => (
          <div className="project-container" key={project.node.title}>
            {project.node.image && (
              <img className="project-image" src={require(`../../images/projects/${project.node.image}`)} alt="" />
            )}
            <div className="project-header">
              <h3 className="project-heading">{project.node.title}</h3>
              <div>
                {project.node.source_link && (
                  <a className="project-links hero__social" href={project.node.source_link}>
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>GitHub icon</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                )}
                {project.node.project_link && (
                  <a className="project-links hero__social" href={project.node.project_link}>
                    <svg role="img" viewBox="0 0 24 24">
                      <path d="M6.188 8.719a6.446 6.446 0 011.444-1.087c2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245a3.385 3.385 0 00-3.834-1.949 3.33 3.33 0 00-1.633.898L4.06 15.201a3.355 3.355 0 000 4.74 3.355 3.355 0 004.74 0l1.327-1.327a8.533 8.533 0 003.779.575l-2.929 2.929a6.43 6.43 0 11-9.093-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929a8.534 8.534 0 013.779.574L15.2 4.06a3.355 3.355 0 014.74 0 3.355 3.355 0 010 4.74l-4.305 4.305a3.358 3.358 0 01-4.74 0 3.567 3.567 0 01-.727-1.051l-2.246 2.245c.236.358.481.667.796.982a6.404 6.404 0 003.036 1.704 6.441 6.441 0 004.613-.617 6.446 6.446 0 001.444-1.087l4.304-4.305a6.429 6.429 0 10-9.091-9.093z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            {project.node.description && (
              <p className="project-description" dangerouslySetInnerHTML={{ __html: project.node.description }} />
            )}
            <h4 className="project-stack">
              {project.node.stack.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
