import React from "react"   
import { Link } from "gatsby"

import Layout from "../components/layout"

import constants from './../data/constants';
import "./partner.scss"

export default class partner extends React.Component {
    constructor(props) {

        super(props);
        this.addShowClass= this.addShowClass.bind(this);
        this.addmicrosoftModal= this.addmicrosoftModal.bind(this);
        this.addMidnightModal= this.addMidnightModal.bind(this);
        this.addTwilioRemoveClass= this.addTwilioRemoveClass.bind(this);
        this.addMidnightRemoveClass= this.addMidnightRemoveClass.bind(this);
        this.addMicrosoftRemoveClass= this.addMicrosoftRemoveClass.bind(this);
    }

    addShowClass = (event) => {
        document.body.classList.add('twilio-show');
    }
    addmicrosoftModal = (event) => {
        document.body.classList.add('microsoft-show');
    }
    addMidnightModal = (event) => {
        document.body.classList.add('midnight-show');
    }
    addTwilioRemoveClass = (event) => {
        document.body.classList.remove('twilio-show');
    }
    addMicrosoftRemoveClass = (event) => {
        document.body.classList.remove('microsoft-show');
    }
    addMidnightRemoveClass = (event) => {
        document.body.classList.remove('midnight-show');
    }
    
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
                                      <h1>Partners</h1>
                                </div>
                          </div>
                    </section>

                <section className="ingration-section partner-page">
                    <div className="content-container">
                        <ul>
                            <p className="inner-text">Here at Zing we are all about building relationships. Meet our partner below:</p>
                            <li>
                                <button type="button" onClick={this.addShowClass} >
                                     <img src="/images/twilio-logo-red.png" alt="twilio-logo-red"/>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={this.addmicrosoftModal}>
                                     <img src="/images/microsoft-logo.png" alt="microsoft-logo"/>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={this.addMidnightModal}>
                                     <img src="/images/just-after-midnight-logo.png" alt="just-after-midnight-logo"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </section>
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

                
                <div className="custom-modal twilio-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="left-blog">
                                <img src="/images/twilio-logo-white.png" alt="twilio-logo-white"/>
                            </div>
                            <div className="right-blog">
                                <h4>Who are Twilio?</h4>
                                <h4>How do we work with them?</h4>
                                <a href="#" className="gray-btn">Visit Website</a>
                            </div>
                            <div className="close-btn">
                                <button onClick={this.addTwilioRemoveClass}>
                                    <img src="/images/cross.png" alt="cross"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="custom-modal microsoft-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="left-blog">
                                <img src="/images/microsoft-logo-white.png" alt="microsoft-logo-white"/>
                            </div>
                            <div className="right-blog">
                                <h4>Who are Twilio?</h4>
                                <h4>How do we work with them?</h4>
                                <a href="#" className="gray-btn">Visit Website</a>
                            </div>
                            <div className="close-btn">
                                <button onClick={this.addMicrosoftRemoveClass}>
                                    <img src="/images/cross.png" alt="cross"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="custom-modal midnight-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="left-blog">
                                <img src="/images/just-after-midnight-logo-white.png" alt="just-after-midnight-logo-white"/>
                            </div>
                            <div className="right-blog">
                                <h4>Who are Twilio?</h4>
                                <h4>How do we work with them?</h4>
                                <a href="#" className="gray-btn">Visit Website</a>
                            </div>
                            <div className="close-btn">
                                <button onClick={this.addMidnightRemoveClass}>
                                    <img src="/images/cross.png" alt="cross"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
            </Layout>
            )
    }
}
