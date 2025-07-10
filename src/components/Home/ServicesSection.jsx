import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServicesSection.css";
import ImageAssets from "../common/ImageAssets";

const ServicesSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    {
      title: "SKIN CORRECTING",
      image: ImageAssets.skinreju,
      link: "/skin-correcting",
      description: "",
    },
    {
      title: "INJECTABLES",
      image: ImageAssets.injectables,
      link: "/injectables",
      description: "",
    },
    {
      title: "DERMATOLOGY",
      image: ImageAssets.cosmeticServices,
      link: "/services/skin-cancer-screenings",
      description: "",
    },
    {
      title: "ACNE TREATMENT",
      image: ImageAssets.acneTreatment,
      link: "/dermatology/acne-treatment",
      description: "",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.33,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    afterChange: (current) => {
      setActiveSlide(current);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 346,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

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

  return (
    <div className="services-wrapper">
      <div className="services-header">
        <div className="title-wrapper">
          <h2 className="section-title">Our Services</h2>
        </div>
      </div>
      <section
        ref={sectionRef}
        className={`services-section ${animate ? "animate" : ""}`}
      >
        <div className="services-container">
          <div className="services-slider">
            <Slider {...settings}>
              {services.map((service, index) => (
                <div key={index} className="slider-item">
                  <div className={`service-card ${index === activeSlide ? "active" : ""}`}>
                    <Link to={service.link} className="service-image">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                      />
                    </Link>
                    <div className="service-content">
                      <Link to={service.link}>
                        <h2>{service.title}</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;