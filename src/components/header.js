import React from "react"
import ZingLogo from "./zingLogo"
import { Link } from "gatsby"
import "./header.scss"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.menuClassList = this.getMenuClassList.bind(this)
    this.getBlockOutClassList = this.getBlockOutClassList.bind(this)
  }

  toggleMenu() {
    console.log(this.state.showMenu)
    this.setState({ showMenu: !this.state.showMenu })
  }

  getMenuClassList() {
    const classObj = {
      "nav-menu": true,
      "show-nav": this.state.showMenu,
      "hide-nav": !this.state.showMenu,
    }

    return Object.keys(classObj).reduce(
      (p, c) => p + (classObj[c] ? " " + c : ""),
      ""
    )
  }

  getBlockOutClassList() {
    return "nav-menu-blockout" + (this.state.showMenu ? " shown" : "")
  }

  render() {
    return (
      <header>
        <div className="header">
          <div>
            <ZingLogo />
          </div>
          <div>
            <Link to="/contact-us/">
              <i className="material-icons md-24">email</i>
            </Link>
            <Link to="/contact-us/" className="call-to-action red">
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    )
  }
}
