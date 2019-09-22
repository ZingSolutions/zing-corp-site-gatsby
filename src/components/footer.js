import React from "react"
import ZingLogo from "./zingLogo"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import "./footer.scss"

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="newsletter">
          <div className="col-1">
            <h2>Let's Do Something Amazing</h2>
            <p>Drop your email here and we'll get back to you ASAP</p>
          </div>
          <div className="col-2">
            <form>
              <input type="text" placeholder="Enter Your Email" />
              <button className="call-to-action red" type="submit">
                Contact Me
              </button>
            </form>
          </div>
        </div>
        <div className="logo">
          <ZingLogo />
        </div>
        <div className="links">
          <Link to="/privacy/">Privacy Policy</Link>
          <Link to="/cookies/">Cookies</Link>
          <OutboundLink
            href="https://drive.google.com/uc?id=1EM1ffKnxVpQni3xdjZzmVqmLeNXg7ntL"
            target="_blank"
          >
            Brand Guidelines
          </OutboundLink>
          <Link to="/contact-us/">Contact Us</Link>
        </div>
        <div className="social">
          <OutboundLink
            href="https://www.linkedin.com/company/zing-dev/"
            target="_blank"
          >
            <img
              src="/images/linkedin.png"
              alt="Go To Zing Linkedin"
              title="LinkedIn"
            />
          </OutboundLink>
          <OutboundLink href="https://twitter.com/zingdevs" target="_blank">
            <img
              src="/images/twitter.png"
              alt="Go To Zing Twitter"
              title="Twitter"
            />
          </OutboundLink>
          <OutboundLink href="https://github.com/ZingSolutions" target="_blank">
            <img
              src="/images/GitHub.png"
              alt="Go To Zing GitHub"
              title="GitHub"
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.youtube.com/channel/UCQaA6jM3zT6WcbXuzjgpAHw"
            target="_blank"
          >
            <img
              src="/images/youtube.png"
              alt="Go To Zing YouTube"
              title="YouTube"
            />
          </OutboundLink>
        </div>
        <div className="cr">&copy; ProspectSoft Limited 2019</div>
      </footer>
    )
  }
}
