import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "./about.scss"

export default class Services extends React.Component {
  render() {
    const styles = {
      backgroundImage: "url('/images/About-us-page.jpg')",
    }
    return (
      <Layout>
        <main>
          <section className="section-hero inner-banner-outer" id="about">
            <div className="content-container">
              <div className="inner-banner">
                <h1>About Us</h1>
                <h5>A little bit of background about us Zingers</h5>
              </div>
            </div>
          </section>
          <section
            className="section-about-us section-our-mission"
            id="zing-and-twilio"
          >
            <div className="content-container">
              <div className="home-page-content">
                <h2 className="subtitle">OUR MISSION</h2>

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

                <h6 className="subtitle"> Our Values</h6>
                <h2>
                  To Help Our Customers Discover True Value <br /> Through
                  Twilio’s Cloud Communications Platform{" "}
                </h2>
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
                <hr></hr>
                <h2>Our Story</h2>
              </div>
              <div className="ourstory-outer">
                <div className="ourstory-img">
                  <img src="/images/our-story.jpg" alt="" />
                </div>

                <div className="ourstory-info">
                  <h4>Putting The Zing in AmaZing: it was perfect.</h4>
                  <p>
                    Zing is part of the Sputnik Group of Companies, formed after
                    the MBO of ProspectSoft, by Andrew Ardron and backed by
                    Maven Private Equity in 2017.{" "}
                  </p>
                  <p>
                    ProspectSoft, is the leading provider of SaaS CRM systems
                    designed for the Wholesale, Distribution and Manufacturing
                    sectors.{" "}
                  </p>
                  <p>
                    In 2017, Jon Brewer, working as ProspectSoft’s Client
                    Services Director, had the vision to see that by combining
                    the agile development techniques that he’d introduced to the
                    business, with a global communications provider such as
                    Twilio, amazing solutions could be developed.
                  </p>
                </div>
              </div>
              <p>
                <span>Aha! Moment</span>
                <br />
                Opportunity, Delivery, Shareholder backing: the business was
                born. But it still didn’t have a name. However, whilst at a
                Twilio Conference in San Francisco, Jon walked into an
                after-party and he had it: Zing.
              </p>
              <p>
                By mid-2019, with almost 20 Zingers on the team and a
                strengthening pipeline of new business opportunities, Julian
                Hucker, the co-founder of Esendex, joined as Business
                Development Director to help drive the next stage of Zing’s
                growth.
              </p>
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
