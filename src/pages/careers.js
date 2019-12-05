import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "./careers.scss"
import HubspotForm from "react-hubspot-form"

export default class Careers extends React.Component {

    render() {
        var styles = {
            backgroundImage: "url('/images/study-botttom-bg.png')",
        };
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
