import React from 'react'
import { Link } from 'gatsby'
import ToggleDarkButton from './toggleViewButton'

import Logo from '../images/logo.png'
import './header.scss'

const Header = () => (
  <header className="header">
    <Link to="/">
      <img src={Logo} alt="home page" className="header__title" />
    </Link>
    <span className="toggle-button">
      <ToggleDarkButton />
    </span>
  </header>
)

export default Header
