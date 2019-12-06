import React from "react"
import Layout from "../components/layout"
import { load } from "recaptcha-v3"
import "./contact-us.scss"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

var recaptcha = null
toast.configure()

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Subject: "",
      Message: "",
      DisabledStatus: false,
    }
    this.handleForm = this.handleForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.emailRef = React.createRef()

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
        "https://corp-site-functions.azurewebsites.net/api/PostContact" // "/api/PostContact"
      var res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (res.status !== 200) {
        toast.error(
          "Oops, looks like we're having some difficulties. Please try again in a minute.",
          { autoClose: 8000 }
        )
      } else {
        toast.success("Thanks, we'll speak to you soon!", {
          autoClose: 8000,
        })
        //close form
        this.setState({ DisabledStatus: true })
      }
    } catch {
      toast.error("Error, could not connect. Please check your connection.", {
        autoClose: 8000,
      })
    }
  }

  render() {
    return (
      <Layout>
        <main className="contact-us">
          <section className="section-hero" id="privacy">
            <div className="content-container">
              <div className="col-1">
                <h1>Contact Us</h1>
                <p>Let's start a conversation today.</p>
              </div>
            </div>
          </section>
          <section
            className="section-contact-form"
            id="submitted"
            style={{ backgroundColor: "#efefef" }}
          >
            <div className="content-container">
              <div className="contact-form-header">
                <h3 className="contact-form-title">Want to get in touch?</h3>
                <p>
                  We’d love to hear from you, leave your details below and we’ll
                  jump straight on it.
                </p>
              </div>
              <div className="contact-card">
                <div className="col-1">
                  <h4>Phone</h4>
                  <h3>0808 168 9464</h3>
                  <h4>Email</h4>
                  <h3>conversations@zing.dev</h3>
                  <h4>Address</h4>
                  <h3 className="address-title">Buckinghamshire</h3>
                  <h3>Beacon House, Ibstone Rd,</h3>
                  <h3>Stokenchurch, High Wycombe,</h3>
                  <h3>HP14 3WN</h3>
                  <h4 />
                  <h3 className="address-title">London</h3>
                  <h3>5 Merchant Square</h3>
                  <h3>London</h3>
                  <h3>W2 1Ay</h3>
                  <h4>Parking details </h4>
                  <a href="https://www.q-park.co.uk/en-gb/cities/london/church-street/ " className="linkParking">https://www.q-park.co.uk/en-gb/cities/london/church-street/ </a>

                </div>
                <div className="col-2">
                  <form
                    id="contact-us-form"
                    onSubmit={this.handleSubmit}
                    hidden={this.state.DisabledStatus}
                  >
                    <div className="row">
                      <input
                        name="FirstName"
                        type="text"
                        placeholder="Enter First Name"
                        defaultValue={this.state.FirstName}
                        required
                        onChange={this.handleForm}
                      />
                      <input
                        name="LastName"
                        type="text"
                        placeholder="Enter Last Name"
                        defaultValue={this.state.LastName}
                        required
                        onChange={this.handleForm}
                      />
                    </div>
                    <div className="row">
                      <input
                        id="Email"
                        ref={this.emailRef}
                        name="Email"
                        type="email"
                        placeholder="Enter Email"
                        defaultValue={this.state.Email}
                        required
                        onChange={this.handleForm}
                      />
                      <input
                        name="Subject"
                        type="text"
                        placeholder="Enter Subject"
                        defaultValue={this.state.Subject}
                        required
                        onChange={this.handleForm}
                      />
                      <textarea
                        name="Message"
                        placeholder="Enter Message"
                        defaultValue={this.state.Message}
                        required
                        onChange={this.handleForm}
                      />
                    </div>
                    <div className="row">
                      <button
                        className="contact-submit"
                        type="submit"
                        disabled={this.state.disabledStatus}
                        hidden={this.state.disabledStatus}
                      >
                        Submit now
                      </button>
                    </div>
                  </form>
                  {this.state.DisabledStatus ? (
                    <div className="thanks">
                      <h4>Thanks for contacting us!</h4>
                      <h4>We'll get back to you ASAP</h4>
                    </div>
                  ) : (
                      ""
                    )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}
