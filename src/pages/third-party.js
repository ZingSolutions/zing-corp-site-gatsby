import React from "react"
import Layout from "../components/layout"
import "./third-party.scss"

export default () => {
  return (
    <Layout>
      <section className="section-hero">
        <div className="content-container">
          <div className="col-1">
            <h1>Third Party Licensing</h1>
            <p>This site makes use of the following resources detailed below</p>
          </div>
        </div>
      </section>
      <section className="section-attribution">
        <div className="content-container">
          <ul>
            <li>
              <span>Blog</span>
              <a
                href="https://www.vecteezy.com/free-vector/isometric"
                target="_blank"
                rel="noreferrer"
              >
                Isometric Vectors by Vecteezy
              </a>
            </li>
            <li>
              <span>Careers</span>
              <a
                href="https://www.vecteezy.com/free-vector/isometric"
                target="_blank"
                rel="noreferrer"
              >
                Isometric Vectors by Vecteezy
              </a>
            </li>
            <li>
              <span>Contact Us</span>
              <a
                href="https://www.vecteezy.com/free-vector/isometric"
                target="_blank"
                rel="noreferrer"
              >
                Isometric Vectors by Vecteezy
              </a>
            </li>
            <li>
              <span>Integrations</span>
              <a
                href="https://www.vecteezy.com/free-vector/isometric"
                target="_blank"
                rel="noreferrer"
              >
                Isometric Vectors by Vecteezy
              </a>
            </li>
            <li>
              <span>Privacy Policy</span>
              <a
                href="https://www.vecteezy.com/free-vector/isometric-people"
                target="_blank"
                rel="noreferrer"
              >
                Isometric People Vectors by Vecteezy
              </a>
            </li>
            <li>
              <span>Branding Guidelines</span>
              <a
                href="https://www.vecteezy.com/free-vector/team"
                target="_blank"
                rel="noreferrer"
              >
                Team Vectors by Vecteezy
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
