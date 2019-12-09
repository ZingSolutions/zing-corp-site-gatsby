import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import constants from "./../data/constants"
import "./resource.scss"

export default class resource extends React.Component {
  render() {
    const styles = {
      backgroundImage: "url('/images/study-botttom-bg.png')",
    }

    const resource = [...constants.resource]

    let resourceComponent = null
    if (resource.length > 0) {
      resourceComponent = (
        <div className="key-resource-inner">
          {resource.map((resource, key) => {
            const {
              images: { image },
              resourceInfo: { title1, description, link },
            } = resource
            return (
              <div className="resource-row" key={key}>
                <div className="resource-img">
                  <img src={image} alt="" />
                </div>
                <div className="resource-content">
                  <h3>{title1}</h3>
                  <p>{description} </p>
                  <Link className="call-to-action" to={link}>
                    Find Out More
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )
    }

    const addResource = [...constants.addResource]

    let addResourceComponent = null
    if (addResource.length > 0) {
      addResourceComponent = (
        <ul className="additional-resource-inner">
          {addResource.map((addResource, key) => {
            const {
              images: { image },
              addResourceInfo: { title },
              link,
            } = addResource
            return (
              <li key={key}>
                {title === "Branding guidelines" ? (
                  <a
                    href={link}
                    download={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="image">
                      <img src={image} alt="" />
                    </div>
                    <div className="additional-link">{title}</div>
                  </a>
                ) : (
                  <Link to={link}>
                    <div className="image">
                      <img src={image} alt="" />
                    </div>
                    <div className="additional-link">{title}</div>
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      )
    }

    return (
      <Layout>
        <main>
          <section className="section-hero resource-banner" id="about">
            <div className="content-container">
              <div className="inner-banner">
                <h1>Zing Resources</h1>
                <p>Check out our content below</p>
              </div>
            </div>
          </section>
          <section className="resource-section">
            <div className="content-container">
              <div className="key-resource">
                <h4 className="resource-title">
                  <span>Key Resources</span>
                </h4>

                {resourceComponent}
              </div>
              <div className="additional-resource">
                <h4 className="resource-title">
                  <span>Additional Resources</span>
                </h4>
                <div className="additional-resource-content">
                  {addResourceComponent}
                </div>
              </div>
            </div>
          </section>

          <section className="section-casestudy-info">
            <div className="casestudy-info-content" style={styles}>
              <div className="content-container">
                <div className="casestudy-outer">
                  <h2>Looking for some information but can't find it?</h2>
                  <p>
                    <Link to="/contact-us" className="link-design">
                      Contact Us
                    </Link>{" "}
                    to get in touch with a member of the team.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}
