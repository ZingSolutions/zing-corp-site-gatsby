import React from "react"
import Layout from "../components/layout"

import "./jordan-page.scss"

export default class JordanPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section-hero jordan-hero" id="privacy">
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
                  width="308px"
                  height="200px"
                />
              </div>
              <div className="row-column">
                <h4>Resources</h4><br></br>
                <h3>Lorum Ipsum blah blah blah</h3><br></br>
                <p>Here is some more filler text.  This should look nice hopefully.</p>
                <a href="#" class="call-to-action">Click Here</a>
              </div>
            </div>

          </div>
          <div className="content-container">
            <div className="container-row">
              <div className="row-column">
                <h4>Resources</h4><br></br>
                <h3>Lorum Ipsum blah blah blah</h3><br></br>
                <p>Here is some more filler text.  This should look nice hopefully.</p>
                <a href="#" class="call-to-action">Click Here</a>
              </div>
              <div className="image-row-column">
                <img class="right-column-img"
                  src="/images/question.jpg"
                  alt="Question"
                  width="308px"
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
                  width="308px"
                  height="200px"
                />
              </div>
              <div className="row-column">
                <h4>Resources</h4><br></br>
                <h3>Lorum Ipsum blah blah blah</h3><br></br>
                <p>Here is some more filler text.  This should look nice hopefully.</p>
                <a href="#" class="call-to-action">Click Here</a>
              </div>
            </div>

          </div>

        </section>
      </Layout>
    )
  }
}
