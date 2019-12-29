import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '0 1rem',
        overflow: 'hidden',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jibin Thomas",
          "email": "jibin.thomas2706@gmail.com",
          "image": "https://drive.google.com/uc?id=1DWBWax_DJCH-oetqBRxYzWGul2ZDcTak",
          "url": "http://jibin.tech",
          "jobTitle": "Front End Developer",
          "gender": "http://schema.org/Male",
          "sameAs": [
            "https://github.com/jibin2706",
            "https://www.linkedin.com/in/jibin2706/",
            "http://instagram.com/jibin2706",
            "https://twitter.com/real_jibin",
            "https://blog.jibin.tech/rss.xml"
          ]
        }`,
        }}
      />
      <div>{children}</div>
    </div>
    <Footer />
  </>
)

export default Layout
