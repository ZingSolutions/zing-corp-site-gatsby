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
              <h1>Privacy Policy</h1>
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="col-1">
              <p>Hello World</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
