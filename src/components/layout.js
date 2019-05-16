import React from 'react'

import Footer from './footer'

const Layout = ({ children }) => (
  <div
    style={{ maxWidth: '680px', margin: 'auto', padding: '16px 16px 0 16px' }}
  >
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout
