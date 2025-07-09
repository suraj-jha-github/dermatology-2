import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";
import ImageAssets from "../common/ImageAssets";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contentData = [
  {
    text: "Meet Alicia! She is one of Middletown Medical Dermatologist Specializing in Medical Dermatology and non-surgical aesthetic treatments. With her expertise and dedication to enhancing natural beauty, Alicia is committed to providing you with personalized care and achieving your skincare and aesthetic goals.",
    button: "MEET ALICIA",
    image: ImageAssets.drAlicaImage,
    link: "/about-us/alicia-natalizio-fnp-bc",
  },
  {
    text: "Meet Juliana! She has joined Middletown Medical as a practitioner specializing in Medical and Cosmetic Dermatology! Although new to this field Juliana brings a fresh perspective and a passion for skin care and aesthetics. Join us in welcoming Juliana to our team and stay tuned for the the exciting treatments and services she'll be bringing to our practices",
    button: "MEET JULIANA",
    image: ImageAssets.drJulianaImage,
    link: "/about-us/juliana-cotler-fnp-bc",
  },
  {
    text: "Meet Dr. Radha Mikkilineni! She brings a wealth of knowledge and experience to Middletown Medical. Whether you're considering rejuvenating your skin, enhancing your features, or addressing specific dermatological concerns, she is here to guide you every step of the way. Experience the difference of working with a board-certified specialist who prioritizes your beauty and well-being.",
    button: "MEET DR. RADHA",
    image: ImageAssets.drMikkilineni,
    link: "/about-us/dr-radha-mikkilinen",
  },
];

const AboutSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setFade(false), 3800);
    const slideTimeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contentData.length);
      setFade(true);
    }, 4000);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(slideTimeout);
    };
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className={`about-section-home ${animate ? "animate" : ""}`}
    >
      <div className="about-content-home">
        {/* Desktop Layout */}
        <div className="about-desktop">
          <div className="about-flex">
            <Card className="about-text relative">
              <CardContent className="p-0">
                <div className="about-heading-wrapper">
                  <p className="about-heading">About Us</p>
                  <h2 className="about-title">
                    <span>BOARD</span>
                    <br />
                    <span>CERTIFIED</span>
                    <br />
                    <span>EXPERTISE</span>
                  </h2>
                </div>
                <div className="about-bottom">
                  <p className={`fade ${fade ? "fade-in" : "fade-out"} `}>
                    {contentData[index].text}
                  </p>
                </div>
                <div className="button-container">
                  <Link to={contentData[index].link}>
                    <Button variant="default" className="meet-doctor-home">
                      {contentData[index].button}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <div className={`about-image fade ${fade ? "fade-in" : "fade-out"}`}>
              <img src={contentData[index].image} alt="Doctor" />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="about-mobile">
          <div className="about-heading-wrapper">
            <h5 className="about-heading">About Us</h5>
            <h2 className="about-title">
              <span>BOARD</span>
              <br />
              <span>CERTIFIED</span>
              <br />
              <span>EXPERTISE</span>
            </h2>
          </div>
          <div className={`about-image fade ${fade ? "fade-in" : "fade-out"}`}>
            <img src={contentData[index].image} alt="Doctor" />
          </div>
          <div className="about-text-content">
            <p className={`fade ${fade ? "fade-in" : "fade-out"}`}>
              {contentData[index].text}
            </p>
          </div>
          <div className="button-container">
            <Link to={contentData[index].link}>
              <Button variant="default" className="meet-doctor-home">
                {contentData[index].button}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
