import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import constants from '../data/constants';
import "./integration.scss"

export default class Services extends React.Component {
    render() {
        const inteGration = [...constants.inteGration];

        let inteGrationComponent = null;
        if (inteGration.length > 0) {
            inteGrationComponent = (
                <section className="ingration-section">
                    <div className="content-container">
                        <ul>
                            {inteGration.map((Services, key) => {
                                const { images: { image } } = Services;
                                return (
                                    <li key={key}>
                                        <Link >
                                            <img src={image} alt="" />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
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

            </main>
            </Layout>
            )
    }
}
