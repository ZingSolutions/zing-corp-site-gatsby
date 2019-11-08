import React from "react"
import Layout from "../components/layout"
import Service from "../components/service"
import constants from "../data/constants"

export default class Services extends React.Component {
    render() {
        const services = [...constants.services]
        return (
            <Layout>
                <main>
                    <section className="section-hero" id="privacy">
                        <div className="content-container">
                            <div className="col-1">
                                <h1>What we do</h1>
                                <h5>We do amazing things for our clients</h5>
                            </div>
                        </div>
                    </section>
                    <section className="section-what-we-do" id="what-we-do">
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
                </main>
            </Layout>
        )
    }
}
