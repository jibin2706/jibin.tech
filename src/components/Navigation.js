import React from 'react'
import { Link } from 'gatsby'
import ToggleThemeButton from './toggleViewButton'

import './navigation.scss'

function Navigation() {
  return (
    <nav className="nav">
      <Link className="nav__item" to="/">
        About
      </Link>
      <Link className="nav__item" to="/blog">
        Blog
      </Link>
      <Link className="nav__item" to="/contact/">
        Contact
      </Link>
      <ToggleThemeButton />
    </nav>
  )
}

export default Navigation
