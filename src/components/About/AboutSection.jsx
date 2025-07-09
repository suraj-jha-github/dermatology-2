import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import "./AboutSection.css";
import ImageAssets from "../common/ImageAssets";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/CommonButtons.css";

const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <components.DropdownIndicator {...props}>
      <FaChevronDown
        style={{
          transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
          color: "#fff",
        }}
      />
    </components.DropdownIndicator>
  );
};

const sectionContent = {
  "About Us": { paragraphs: [""] },
  "Our Office": {
    paragraphs: [
      "At Cosmetic Dermatology, we are committed to providing exceptional dermatology care tailored to each patient's individual needs. Our board-certified dermatologists specialize in the diagnosis, treatment, and prevention of a wide range of skin, hair, and nail conditions, using the latest medical and cosmetic techniques.",
    ],
    officeImages: [
      ImageAssets.officeImage1,
      ImageAssets.officeImage2,
      ImageAssets.officeImage3,
      ImageAssets.officeImage4,
    ],
  },
  "Alicia Natalizio, FNP-BC": {
    paragraphs: [
      <span>
        Meet Alicia! She is one of{" "}
        <Link
          className="middletown-link"
          to="https://middletownmedical.com/medical-staff/Natalizio_Alicia/"
        >
          Middletown Medical 
        </Link>
        &nbsp;Dermatologist specializing in Medical Dermatology and non-surgical
        aesthetic treatments. With her expertise and dedication to enhancing
        natural beauty, Alicia is committed to providing you with personalized
        care and achieving your skincare and aesthetic goals
      </span>,
    ],
    feedback: [
      {
        text: "Very satisfied with my visit. Alicia Natalizio, FNP-BC was thorough, kind, and efficient. Highly recommend!",
        author: "Nick J.",
      },
      {
        text: "Alicia Natalizio, FNP-BC made me feel comfortable from the start. The treatment was effective and well explained.",
        author: "Robert D.",
      },
      {
        text: "Alicia Natalizio, FNP-BC was very professional and caring. They listened patiently and explained everything clearly. I felt comfortable and well taken care of.",
        author: "Sarah M.",
      },
    ],
  },
  "Juliana Cotler, FNP-BC": {
    paragraphs: [
      <span>
        Meet Juliana Cotler (FNP-BC), a Nurse Practitioner at Middletown Medical
        specializing in Medical and Cosmetic Dermatology! New to the field, she
        brings a fresh perspective and a passion for skincare. Welcome Juliana
        to our team, and stay tuned for the exciting treatments she'll be
        bringing!
      </span>,
    ],
    heading: "Education",
    secondParagraph: `Mercy College Master of Science - MS, Family Nurse Practitioner · (August 2021 - December 2023)

Mercy College Bachelor of Science - BS, Registered Nursing/Registered Nurse · (2019 - 2020)

Stony Brook University Bachelor of Science - BS, Health Science · (2014 - 2018)`,
    feedback: [
      {
        text: "Very satisfied with my visit. Juliana Cotler, FNP-BC was thorough, kind, and efficient. Highly recommend!",
        author: "Kyle P.",
      },
      {
        text: "Juliana Cotler, FNP-BC made me feel comfortable from the start. The treatment was effective and well explained.",
        author: "Sonny R.",
      },
      {
        text: "Juliana Cotler, FNP-BC was very professional and caring. They listened patiently and explained everything clearly. I felt comfortable and well taken care of.",
        author: "Dwyane J.",
      },
    ],
  },
  "Dr. Radha Mikkilineni, MD": {
    paragraphs: [
      <span>
        Meet Dr. Radha Mikkilineni, MD! She brings extensive knowledge and
        experience to{" "}
        <Link
          className="middletown-link"
          to="https://middletownmedical.com/medical-staff/Mikkilineni_Radha/"
        >
          Middletown Medical
        </Link>
        . Whether you're looking to rejuvenate your skin, enhance your features,
        or address dermatological concerns, she's here to help. Experience the
        care of a board-certified specialist who prioritizes your beauty and
        well-being.
      </span>,
    ],
    heading: "Education",
    secondParagraph: `Dr. Mikkilineni received her medical degree from Georgetown Medical School. She completed her internship at Yale-New Haven Hospital, her dermatology residency at Case Western Reserve - University Hospitals of Cleveland, and her dermatopathology fellowship at New York University - Tisch Hospital.

She holds two master's degrees in Physiology and Biophysics (Georgetown) as well as in Biostatistics and Epidemiology (The London School of Hygiene & Tropical Medicine).

She is Board Certified in Dermatology and Dermatopathology and is a Clinical Assistant Professor at Cornell Medical School.`,
    feedback: [
      {
        text: "Very satisfied with my visit, Dr. Radha Mikkilineni was thorough, kind, and efficient. Highly recommend!",
        author: "Linda P.",
      },
      {
        text: "Dr. Radha Mikkilineni, MD made me feel comfortable from the start. The treatment was effective and well explained.",
        author: "Sarah M.",
      },
      {
        text: "Dr. Radha Mikkilineni, MD was very professional and caring. They listened patiently and explained everything clearly. I felt comfortable and well taken care of.",
        author: "Michael B.",
      },
    ],
  },
  Testimonials: {
    paragraphs: [
      "At Dermatology, nothing means more to us than the trust and appreciation of our patients. While awards are nice, their testimonials are our greatest honor. Our main goal is your health and well-being, and we're grateful for the positive experiences shared by our patients. Read some of their reviews and see how Alicia Natalizio, FNP-BC and our team make a difference.",
    ],
    quotes: [
      {
        text: "This product exceeded my expectations! The quality is top-notch, and the results were noticeable within days. Highly recommend!",
        author: "Sarah M.",
      },
      {
        text: "The staff was incredibly professional, and the dermatologist took the time to explain everything. My skin has never looked better!",
        author: "James T.",
      },
      {
        text: "Exceptional service and amazing results! I feel more confident in my skin now than ever before.",
        author: "Linda P.",
      },
      {
        text: "Friendly staff, great atmosphere, and effective treatments. What more could you ask for?",
        author: "Michael B.",
      },
    ],
  },
};

