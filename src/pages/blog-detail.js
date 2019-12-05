import React from "react"
import Layout from "../components/layout"
import "./blog-detail.scss"
import { Redirect } from "@reach/router";
import constants from '../data/constants'

export default class Blogdetail extends React.Component {
    
    render() {
        const { slug } = this.props;
        let DynamicComponent = <Redirect to="/" noThrow />
        const blogDetails = [...constants.blogItems];
        let getBlogDetail = null;
        if (blogDetails.length && slug) {
            getBlogDetail = blogDetails.find(word => {
                const detailsPageLink = (word.title.toLowerCase()).replace(/ /g, "-");
                return (detailsPageLink === slug.toLowerCase());
            });
        }

        return (
            <Layout>
                {getBlogDetail && Object.keys(getBlogDetail).length ?
                    <main>
                        <section className="section-hero inner-banner-outer" id="blog">
                            <div className="content-container">
                                <div className="inner-banner">
                                    <h1>{getBlogDetail.title}</h1>
                                </div>
                            </div>
                        </section>
                        <section className="blog-section">
                            <div className="content-container">
                                <div className="blog-details">
                                    <div className="blogd-image">
                                        <img src={getBlogDetail.image} alt="" />
                                        <div className="blogci-item-details">
                                            <span>
                                                By {getBlogDetail.author}
                                            </span>
                                            <span>
                                                {getBlogDetail.publishTime}
                                            </span>
                                        </div>
                                    </div>
                                    <h2>{getBlogDetail.title}</h2>
                                    <div className="blog-description">
                                        {getBlogDetail.titleDescription && getBlogDetail.titleDescription.length && getBlogDetail.titleDescription.map((blogDesc, index) => {
                                            return (
                                                <p key={index}> {blogDesc} </p>
                                            );
                                        })}

                                        {getBlogDetail.content && getBlogDetail.content.length && getBlogDetail.content.map((contentDesc, contentIndex) => {
                                            return (
                                                <div key={contentIndex}>
                                                    <h3>{contentDesc.subHeader}</h3>
                                                    {
                                                        contentDesc.subDescription.map((contentDescObj, contentDescIndex) => {
                                                            return <p key={contentDescIndex}>{contentDescObj}</p>
                                                        })
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        </section>
                    </main>
                    : DynamicComponent }
            </Layout>
        )
    }
}
