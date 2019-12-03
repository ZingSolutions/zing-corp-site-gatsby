import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import constants from './../data/constants';
import "./integration.scss"

export default class Services extends React.Component {
    render() {
        var styles = {
            backgroundImage: "url('/images/integrations-image.jpg')",
        };
        const inteGration = [...constants.inteGration];

        let inteGrationComponent = null;
        if (inteGration.length > 0) {
            inteGrationComponent = (
                <section className="ingration-section">
                <div className="content-container">                 
                <ul>
                {inteGration.map((Services, key) => {
                    const { images: { image }, link } = Services;
                    return (
                        <li key={key}>
                        <a target="_blank" href={link}>
                        <img src={image} alt="" />
                        </a>
                        </li>
                        );
                })}
                </ul>
                <div className="integration-bottom-conetnt">
                <h3>Interested in integrating Twilio to your business services?</h3>  
                <p>if you're unable to see your services in the page above, have no fear! There's good change we're able to work with them Contact us to get in touch with a member of the team to find out more.. </p> 
                <a href="/contact-us">Contact us</a>
                </div>
                </div>
                </section>
                );
        }

        return (
            <Layout>
            <main>
            <section className="section-hero inner-banner-outer" id="about">
            <div className="content-container">
            <div className="inner-banner">
            <h1>Integrations</h1>
            </div>
            </div>
            </section>
            {inteGrationComponent}
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
