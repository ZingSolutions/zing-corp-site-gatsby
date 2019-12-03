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


  mouseenterFunc=(event)=> {
    return ;

    const target = document.querySelector(".target");
    const links = document.querySelectorAll("nav a");
    if (!event.target.parentNode.classList.contains("active")) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
          links[i].parentNode.classList.remove("active");
        }
        links[i].style.opacity = "0.25";
      }

      event.target.parentNode.classList.add("active");
      event.target.style.opacity = "1";

      const width = event.target.getBoundingClientRect().width;
      const height = event.target.getBoundingClientRect().height;
      const left = event.target.getBoundingClientRect().left;
      const top = event.target.getBoundingClientRect().top;
      const color = 'red';

      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
      target.style.backgroundColor = color;
      target.style.transform = "none";
    }
  }


  render() {
    const { headerAnimationClass } = this.state;
    return (
      <header className={headerAnimationClass}>
        <div className="header">
          <ZingLogo />
          <div className="menu-wrapper">
            <div className="hamburger-menu" onClick={this.toggleAnimateClass}></div>
          </div>
          <nav>
            <ul>
              <li onMouseEnter={this.mouseenterFunc}><Link activeClassName="selected" to="/about/">About Us</Link>

              </li>

              <li onMouseEnter={this.mouseenterFunc} className="submenu">
                <Link activeClassName="selected" to="/partner">Partners</Link>
              </li>

              <li onMouseEnter={this.mouseenterFunc}>
                <Link activeClassName="selected" to="/services/">Services</Link>
              </li>
              <li onMouseEnter={this.mouseenterFunc} className="submenu">
                <Link activeClassName="selected" to="/case-study/">Case Studies</Link>
              </li>
              <li>
                <Link activeClassName="selected" to="/blog/">Blog</Link>
              </li>

            </ul>
            {/* <span className="target"></span> */}
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
