import React from "react"
import ZingLogo from "./zingLogo"
import { Link } from "gatsby"
import "./header.scss"
import { FaEnvelope } from "react-icons/fa"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
      headerAnimationClass: "",
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.menuClassList = this.getMenuClassList.bind(this)
    this.getBlockOutClassList = this.getBlockOutClassList.bind(this)
  }

  componentDidMount() {
    //remove openMenu class after component mount for hide hamburger-menu for mobile
    document.body.classList.remove("openMenu")
  }

  toggleMenu() {
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

  toggleParentClass = event => {
    event.target.parentNode.classList.toggle("active-subMenu")
  }
  toggleAnimateClass = event => {
    document.body.classList.toggle("openMenu")
    event.target.classList.toggle("animate")
  }

  render() {
    const { headerAnimationClass } = this.state
    return (
      <header className={headerAnimationClass}>
        <div className="header">
          <ZingLogo />
          <div className="menu-wrapper">
            <div
              className="hamburger-menu"
              onClick={this.toggleAnimateClass}
            ></div>
          </div>
          <nav>
            <ul>
              <li>
                <Link activeClassName="selected" to="/about/">
                  About Us
                </Link>
              </li>
              <li className="submenu">
                <Link activeClassName="selected" to="/partner/">
                  Partners
                </Link>
              </li>
              <li>
                <Link activeClassName="selected" to="/services/">
                  Services
                </Link>
              </li>
              {/* <li className="submenu">
                <Link activeClassName="selected" to="/case-study/">
                  Case Studies
                </Link>
              </li> */}
              <li>
                <Link activeClassName="selected" to="/blog/">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="contact-us-links">
            <Link to="/contact-us/" title="Contact Us">
              <FaEnvelope />
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
