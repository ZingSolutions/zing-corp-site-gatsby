import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import constants from "./../data/constants"
import "./blog.scss"
import Blogdetail from "./blog-detail"
import { FaSearch } from "react-icons/fa"
import Img from "gatsby-image"

export default props => {
  const [filteredItems, setFilteredItems] = useState(constants.blogItems)
  function handleSearchBlog(event) {
    const { blogItems } = constants
    const filteredImtes = blogItems.filter(word =>
      word.title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    filteredItems.sort(
      (d1, d2) =>
        new Date(d2.publishDateFormat).getTime() -
        new Date(d1.publishDateFormat).getTime()
    )
    setFilteredItems(filteredImtes)
  }
  const slug = props["*"]
  if (slug) {
    return <Blogdetail slug={slug}></Blogdetail>
  }

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
                  <FaSearch />
                </button>
                <input
                  type="text"
                  placeholder="Search articles"
                  name="search"
                  onChange={handleSearchBlog}
                />
              </div>
            </form>
            <div className="tabing-wrapper">
              <div className="tabing-content-outer">
                <div className="content-wrapper">
                  <div className="blog-lists">
                    {filteredItems && filteredItems.length
                      ? filteredItems.map((blogItem, index) => {
                          const detailsPageLink = blogItem.title
                            .toLowerCase()
                            .replace(/ /g, "-")
                          return (
                            <div key={index} className="blogcontent-item">
                              <div className="blogci-image">
                                <Link to={`/blog/${detailsPageLink}`}>
                                  <img src={blogItem.image} alt="" />
                                </Link>
                                <div className="blogci-item-details">
                                  <span>By {blogItem.author}</span>
                                  <span>{blogItem.publishTime}</span>
                                </div>
                              </div>
                              <h2>{blogItem.title}</h2>
                              <p className="bolgci-description">
                                {blogItem.description}
                              </p>
                              <Link
                                to={`/blog/${detailsPageLink}`}
                                className="btn-red"
                              >
                                Read More
                              </Link>
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
        <section className="section-casestudy-info">
          <Img fluid={props.data.hero.childImageSharp.fluid} />
          <div className="blog-info-content">
            <div className="content-container">
              <div className="casestudy-outer">
                <h2>Got an interesting topic to write about?</h2>
                <p>Zing are interested, get in touch to share your ideas.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "Blog-page-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4096) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
