import React from 'react'
import './quote.css'

function Quote({ phase, cite }) {
  return (
    <blockquote className="quote">
      {phase}
      {cite && <cite className="cite">{cite}</cite>}
    </blockquote>
  )
}

export default Quote
