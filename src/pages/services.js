import React from "react"
import Layout from "../components/layout"
import Service from "../components/service"
import constants from "../data/constants"
import "./services.scss"

export default class Services extends React.Component {
    render() {
        const services = [...constants.services]
        return (
            <Layout>
            <main>

            <section className="section-hero inner-banner-outer" id="privacy">
            <div className="content-container">
            <div className="inner-banner">
            <h1>What we do</h1>
            <h5>We do amazing things for our clients</h5>
            </div>
            </div>
            </section>
            <section className="section-what-we-do gray-bg" id="what-we-do">
            <div className="content-container">
            <div className="content-header">
            <h4 className="title-red">What We Do</h4>
            <h3 className="title">We Focus on Customer</h3>
            <h3 className="title">Communications and Workforce Mobility</h3>
            <hr />
            </div>
            <div className="content-body-path">
            {services.map((service, index) => {
                const mode = index % 2 === 0 ? 'left' : 'right';
                return <Service key={index} service={service} mode={mode}></Service>

            })}
            </div>
            </div>
            </section>

            <section className="section-how-we-do-it white-bg" id="how-we-do-it">
            <div className="content-container line-break">
            <div className="new-content-header">
            <h6 className="subtitle">How We Do It</h6>
            <h2>What we can offer you</h2>
            <hr></hr>
            </div>
            <ul>
            <li>
            <h3>Discovery<br/>
            & Insight</h3>
            <p>A collaborative process to quickly identify how we can unlock your value, and 
            where your pain lies.</p>
            <a className="btn-default" href="#/">learn more</a>
            </li>
            <li>
            <h3>Agile<br/>
            Development</h3>
            <p>An Agile approach means we can maintain momentum.
            Development is completed on a “per sprint” basis to ensure that we are continually delivering customer ....</p>
            <a className="btn-default" href="#/">learn more</a>
            </li>
            <li>
            <h3>Effective<br/>
            Reporting</h3>
            <p>Data isn’t Information! Regular and powerful reporting keeps all 
            stakeholders updated at every 
            stage of the project.</p>
            <a className="btn-default" href="#/">learn more</a>
            </li>
            </ul>

            </div>
            </section>

            </main>
            </Layout>
            )
        }
    }
