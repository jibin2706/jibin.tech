import React, { useState, useEffect, useRef, Fragment } from 'react'
import { Link } from 'gatsby'

import './navigation.css'
import * as styles from './navigation.module.css'

const navItems = [
  {
    name: 'Home',
    slug: '/',
  },
  {
    name: 'Blog',
    slug: '/blog/',
  },
  {
    name: 'Contact',
    slug: '/contact/',
  },
]

function Navigation() {
  return (
    <Fragment>
      <DesktopNavigation />
      <MobileNavigation />
    </Fragment>
  )
}

function DesktopNavigation() {
  return (
    <nav id="nav-desktop" className="hidden sm:flex">
      {navItems.map(item => (
        <Link
          key={item.slug}
          to={item.slug}
          className="relative | font-bold text-xl text-gray-400 | px-1 ml-12"
          activeClassName={`${styles.activeNav} | text-gray-100`}
        >
          <span>{item.name}</span>
          <span
            className="decorator hidden absolute left-1 -bottom-1 | bg-primary-yellow | w-[75%] h-0.5"
            aria-hidden="true"
          />
        </Link>
      ))}
    </nav>
  )
}

function MobileNavigation() {
  const [isSidebarOpen, toggleSidebar] = useState(false)
  const mobileNavLinks = useRef(null)

  useEffect(() => {
    const navbar = document.getElementById('nav-mobile')
    const checkbox = document.getElementById('checkbox1')

    if (isSidebarOpen) {
      navbar.classList.add('tap')
      document.documentElement.style.overflow = 'hidden'
      checkbox.checked = true
    } else {
      navbar.classList.remove('tap')
      document.documentElement.style.overflow = 'auto'
      checkbox.checked = false
    }
  }, [isSidebarOpen])

  return (
    <Fragment>
      <input
        type="checkbox"
        id="checkbox1"
        aria-label="Toggle Sidemenu on Mobile"
        className="checkbox1 visuallyHidden"
        onChange={() => toggleSidebar(!isSidebarOpen)}
      />
      <label
        htmlFor="checkbox1"
        aria-labelledby="checkbox1"
        aria-label="toggle navigation"
        id="hamburger"
        className="sm:hidden"
        style={{ '-webkit-tap-highlight-color': 'transparent' }}
      >
        <div className="hamburger">
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
          <span className="bar bar4" />
        </div>
      </label>

      <nav id="nav-mobile" className="sm:hidden">
        <div className="flex flex-col | bg-primary-blue | rounded-lg shadow-xl | p-4 pt-20" ref={mobileNavLinks}>
          {navItems.map(item => (
            <Link
              key={item.slug}
              to={item.slug}
              className="inline-block relative | font-bold text-2xl text-gray-400 | w-fit | px-1 mb-6"
              activeClassName={`${styles.activeNav} | text-gray-100`}
            >
              {item.name}
              <span
                className="decorator absolute left-1 bottom-0 hidden | bg-primary-yellow | w-[80%] h-1"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </nav>
    </Fragment>
  )
}

export default Navigation
