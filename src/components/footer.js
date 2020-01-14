import React from "react"
import ZingLogo from "./zingLogo"
import { load } from "recaptcha-v3"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa"

import "./footer.scss"

var recaptcha = null

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Subject: "Quick conversation request",
      Message: "",
      DisabledStatus: false,
    }

    this.handleForm = this.handleForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    load("6LcZlbUUAAAAAB0XnbgU8DjrBuVbvN92XL7a8ygU").then(
      instance => (recaptcha = instance)
    )
  }

  handleForm(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const token = await recaptcha.execute("ContactUsForm")

    const postData = {
      Contact: {
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email: this.state.Email,
      },
      Message: {
        Subject: this.state.Subject,
        Message: this.state.Message,
      },
      Token: token,
    }

    try {
      const url =
        "https://corp-site-functions.azurewebsites.net/api/PostContact"
      var res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (res.status !== 200) {
        toast.error("Error, submission failed", { autoClose: 8000 })
      } else {
        toast.success("Form submission accepted, speak to you soon!", {
          autoClose: 8000,
        })
        //close form
        this.setState({ DisabledStatus: true })
      }
    } catch {
      toast.error("Error, could not connect. Check your connection.", {
        autoClose: 8000,
      })
    }
  }

  render() {
    return (
      <footer>
        <div className="newsletter">
          <div className="col-1">
            <h2 className="sub-header-text">Start a conversation with us</h2>
            <p>Enter your email address and we'll get in touch</p>
          </div>
          <div className="col-2">
            {!this.state.DisabledStatus ? (
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="Email"
                  ref={this.emailRef}
                  name="Email"
                  defaultValue={this.state.Email}
                  required
                  onChange={this.handleForm}
                />
                <button className="call-to-action red" type="submit">
                  Contact Me
                </button>
              </form>
            ) : (
              <div className="thanks">
                <h4>Thanks for contacting us!</h4>
                <h4>We'll get back to you ASAP</h4>
              </div>
            )}
          </div>
        </div>
        <div className="logo">
          <ZingLogo />
        </div>
        <div className="links">
          <Link to="/integration/">Integrations</Link> <span>|</span>
          <Link to="/resource/">Resources</Link> <span>|</span>
          <Link to="/privacy/">Privacy Policy</Link> <span>|</span>
          <Link to="/cookies/">Cookies</Link> <span>|</span>
          <Link to="/careers/">Careers</Link>
        </div>
        <div className="social">
          <OutboundLink
            href="https://www.facebook.com/zing.development/"
            target="_blank"
            title="Zing on Facebook"
            rel="noreferrer"
          >
            <FaFacebook className="icon" />
          </OutboundLink>
          <OutboundLink
            href="https://twitter.com/zingdevs"
            target="_blank"
            title="Zing on Twitter"
            rel="noreferrer"
          >
            <FaTwitter className="icon" />
          </OutboundLink>
          <OutboundLink
            href="https://www.linkedin.com/company/zing-dev/"
            target="_blank"
            title="Zing on LinkedIn"
            rel="noreferrer"
          >
            <FaLinkedin className="icon" />
          </OutboundLink>
          <OutboundLink
            href="https://www.youtube.com/channel/UCQaA6jM3zT6WcbXuzjgpAHw"
            target="_blank"
            title="Zing on Youtube"
            rel="noreferrer"
          >
            <FaYoutube className="icon" />
          </OutboundLink>
          <OutboundLink
            href="https://github.com/ZingSolutions"
            target="_blank"
            title="Zing on Github"
            rel="noreferrer"
          >
            <FaGithub className="icon" />
          </OutboundLink>
        </div>
        {this.props.children}
        <div className="cr">&copy; ZingDev Limited 2020</div>
      </footer>
    )
  }
}
