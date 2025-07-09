import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import CareResourcesSection from "../components/CareResources/CareResourcesSection";
import Breadcrumbs from "../components/common/BreadCrumbs/BreadCrumbs";

// Define slug-to-title mapping
const careSlugMap = {
  resources: "Resources",
  specials: "Specials",
  insurance: "Insurance",
  "pay-bill": "Pay Bill",
};

// Reverse it: title -> slug
const reverseCareSlugMap = Object.fromEntries(
  Object.entries(careSlugMap).map(([slug, title]) => [title, slug])
);

const defaultTab = "Resources";

const CareResources = () => {
  const { careSlug } = useParams();
  const navigate = useNavigate();

  const tabTitle = careSlugMap[careSlug?.toLowerCase()] || defaultTab;
  const [selectedTab, setSelectedTab] = useState(tabTitle);

  // Debug: Log state
  console.log("CareResources - careSlug:", careSlug, "tabTitle:", tabTitle, "selectedTab:", selectedTab);

  useEffect(() => {
    const newTab = careSlugMap[careSlug?.toLowerCase()];
    if (newTab && newTab !== selectedTab) {
      setSelectedTab(newTab);
    }
  }, [careSlug, selectedTab]);

  const handleTabChange = (tab) => {
    if (tab === "Pay Bill") {
      // Redirect to external Pay Bill URL
      window.location.href = "/pay-bill"; // Replace with your actual Pay Bill URL
    } else {
      // Handle internal navigation for other tabs
      setSelectedTab(tab);
      const slug = reverseCareSlugMap[tab] || "resources";
      navigate(`/patient-resources/${slug}`);
    }
  };

  const heroImages = {
    Resources: ImageAssets.careResourceImage,
    Specials: ImageAssets.careResourceImage,
    Insurance: ImageAssets.careResourceImage,
    "Pay Bill": ImageAssets.careResourceImage,
  };

  return (
    <>
      <Hero
        image={heroImages[selectedTab] || ImageAssets.careResourceImage}
        showButton={false}
      />
      <Breadcrumbs />
      <CareResourcesSection
        selectedTab={selectedTab}
        setSelectedTab={handleTabChange}
      />
      <Footer />
    </>
  );
};

export default CareResources;