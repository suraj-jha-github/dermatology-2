import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./PatientExperienceSection.css";
import ImageAssets from "../common/ImageAssets";

const cards = [
  {
    image: ImageAssets.Expert1,
    tag: "MIDDLETOWN LEADING PROVIDER",
    title: `MIDDLETOWN DESTINATION FOR SKINCARE`,
    button: "SCHEDULE A CONSULT",
    link: "/contact-us",
  },
  {
    image: ImageAssets.Expert2,
    tag: "Blog",
    title: "MULTICULTURAL SKINCARE EXPERTS",
    button: "READ MORE",
    link: "/blogs",
  },
];

const PatientExperienceSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);


// eslint-disable-next-line react-hooks/exhaustive-deps
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
    <section
      ref={sectionRef}
      className={`patient-experience-section ${animate ? "animate" : ""}`}
    >
     <div className="patient-experience-heading">
  <div className="patient-title-wrapper">
    <h5 className="patient-title">PATIENT EXPERIENCE</h5>
    <div className="patient-title-line" />
  </div>
</div>


      <div className="patient-experience-row">
        <div className="patient-card">
          <img src={cards[0].image} alt={cards[0].title} />
          <p className="card-tag">{cards[0].tag}</p>
          <h3 className="card-title">{cards[0].title}</h3>
          <Link to={cards[0].link}>
            <button className="card-btn-primary">{cards[0].button}</button>
          </Link>
        </div>

        <div className="vertical-line"></div>

        <div className="patient-card">
          <img src={cards[1].image} alt={cards[1].title} />
          <p className="card-tag">{cards[1].tag}</p>
          <h3 className="card-title">{cards[1].title}</h3>
          <Link to={cards[1].link}>
            <button className="card-btn-secondary">{cards[1].button}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PatientExperienceSection;

