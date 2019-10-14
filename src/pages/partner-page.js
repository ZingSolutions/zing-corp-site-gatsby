import React from "react"
import Layout from "../components/layout"

import "./partner-page.scss"

export default class PartnerPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section-hero partner-hero" id="privacy">
          <div className="content-container">
            <div className="col-1">
              <h1>Zing Resources</h1>
              <p>Here is some subtitle text</p>
            </div>
          </div>
        </section>
        <section>
        <div className="content-container faded-title">
           <span>Help me please Paul, I need this to have less margin/padding</span>
          </div>
          <div className="content-container">
            <div className="container-row">
              <div className="image-row-column">
                <img
                  src="/images/solutions.png"
                  alt="Solutions"
                  max-width="308px"
                  height="200px"
                />
              </div>
              <div className="row-column">
                <h4>About Us</h4><br></br>
                <h3>Who are Zing?</h3><br></br>
                <p>Zing is a UK based Twilio Gold Consulting Partner. We have recently fully aligned ourselves to build all solutions around the Twilio portfolio and see this as central to our ambitious growth plans.</p>
                <a href="#" class="call-to-action">Find Out More</a>
              </div>
            </div>

          </div>
          <div className="content-container">
            <div className="container-row">
              <div className="row-column">
                <h4>About Us</h4><br></br>
                <h3>How do we differentiate?</h3><br></br>
                <p>Zing is a UK based Twilio Gold Consulting Partner. We have recently fully aligned ourselves to build all solutions around the Twilio portfolio and see this as central to our ambitious growth plans</p>
                <a href="#" class="call-to-action">Find Out More</a>
              </div>
              <div className="image-row-column">
                <img class="right-column-img"
                  src="/images/integration.png"
                  alt="Integration"
                  max-width="308px"
                  height="200px"
                />
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="container-row">
              <div className="image-row-column">
                <img
                  src="/images/services.png"
                  alt="Services"
                  max-width="308px"
                  height="200px"
                />
              </div>
              <div className="row-column">
                <h4>Services</h4><br></br>
                <h3>What services do we offer?</h3><br></br>
                <p>Zing is a UK based Twilio Gold Consulting Partner. We have recently fully aligned ourselves to build all solutions around the Twilio portfolio and see this as central to our ambitious growth plans</p>
                <a href="#" class="call-to-action">Find Out More</a>
              </div>
            </div>
          </div>

        </section>
     
        <section>
        <div className="content-container faded-title">
           <span>Help me please Paul, I need this to have less margin/padding</span>
          </div>
          <div className="content-container">
            <div class="flex-row">
              <div class="row-card">
                <img
                  src="/images/services.png"
                  alt="services"
                />
                <div class="card-container">
                  Logos</div>
              </div>
              <div class="row-card">
                <img
                   src="/images/services.png"
                   alt="services"
                />
                <div class="card-container">
                  Logos</div>
              </div><div class="row-card">
                <img
                   src="/images/services.png"
                   alt="services"
                />
                <div class="card-container">
                  Content in here</div>
              </div>
              <div class="row-card">
                <img
                  src="/images/services.png"
                  alt="services"
                />
                <div class="card-container">
                  Logos</div>
              </div>
              <div class="row-card">
                <img
                  src="/images/services.png"
                  alt="services"
                />
                <div class="card-container">
                  Logos</div>
              </div>
              <div class="row-card">
                <img
                  src="/images/services.png"
                  alt="services"
                />
                <div class="card-container">
                  Logos</div>
              </div>
            </div>
          </div>
          </section>
      </Layout>
    )
  }
}



