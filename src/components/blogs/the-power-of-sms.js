import React from "react"
// import "./blog-detail.scss"

export default class ThePowerOfSms extends React.Component {

    render() {
        return (
            <section className="blog-section">
                <div className="content-container">
                    <div className="blog-details">
                        <div className="blogd-image">
                            <img src="/images/blog-thumb1.jpg" alt="" />
                            <div className="blogci-item-details">
                                <span>
                                    By Chloe Baybutt
                                    </span>
                                <span>
                                    6th November 2019
                                    </span>
                            </div>
                        </div>
                        <h2>The Power of SMS</h2>
                        <div className="blog-description">
                            <p>Mobile phones have become so embedded into the lives of humans that an astonishing 90% of SMS messages are now read within 3 minutes of being sent. Organisations across the globe are beginning to realise the power of the text, and Cloud Communication platforms such as Twilio are growing at an extremely rapid rate to support this trend. SMS messaging has recently sparked a change in how organisations are communicating with customers. With its flexibility, SMS can be used for order confirmations, direct marketing, new stock alerts, and even promotional messaging; ultimately, any message the business wants to communicate to its customers! Messages can be tailored specifically to what the customers want to know, for example with new stock alerts – businesses can easily and conveniently contact customers to notify them when stock is newly available.</p>

                            <h3>A change in the way businesses communicate?</h3>
                            <p>According to Forbes, 98% of all text messages are eventually read compared to just 20% of emails. On average, the response time to reply to a text is 90 seconds, compared to 90 minutes to reply to an email. Believe it or not, people actually used to get excited about receiving emails – how times have changed! Bombarded with hundreds of emails daily, humans are becoming less responsive to email marketing – is the email channel on the out? Maybe so. The effectiveness of text messaging is undeniable, especially when looking at those statistics – it’s a channel that is becoming more and more convenient for both the business and recipient.</p>
                            <p>Customers are now demanding more than ever before with regards to the ways they can communicate with businesses. They want to be able to communicate with businesses with the same ease in which they communicate with their friends and family. There’s a real opportunity for businesses to enhance their CX by implementing SMS as a communication channel. Some organisations are taking it a step further and are now investing in technology that allows for intelligent two-way communication, where they can conduct conversations with their customers.</p>
                            <p>SMS messaging is clearly a vital communication channel for businesses in the current day and age. Since its birth over 20 decades ago, it’s now embedded itself as an essential element of daily life and it’s been referred to as the most underused communication channel for businesses – but this isn’t to say it’s not on the up.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
