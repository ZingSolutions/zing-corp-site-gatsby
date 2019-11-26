import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "./about.scss"

export default class Services extends React.Component {
    render() {
        return (
            <Layout>
                <main>
                    <section className="section-hero inner-banner-outer" id="about">
                        <div className="content-container">
                            <div className="inner-banner">
                                <h1>About Us</h1>

                            </div>
                        </div>
                    </section>
                    <section className="section-about-us section-our-mission" id="zing-and-twilio">
                        <div className="content-container">
                            <div className="col-1">
                                <div className="left-block">
                                    <h2 className="main-title">Zing & Twilio</h2>
                                    <p>Together we can make your ideas a reality.</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <h2 className="subtitle">OUR MISSION</h2>

                                <p>To Help Our Customers Discover True Value Through Twilio’s Cloud Communications Platform</p>
                                <Link to="/contact-us/" className="readmore-link">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="section-our-values">
                        <div className="content-container">

                            <div className="new-content-header">
                                <i>
                                    <img
                                        src="/images/logo-icon.png"
                                        alt=""
                                    />
                                </i>

                                <h6 className="subtitle"> Our Values</h6>
                                <h2>To Help Our Customers Discover True Value <br /> Through Twilio’s Cloud Communications Platform </h2>
                                <hr></hr>
                            </div>

                            <ul>
                                <li>
                                    <i><img src="/images/inquisitive.png" alt="" /></i>
                                    <h3>Inquisitive
                                    <span></span>

                                    </h3>
                                    <p>Driven to learn. We’re fascinated by the process of discovery and how to unlock value. This is reflected in our continuous investigation into new techniques and</p>
                                </li>
                                <li className="active">
                                    <i><img src="/images/energetic.png" alt="" /></i>
                                    <h3>Energetic
                                    <span></span>
                                    </h3>
                                    <p>It’s in our name: Zing. We’re energetic, enthusiastic and lively and always on the move. We bring this energy to everything that we do and it’s reflected in every aspect of our</p>
                                </li>
                                <li>
                                    <i><img src="/images/relentless.png" alt="" /></i>
                                    <h3>Relentless
                                    <span></span>
                                    </h3>
                                    <p>We’re intellectually restless and continually ready to question the perceived norm. Our customers aren’t just looking for another app. They want a development partner to help them disrupt and challenge</p>
                                </li>
                            </ul>

                        </div>
                    </section>


                    <section className="section-our-story">
                        <div className="content-container">

                            <div className="ourstory-title">
                                <hr></hr>
                                <h2>Our Story</h2>
                            </div>
                            <div className="ourstory-outer">
                                <div className="ourstory-img">
                                    <img
                                        src="/images/our-story.jpg"
                                        alt=""
                                    />
                                </div>

                                <div className="ourstory-info">
                                    <h4>Putting The Zing in AmaZing: it was perfect.</h4>
                                    <p>Zing is part of the Sputnik Group of Companies, formed after the MBO of ProspectSoft, by Andrew Ardron and backed by Maven Private Equity in 2017. </p>
                                    <p>ProspectSoft, is the leading provider of SaaS CRM systems designed for the Wholesale, Distribution and Manufacturing sectors. </p>
                                    <p>In 2017, Jon Brewer, working as ProspectSoft’s Client Services Director, had the vision to see that by combining the agile development techniques that he’d introduced to the business </p>
                                </div>
                            </div>
                            <p>In 2017, Jon Brewer, working as ProspectSoft’s Client Services Director, had the vision to see that by combining the agile development techniques that he’d introduced to the business </p>
                        </div>

                    </section>
                    <section className="section-casestudy-info">

                        <div className="content-container">
                            <div className="casestudy-outer">
                                <h2>
                                    Aliquam cursus, metus
                                    dignissim blandit venenatis,
                                    neque nibh vehicula ante,
            </h2>
                                <p>Morbi egestas, leo eget elementum mattis, felis leo ultrices odio, vel ornare ante est vitae quam. Cras sem lectus, auctor ut arcu id, porttitor dapibus turpis.a</p>

                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        )
    }
}
