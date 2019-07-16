import React from 'react'
import { Link } from 'gatsby'
import Navigation from './Navigation'

import './header.scss'

const Header = () => (
  <header className="header">
    <Link to="/">
      <h1 className="header__title">Jibin Thomas</h1>
    </Link>
    <Navigation />
  </header>
)

export default Header
