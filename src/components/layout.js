import React from 'react'
import { PoseGroup } from 'react-pose'

import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Transition from './Transition'

const Layout = ({ children, location }) => (
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
    <PoseGroup>
      <Transition key={location.pathname}>
        <div>{children}</div>
      </Transition>
    </PoseGroup>
    <Footer />
  </div>
)

export default Layout
