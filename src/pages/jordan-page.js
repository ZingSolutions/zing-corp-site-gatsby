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
              <div className="row-column">Hi </div>
              <div className="row-column">Hi to the right </div>
            </div>

          </div>
          <div className="content-container">
            <div className="container-row">
              <div className="row-column">Hi </div>
              <div className="row-column">Hi to the right </div>
            </div>

          </div>
        </section>
      </Layout>
    )
  }
}
