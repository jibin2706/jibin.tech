import React from 'react'

import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div
    style={{
      maxWidth: '800px',
      margin: 'auto',
      padding: '1rem',
      overflow: 'hidden',
    }}
  >
    <Header />
    <Navigation />
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout
