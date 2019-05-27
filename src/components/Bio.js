import React from 'react'
import { Link } from 'gatsby'
import ToggleDarkButton from './toggleViewButton'

import './bio.scss'

const Bio = ({ isHomePage }) => {
  if (isHomePage) {
    return <IndexHeader />
  } else {
    return <BlogHeader />
  }
}

const IndexHeader = () => (
  <header id="index-header">
    <Link to="/">
      <h1 className="title">Jibin Thomas</h1>
    </Link>
    <span className="toggle-button">
      <ToggleDarkButton />
    </span>
  </header>
)

const BlogHeader = () => (
  <header id="blog-header">
    <Link to="/">
      <h1 className="title">Jibin Thomas</h1>
    </Link>
    <span className="toggle-button">
      <ToggleDarkButton />
    </span>
  </header>
)

export default Bio
