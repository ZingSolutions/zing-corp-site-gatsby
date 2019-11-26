import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "./careers.scss"

export default class Careers extends React.Component {
    render() {

        return (
            <Layout>
            <main>
            <section className="section-hero inner-banner-outer">
                  <div className="content-container">
                        <div className="inner-banner">
                              <h1>Careers</h1>
                        </div>
                  </div>
            </section>

            <section className="career-section">
                <div className="content-container">
                    <p className="inner-text">If yor are interested in pursuing a career with Zing, please register your interest below:</p>
                </div>
            </section>

            </main>
            </Layout>
            )
    }
}
