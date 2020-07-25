import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import '../styles/uses.scss'

function index() {
  return (
    <Layout>
      <SEO title="Uses" description="A page dedicated to the language/framework/tools and other stuff I use daily" />

      <main className="uses mw-800 mx-auto">
        <h1 className="uses-header">Things I use to get stuff done</h1>

        <div className="uses__grid">
          <section className="uses-section">
            <h2>Language</h2>
            <li>
              <span className="uses-subheader">CSS -</span> Either you love it or hate, guess which side I'm on
            </li>
            <li>
              <span className="uses-subheader">Javascript -</span> Daily driver
            </li>
            <li>
              <span className="uses-subheader">Python -</span> Who doesn't like 🐍
            </li>
            <li>
              <span className="uses-subheader">Java -</span> Did some native android development using it
            </li>
          </section>

          <section className="uses-section">
            <h2>Framework</h2>
            <li>
              <span className="uses-subheader">React -</span> Love it
            </li>
            <li>
              <span className="uses-subheader">Vue -</span> Always React first
            </li>
            <li>
              <span className="uses-subheader">Next.js -</span> SSR in React!
            </li>
            <li>
              <span className="uses-subheader">Flask -</span> Lately having my fair share of time working in backend
            </li>
          </section>

          <section className="uses-section">
            <h2>Gear</h2>
            <li>
              <span className="uses-subheader">Macbook Air -</span> Apple at work
            </li>
            <li>
              <span className="uses-subheader">Acer Aspire 5 -</span> Windows at home
            </li>
          </section>

          <section className="uses-section">
            <h2>Tools</h2>
            <li>
              <span className="uses-subheader">VSCode -</span> The best editor out there
            </li>
            <li>
              <span className="uses-subheader">Notion -</span> All my initial thoughts I write down here. This products
              keeps getting better and better
            </li>
            <li>
              <span className="uses-subheader">Figma -</span> For light design and tweaking stuff
            </li>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default index
