import React, { useEffect, useRef, useState } from "react";
import Select, { components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import "./CareResourcesSection.css";
import "../../styles/CommonButtons.css";
import PayBillForm from "./PayBillForm";
import { Link } from "react-router-dom";

const careResourcesData = {
  Resources: {
    title: "Patient Resources",
    paragraphs: [
      `At Dermatology, nothing means more to us than the trust and appreciation of our patients. While awards are nice, their testimonials are our greatest honor. Our main goal is your health and well-being, and we're grateful for the positive experiences shared by our patients.
Read some of their reviews and see how Dr. Alicia Natalizio and our team make a difference.`,
    ],
    officeHours: [
      "Monday – 8:00am – 4:00pm",
      "Tuesday – Closed",
      "Wednesday – 9:00am – 4:00pm",
      "Thursday – 8:00am – 4:00pm",
      "Friday – 8:00am – 1:00pm",
      "Saturday and Sunday – Closed",
    ],
  },
  Specials: {
    title: "Specials",
    paragraphs: [
      "We truly appreciate our patients and the friends of our practice—that's why we offer exclusive specials just for you!",
      "Stay connected with us on Facebook and Instagram for exclusive specials reserved just for our amazing fans!",
    ],
  },
  Insurance: {
    title: "Insurance",
    paragraphs: [
      "We accept most insurance plans. Please contact our office for more details.",
    ],
  },
  "Pay Bill": {
    title: "Pay Bill",
  },
};

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

const CareResourcesSection = ({ selectedTab, setSelectedTab }) => {
  const sections = Object.keys(careResourcesData);
  const content = careResourcesData[selectedTab] || careResourcesData.Resources;

  const sidebarRef = useRef(null);
  const footerRef = useRef(null);
  const [isFooterVisible, setFooterVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // Debug: Log selectedTab
  console.log("CareResourcesSection - selectedTab:", selectedTab, "content:", content.title);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { root: null, threshold: 0 }
    );

    const footerEl = document.querySelector("footer");
    if (footerEl) {
      footerRef.current = footerEl;
      observer.observe(footerEl);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const options = sections.map((section) => ({
    value: section,
    label: section,
  }));

  return (
    <div className="care-section">
      {isMobile ? (
        <div className="care-dropdown-container">
          <div className="sidebar-heading">Patient Resources</div>
          <Select
            isSearchable={false}
            className="care-dropdown"
            classNamePrefix="care"
            value={{ value: selectedTab, label: selectedTab }}
            onChange={(option) => {
              console.log("Dropdown selected:", option.value);
              setSelectedTab(option.value);
            }}
            options={options}
            components={{ DropdownIndicator }}
            menuIsOpen={menuIsOpen}
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            styles={{
              control: (base, state) => ({
                ...base,
                fontSize:"0.875rem",
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
                color: "#fff", fontSize: "16px",
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
        <aside
          ref={sidebarRef}
          className={`care-sidebar ${
            selectedTab === "Pay Bill" ? "" : "sticky-sidebar"
          } ${isFooterVisible ? "stop-sticky" : ""}`}
        >
          <div className="sidebar-heading">Patient Resources</div>
          <ul>
            {sections.map((section) => (
              <li
                key={section}
                className={selectedTab === section ? "active" : ""}
                onClick={() => {
                  console.log("Sidebar selected:", section);
                  setSelectedTab(section);
                }}
              >
                {section}
              </li>
            ))}
          </ul>
        </aside>
      )}

      <section className="care-content">
        <h1 className="care-heading">{content.title}</h1>

        {selectedTab === "Specials" ? (
          <>
            <p className="special para-1">{content.paragraphs[0]}</p>
            <hr className="specials-divider" />
            <p className="special-para-2">{content.paragraphs[1]}</p>
          </>
        ) : (
          content.paragraphs?.map((p, idx) => <p key={idx}>{p}</p>)
        )}

        {selectedTab === "Resources" && (
          <>
            <h3 className="office-title">Office Hours:</h3>
            <ul className="office-hours">
              {content.officeHours.map((hour, idx) => (
                <li key={idx}>{hour}</li>
              ))}
            </ul>
          </>
        )}

        {selectedTab !== "Pay Bill" && (
          <div className="care-buttons">
            <a href="tel:8454217040" className="common-button common-button-secondary">
              CALL 845-421-7040
            </a>
            <Link to="/contact-us" className="common-button">
              REQUEST AN APPOINTMENT
            </Link>
          </div>
        )}

        {selectedTab === "Pay Bill" && <PayBillForm />}
      </section>
    </div>
  );
};

export default CareResourcesSection;