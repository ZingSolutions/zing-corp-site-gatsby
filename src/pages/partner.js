import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import constants from "./../data/constants"
import "./partner.scss"

export default class partner extends React.Component {
  constructor(props) {
    super(props)
    this.addShowClass = this.addShowClass.bind(this)
    this.addmicrosoftModal = this.addmicrosoftModal.bind(this)
    this.addMidnightModal = this.addMidnightModal.bind(this)
    this.addTwilioRemoveClass = this.addTwilioRemoveClass.bind(this)
    this.addMidnightRemoveClass = this.addMidnightRemoveClass.bind(this)
    this.addMicrosoftRemoveClass = this.addMicrosoftRemoveClass.bind(this)
  }

  addShowClass = event => {
    document.body.classList.add("twilio-show")
  }
  addmicrosoftModal = event => {
    document.body.classList.add("microsoft-show")
  }
  addMidnightModal = event => {
    document.body.classList.add("midnight-show")
  }
  addTwilioRemoveClass = event => {
    document.body.classList.remove("twilio-show")
  }
  addMicrosoftRemoveClass = event => {
    document.body.classList.remove("microsoft-show")
  }
  addMidnightRemoveClass = event => {
    document.body.classList.remove("midnight-show")
  }

  render() {
    const styles = {
      backgroundImage: "url('/images/study-botttom-bg.png')",
    }
    return (
      <Layout>
        <main>
          <section className="section-hero inner-banner-outer">
            <div className="content-container">
              <div className="inner-banner">
                <h1>Partners</h1>
                <h5>Here at Zing we are all about building relationships. </h5>
                <h5>Meet our fantastic partners below.</h5>
              </div>
            </div>
          </section>

          <section className="ingration-section partner-page">
            <div className="content-container">
              <ul>
                <li>
                  <button type="button" onClick={this.addShowClass}>
                    <img
                      src="/images/twilio-logo-red.png"
                      alt="twilio-logo-red"
                    />
                  </button>
                </li>
                <li>
                  <button type="button" onClick={this.addmicrosoftModal}>
                    <img
                      src="/images/microsoft-logo.png"
                      alt="microsoft-logo"
                    />
                  </button>
                </li>
                <li>
                  <button type="button" onClick={this.addMidnightModal}>
                    <img
                      src="/images/just-after-midnight-logo.png"
                      alt="just-after-midnight-logo"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </section>
          <section className="section-casestudy-info">
            <div className="casestudy-info-content" style={styles}>
              <div className="content-container">
                <div className="casestudy-outer">
                  <h2>Interested in working closely with Zing?</h2>
                  <p>
                    <Link to="/contact-us" className="link-design">
                      Contact Us
                    </Link>{" "}
                    to find out more about our partnership opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="custom-modal twilio-modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="left-blog">
                  <a
                    href="https://www.twilio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/twilio-logo-white.png"
                      alt="twilio-logo-white"
                    />
                  </a>
                </div>
                <div className="right-blog">
                  <h4>Twilio</h4>
                  <p>
                    Twilio is a world-leading cloud communications platform
                    working with global brands such as Lyft, Airbnb and eBay.
                    Twilio provides web service APIs which allow organisations
                    to programmatically receive text messages, make and receive
                    phone calls and perform other communication functions such
                    as Proxy calling and secure payments.
                  </p>
                  <h4>How we work with Twilio</h4>
                  <p>
                    Zing are one of only a few Flex-accredited{" "}
                    <a
                      href="https://showcase.twilio.com/s/partner-listing/a8E1W000000HKRRUA4/an-agile-approach-to-building-twilio-solutions-zing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gold Partners
                    </a>{" "}
                    within EMEA. Zing work with Twilio to integrate modern
                    communications into existing client solutions, whilst also
                    offering the capability of a full contact centre build using
                    Twilio Flex.
                  </p>
                </div>
                <div className="close-btn">
                  <button onClick={this.addTwilioRemoveClass}>
                    <img src="/images/cross.png" alt="cross" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-modal microsoft-modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="left-blog">
                  <a
                    href="https://azure.microsoft.com/en-gb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/microsoft-logo-white.png"
                      alt="microsoft-logo-white"
                    />
                  </a>
                </div>
                <div className="right-blog">
                  <h4>Microsoft Azure</h4>
                  <p>
                    Azure is an ever-expanding set of cloud computing services
                    to help your organization meet its business challenges.
                    Azure gives you the freedom to build, manage, and deploy
                    applications on a massive, global network using your
                    preferred tools and frameworks.{" "}
                  </p>
                  <h4>How we work with Azure</h4>
                  <p>
                    Zing benefit from Microsoft’s Gold Partnership scheme
                    providing valuable resources for its Azure cloud services,
                    on which Zing have specialist expertise. The team also take
                    advantage of the DevOps tools made available by Microsoft,
                    to ensure smooth deployments and succinct handovers of
                    operational procedures.
                  </p>
                </div>
                <div className="close-btn">
                  <button onClick={this.addMicrosoftRemoveClass}>
                    <img src="/images/cross.png" alt="cross" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-modal midnight-modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="left-blog">
                  <a
                    href="https://www.justaftermidnight247.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/just-after-midnight-logo-white.png"
                      alt="just-after-midnight-logo-white"
                    />
                  </a>
                </div>
                <div className="right-blog">
                  <h4>Just After Midnight</h4>
                  <p>
                    Just After Midnight are the go to support people for brands
                    and their agencies, providing DevOps, Managed Cloud and
                    Specialist 24/7 support services. We work with all the major
                    cloud providers and marketing technology platforms, both
                    open source and commercial. Just After Midnight partner for
                    success, protecting revenue and reputation around the clock
                    so you can focus on what’s next. Let us look after your
                    critical websites and applications while your team sleeps.
                  </p>
                  <h4>How we work with Just After Midnight</h4>
                  <p>
                    At Zing, we know the importance of secured operations and
                    managed infrastructures for our clients. Working with Just
                    After Midnight, Zing are able to offer protection and
                    reassurance with ‘follow the sun’ operational support for
                    any bespoke solution.
                  </p>
                </div>
                <div className="close-btn">
                  <button onClick={this.addMidnightRemoveClass}>
                    <img src="/images/cross.png" alt="cross" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}
