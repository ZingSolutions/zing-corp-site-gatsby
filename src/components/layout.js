import React from "react"
import Header from "./header"
import Footer from "./footer"

import "./layout.scss"

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}
