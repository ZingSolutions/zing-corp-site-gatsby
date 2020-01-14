import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Service from "../components/service"
import constants from "../data/constants"
import "./services.scss"

export default class Services extends React.Component {
  render() {
    const styles = {
      backgroundImage: "url('/images/Services-image.jpg')",
    }
    const services = [...constants.services]
    const serviceOffers = [...constants.serviceOffers]
    return (
      <Layout>
        <main>
          <section className="section-hero inner-banner-outer" id="privacy">
            <div className="content-container">
              <div className="inner-banner">
                <h1>Services</h1>
                <h5>The ins and outs of what we do and how we do it</h5>
              </div>
            </div>
          </section>
          <section className="section-what-we-do gray-bg" id="what-we-do">
            <div className="content-container">
              <div className="content-header">
                <h2 className="header-text title-red">What We Do</h2>
                <p>
                  We Focus on Customer Communications and Workforce Mobility
                </p>
              </div>
              <div className="content-body-path">
                {services.map((service, index) => {
                  const mode = index % 2 === 0 ? "left" : "right"
                  return (
                    <Service
                      key={index}
                      service={service}
                      mode={mode}
                    ></Service>
                  )
                })}
              </div>
            </div>
          </section>

          {serviceOffers.length > 0 ? (
            <section
              className="section-how-we-do-it white-bg"
              id="how-we-do-it"
            >
              <div className="content-container line-break">
                <div className="new-content-header">
                  <h2 className="header-text">How We Do It</h2>
                  <p>What we can offer you</p>
                </div>
                <ul>
                  {serviceOffers.map((offer, index) => {
                    const {
                      title: { line1, line2 },
                      description,
                    } = offer
                    return (
                      <li key={index}>
                        <h3>
                          {line1}
                          <br />
                          {line2}
                        </h3>
                        <p>{description}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </section>
          ) : (
            ""
          )}

          <section className="section-casestudy-info">
            <div className="casestudy-info-content" style={styles}>
              <div className="content-container">
                <div className="casestudy-outer">
                  <h2>
                    Interested in how Zing can integrate Twilio in your
                    business?
                  </h2>
                  <p>
                    <Link to="/contact-us" className="link-design">
                      Contact Us
                    </Link>{" "}
                    to get in touch with a member of the team.
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
