import React from "react"
import Img from "gatsby-image"

import constants from "../../src/data/constants"

export default ({ service, mode }) => {
  const {
    functions: { capitalizeTxt },
  } = constants

  const linker = (
    <div key="linker" className="linker">
      <img
        src={`/images/linker-${mode}.png`}
        alt={`Linker ${capitalizeTxt(mode)}`}
      />
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
