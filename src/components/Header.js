import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { throttle } from 'lodash'
import Navigation from './Navigation'
import Logo from '../images/Logo.png'

import './header.scss'

function Header() {
  const header = useRef()

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(function(e) {
        console.log(document.body.getBoundingClientRect())
        if (document.body.getBoundingClientRect().y < -10) {
          header.current && header.current.classList.add('header--scroll')
        } else {
          header.current && header.current.classList.remove('header--scroll')
        }
      }, 250)
    )
  }, [])

  return (
    <header className="header" id="header" ref={header}>
      <div className="header__container">
        <Link to="/">
          <img
            className="brand-logo"
            src={Logo}
            alt="Jibin Thomas"
            title="Jibin Thomas"
          />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
