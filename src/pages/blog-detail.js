import React, { lazy, Suspense } from "react"
import Layout from "../components/layout"
import "./blog-detail.scss"
import { Redirect } from "@reach/router";
import ThePowerOfSms from "../components/blogs/the-power-of-sms"
import TheFirst50Days from "../components/blogs/the-first-50-days"

export default class Blogdetail extends React.Component {

    render() {
        var styles = {
            backgroundImage: "url('/images/study-botttom-bg.png')",
        };
        const TagName = this.props.slug;
        let DynamicComponent = <Redirect to="/" noThrow />
        if (TagName === 'the-first-50-days') {
            DynamicComponent = <TheFirst50Days/>;
        } else if (TagName === 'the-power-of-sms') {
            DynamicComponent = <ThePowerOfSms/>;
        }
        return (
            <Layout>
                <main>
                    <section className="section-hero inner-banner-outer" id="blog">
                        <div className="content-container">
                            <div className="inner-banner">
                                <h1>Our Blog</h1>
                            </div>
                        </div>
                    </section>
                    {DynamicComponent}
                    <section className="section-casestudy-info" >
                        <div className="casestudy-info-content" style={styles}>
                            <div className="content-container" >
                                <div className="casestudy-outer">
                                    <h2>
                                        Aliquam cursus, metus
                                        dignissim blandit venenatis,
                                        neque nibh vehicula ante,
                                    </h2>
                                    <p>Morbi egestas, leo eget elementum mattis, felis leo ultrices odio, vel ornare ante est vitae quam. Cras sem lectus, auctor ut arcu id, porttitor dapibus turpis.a</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        )
    }
}
