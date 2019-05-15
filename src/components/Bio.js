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
  <header id="header">
    <Link to="/">
      <h1 className="title index-header">Blog Title</h1>
    </Link>
    <span className="toggle-button">
      <ToggleDarkButton />
    </span>
  </header>
)

const BlogHeader = () => (
  <header id="header">
    <Link to="/">
      <h1 className="title blog-header">Blog Title</h1>
    </Link>
    <span className="toggle-button">
      <ToggleDarkButton />
    </span>
  </header>
)

export default Bio
