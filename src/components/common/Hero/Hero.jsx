// Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = ({ image, videoSrc, heading, showButton, posterImage, isFullScreen, isContactPage }) => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className={`hero ${isFullScreen ? "hero-fullscreen" : ""} ${isContactPage ? "hero-contact" : ""}`}>
      {videoSrc ? (
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterImage}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={image} alt="" className="hero-image" />
      )}

      <div className="hero-text">
        {isFullScreen && <div className="hero-subheading">BOARD-CERTIFIED</div>}
        <div className="hero-heading">{heading}</div>
        {showButton && (
          <button className="book-now" onClick={handleBookNowClick}>
            BOOK NOW
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;