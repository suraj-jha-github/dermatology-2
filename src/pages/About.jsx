import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import AboutSection from "../components/About/AboutSection";
import Breadcrumbs from "../components/common/BreadCrumbs/BreadCrumbs";


// Define slug-to-title mapping
const sectionSlugMap = {
  "our-office": "Our Office",
  "alicia-natalizio-fnp-bc": "Alicia Natalizio, FNP-BC",
  "juliana-cotler-fnp-bc": "Juliana Cotler, FNP-BC",
  "dr-radha-mikkilinen": "Dr. Radha Mikkilineni, MD",
  "testimonials": "Testimonials",
};

// Reverse it: title -> slug
const reverseSlugMap = Object.entries(sectionSlugMap).reduce(
  (acc, [slug, title]) => ({ ...acc, [title]: slug }),
  {}
);

const defaultSection = "Alicia Natalizio, FNP-BC";

const About = () => {
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const sectionTitle = sectionSlugMap[sectionSlug] || defaultSection;
  const [selectedSection, setSelectedSection] = useState(sectionTitle);

  useEffect(() => {
    const newSection = sectionSlugMap[sectionSlug];
    if (newSection && newSection !== selectedSection) {
      setSelectedSection(newSection);
    }
  }, [sectionSlug, selectedSection]);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    const slug = reverseSlugMap[section] || "dr-alicia-natalizio";
    navigate(`/about-us/${slug}`);
  };

  const heroImages = {
    About: ImageAssets.aboutImage1,
    "Alicia Natalizio, FNP-BC": ImageAssets.aboutImage1,
    "Juliana Cotler, FNP-BC": ImageAssets.aboutJulianaCotler,
    "Dr. Radha Mikkilineni, MD": ImageAssets.aboutRadhaMikkilinen,
    "Our Office": ImageAssets.aboutOffice,
    Testimonials: ImageAssets.aboutTest,
  };

  return (
    <>
      <Hero
        image={heroImages[selectedSection] || ImageAssets.aboutImage1}
        // heading="ABOUT US"
        // heading="ABOUT US"
        showButton={false}
      />
      <Breadcrumbs />
      <AboutSection
        selectedSection={selectedSection}
        setSelectedSection={handleSectionChange}
      />
      <Footer />
    </>
  );
};

export default About;






// import React, { useState } from "react";
// import Hero from "../components/common/Hero/Hero";
// import Footer from "../components/common/Footer/Footer";
// import ImageAssets from "../components/common/ImageAssets";
// import AboutSection from "../components/About/AboutSection";

// const About = () => {
//   const [selectedSection, setSelectedSection] = useState("Dr. Alicia Natalizio");

//   const heroImages = {
//     About: ImageAssets.aboutImage1,
//     "Dr. Alicia Natalizio": ImageAssets.aboutImage1,
//     "Dr. Juliana Cotler": ImageAssets.aboutJulianaCotler,
//     "Dr. Radha Mikkilinen": ImageAssets.aboutRadhaMikkilinen,
//     "Our Office": ImageAssets.aboutOffice,
//     Testimonials: ImageAssets.aboutTest,
//   };

//   return (
//     <>
//       <Hero
//         image={heroImages[selectedSection] || ImageAssets.aboutImage1}
//         heading="ABOUT"
//         showButton={false}
//       />
//       <AboutSection
//         selectedSection={selectedSection}
//         setSelectedSection={setSelectedSection}
//       />
//       <Footer />
//     </>
//   );
// };

// export default About;