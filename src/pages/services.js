import React from "react"
import Layout from "../components/layout"
import Service from "../components/service"
import constants from "../data/constants"
import "./services.scss"

export default class Services extends React.Component {
    render() {
        const services = [...constants.services]
        const serviceOffers = [...constants.serviceOffers]
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

                    {serviceOffers.length > 0 ? (
                        <section className="section-how-we-do-it white-bg" id="how-we-do-it">
                            <div className="content-container line-break">
                                <div className="new-content-header">
                                    <h6 className="subtitle">How We Do It</h6>
                                    <h2>What we can offer you</h2>
                                    <hr></hr>
                                </div>
                                <ul>
                                    {serviceOffers.map((offer,index) => {
                                        const { title: { line1, line2 }, description, link } = offer;
                                        return (
                                            <li key={index}>
                                                <h3>{line1}<br />
                                                    {line2}</h3>
                                                <p>{description}</p>
                                                <a className="btn-default" href={link}>learn more</a>
                                            </li>
                                        );
                                    })}
                                </ul>

                            </div>
                        </section>
                    ) : ''}


                </main>
            </Layout>
        )
    }
}
