import React from "react"
import Menu from "./menu"
import Footer from "./footer"

import "./layout.scss"

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <header>
          <Menu />
        </header>
        <main>{this.props.children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
