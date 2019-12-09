import React from "react"
import Layout from "../components/layout"
import "./blog-detail.scss"
import { Link } from "gatsby"
import { Redirect } from "@reach/router"
import constants from "../data/constants"

export default class Blogdetail extends React.Component {
  render() {
    const { slug = "" } = this.props
    let DynamicComponent = <Redirect to="/" noThrow />
    const blogDetails = [...constants.blogItems]
    let getBlogDetail = null
    if (blogDetails.length && slug) {
      getBlogDetail = blogDetails.find(word => {
        const detailsPageLink = word.title.toLowerCase().replace(/ /g, "-")
        return detailsPageLink === slug.toLowerCase()
      })
    }

    let maxResult = 1
    blogDetails.sort(
      (d1, d2) =>
        new Date(d2.publishDateFormat).getTime() -
        new Date(d1.publishDateFormat).getTime()
    )
    const updatedBlogDetails = blogDetails.filter((word, index, array) => {
      const detailsPageLink = word.title.toLowerCase().replace(/ /g, "-")
      return (
        detailsPageLink !== slug.toLowerCase() &&
        maxResult > 0 &&
        (maxResult !== 1 ? (maxResult -= 1) : true)
      )
    })

    return (
      <Layout>
        {getBlogDetail && Object.keys(getBlogDetail).length ? (
          <main>
            <section className="section-hero inner-banner-outer" id="blog">
              <div className="content-container">
                <div className="inner-banner">
                  <h1>{getBlogDetail.title}</h1>
                </div>
              </div>
            </section>
            <section className="blog-section">
              <div className="content-container blog-detail-page">
                <div className="blog-details">
                  <div className="blogd-image">
                    <img src={getBlogDetail.image} alt="" />
                    <div className="blogci-item-details">
                      <span>By {getBlogDetail.author}</span>
                      <span>{getBlogDetail.publishTime}</span>
                    </div>
                  </div>
                  <h2>{getBlogDetail.title}</h2>
                  <div className="blog-description">
                    {getBlogDetail.titleDescription &&
                      getBlogDetail.titleDescription.length &&
                      getBlogDetail.titleDescription.map((blogDesc, index) => {
                        return <p key={index}> {blogDesc} </p>
                      })}

                    {getBlogDetail.content &&
                      getBlogDetail.content.length &&
                      getBlogDetail.content.map((contentDesc, contentIndex) => {
                        return (
                          <div key={contentIndex}>
                            <h3>{contentDesc.subHeader}</h3>
                            {contentDesc.subDescription.map(
                              (contentDescObj, contentDescIndex) => {
                                return (
                                  <p key={contentDescIndex}>{contentDescObj}</p>
                                )
                              }
                            )}
                          </div>
                        )
                      })}
                  </div>
                </div>
                <div className="more-blog-wrapper">
                  <div className="tabing-wrapper">
                    <h2>More Blogs...</h2>
                    <div className="tabing-content-outer">
                      <div className="content-wrapper">
                        <div className="blog-lists">
                          {updatedBlogDetails && updatedBlogDetails.length
                            ? updatedBlogDetails.map((blogItem, index) => {
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
                                  </div>
                                )
                              })
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        ) : (
          DynamicComponent
        )}
      </Layout>
    )
  }
}
