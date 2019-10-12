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
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="container-row">
              <div className="image-row-column">
                <img
                  src="/images/question.jpg"
                  alt="Question"
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
                <p>Here is some more filler text.  This should look nice hopefully.</p>
                <a href="#" class="call-to-action">Click Here</a>
              </div>
              <div className="image-row-column">
                <img class="right-column-img"
                  src="/images/question.jpg"
                  alt="Question"
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
                  src="/images/question.jpg"
                  alt="Question"
                  max-width="308px"
                  height="200px"
                />
              </div>
              <div className="row-column">
                <h4>Services</h4><br></br>
                <h3>What services do we offer?</h3><br></br>
                <p>Here is some more filler text.  This should look nice hopefully.</p>
                <a href="#" class="call-to-action">Click Here</a>
              </div>
            </div>
          </div>

        </section>
        //** section added to ensure white background */
        <section></section>
        <section>
          <div className="content-container">
            <div class="flex-row">
              <div class="row-card">
                <img
                   src="/images/productivity.jpg"
                   alt="Productivity"
                   height="70%"
                   width="70%"
                />
                <div class="card-container">
                  Logos</div>
              </div>
              <div class="row-card">
                <img
                   src="/images/productivity.jpg"
                   alt="Productivity"
                   height="70%"
                   width="70%"
                />
                <div class="card-container">
                  Content in here</div>
              </div><div class="row-card">
                <img
                  src="/images/productivity.jpg"
                  alt="Productivity"
                  height="70%"
                   width="70%"
                />
                <div class="card-container">
                  Content in here</div>
              </div>
            </div>
          </div>
          <div className="content-container">
            <div class="flex-row">
              <div class="row-card">
                <img
                   src="/images/productivity.jpg"
                   alt="Productivity"
                  width="100%"
                />
                <div class="card-container">
                  Content in here</div>
              </div>
              <div class="row-card">
                <img
                   src="/images/productivity.jpg"
                   alt="Productivity"
                  width="100%"
                />
                <div class="card-container">
                  Content in here</div>
              </div><div class="row-card">
                <img
                   src="/images/productivity.jpg"
                   alt="Productivity"
                  width="100%"
                />
                <div class="card-container">
                  Content in here</div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}



