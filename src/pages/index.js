import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

import "./index.scss"

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section-hero">
          <div className="content-container">
            <div className="col-1">
              <h1>Discovering Real Value Through Twilio</h1>
              <p>
                We develop bespoke enterprise software solutions around Twilio's
                cloud communications platform for messaging, voice and video.
              </p>
              <Link to="/contact-us/" className="call-to-action">
                Get Connected
              </Link>
            </div>
            <div className="col-2">
              <img
                src="/images/Splash.png"
                alt="Dashboards on mobile and laptop"
              />
            </div>
          </div>
        </section>
        <section className="section-about-us" id="zing-and-twilio">
          <div className="content-container">
            <div className="col-1">
              <h2>Zing & Twilio</h2>
              <p>Zing is a Twilio Gold Consulting Partner</p>
            </div>
            <div className="col-2">
              <h2>Who We Are</h2>
              <p>
                Zing is part of the Sputnik Group of Companies that includes
                ProspectSoft, a leading provider of SaaS CRM systems designed
                for the Wholesale, Distribution and Manufacturing sectors.
              </p>
              <p>There are currently over 20 Zingers and we're growing fast</p>
              <Link to="/contact-us/" className="call-to-action red">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="section-what-we-do" id="what-we-do">
          <div className="content-container">
            <div className="content-header">
              <h2 className="title-red">What We Do</h2>
              <h3 className="title">We Focus on Customer</h3>
              <h3 className="title">Communications and Workforce Mobility</h3>
              <hr />
            </div>
            <div className="content-body-path">
              <div className="row">
                <div className="linker">
                  <img src="images/linker-left.png" alt="Linker Left" />
                </div>
                <div className="image">
                  <img src="images/integration.png" alt="Integration" />
                </div>
                <div className="card">
                  <h3 className="title">Twilio Integration</h3>
                  <hr />
                  <p>
                    Discrete projects to integrate customer solutions with one
                    or more Twilio services. Projects are delivered by our
                    tactical team with a focus on getting connected as quickly
                    as possible. Short term assignments often prove to be the
                    ideal way to evaluate Zing and Twilio's broader offerings.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="card">
                  <h3 className="title">Enterprise Solutions</h3>
                  <hr />
                  <p>
                    Bespoke and transformative solutions for customers looking
                    to disrupt and dominate their sector. These solutions
                    typically run for a minimum of 2 to 3 months and are
                    delivered by a dedicated team on a per sprint basis, as
                    described in our RapidValue&trade; methodology.
                  </p>
                </div>
                <div className="image">
                  <img src="images/solutions.png" alt="Solutions" />
                </div>
                <div className="linker">
                  <img src="images/linker-right.png" alt="Linker Right" />
                </div>
              </div>
              <div className="row">
                <div className="linker"></div>
                <div className="image">
                  <img src="images/services.png" alt="Services" />
                </div>
                <div className="card">
                  <h3 className="title">Managed Services</h3>
                  <hr />
                  <p>
                    An ongoing relationship once our enterprise solutions are
                    fully embedded within a customer. Development, maintenance
                    and, where appropriate, support are delivered against agreed
                    SLAs without losing our focus on Value. New initiatives are
                    still delivered within our RapidValue&trade; methodology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
