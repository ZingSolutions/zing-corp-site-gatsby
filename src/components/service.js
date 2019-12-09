import React from "react"

import constants from "../../src/data/constants"

export default props => {
  const {
    functions: { capitalizeTxt },
  } = constants

  const { service, mode } = props
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
      <img src={service.image.image} alt={service.image.alt} />
    </div>
  )
  const card = (
    <div key="card" className="card">
      <h3 className="title">{service.card.title}</h3>
      <hr />
      <p>{service.card.description}</p>
    </div>
  )
  const components =
    mode === "left" ? [linker, image, card] : [card, image, linker]

  return <div className="row">{components.map(cmp => cmp)}</div>
}
