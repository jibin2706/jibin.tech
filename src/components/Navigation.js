import React from 'react'
import { Link } from 'gatsby'

import './navigation.scss'

function Navigation() {
  return (
    <nav className="nav">
      <Link className="nav__item" to="/">
        Home
      </Link>
      <Link className="nav__item" to="/contact/">
        Contact
      </Link>
    </nav>
  )
}

export default Navigation
