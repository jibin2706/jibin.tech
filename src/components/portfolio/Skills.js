import React from 'react'

import html from '../../images/tech/html-5.svg'
import css from '../../images/tech/css-3.svg'
import javascript from '../../images/tech/javascript.svg'
import react from '../../images/tech/react.svg'
import sass from '../../images/tech/sass.svg'
import python from '../../images/tech/python.svg'

import './skills.scss'

function Skills() {
  return (
    <section className="portfolio__section skills">
      <h2 className="portfolio__header">Skills</h2>
      <h3 className="portfolio__sub-header">Technologies that I use currently</h3>
      <div className="g-3">
        <img className="skills__img" src={html} alt="HTML" title="HTML" />
        <img className="skills__img" src={css} alt="CSS3" title="CSS3" />
        <img className="skills__img" src={javascript} alt="Javscript" title="Javscript" />
      </div>
      <div className="g-3">
        <img className="skills__img" src={react} alt="React.js" title="React.js" />
        <img className="skills__img" src={sass} alt="SCSS" title="SCSS" />
        <img className="skills__img" src={python} alt="Python" title="Python" />
      </div>
    </section>
  )
}

export default Skills
