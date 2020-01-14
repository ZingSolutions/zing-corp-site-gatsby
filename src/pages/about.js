import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "./about.scss"

export default class Services extends React.Component {
  render() {
    const styles = {
      backgroundImage: "url('/images/About-us-page.jpg')",
    }

    const attribution = (
      <div className="icon-ref">
        Icons made by{" "}
        <strong>
          <a
            href="https://www.flaticon.com/authors/alfredo-hernandez"
            title="Alfredo Hernandez "
          >
            Alfredo Hernandez{" "}
          </a>
        </strong>{" "}
        from{" "}
        <strong>
          <a href="https://www.flaticon.com/" title="Flaticon">
            Flat icon
          </a>
        </strong>
      </div>
    )

    return (
      <Layout attributions={[attribution]}>
        <main>
          <section className="section-hero inner-banner-outer" id="about">
            <div className="content-container">
              <div className="inner-banner">
                <h1>About Us</h1>
                <p>A little background on us Zingers</p>
              </div>
            </div>
          </section>
          <section
            className="section-about-us section-our-mission"
            id="zing-and-twilio"
          >
            <div className="content-container">
              <div className="home-page-content">
                <h2 className="subtitle">Our Mission</h2>

                <p>
                  To Help Our Customers Discover True Value Through Twilio’s
                  Cloud Communications Platform
                </p>
              </div>
            </div>
          </section>

          <section className="section-our-values">
            <div className="content-container">
              <div className="new-content-header">
                <i>
                  <img src="/images/logo-icon.png" alt="" />
                </i>
                <h2 className="subtitle no-red"> Our Values</h2>
                <hr></hr>
              </div>

              <ul>
                <li>
                  <i>
                    <img src="/images/inquistive-icon.svg" alt="" />
                  </i>
                  <h3>
                    Inquisitive
                    <span></span>
                  </h3>
                  <p>
                    Driven to learn. We’re fascinated by the process of
                    discovery and how to unlock value. This is reflected in our
                    continuous investigation into new techniques and
                    technologies.
                  </p>
                </li>
                <li>
                  <i>
                    <img src="/images/relentless-icon.svg" alt="" />
                  </i>
                  <h3>
                    Relentless
                    <span></span>
                  </h3>
                  <p>
                    We’re intellectually restless and continually ready to
                    question the perceived norm. Our customers aren’t just
                    looking for another app. They want a development partner to
                    help them disrupt and challenge their markets.
                  </p>
                </li>
                <li>
                  <i>
                    <img src="/images/energetic-icon.svg" alt="" />
                  </i>
                  <h3>
                    Energetic
                    <span></span>
                  </h3>
                  <p>
                    It’s in our name: Zing. We’re energetic, enthusiastic and
                    lively and always on the move. We bring this energy to
                    everything that we do and it’s reflected in every aspect of
                    our communications.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className="section-our-story">
            <div className="content-container">
              <div className="ourstory-title">
                <h2>Our Story</h2>
                <hr></hr>
              </div>
              <div className="ourstory-img">
                <img
                  src="/images/our-story.jpg"
                  alt="The early Zing team at Signal 2019"
                />
                <span>The early Zing team at Signal 2019</span>
              </div>

              <div className="ourstory-info text-area-1">
                <h4>Putting The Zing in AmaZing: it was perfect.</h4>
                <p>
                  Zing is part of the Sputnik Group of Companies, formed after
                  the MBO of <a href="https://prospectsoft.com">ProspectSoft</a>
                  , by{" "}
                  <a href="https://linkedin.com/in/andrewardron/">
                    Andrew Ardron
                  </a>{" "}
                  and backed by{" "}
                  <a href="https://mavencp.com/">Maven Private Equity</a> in
                  2017.
                </p>
                <p>
                  <a href="https://prospectsoft.com">ProspectSoft</a>, is the
                  leading provider of SaaS CRM systems designed for the
                  Wholesale, Distribution and Manufacturing sectors.
                </p>
                <p>
                  In 2017,{" "}
                  <a href="https://linkedin.com/in/jonathanpbrewer/">
                    Jonathan Brewer
                  </a>
                  , working as{" "}
                  <a href="https://prospectsoft.com">ProspectSoft's</a> Client
                  Services Director, had the vision to see that by combining the
                  agile development techniques that he’d introduced to the
                  business with the power of cloud-based technologies like{" "}
                  <a href="https://twilio.com">Twilio</a>, they could rapidly
                  deliver exceptional value to several of their existing
                  customers.
                </p>
              </div>
              <div className="ourstory-info text-area-2">
                <p>
                  Opportunity, Delivery, Shareholder backing: the business was
                  born. But it still didn’t have a name. However, whilst at a{" "}
                  <a href="https://twilio.com">Twilio</a> Conference in San
                  Francisco,{" "}
                  <a href="https://linkedin.com/in/jonathanpbrewer/">
                    Jonathan
                  </a>{" "}
                  walked into an after-party and he had it: Zing.
                </p>
                <p>
                  By mid-2019, with almost 20 Zingers on the team and a
                  strengthening pipeline of new business opportunities,{" "}
                  <a href="https://linkedin.com/in/jhucker">Julian Hucker</a>,
                  the co-founder of Esendex, joined as Business Development
                  Director to help drive the next stage of Zing’s growth.
                </p>
                <p>
                  In Jan 2020 Zing Dev Limited was set up as a business within
                  the Project Sputnik Group with backing from{" "}
                  <a href="https://mavencp.com/">Maven Private Equity</a>.
                </p>
              </div>
            </div>
          </section>
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
                    </Link>
                    &nbsp;to get in touch with a member of the team.
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
