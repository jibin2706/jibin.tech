import React from 'react'
import { Link } from 'gatsby'
import ToggleDarkButton from './toggleViewButton'

import './header.scss'

const Header = () => (
  <header id="header">
    <Link to="/">
      <h1 className="title">header</h1>
    </Link>
    <span className="toggle-button">
      <ToggleDarkButton />
    </span>
  </header>
)

export default Header
