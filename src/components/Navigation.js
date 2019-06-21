import React from 'react'

import './navigation.scss'

function Navigation() {
  return (
    <nav className="nav">
      <a className="nav__item" href="/">
        Home
      </a>
      <a className="nav__item" href="contact">
        Contact
      </a>
    </nav>
  )
}

export default Navigation
