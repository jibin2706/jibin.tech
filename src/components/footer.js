import React from 'react'

import './footer.scss'

function Footer() {
  return (
    <footer>
      <hr style={{ maxWidth: '800px', margin: '16px auto' }} />
      <div className="social">
        <a href="https://github.com/jibin2706">Github</a>
        <a href="https://twitter.com/real_jibin">Twitter</a>
        <a href="https://www.linkedin.com/in/jibin-thomas-4b3496142/">
          LinkedIn
        </a>
        <a href="https://blog.jibin.tech/rss.xml">RSS feed</a>
      </div>
      <div className="footer-info">
        <p>© - Coded by hand and headaches</p>
        <p>Powered by Gatsby.js</p>
      </div>
    </footer>
  )
}

export default Footer
