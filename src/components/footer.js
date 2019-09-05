import React from "react"
import ZingLogo from "./zingLogo"
import { Link } from "gatsby"

import "./footer.scss"

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="newsletter">
          <div className="col-1">
            <h2>Sign Up to Our Newsletter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-2">
            <form>
              <input type="text" placeholder="Enter Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="logo">
          <ZingLogo />
        </div>
        <div className="links">
          <Link to="/privacy/">Privacy Policy</Link>
          <Link to="/cookies/">Cookies</Link>
          <a
            href="https://drive.google.com/uc?id=1EM1ffKnxVpQni3xdjZzmVqmLeNXg7ntL"
            target="_blank"
          >
            Brand Guidelines
          </a>
          <Link to="/contact-us/">Contact Us</Link>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/company/zing-dev/" target="_blank">
            <img
              src="images/linkedin.png"
              alt="Go To Zing Linkedin"
              title="LinkedIn"
            />
          </a>
          <a href="https://twitter.com/zingdevs" target="_blank">
            <img
              src="images/twitter.png"
              alt="Go To Zing Twitter"
              title="Twitter"
            />
          </a>
          <a href="https://github.com/ZingSolutions" target="_blank">
            <img
              src="images/GitHub.png"
              alt="Go To Zing GitHub"
              title="GitHub"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQaA6jM3zT6WcbXuzjgpAHw"
            target="_blank"
          >
            <img
              src="images/youtube.png"
              alt="Go To Zing YouTube"
              title="YouTube"
            />
          </a>
        </div>
        <div className="cr">&copy; ProspectSoft Limited 2019</div>
      </footer>
    )
  }
}
