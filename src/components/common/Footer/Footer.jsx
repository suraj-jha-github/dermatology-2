import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ImageAssets from "../ImageAssets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h5>ABOUT US</h5>
          <Link to="/about-us/our-office"><p>Our Office</p></Link>
          <Link to="/about-us/alicia-natalizio-fnp-bc"><p>Alicia Natalizio</p></Link>
          <Link to="/about-us/dr-radha-mikkilinen"><p>Dr. Radha Mikkilineni</p></Link>
          <Link to="/about-us/juliana-cotler-fnp-bc"><p>Juliana Cotler</p></Link>
        </div>
        <div className="footer-column">
          <h5>SERVICES</h5>
          <Link to="/dermatology/skin-cancer-screenings"><p>Dermatology</p></Link>
          <Link to="/hair-restoration"><p>Hair Restoration</p></Link>
          <Link to="/injectables"><p>Injectables</p></Link>
          <Link to="/skin-correcting"><p>Skin Correcting</p></Link>
        </div>
        <div className="footer-column">
          <h5>PATIENT RESOURCES</h5>
          <Link to="/patient-resources/specials"><p>Specials</p></Link>
          <Link to="/patient-resources/insurance"><p>Insurance</p></Link>
          <a href="https://middletownmedical.com/patient-portal/" target="_blank" rel="noopener noreferrer">
            <p>Patient Portal</p>
          </a>
          <Link to="/patient-resources/pay-bill"><p>Pay Bill</p></Link>
        </div>
        <div className="footer-column">
          <h5>CONTACT</h5>
          <a href="tel:8454217040"><p><strong>Phone:</strong> (845) 421 – 7040</p></a>
          
          {/* <p><strong>Address:</strong></p> */}
          <p>200 Ronald Reagan Blvd.</p>
          <p>Warwick, NY 10990</p>
          <a
            href="https://maps.app.goo.gl/Vbx2FzQ5GD6u9EjS8"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
            style={{ color: "#475666" }}
          >
            Map and Direction
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <Link to="https://middletownmedical.com/">
            <img src={ImageAssets.logoFooter} alt="Logo" />
          </Link>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/middletownmed_dermatology?igsh=cW16dWg0MmZkaWg="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Dermatology. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;