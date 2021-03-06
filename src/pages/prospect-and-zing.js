import React from "react"
import Layout from "../components/layout"
import HubspotForm from "react-hubspot-form"

import "./prospect-and-zing.scss"

export default class ProspectAndZing extends React.Component {
  componentDidMount() {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        document.querySelector(window.location.hash).scrollIntoView()
      }
    }
  }

  render() {
    return (
      <Layout className="prospect-and-zing">
        <section className="section-hero">
          <div className="content-container">
            <div className="col-1">
              <h1>Prospect CRM & Zing</h1>
              <p>
                Utilising SMS as a direct communication channel will provide you
                with the opportunity to deliver messages straight into the hands
                of your customers.
              </p>
              <a href="#moredetails" className="call-to-action red">
                Find Out More
              </a>
            </div>
            <div className="col-2">
              <img
                src="/images/Splash.png"
                alt="Dashboards on mobile and laptop"
              />
            </div>
          </div>
        </section>
        <section className="lets-chat">
          <div className="content-container">
            <HubspotForm
              portalId="5721076"
              formId="3cbb5e36-d3ba-4a2e-818a-81dd7ea76eea"
              onReady={form =>
                console.log(form.querySelector("input[type=submit]"))
              }
              loading={<div>Loading...</div>}
            />
          </div>
        </section>
        <section className="sms">
          <div className="content-container">
            <div className="content-header" id="moredetails">
              <h2 className="title-red">Automated SMS</h2>
              <h3 className="title">Direct From Prospect CRM</h3>
              <hr />
            </div>
            <div className="content-body-path ps-and-zing">
              <p>
                With SMS being accessible for both internal and external
                recipients, now is the time to improve communication across your
                business processes, whilst also delivering your company message
                to your broader audience without the risk of being lost amongst
                thousands of emails, or being another missed call statistic.
              </p>
              <p className="p-end">
                Below are some examples of integrated SMS within Prospect CRM,
                however this by no means the complete list. Your Prospect CRM is
                already a powerful tool for managing your contacts, orders and
                stock levels; and with the addition of SMS capabilities, there
                is no end to what you can build.
              </p>
              <div className="row">
                <div className="card">
                  <h3 className="title">Order Confirmations</h3>
                  {/* <hr /> */}
                  <p>
                    Allow your customers the freedom to send their order
                    confirmation receipts straight to their phones. Once an
                    order is placed either via telephone, or confirmed online,
                    an SMS can be sent to the customer thanking them for their
                    purchase, including details of their order, and even a link
                    to an order-tracking page where available.
                  </p>
                </div>
                <div className="image">
                  <img
                    src="/images/ps-orders.png"
                    alt="Integration"
                    width="308px"
                    height="200px"
                  />
                </div>
                <div className="linker">
                  <img src="/images/linker-right.png" alt="Linker Right" />
                </div>
              </div>
              <div className="row">
                <div className="linker">
                  <img src="/images/linker-left.png" alt="Linker Left" />
                </div>
                <div className="image">
                  <img
                    src="/images/ps-aware.png"
                    alt="Integration"
                    width="308px"
                    height="200px"
                  />
                </div>
                <div className="card">
                  <h3 className="title">Stock Level Alerts</h3>
                  {/* <hr /> */}
                  <p>
                    Notify your purchasing team when stock items are running
                    low. Through setting up alerts, you can respond quickly to
                    fluctuations in demand to ensure you always have a constant
                    supply available.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="card">
                  <h3 className="title">Back-in-Stock Alerts</h3>
                  {/* <hr /> */}
                  <p>
                    Have your customers tried purchasing from you when you are
                    out of stock? For your customers there is nothing more
                    frustrating, and for your business, this is simply lost
                    revenue. With SMS back-in-stock alerts, your customer can be
                    notified when their item is made available for purchase,
                    driving sales which previously would be lost opportunities.
                  </p>
                </div>
                <div className="image">
                  <img
                    src="/images/ps-alert.png"
                    alt="Integration"
                    width="308px"
                    height="200px"
                  />
                </div>
                <div className="linker">
                  <img src="/images/linker-right.png" alt="Linker Right" />
                </div>
              </div>
              <div className="row">
                <div className="linker"></div>
                <div className="image">
                  <img
                    src="/images/ps-sms.png"
                    alt="Integration"
                    width="308px"
                    height="200px"
                  />
                </div>
                <div className="card">
                  <h3 className="title">SMS Marketing</h3>
                  {/* <hr /> */}
                  <p>
                    Communicate directly with your customers, right in the palm
                    of their hand. SMS marketing will allow you to deliver your
                    brand message to your customers where they are.
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
