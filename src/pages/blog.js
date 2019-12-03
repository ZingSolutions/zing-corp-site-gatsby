import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import constants from './../data/constants';
import "./blog.scss"

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
        var styles = {
            backgroundImage: "url('/images/Blog-page-image.jpg')",
        };
        const { filteredImtes } = this.state;

        filteredImtes.sort((d1, d2) => new Date(d2.publishDateFormat).getTime() - new Date(d1.publishDateFormat).getTime());

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
                                        <i className="material-icons md-24">search</i>
                                    </button>
                                    <input type="text" placeholder="Search articles" name="search" onChange={this.handleSearchBlog} />
                                </div>
                            </form>
                            <div className="tabing-wrapper">
                                {/* <ul>
                                    <li className="active">
                                        <a href="">All</a>
                                    </li>
                                    <li>
                                        <a href="">Zingers</a>
                                    </li>
                                    <li>
                                        <a href="">Industry</a>
                                    </li>
                                    <li>
                                        <a href="">Events</a>
                                    </li>
                                </ul> */}
                                <div className="tabing-content-outer">
                                    <div className="content-wrapper">
                                        <div className="blog-lists">
                                            {filteredImtes && filteredImtes.length ? filteredImtes.map((blogItem, index) => {
                                                const detailsPageLink = (blogItem.title.toLowerCase()).replace(/ /g, "-");
                                                return (
                                                    <div key={index} className="blogcontent-item">
                                                        <div className="blogci-image">
                                                            <img src={blogItem.image} alt="" />
                                                            <div className="blogci-item-details">
                                                                <span>By {blogItem.author}</span>
                                                                <span>{blogItem.publishTime}</span>
                                                            </div>
                                                        </div>
                                                        <h2>{blogItem.title}</h2>
                                                        <p className="bolgci-description">
                                                            {blogItem.description}
                                                        </p>
                                                        <Link to={`/blog-detail/${detailsPageLink}`} className="btn-red">Read More</Link>
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
