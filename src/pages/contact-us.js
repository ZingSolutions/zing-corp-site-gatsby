import React from "react"
import Layout from "../components/layout"
import { load } from "recaptcha-v3"
import "./contact-us.scss"

export default class ContactUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Subject: "",
      Message: ""
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleForm(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
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

    fetch("http://localhost:5000/contacts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => console.log(res));

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
          <section className="section-contact-form" id="submitted" style={{backgroundColor: "#efefef"}}>
            <div className="content-container">
              <h3 className="contact-form-title">Leave a message and we'll get back to you ASAP.</h3>
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
                  <form id="contact-us-form" onChange={this.handleForm} onSubmit={this.handleSubmit}>
                    <div className="row">
                      <input
                        name="FirstName"
                        type="text"
                        placeholder="Enter First Name"
                        value={this.state.FirstName}
                        required
                      />
                      <input
                        name="LastName"
                        type="text"
                        placeholder="Enter Last Name"
                        value={this.state.LastName}
                        required
                      />
                    </div>
                    <div className="row">
                      <input
                        name="Email"
                        type="email"
                        placeholder="Enter Email"
                        value={this.state.Email}
                        required
                      />
                      <input
                        name="Subject"
                        type="text"
                        placeholder="Enter Subject"
                        value={this.state.Subject}
                        required
                      />
                      <textarea
                        name="Message"
                        placeholder="Enter Message"
                        value={this.state.Message}
                        required
                      ></textarea>
                    </div>
                    <div className="row">
                      <button className="contact-submit" type="submit">
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
