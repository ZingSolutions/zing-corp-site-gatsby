import React from "react"
import Layout from "../components/layout"
import { load } from "recaptcha-v3"
import "./contact-us.scss"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

export default class ContactUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Subject: "",
      Message: "",
      DisabledStatus: false,
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.validateEmail = this.validateEmail.bind(this);
    this.emailRef = React.createRef();
  }

  handleForm(event) {
    // this.emailRef.current.setCustomValidity("Email must be of format x@y.z");
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // validateEmail() {
  //   console.log("CALLED");
  //   if (/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(this.state.Email)) {
  //     console.log("SUCCEEEDED");
  //     return true;
  //   } else {
  //     console.log("FAILED");
  //     return false;
  //   }
  // }

  async handleSubmit(event) {
    event.preventDefault();
    // console.log("SUBMISSION");
    // if (this.validateEmail()) {
      const recaptcha = await load("6LcZlbUUAAAAAB0XnbgU8DjrBuVbvN92XL7a8ygU");
      const token = await recaptcha.execute("ContactUsForm");

      const postData = {
        Contact: {
          FirstName: this.state.FirstName,
          LastName: this.state.LastName,
          Email: this.state.Email,
          Subject: this.state.Subject,
          Message: this.state.Message
        },
        Token: token
      };

      try {
        var res = await fetch("http://localhost:5000/contacts", {
          method: "POST",
          body: JSON.stringify(postData),
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (res.status !== 200) {
          toast.error("Error, submission failed", { autoClose: 8000 })
        } else {
          toast.success("Form submission accepted, speak to you soon!", { autoClose: 8000 })
          //close form
          this.setState({ DisabledStatus: true });
        }
      } catch {
        toast.error("Error, could not connect. Check your connection.", { autoClose: 8000 })
      }
    // } else {
      
    // }
  }

  render() {
    return (
      <Layout>
        <main>
          <section className="section-hero" id="privacy">
            <div className="content-container">
              <div className="col-1">
                <h1>Contact Us</h1>
                <p>Let's do something amazing together.</p>
              </div>
            </div>
          </section>
          <section className="section-contact-form" id="submitted" style={{ backgroundColor: "#efefef" }}>
            <div className="content-container">
              <div className="contact-form-header">
                <h3 className="contact-form-title">Leave a message and we'll get back to you ASAP.</h3>
                <p>Pardon our dust, our site is undergoing a rework, but you can still get in touch by filling out the form below!</p>
              </div>
              <div className="contact-card">
                <div className="col-1">
                  <h4>Phone</h4>
                  <h3>0808 168 9464</h3>
                  <h4>Email</h4>
                  <h3>conversations@zing.dev</h3>
                  <h4>Address</h4>
                  <h3>Beacon House, Ibstone Rd,</h3>
                  <h3>Stokenchurch, High Wycombe,</h3>
                  <h3>HP14 3WN</h3>
                </div>
                <div className="col-2">
                  <form id="contact-us-form" onChange={this.handleForm} onSubmit={this.handleSubmit} hidden={this.state.DisabledStatus}>
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
                        // pattern="^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]"
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
                      <button className="contact-submit" type="submit" disabled={this.state.disabledStatus} hidden={this.state.disabledStatus}>
                        Submit now
                  </button>
                    </div>
                  </form>
                  <div className="thanks" >
                    <h4>Thanks for contacting us!</h4>
                    <h4>We'll get back to you ASAP</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}
