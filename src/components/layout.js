import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        maxWidth: '700px',
        margin: 'auto',
        padding: '1rem',
        overflow: 'hidden',
      }}
    >
      <div>{children}</div>
      <Footer />
    </div>
  </>
)

export default Layout
