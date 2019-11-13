import React from "react"
import ZingLogo from "./zingLogo"
import { Link } from "gatsby"
import "./header.scss"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
      headerAnimationClass: '',
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.menuClassList = this.getMenuClassList.bind(this)
    this.getBlockOutClassList = this.getBlockOutClassList.bind(this)
  }

  componentDidMount() {
    //remove openMenu class after component mount for hide hamburger-menu for mobile
    document.body.classList.remove('openMenu');
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

  toggleParentClass = (event) => {
    event.target.parentNode.classList.toggle('active-subMenu');
  }
  toggleAnimateClass = (event) => {
    document.body.classList.toggle('openMenu');
    event.target.classList.toggle('animate');
  }


  render() {
    const { headerAnimationClass } = this.state;
    return (
      <header className={headerAnimationClass}>
        <div className="header">
          <div>
            <ZingLogo />
          </div>
          <div className="menu-wrapper">
            <div className="hamburger-menu" onClick={this.toggleAnimateClass}></div>
          </div>
          <nav>
            <ul>
              <li><Link activeClassName="selected" to="/about/">About Us</Link>

              </li>

              <li className="submenu">
                <a onClick={this.toggleParentClass} href="#">Partners Page</a>

                <ul>
                  <li><a href="#">Microsoft</a></li>
                  <li><a href="#">Twilio</a></li>
                  <li><a href="#">Just After Midnight</a></li>
                </ul>
              </li>
              <li>
                <Link activeClassName="selected" to="/services/">Services</Link>
              </li>
              <li className="submenu">
                <a onClick={this.toggleParentClass} href="#">Customer Success Stories</a>
                <ul>
                  <li><a href="#">CET</a></li>
                  <li><a href="#">Integrations Page</a></li>
                </ul>
              </li>
              <li><a href="#">Blog</a></li>

            </ul>
          </nav>


          <div className="contact-us-links">
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
