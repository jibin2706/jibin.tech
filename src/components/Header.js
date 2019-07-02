import React from 'react'
import { Link } from 'gatsby'
import ToggleDarkButton from './toggleViewButton'

import './header.scss'

const Header = () => (
  <header className="header">
    <Link to="/">
      <h1 className="header__title">Jibin Thomas</h1>
    </Link>
    <span className="toggle-button">
      <ToggleDarkButton />
    </span>
  </header>
)

export default Header
