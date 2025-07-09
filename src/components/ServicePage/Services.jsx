// @ts-nocheck
import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./Services.css";
import { Link } from "react-router-dom";
import serviceData from "../../data/serviceData";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
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

const Services = ({ selectedTab, setSelectedTab }) => {
  const tabs = Object.keys(serviceData);
  const content = serviceData[selectedTab] || {};
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Debug: Log selectedTab
  console.log("Services - selectedTab:", selectedTab);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Exclude "Services" (first tab) from dropdown options
  const selectOptions = tabs.slice(1).map((tab) => ({
    value: tab,
    label: tab,
  }));

  // Ensure selectedTab is not "Services" on mobile
  useEffect(() => {
    if (isMobile && selectedTab === tabs[0]) {
      setSelectedTab(tabs[1] || ""); // Default to second tab if "Services" is selected
    }
  }, [isMobile, selectedTab, tabs, setSelectedTab]);

  // Define Dermatology sub-services for dropdown
  const dermatologySubServices = [
    { label: 'Skin Cancer Screenings', path: '/services/skin-cancer-screenings' },
    { label: 'Excision Procedures', path: '/services/excision-procedures' },
    { label: 'Mole & Skin Tag Removal', path: '/services/mole-skin-tag-removal' },
    { label: 'Cryotherapy', path: '/services/cryotherapy' },
    { label: 'Eczema & Psoriasis Care', path: '/services/eczema-psoriasis-care' },
    { label: 'Rosacea Treatment', path: '/services/rosacea-treatment' },
    { label: 'Vitiligo Management', path: '/services/vitiligo-management' },
    { label: 'Hair & Scalp Care', path: '/services/hair-scalp-care' },
    { label: 'Nail Care', path: '/services/nail-care' },
  ];
  const [dermOpen, setDermOpen] = useState(false);
  return (
    <div className="service-page-wrapper">
      <aside className="service-page-sidebar transition-all duration-300">
        {isMobile ? (
          <div className="service-dropdown-container">
            <Select
              isSearchable={false}
              value={
                selectOptions.find((opt) => opt.value === selectedTab) || null
              }
              onChange={(opt) => {
                setSelectedTab(opt.value);
              }}
              options={selectOptions}
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
          <ul>
            {tabs.map((tab, index) => {
              if (tab === 'Dermatology') {
                return (
                  <li key={tab} style={{ position: 'relative' }}>
                    <div
                      className="pl-0 flex items-center cursor-pointer text-white font-normal select-none"
                      onClick={() => setDermOpen((open) => !open)}
                    >
                      {tab}
                      <span className="ml-20 text-base self-center flex items-center" style={{ marginTop: '2px' }}>
                        <FaChevronRight style={{marginLeft: '60px', transform: dermOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s', verticalAlign: 'middle' }} />
                      </span>
                    </div>
                    {dermOpen && (
                      <ul style={{ marginTop: 0, marginLeft: 0 }}>
                        {dermatologySubServices.map((sub) => (
                          <li key={sub.path} className="service-page-sidebar-li" style={{ listStyle: 'none' }}>
                            <Link
                              to={sub.path}
                              style={{
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'block',
                                width: '100%',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '220px',
                              }}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              // Keep all other items unchanged
              if (tab === 'Services' || tab === 'Acne Treatment' || tab === 'Injectables' || tab === 'Skin Rejuvenation') {
                return index === 0 ? (
                  <h3 key={tab} className="service-page-title">{tab}</h3>
                ) : (
                  <li
                    key={tab}
                    className={selectedTab === tab ? 'active' : ''}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </li>
                );
              }
              // Hide all other tabs from sidebar
              return null;
            })}
          </ul>
        )}
      </aside>

      <section className="service-page-content">
        <h1 className="heading-main">{selectedTab}</h1>
        {content.main && <p>{content.main}</p>}
        {content.sections?.map((section, index) => (
          <div key={index} className="service-section">
            <h2
              className={`heading-h2 ${
                section.heading === "FAQ's" ? "faq-heading" : ""
              }`}
            >
              {section.heading}
            </h2>
            {section.content && (
              <div>
                <p>{section.content}</p>
                {section.checkNowLink && (
                  <Link to={section.checkNowLink} className="check-now-link">
                    CHECK NOW
                  </Link>
                )}
              </div>
            )}
            {section.items?.map((item, idx) => (
              <div key={idx}>
                <h3 className={item.hasBullet ? "bullet-heading" : "heading-h3"}>
                  {item.title}
                </h3>
                <p>{item.content}</p>
                {item.checkNowLink && (
                  <Link to={item.checkNowLink} className="check-now-link">
                    CHECK NOW
                  </Link>
                )}
              </div>
            ))}
            {Array.isArray(section.faqs) &&
              section.faqs.length > 0 &&
              section.faqs.map((faq, qIdx) => (
                <div key={qIdx} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() =>
                      setOpenFaqIndex((prev) =>
                        prev === `${index}-${qIdx}` ? null : `${index}-${qIdx}`
                      )
                    }
                  >
                    <div>
                      {openFaqIndex === `${index}-${qIdx}` ? (
                        <RemoveCircleOutlineIcon sx={{ color: "#7A7979" }} />
                      ) : (
                        <AddCircleOutlineIcon sx={{ color: "#7A7979" }} />
                      )}
                    </div>
                    <p>{faq.question}</p>
                  </div>
                  {openFaqIndex === `${index}-${qIdx}` && (
                    <div>
                      <p style={{ color: "#373636", marginBottom: "20px" }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                  {qIdx < section.faqs.length - 1 && <hr />}
                </div>
              ))}
          </div>
        ))}

        <div className="service-buttons">
          <a
            href="tel:8454217040"
            className="common-button common-button-secondary"
          >
            CALL (845)-421-7040
          </a>
          <Link to="/contact-us" className="common-button">
            REQUEST AN APPOINTMENT
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;