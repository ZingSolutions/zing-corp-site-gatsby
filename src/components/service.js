import React from "react"
import Img from "gatsby-image"

export default ({ service, mode }) => {
  const linker = (
    <div key="linker" className="linker">
      <Img fluid={mode === "left" ? service.linkerLeft : service.linkerRight} />
    </div>
  )
  const image = (
    <div key="image" className="image">
      <Img fluid={service.image.fluid} />
    </div>
  )
  const card = (
    <div key="card" className="card">
      <h3 className="title">{service.card.title}</h3>
      <p>{service.card.description}</p>
    </div>
  )
  const components =
    mode === "left" ? [linker, image, card] : [card, image, linker]

  return <div className="row">{components.map(cmp => cmp)}</div>
}
