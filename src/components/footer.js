import React from 'react'
import instagram from '../images/4372354761555590083.svg'
import github from '../images/github.svg'
import rss from '../images/rss.svg'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'

import './footer.scss'

function Footer() {
  return (
    <footer>
      <hr style={{ maxWidth: '800px', margin: '16px auto' }} />
      <div className="social">
        <a href="https://twitter.com/real_jibin">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/jibin-thomas-4b3496142/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/jibin2706/">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://github.com/jibin2706">
          <img src={github} alt="github" />
        </a>
        <a href="./rss.xml">
          <img src={rss} alt="rss" />
        </a>
      </div>
      <div className="footer-info">
        <p>© - Coded by hand and headaches</p>
        <p>Powered by Gatsby.js</p>
      </div>
    </footer>
  )
}

export default Footer
