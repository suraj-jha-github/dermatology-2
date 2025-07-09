import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import "./BeforeAfterSection.css";
import ImageAssets from "../common/ImageAssets";

// Data
const sectionContent = {
  "Skin Rejuvenation": {
    images: [
      ImageAssets.beforeAfter1,
      ImageAssets.beforeAfter2,
      // ImageAssets.beforeAfterSR3,
    ],
  },
  Injectables: {
    images: [
      ImageAssets.beforeAfterIn1,
      ImageAssets.beforeAfterIn2,
      ImageAssets.beforeAfterIn3,
    ],
  },
  "Cosmetic Dermatology": {
    images: [
      ImageAssets.beforeAfterCd1,
      ImageAssets.beforeAfterCd2,
    ],
  },
  "Acne Treatment": {
    images: [
      ImageAssets.beforeAfterAt1,
      ImageAssets.beforeAfterAt2,
    ],
  },
};

// Custom Dropdown Indicator
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

const BeforeAfterSection = ({ selectedSection, setSelectedSection }) => {
  const sections = Object.keys(sectionContent);
  const content = sectionContent[selectedSection] || {};
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dropdownOptions = sections.map((section) => ({
    value: section,
    label: section,
  }));

  return (
    <div className="beforeafter-section">
      <aside className="beforeafter-sidebar">
        {isMobile ? (
          <div className="care-dropdown-container">
            {/* <Select
  isSearchable={false}
  className="care-dropdown"
  value={{ value: selectedSection, label: selectedSection }}
  onChange={(option) => setSelectedSection(option.value)}
  options={dropdownOptions}
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
                color: "#fff",
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#52606f",
              }),
              option: (base, state) => ({
                ...base,
backgroundColor: state.isFocused ? "rgba(255, 255, 255, 0.09)" : "#52606f",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "16px",
                padding: "10px 15px",
                paddingLeft: "40px",
                fontFamily: "Poppins, sans-serif",
                "&:active": {
                  backgroundColor: "#405468",
                },
              }),
            }}
/> */}   
  <Select
  
  isSearchable={false}
  className="care-dropdown"
  value={{ value: selectedSection, label: selectedSection }}
  onChange={(option) => setSelectedSection(option.value)}
  options={dropdownOptions}
  menuIsOpen={menuIsOpen}
  onMenuOpen={() => setMenuIsOpen(true)}
  onMenuClose={() => setMenuIsOpen(false)}
  components={{ DropdownIndicator }}
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
                  border: "none",
                  paddingTop: "4px",
                  height: "35px",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#fff", 
                  fontSize: "17px",
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
                  padding: "5px 15px",
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
          <>
            <h2 className="sidebar-heading-before-after">Before & After</h2>
            <ul>
              {sections.map((section) => (
                <li
                  key={section}
                  className={selectedSection === section ? "active" : ""}
                  onClick={() => setSelectedSection(section)}
                >
                  {section}
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>

      <section className="beforeafter-content">
        <h1>{selectedSection}</h1>
        <div className="beforeafter-images">
          {content.images?.map((imgSrc, idx) => (
            <div className="beforeafter-image" key={idx}>
              <img src={imgSrc} alt={`Before After ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BeforeAfterSection;