import React from "react"
import Layout from "../components/layout"
import constants from "./../data/constants"
import "./case-study.scss"

export default class caseStudy extends React.Component {
  render() {
    const styles = {
      backgroundImage: "url('/images/Case-study.jpg')",
    }
    const caseStudies = [...constants.caseStudies]

    let caseStudiesComponent = null
    if (caseStudies.length > 0) {
      caseStudiesComponent = (
        <section className="section-casestudy-listing white-bg">
          <div className="content-container">
            <ul>
              {caseStudies.map((caseStudy, key) => {
                const {
                  images: { image, logo },
                  studyInfo: { title, description },
                } = caseStudy
                return (
                  <li key={key}>
                    <div className="study-img">
                      <img src={image} alt="" />
                      <i>
                        <img src={logo} alt="" />
                      </i>
                    </div>
                    <div className="casestudy-info">
                      <h4>{title}</h4>
                      <p>{description} </p>
                    </div>
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
              <div className="inner-banner case-study-banner">
                <h3>Here at Zing, the proof is in</h3>
                <h1>the pudding</h1>
                <h5>Pudding aside, we've created some pretty cool stuff.</h5>
              </div>
            </div>
          </section>

          <section
            className="section-global-enterprises"
            id="global-enterprises"
          >
            <div className="content-container">
              <div className="new-content-header">
                <i>
                  <img src="/images/logo-icon.png" alt="" />
                </i>

                <h2>
                  Explore what 150,000+ of your peers, <br /> from startups to
                  global enterprises, have built with Twilio.{" "}
                </h2>
                <p>
                  Zing is part of the Sputnik Group of Companies, formed after
                  the MBO of ProspectSoft, by Andrew Ardron and backed by Maven
                  Private Equity in 2017.
                </p>
                <p>
                  ProspectSoft, is the leading provider of SaaS CRM systems
                  designed for the Wholesale, Distribution and Manufacturing
                  sectors.{" "}
                </p>
              </div>
            </div>
          </section>

          {caseStudiesComponent}

          <section className="section-casestudy-info">
            <div className="casestudy-info-content" style={styles}>
              <div className="content-container">
                <div className="casestudy-outer">
                  <h2>
                    Aliquam cursus, metus dignissim blandit venenatis, neque
                    nibh vehicula ante,
                  </h2>
                  <p>
                    Morbi egestas, leo eget elementum mattis, felis leo ultrices
                    odio, vel ornare ante est vitae quam. Cras sem lectus,
                    auctor ut arcu id, porttitor dapibus turpis.a
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
