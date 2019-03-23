import React from 'react'
import ToggleDarkButton from './toggleViewButton'

import './header.scss'

const Header = () => (
  <header id="header">
    <h1 className="title">header</h1>
    <span className="toggle-button">
      <ToggleDarkButton />
    </span>
  </header>
)

export default Header
