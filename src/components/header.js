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
        <div className="menu-header">
          <ZingLogo />
          <ul className={this.getMenuClassList()}>
            <li>
              Where To?
              <i className="material-icons md-24" onClick={this.toggleMenu}>
                clear
              </i>
            </li>
            <li>
              <Link to="/contact-us/">Services</Link>
            </li>
            <li>
              <Link to="/contact-us/">Zing & Twilio</Link>
            </li>
            <li>
              <Link to="/contact-us/">Case Studies</Link>
            </li>
            <li>
              <Link to="/contact-us/" className="call-to-action red">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="static-menu">
            <li>
              <Link to="/contact-us/">Services</Link>
            </li>
            <li>
              <Link to="/contact-us/">Zing & Twilio</Link>
            </li>
            <li>
              <Link to="/contact-us/">Case Studies</Link>
            </li>
            <li>
              <Link to="/contact-us/" className="call-to-action red">
                Contact Us
              </Link>
            </li>
          </ul>
          <div
            className={this.getBlockOutClassList()}
            onClick={this.toggleMenu}
          ></div>
          <i className="material-icons md-24" onClick={this.toggleMenu}>
            menu
          </i>
        </div>
      </header>
    )
  }
}
