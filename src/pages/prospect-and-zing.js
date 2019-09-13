import React from "react"
import Layout from "../components/layout"

import "./prospect-and-zing.scss"

export default class ProspectAndZing extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section-hero">
          <div className="content-container">
            <div className="col-1">
              <h1>Prospect CRM & Zing</h1>
              <a href="/contact-us" className="call-to-action">
                Get Yourself Connected
              </a>
            </div>
            <div className="col-2">
              <img
                src="/images/hero-image.png"
                alt="Dashboards on mobile and laptop"
              />
            </div>
          </div>
        </section>
        <section className="lets-chat"></section>
        <section className="sms">
          <div className="content-container">
            <div className="content-header">
              <h2 className="title-red">Automated SMS</h2>
              <h3 className="title">Direct From Prospect CRM</h3>
              <hr />
            </div>
            <div className="content-body-path">
              <div className="row">
                <div className="linker">
                  <img src="/images/linker-left.png" alt="Linker Left" />
                </div>
                <div className="image">
                  <img src="/images/integration.png" alt="Integration" />
                </div>
                <div className="card">
                  <p>
                    Utilising SMS as a direct communication channel will provide
                    you with the opportunity to deliver messages straight into
                    the hands of your customers.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="linker">
                  <img src="/images/linker-left.png" alt="Linker Left" />
                </div>
                <div className="image">
                  <img src="/images/integration.png" alt="Integration" />
                </div>
                <div className="card">
                  <p>
                    With SMS being accessible for both internal and external
                    recipients, now is the time to improve communication across
                    your business processes, whilst also delivering your company
                    message to your broader audience without the risk of being
                    lost amongst thousands of emails, or being another missed
                    call statistic.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="linker">
                  <img src="/images/linker-left.png" alt="Linker Left" />
                </div>
                <div className="image">
                  <img src="/images/integration.png" alt="Integration" />
                </div>
                <div className="card">
                  <p>
                    Below are some examples of integrated SMS within Prospect
                    CRM, however this by no means the complete list. Your
                    Prospect CRM is already a powerful tool for managing your
                    contacts, orders and stock levels; and with the addition of
                    SMS capabilities, there is no end to what you can build.
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
