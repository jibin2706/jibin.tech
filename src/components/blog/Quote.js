import React from 'react'
import './quote.scss'

function Quote({ phase, cite }) {
  return (
    <blockquote className="quote">
      {phase}
      {cite && <cite className="cite">{cite}</cite>}
    </blockquote>
  )
}

export default Quote
