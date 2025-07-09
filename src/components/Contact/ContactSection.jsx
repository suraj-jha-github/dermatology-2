import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css";
import "../../styles/CommonButtons.css";

const ContactSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (link === "signup") {
      setShowSignup(true);
      setShowLogin(false);
    } else if (link === "login") {
      setShowLogin(true);
      setShowSignup(false);
    }
  };

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="about-section">
        <aside className="contact-sidebar">
          <ul>
            <li className="active">CONTACT</li>
          </ul>
        </aside>

        <section className="contact-content" >
          <p className="contact-content-heading">Contact Us</p>
          <div className="contact-boxes">
            <div className="contact-card">
              <p className="heading">ADDRESS</p>
              <p className="content">
                200 Ronald Reagan Blvd.
                <br />
                Warwick, NY 1099
              </p>
              <a
                href="https://maps.app.goo.gl/Vbx2FzQ5GD6u9EjS8"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Map and Direction
              </a>
            </div>
            <div className="contact-card">
              <p className="heading">SCHEDULE AN APPOINTMENT</p>
              <p className="content">
                Phone: (845) 421 – 7040
                <br />
                Monday – 8:00am – 4:00pm
                <br />
                Tuesday – Closed
                <br />
              Wednesday – 9:00am – 4:00pm
                <br />
                Thursday – 8:00am – 4:00pm
                <br />
                Friday – 8:00am – 1:00pm
                <br />
                Saturday and Sunday – Closed
              </p>
            </div>
          </div>
          <div>
           <hr className="thin-hr" />
          </div>
          {/* <div className="appointment-heading">
            <p className="about-subheading">Book an appointment</p>
            <div className="auth-links">
              <Link
                to="#"
                className={activeLink === "signup" ? "active" : ""}
                onClick={() => handleLinkClick("signup")}
              >
                SIGN UP
              </Link>
              <Link
                to="#"
                className={activeLink === "login" ? "active" : ""}
                onClick={() => handleLinkClick("login")}
              >
                LOGIN
              </Link>
            </div>
          </div> */}

          {/* SIGNUP MODAL */}
          {/* {showSignup && (
            <div className="signup-modal-align">
              <div className="signup-modal">
                <div className="modal-content">
                  <button
                    className="close-btn"
                    onClick={() => {
                      setShowSignup(false);
                      setActiveLink(null);
                    }}
                  >
                    ×
                  </button>
                  <h4>SIGN UP FOR AN ACCOUNT</h4>
                  <p>
                    Sign up for a scheduling account to save your information
                    for faster booking
                  </p>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <input type="password" placeholder="Confirm Password" />
                  <div className="terms-container">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms" className="terms-text">
                      I AGREE TO THE <Link to="#">TERMS OF SERVICE</Link> AND
                      ACKNOWLEDGE THAT I UNDERSTAND THE{" "}
                      <Link to="#">PRIVACY POLICY</Link>
                    </label>
                  </div>
                  <button className="common-button">SIGN UP</button>
                </div>
              </div>
            </div>
          )} */}

          {/* LOGIN MODAL */}
          {/* {showLogin && (
            <div className="signup-modal-align">
              <div className="signup-modal">
                <div className="modal-content">
                  <button
                    className="close-btn"
                    onClick={() => {
                      setShowLogin(false);
                      setActiveLink(null);
                    }}
                  >
                    ×
                  </button>
                  <h4>LOGIN TO YOUR ACCOUNT</h4>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <div className="forgot-password">
                    <Link to="#" className="forgot-password-link">
                      Forgot Your Password?
                    </Link>
                  </div>
                  <button className="common-button">LOGIN</button>
                </div>
              </div>
            </div>
          )} */}

         
          {/* {!showSignup && !showLogin && (
            <>
              <p className="subheading-paragraph">
                You will receive an appointment confirmation email from our
                scheduling system. Please add it to your safe sender list to
                prevent it from going to your spam or junk folder.
              </p>
              <p className="subheading-paragraph">
                Additionally, you will receive an email regarding your patient
                portal. This email will guide you through verifying your email
                address and setting up a username and password. If you’d like,
                you can log in and complete some of your new patient paperwork
                in advance to save time during your visit. If you have any
                questions, feel free to give us a call!
              </p>

              <div className="appointment-section">
                <h1 className="appointment-title">APPOINTMENT</h1>
                <div className="appointment-card">
                  <h1>Office Visit with Dr. Juliano</h1>
                  <p className="duration">15 minutes</p>
                  {expanded && (
                    <p className="description">
                      Medical Visits address concerns such as acne, skin cancer
                      screenings, rashes, concerning spots, warts, allergy
                      testing, hair loss etc. All patients are seen by board
                      certified dermatologist Dr Juliana. If you are unable to
                      get a preferred time, please call the office at
                      845-421-7040 to see if we can accommodate you. For
                      cosmetic consultation, please call the office to set up an
                      appointment. in this way Please note that we do not
                      participate in Medicaid plan
                    </p>
                  )}
                  <button className="toggle-btn" onClick={toggleDescription}>
                    {expanded ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>
            </>
          )} */}
        </section>
      </div>
     <div className="map-container">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.796445531032!2d-74.3661447846109!3d41.26140477927608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f89d3f8eaaab%3A0x7fbbf1e0ef3f7dbb!2s200%20Ronald%20Reagan%20Blvd%2C%20Warwick%2C%20NY%2010989!5e0!3m2!1sen!2sus!4v1682091820987!5m2!1sen!2sus"
    width="100%"
    height="100%" /* Changed from fixed 300px to 100% to fill container */
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </>
  );
};

export default ContactSection;
