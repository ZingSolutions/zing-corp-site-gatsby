import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Service from "../components/service"

import "./index.scss"
import constants from "../data/constants"

export default ({ data }) => {
  const services = [...constants.services]

  const images = {}

  for (var edge of data.allFile.edges) {
    images[edge.node.childImageSharp.fluid.originalName] =
      edge.node.childImageSharp.fluid
  }

  return (
    <Layout>
      <section className="section-hero">
        <div className="content-container">
          <div className="col-1">
            <h1>An Agile Approach to Discovering Twilio Solutions</h1>
            <p>
              Zing's portfolio of cloud communication services ranges from
              discrete Twilio Integrations to industry-disruptive enterprise
              solutions.
            </p>
          </div>
          <div className="col-2 home-page-image">
            <Img fluid={images["Flex-in-computer.png"]} />
          </div>
        </div>
      </section>
      <section className="section-about-us" id="zing-and-twilio">
        <div className="content-container">
          <div className="home-page-content">
            <h2>Who We Are</h2>
            <p>
              Zing a Twilio Gold Consulting Partner. We are part of the Sputnik
              Group of Companies that includes ProspectSoft, a leading provider
              of SaaS CRM systems.
            </p>
            <p>
              There are now almost 30 Zingers and we're working across the UK,
              Northern and Southern Europe.
            </p>
            <Link to="/about/" className="call-to-action red">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="section-what-we-do" id="what-we-do">
        <div className="content-container">
          <div className="content-header">
            <h2 className="title-red">What We Do</h2>
            <h3 className="title">We Focus on Customer</h3>
            <h3 className="title">Communications and Workforce Mobility</h3>
            <hr />
          </div>
          <div className="content-body-path">
            {services.map((service, index) => {
              service.image.fluid = images[service.image.image]
              service.linkerLeft = images["linker-left.png"]
              service.linkerRight = images["linker-right.png"]
              const mode = index % 2 === 0 ? "left" : "right"
              return (
                <Service key={index} service={service} mode={mode}></Service>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: {
          in: [
            "Flex-in-computer.png"
            "integration.png"
            "solutions.png"
            "services.png"
            "linker-left.png"
            "linker-right.png"
          ]
        }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`
