import React from "react"
import Layout from "../components/layout"

import "./contact-us.scss"

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section-contact-us" id="contact-us">
        <div className="content-container">
          <div className="col-1">
            <h1>Start a Conversation</h1>
            <h1>
              Lets do something amazing together.
            </h1>
          </div>
        </div>
      </section>
      <section className="section-contact-form" id="submitted">
        <div className="content-container">
          <h2 className="contact-form-title">
            Or leave a message and we'll get back to you ASAP.
          </h2>
          <div className="contact-card">
            <div className="col-1">
              <h4>Phone</h4>
              <h3>0808 168 9464</h3>
              <h4>Email</h4>
              <h3>conversations@zing.dev</h3>
              <h4>Address</h4>
              <h3>Beacon House, Ibstone Rd,</h3>
              <h3>Stokenchurch, High Wycombe,</h3>
              <h3>HP14 3WN</h3>
            </div>
            <div className="col-2">
              <form id="contact-us-form">
                <div className="row">
                  <input
                    name="first-name"
                    type="text"
                    placeholder="Enter First Name"
                    required
                  />
                  <input
                    name="last-name"
                    type="text"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
                <div className="row">
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    required
                  />
                  <input
                    name="subject"
                    type="text"
                    placeholder="Enter Subject"
                    required
                  />
                </div>
                <div className="row">
                  <textarea
                    name="message"
                    placeholder="Enter Message"
                    required
                  ></textarea>
                </div>
                <div className="row">
                  <button className="contact-submit" type="submit">
                    Submit now
                  </button>
                </div>
              </form>
              <div className="thanks" >
                <h4>Thanks for contacting us!</h4>
                <h4>We'll get back to you ASAP</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    )
  }
}
