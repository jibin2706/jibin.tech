import React from 'react'

import Header from './header'
import Footer from './footer'

import './layout.css'
import './colors.scss'

const Layout = ({ children }) => (
  <div style={{ maxWidth: '680px', margin: 'auto', padding: '16px' }}>
    <Header />
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  </div>
)

export default Layout
