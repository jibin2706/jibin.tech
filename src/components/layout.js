import React from 'react'
import Header from './Header/Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Header />
    <div>{children}</div>
    <Footer />
  </>
)

export default Layout
