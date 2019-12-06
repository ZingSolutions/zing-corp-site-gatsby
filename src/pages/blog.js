import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import constants from './../data/constants';
import "./blog.scss"
import Blogdetail from "./blog-detail";

export default class blog extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            filteredImtes: [...constants.blogItems],
        }
    }

    handleSearchBlog = (event) => {
        const { blogItems } = constants;
        const filteredImtes = blogItems.filter(word => (word.title.toLowerCase()).includes(event.target.value.toLowerCase()));
        this.setState({ filteredImtes });
    }

    render() {
        const slug = this.props["*"];
        if (slug) {
            return <Blogdetail slug={slug} ></Blogdetail>

        }
        var styles = {
            backgroundImage: "url('/images/Blog-page-image.jpg')",
        };
        const { filteredImtes } = this.state;

        filteredImtes.sort((d1, d2) => new Date(d2.publishDateFormat).getTime() - new Date(d1.publishDateFormat).getTime());

        return (
            <Layout>
                <main className="blog">
                    <section className="section-hero" id="blog">
                        <div className="content-container">
                            <div className="col-1">
                                <h1>Our Blog</h1>
                                <p>Check out our blog</p>
                            </div>
                        </div>
                    </section>
                    <section className="blog-section">
                        <div className="content-container">
                            <form>
                                <div className="search-wrapper">
                                    <button type="submit">
                                        <i className="material-icons md-24">search</i>
                                    </button>
                                    <input type="text" placeholder="Search articles" name="search" onChange={this.handleSearchBlog} />
                                </div>
                            </form>
                            <div className="tabing-wrapper">
                                <div className="tabing-content-outer">
                                    <div className="content-wrapper">
                                        <div className="blog-lists">
                                            {filteredImtes && filteredImtes.length ? filteredImtes.map((blogItem, index) => {
                                                const detailsPageLink = (blogItem.title.toLowerCase()).replace(/ /g, "-");
                                                return (
                                                    <div key={index} className="blogcontent-item">
                                                        <div className="blogci-image">
                                                            <Link to={`/blog/${detailsPageLink}`}><img src={blogItem.image} alt="" /></Link>
                                                            <div className="blogci-item-details">
                                                                <span>By {blogItem.author}</span>
                                                                <span>{blogItem.publishTime}</span>
                                                            </div>
                                                        </div>
                                                        <h2>{blogItem.title}</h2>
                                                        <p className="bolgci-description">
                                                            {blogItem.description}
                                                        </p>
                                                        <Link to={`/blog/${detailsPageLink}`} className="btn-red">Read More</Link>
                                                    </div>
                                                )
                                            })
                                                : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-casestudy-info" >
                        <div className="casestudy-info-content" style={styles}>
                            <div className="content-container" >
                                <div className="casestudy-outer">
                                    <h2>
                                        Got an interesting topic to write about?
                                </h2>
                                    <p>Zing are interested, get in touch to share your ideas.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        )
    }
}
