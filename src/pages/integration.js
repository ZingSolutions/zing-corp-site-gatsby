import React from "react"
import Layout from "../components/layout"
import constants from "./../data/constants"
import { Link } from "gatsby"
import "./integration.scss"

export default class Services extends React.Component {
  render() {
    const styles = {
      backgroundImage: "url('/images/integrations-page.jpg')",
    }
    const inteGration = [...constants.inteGration]

    let inteGrationComponent = null
    if (inteGration.length > 0) {
      inteGrationComponent = (
        <section className="ingration-section">
          <div className="content-container">
            <ul>
              {inteGration.map((Services, key) => {
                const {
                  images: { image },
                  link,
                } = Services
                return (
                  <li key={key}>
                    <a target="_blank" href={link} rel="noopener noreferrer">
                      <img src={image} alt="" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )
    }

    return (
      <Layout>
        <main>
          <section className="section-hero inner-banner-outer" id="about">
            <div className="content-container">
              <div className="inner-banner">
                <h1>Integrations</h1>
              </div>
            </div>
          </section>
          {inteGrationComponent}
          <section className="section-casestudy-info">
            <div className="casestudy-info-content" style={styles}>
              <div className="content-container">
                <div className="casestudy-outer">
                  <h2>
                    Interested in integrating Twilio to your business services?
                  </h2>
                  <p>
                    <Link to="/contact-us/" className="link-design">
                      Contact Us
                    </Link>
                    to get in touch with a member of the team. &nbsp;
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}
