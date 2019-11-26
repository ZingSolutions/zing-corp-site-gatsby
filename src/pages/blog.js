import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "./blog.scss"
import constants from '../data/constants';

export default class blog extends React.Component {

    state = {
        activeTabIndex: 0,
    };

    openBlock = (index) => {
        this.setState({
            activeTabIndex: index,
        });
    };

    render() {
        const { activeTabIndex } = this.state;
        const blogItems = [...constants.blogItems];
        const blogDescription = blogItems[activeTabIndex];
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
                    <section className="blog-section">
                        <div className="content-container">
                            <form>
                                <div className="search-wrapper">
                                    <button type="submit">
                                        <i class="material-icons md-24">search</i>
                                    </button>
                                    <input type="text" placeholder="Search articles" name="search" />
                                </div>
                            </form>
                            <div className="tabing-wrapper">
                                <div className="tab-list">
                                    <ul>
                                        {blogItems && blogItems.length && blogItems.map((item, index) => {
                                            return <li key={index} className={(activeTabIndex === index ? 'active' : '')}>
                                                <button onClick={() => this.openBlock(index)}>{item.category}</button>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    {blogDescription.blogs && blogDescription.blogs.length && blogDescription.blogs.map((blogItem, index) => {
                                        return (
                                            <div key={index} className="tabing-content-outer active" >
                                                <div className="content-wrapper">
                                                    <div className="tabing-title">
                                                        <h2>{blogItem.title}</h2>
                                                        <p>By {blogItem.author}</p>
                                                        <p>{blogItem.publishTime}</p>
                                                    </div>
                                                    <div className="tabing-description">
                                                        <div className="left-img">
                                                            <img src={blogItem.image} alt="" />
                                                        </div>
                                                        <div className="right-blog">
                                                            <p>{blogItem.description}</p>
                                                            <button className="btn-red">Read More</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <script>
                </script>
            </Layout>
        )
    }
}