// Rest of the AboutSection component remains unchanged
const AboutSection = ({ selectedSection, setSelectedSection }) => {
  const sections = Object.keys(sectionContent);
  const content = sectionContent[selectedSection] || {};
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const validSections = Object.keys(sectionContent);
    if (!validSections.includes(selectedSection)) {
      setSelectedSection(validSections[2]);
    }
  }, [selectedSection, setSelectedSection]);

  const selectOptions = sections.slice(1).map((section) => ({
    value: section,
    label: section,
  }));

  return (
    <div className="about-section">
      <aside className="about-sidebar">
        {isMobile ? (
          <div className="about-dropdown-container">
            <div className="about-sidebar-heading">About</div>
            <Select
              isSearchable={false}
              className="about-react-select"
              value={{ value: selectedSection, label: selectedSection }}
              onChange={(option) => setSelectedSection(option.value)}
              options={selectOptions}
              menuIsOpen={menuIsOpen}
              onMenuOpen={() => setMenuIsOpen(true)}
              onMenuClose={() => setMenuIsOpen(false)}
              components={{ DropdownIndicator }}
              styles={{
                control: (base, state) => ({
                  ...base,
                  fontSize: "0.875rem",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  backgroundColor: "#52606f",
                  borderColor: state.isFocused ? "#fff" : "#ccc",
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: "#fff",
                  },
                  color: "#fff",
                  paddingLeft: "31px",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#fff",
                  fontSize: "16px",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#52606f",
                  zIndex: 9999,
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isSelected 
                    ? "#626e7c" 
                    : "transparent",
                  color: state.isSelected 
                    ? "#fff" 
                    : "rgba(255, 255, 255, 0.6)",
                  fontSize: "16px",
                  padding: "10px 15px",
                  paddingLeft: "40px",
                  fontFamily: "Poppins, sans-serif",
                  "&:hover": {
                    backgroundColor: state.isSelected 
                      ? "#626e7c" 
                      : "rgba(255, 255, 255, 0.09)",
                  },
                  "&:active": {
                    backgroundColor: "#405468",
                  },
                }),
                menuList: (base) => ({
                  ...base,
                  padding: 0,
                }),
                valueContainer: (base) => ({
                  ...base,
                  padding: 0,
                }),
                indicatorsContainer: (base) => ({
                  ...base,
                  padding: 0,
                }),
              }}
            />
          </div>
        ) : (
          <ul>
            {sections.map((section, index) =>
              index === 0 ? (
                <h3 key={section} className="about-sidebar-heading">
                  {section}
                </h3>
              ) : (
                <li
                  key={section}
                  className={selectedSection === section ? "active" : ""}
                  onClick={() => setSelectedSection(section)}
                  tabIndex={-1}
                >
                  {section}
                </li>
              )
            )}
          </ul>
        )}
      </aside>

      <section className="about-content">
        <h2 className="heading">{selectedSection}</h2>

        {content.paragraphs?.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}

        {selectedSection === "Testimonials" && content.quotes && (
          <div className="testimonial-quotes">
            {content.quotes.map((quote, idx) => (
              <div className="quote-box" key={idx}>
                <p className="quote-text">“{quote.text}”</p>
                <p className="quote-author">— {quote.author}</p>
              </div>
            ))}
          </div>
        )}

        {content.heading && (
          <h3 className="about-subheading">{content.heading}</h3>
        )}

        {content.secondParagraph &&
          content.secondParagraph
            .split("\n\n")
            .map((part, idx) => <p key={idx}>{part.trim()}</p>)}

        {content.feedback && (
          <>
            <h3 className="about-subheading">Patient Feedback</h3>
            <div className="testimonial-quotes">
              {content.feedback.map((quote, idx) => (
                <div className="quote-box" key={idx}>
                  <p style={{ marginBottom: "0px" }} className="quote-text">
                    “{quote.text}”
                  </p>
                  <p style={{ marginBottom: "0px" }} className="quote-author">
                    — {quote.author}
                  </p>
                  <div className="star-rating">★★★★★</div>
                </div>
              ))}
            </div>
          </>
        )}

        {selectedSection === "Our Office" && content.officeImages && (
          <div className="office-images">
            {content.officeImages.map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt={`Office view ${idx + 1}`}
                className="office-image"
              />
            ))}
          </div>
        )}

        <div className="about-buttons">
          <a
            href="tel:8454217040"
            className="common-button common-button-secondary"
          >
            CALL 845-421-7040
          </a>
          <Link to="/contact-us" className="common-button">
            REQUEST AN APPOINTMENT
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
