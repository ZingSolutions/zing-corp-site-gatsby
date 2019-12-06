import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Service from "../components/service"
import constants from "../data/constants"
import "./services.scss"

export default class Services extends React.Component {
    render() {
        var styles = {
            backgroundImage: "url('/images/Services-image.jpg')",
        };
        const services = [...constants.services]
        const serviceOffers = [...constants.serviceOffers]
        return (
            <Layout>
                <main>

                    <section className="section-hero inner-banner-outer" id="privacy">
                        <div className="content-container">
                            <div className="inner-banner">
                                <h1>Services</h1>
                                <h5>Engage Zing for your needs</h5>
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
                                    {serviceOffers.map((offer, index) => {
                                        const { title: { line1, line2 }, description, link } = offer;
                                        return (
                                            <li key={index}>
                                                <h3>{line1}<br />
                                                    {line2}</h3>
                                                <p>{description}</p>
                                            </li>
                                        );
                                    })}
                                </ul>

                            </div>
                        </section>
                    ) : ''}

                    <section className="section-casestudy-info" >
                        <div className="casestudy-info-content" style={styles}>
                            <div className="content-container" >
                                <div className="casestudy-outer">
                                    <h2>
                                        Interested in how Zing can integrate Twilio in your business?
                                    </h2>
                                    <p><Link to="/contact-us" className="link-design">Contact us</Link> to get in touch with a member of the team.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        )
    }
}
