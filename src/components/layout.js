import React from 'react'

import Footer from './footer'

const Layout = ({ children }) => (
  <div
    style={{
      maxWidth: '800px',
      margin: 'auto',
      padding: '1rem',
      overflow: 'hidden',
    }}
  >
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout
