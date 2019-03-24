import React from 'react'

import './footer.scss'

function Footer() {
  return (
    <footer>
      <hr style={{ maxWidth: '800px', margin: '16px auto' }} />
      <div className="social">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">Github</a>
      </div>
      <div className="footer-info">
        <p>© - Coded by hand and headaches</p>
        <p>Powered by Gatsby.js</p>
      </div>
    </footer>
  )
}

export default Footer
