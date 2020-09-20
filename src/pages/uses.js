import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import System from '../images/overall.jpg'
import '../styles/uses.scss'
import { Link } from 'gatsby'

function index() {
  return (
    <Layout>
      <SEO title="Uses" description="A page dedicated to the language/framework/tools and other stuff I use daily" />

      <main className="uses mw-1200 mx-auto">
        <h1 className="uses-header">Things I use to get stuff done</h1>

        <div className="uses__grid">
          <section className="uses-section pc">
            <div className="uses-subsection">
              <h2>My PC</h2>
              <li>AOC 24B2XH 23.8</li>
              <li>Ryzen 5 3600</li>
              <li>Galax GTX 1650 Super</li>
              <li>Asrock B450 SteelLegend Motherboard</li>
              <li>Gskill Ripjaws 3200mhz (2 * 8gb) RAM</li>
              <li>Corsair 110R cabinet</li>
              <li>Deepcool Gammaxx GTE V2</li>
              <Link to="/building-pc">Know more about the parts here</Link>
            </div>
            <img className="uses__image" src={System} alt="" />
          </section>
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
