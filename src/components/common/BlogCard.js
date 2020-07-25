import React from 'react'
import './blogcard.scss'

function BlogCard({ title, description, date }) {
  return (
    <div className="blog-card">
      <h3 className="blog-card__title">{title}</h3>
      <p className="blog-card__description">{description}</p>
      <span className="blog-card__meta">{date}</span>
    </div>
  )
}

export default BlogCard
