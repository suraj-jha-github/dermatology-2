import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  return(
    <>
      {isMenuOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <a href="tel:+18454217040" className="contact-number" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            845-421-7040
          </a>
          <IconButton style={{ marginTop: '-15px' }} className="close-btn" onClick={toggleMenu}>
            <CloseIcon />
          </IconButton>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/" end onClick={toggleMenu}>HOME</NavLink></li>
            <li><NavLink to="/about-us/alicia-natalizio-fnp-bc" onClick={toggleMenu}>ABOUT US</NavLink></li>
            {/* <li><NavLink to="/services/cosmetic-dermatology" onClick={toggleMenu}>COSMETIC DERMATOLOGY</NavLink></li>
            <li><NavLink to="/services/skin-rejuvenation" onClick={toggleMenu}>SKIN REJUVENATION</NavLink></li>
            <li><NavLink to="/services/injectables" onClick={toggleMenu}>INJECTABLES</NavLink></li>
            <li><NavLink to="/services/acne-treatment" onClick={toggleMenu}>ACNE TREATMENT</NavLink></li> */}
            <li><NavLink to="/pricing" onClick={toggleMenu}>PRICING</NavLink></li>
            <li><NavLink to="/services/skin-cancer-screenings" onClick={toggleMenu}>DERMATOLOGY</NavLink></li>
            <li><NavLink to="/services/hair-restoration" onClick={toggleMenu}>HAIR RESTORATION</NavLink></li>
            <li><NavLink to="/services/injectables" onClick={toggleMenu}>INJECTABLES</NavLink></li>
            <li><NavLink to="/services/skin-correcting" onClick={toggleMenu}>SKIN CORRECTION</NavLink></li>
            <li><NavLink to="/patient-resources" onClick={toggleMenu}>PATIENT RESOURCES</NavLink></li>
            <li><NavLink to="/pay-bill" onClick={toggleMenu}>PAY BILL</NavLink></li>
            <li><NavLink to="/before-&-after" onClick={toggleMenu}>BEFORE & AFTER</NavLink></li>
            <li><NavLink to="/blogs" onClick={toggleMenu}>BLOGS</NavLink></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <NavLink to="/contact-us" onClick={toggleMenu}>
            <button className="sidebar-contact-btn">CONTACT US</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;