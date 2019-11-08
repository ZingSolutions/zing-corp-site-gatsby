import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default class Services extends React.Component {
    render() {
        return (
            <Layout>
                <main>
                    <section className="section-hero" id="about">
                        <div className="content-container">
                            <div className="col-1">
                                <h3>Here at Zing, the proof is in</h3>
                                <h1>the pudding</h1>
                                <h5>Pudding aside, we've created some pretty cool stuff.</h5>
                            </div>
                        </div>
                    </section>
                    {/* <section className="section-about-us" id="zing-and-twilio">
                        <div className="content-container">
                            <div className="col-1">
                                <h2>Zing & Twilio</h2>
                                <p>Together we can make your ideas a reality.</p>
                            </div>
                            <div className="col-2">
                                <h2>OUR MISSION</h2>
                                <p>
                                    To Help Our Customers Discover True Value Through Twilio's Cloud Communications Platform
                                </p>
                                <p>There are currently over 20 Zingers and we're growing fast</p>
                                <Link to="/contact-us/" className="call-to-action red">
                                    Read more
                                 </Link>
                            </div>
                        </div>
                    </section> */}
                </main>
            </Layout>
        )
    }
}
