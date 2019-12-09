import React from "react"
import Layout from "../components/layout"
import constants from "./../data/constants"
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
                    if you're unable to see your services in the page above,
                    have no fear! There's good change we're able to work with
                    them Contact us to get in touch with a member of the team to
                    find out more.. &nbsp;
                    <a
                      href="http://192.168.10.128:8001/integration/"
                      className="link-design"
                    >
                      Contact Us
                    </a>
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
