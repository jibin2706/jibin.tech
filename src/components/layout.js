import React from 'react'

import Header from './header'
import Footer from './footer'

import './layout.css'
import './style.scss'

const Layout = ({ children }) => (
  <>
    <Header />
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

export default Layout
