import React from 'react'

import './footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__social">
        <a href="https://github.com/jibin2706">Github</a>
        <a href="https://twitter.com/real_jibin">Twitter</a>
        <a href="https://www.linkedin.com/in/jibin2706/">LinkedIn</a>
        <a href="https://blog.jibin.tech/rss.xml">RSS feed</a>
      </section>

      <section>
        <p className="footer__copyright">Ⓒ - Coded by hand and headaches</p>
        <p className="footer__end">
          This site is built with <a href="https://gatsbyjs.org/">Gatsby.js </a>
          . The source code is hosted on{' '}
          <a href="https://github.com/jibin2706/blog.jibin.tech">Github</a>.
        </p>
      </section>
    </footer>
  )
}

export default Footer
