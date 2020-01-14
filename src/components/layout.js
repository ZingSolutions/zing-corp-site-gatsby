import React from "react"
import Header from "./header"
import Footer from "./footer"

import "./layout.scss"

export default class Layout extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Header />
        <main>{this.props.children}</main>
        <Footer>{this.props.attributions}</Footer>
      </div>
    )
  }
}
