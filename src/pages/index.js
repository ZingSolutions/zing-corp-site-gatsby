import React from "react"
import Layout from "../components/layout"
import Service from "../components/service"
import { Link } from "gatsby"

import "./index.scss"
import constants from "../data/constants"

export default class Index extends React.Component {
  render() {
    const services = [...constants.services];
    return (
      <Layout>
        <section className="section-hero">
          <div className="content-container">
            <div className="col-1">
              <h1>An Agile Approach to discovering Twilio Solutions</h1>
              <p>
                Whether it be developing discrete Twilio Integrations, or industry-disruptive enterprise solutions, Zing provides a range of services to build your cloud communications.
              </p>
              <Link to="/contact-us/" className="call-to-action">
                Get Connected
              </Link>
            </div>
            <div className="col-2 home-page-image">
              <img
                src="/images/Flex-in-computer.png"
                alt="Dashboards on mobile and laptop"
              />
            </div>
          </div>
        </section>
        <section className="section-about-us" id="zing-and-twilio">
          <div className="content-container">
            <div className="home-page-content">
              <h2>Who We Are</h2>
              <p>
                Zing is part of the Sputnik Group of Companies that includes
                ProspectSoft, a leading provider of SaaS CRM systems designed
                for the Wholesale, Distribution and Manufacturing sectors.
              </p>
              <p>There are currently over 20 Zingers and we're growing fast</p>
              <Link to="/about/" className="call-to-action red">
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
              {services.map((service, index) => {
                const mode = index % 2 === 0 ? 'left' : 'right';
                return <Service key={index} service={service} mode={mode}></Service>

              })}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
