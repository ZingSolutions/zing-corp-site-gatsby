import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"

import "./layout.scss"

export default props => {
  const attributions = props.attributions || []

  return (
    <div className={props.className}>
      <Header />
      <main>{props.children}</main>
      <Footer>
        {[
          ...attributions,
          <Link to="/third-party/">Third Party Licensing</Link>,
        ]}
      </Footer>
    </div>
  )
}
