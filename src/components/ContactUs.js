import React from "react";
import Layout from "./Layout";

const ContactUs = () => {
  return (
    <Layout>
      <section id="contact" className="contact section-show">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div className="row mt-2">
          

            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/sandy-ha-a94958240/"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                  {/* <a
                    href="https://twitter.com/juanjuan_song"
                    className="twitter"
                  >
                    <i className="icofont-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100076066340705"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                  <a href="https://github.com/jeydev310" className="twitter">
                    <i className="icofont-github"></i>
                  </a>
                  <a
                    href="https://www.behance.net/songjuan91"
                    className="twitter"
                  >
                    <i className="icofont-behance"></i>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>JamesSu125@hotmail.com</p>
              </div>
            </div>
          </div>

          <form
            action=""
            method="post"
            role="form"
            className="php-email-form mt-4"
          >
            <div className="form-row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div className="validate"></div>
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
              />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Message"
              ></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
