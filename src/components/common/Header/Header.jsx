import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ImageAssets from "../ImageAssets";
import "./Header.css";

const Header = ({ toggleMenu, isMenuOpen, variant, isChatOpen }) => {
  const navigate = useNavigate();
  const isWhite = variant === "white";

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src={ImageAssets.logo} alt="Logo" />
          </Link>
        </div>

        {!isChatOpen && (
          <div className="header-right">
            <div className="info-group">
              <div
                className={`contact ${isWhite ? "white" : "white"}`}
                onClick={() => navigate("/contact")}
              >
                <a href="tel:+18454217040"  style={{color:"white", textDecoration: 'none', cursor: 'pointer' }}>
            845-421-7040
          </a>
              </div>
              <div
                className={`dot ${isWhite ? "white" : "white"}`}
                onClick={toggleMenu} // Added onClick to toggle sidebar
              >
                •
              </div>
              <div
                className={`menu-text ${isWhite ? "white" : "white"}`}
                onClick={toggleMenu} // Added onClick to toggle sidebar
              >
                MENU
              </div>
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
              <MenuIcon
                className="hamburger-icon"
                style={{ color: isWhite ? "white" : "white", fontSize: 40 }}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;