import React from "react"
import Layout from "../components/layout"
import "./careers.scss"
import HubspotForm from "react-hubspot-form"

export default class Careers extends React.Component {

    render() {
        return (
            <Layout>
                <main>
                    <section className="section-hero inner-banner-outer">
                        <div className="content-container">
                            <div className="inner-banner">
                                <h1>Careers</h1>
                                <h5>If yor are interested in pursuing a career with Zing,</h5>
                                <h5>please register your interest below:</h5>
                            </div>
                        </div>
                    </section>

                    <section className="career-section">
                        <div className="content-container">

                            <HubspotForm
                                portalId="5721076"
                                formId="80508e33-fb34-467f-a778-fb9cd4222c0f"
                                onReady={form =>
                                    console.log(form.querySelector("input[type=submit]"))
                                }
                                loading={<div>Loading...</div>}
                            />
                        </div>
                    </section>
                </main>
            </Layout>
        )
    }
}
