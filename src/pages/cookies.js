import React from "react"
import Layout from "../components/layout"

import "./cookies.scss"

export default class Cookies extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section-hero" id="privacy">
            <div className="content-container">
            <div className="col-1">
                <h1>Cookie Policy</h1>
            </div>
            </div>
        </section>
        <section className="section-cookie-text">
            <div className="content-container">
            <div className="col-1">
                <h2>Cookie Policy</h2>
                <hr />
                <div
                className="sqs-block html-block sqs-block-html"
                data-block-type="2"
                id="block-yui_3_17_2_1_1554279208051_19446"
                >
                <div className="sqs-block-content">
                    <p>
                        Our cookie policy outlines the essential, analytical and
                        marketing cookies we use to enhance your website experience
                        with us...
                    </p>
                    <p>
                        Cookies are small text files that are placed on to your
                        computer by websites that you visit. Cookies are used to make
                        websites work, to improve efficiency of websites, to improve
                        the user’s experience and to provide usage information on
                        websites. This information should make your website visits
                        more productive by storing and using information on your
                        website preferences and habits.<br />
                        &nbsp;
                    </p>
                    <p>
                        Your web browser can choose whether or not to accept cookies.
                        Most web browser software is initially set up to accept
                        them.<br /><br />We may offer cookies to you and you should
                        ensure that your web browser is set up to not accept cookies
                        if you do not wish to receive them. Please note that if you
                        disable cookies, some services or website functionality may
                        not be available. For further information about cookies and
                        how to disable them please go to aboutcookies.org. We use the
                        following cookies:
                    </p>
                    <ul data-rte-list="default">
                    <li>
                        <p>
                            <strong>Essential cookies:</strong>&nbsp;these are cookies
                            that are required for the operation of our website. They
                            include, for example, cookies that enable you to log into
                            secure areas of our website, and to use online forms.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Analytical cookies:</strong>&nbsp;these allow us
                            to recognise and count the number of visitors and to see
                            how visitors move around our website when they are using
                            it. This helps us to improve the way our website works,
                            for example, by ensuring that users are finding what they
                            are looking for easily.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Marketing cookies:&nbsp;</strong>these are used to
                            recognise you when you return to our website. This enables
                            us to personalise our content for you, greet you by name
                            and remember your preferences. These cookies also record
                            your visit to our website, the pages you have visited and
                            the links you have followed. We will use this information
                            to make our website, the advertising displayed on it and
                            communications sent more relevant to your interests.
                        </p>
                        <p>
                            By continuing to use our website, you are accepting our
                            use of these cookies that make advertising and
                            communications more relevant to you and your interests,
                            and further help us to improve the site.
                        </p>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </section>          
      </Layout>
    )
  }
}