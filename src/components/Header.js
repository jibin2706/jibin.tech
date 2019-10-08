import React from 'react'
import { Link } from 'gatsby'
import Navigation from './Navigation'
import Logo from '../images/Logo.png'

import './header.scss'

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="brand-logo" src={Logo} alt="Jibin Thomas" />
    </Link>
    <Navigation />
  </header>
)

export default Header
