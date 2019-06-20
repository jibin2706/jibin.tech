import React from 'react'

import './footer.scss'

function Footer() {
  return (
    <>
      <footer>
        <section className="social">
          <a href="https://github.com/jibin2706">Github</a>
          <a href="https://twitter.com/real_jibin">Twitter</a>
          <a href="https://www.linkedin.com/in/jibin2706/">LinkedIn</a>
          <a href="https://blog.jibin.tech/rss.xml">RSS feed</a>
        </section>

        <div className="footer-info">
          <p>Coded by hand and headaches</p>
          <p class="footer-end">
            This site is built with{' '}
            <a href="https://gatsbyjs.org/">Gatsby.js </a>. The source code is
            hosted on{' '}
            <a href="https://github.com/jibin2706/blog.jibin.tech">Github</a>.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
