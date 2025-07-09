import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import Services from "../components/ServicePage/Services";
import Breadcrumbs from "../components/common/BreadCrumbs/BreadCrumbs";
import serviceData from '../data/serviceData';

// Define slug-to-title mapping dynamically from serviceData, replacing ' & ' and spaces with dashes
const serviceSlugMap = Object.fromEntries(
  Object.keys(serviceData).map(
    key => [key.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'), key]
  )
);
// Reverse it: title -> slug
const reverseServiceSlugMap = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([slug, label]) => [label, slug])
);

const defaultTab = "Dermatology";

const ServicePage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const tabTitle = serviceSlugMap[serviceSlug?.toLowerCase()] || defaultTab;
  const [selectedTab, setSelectedTab] = useState(tabTitle);

  // Debug: Log state
  console.log("ServicePage - serviceSlug:", serviceSlug, "tabTitle:", tabTitle, "selectedTab:", selectedTab);

  useEffect(() => {
    const newTab = serviceSlugMap[serviceSlug?.toLowerCase()];
    if (newTab && newTab !== selectedTab) {
      setSelectedTab(newTab);
    }
  }, [serviceSlug, selectedTab]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    const slug = reverseServiceSlugMap[tab] || "cosmetic-dermatology";
    navigate(`/services/${slug}`);
  };

  const heroImages = {
    "Dermatology": ImageAssets.service5,
    "Skin Rejuvenation": ImageAssets.service2,
    Injectables: ImageAssets.service3,
    "Acne Treatment": ImageAssets.service4,
  };

  return (
    <>
      <Hero
        image={heroImages[selectedTab] || ImageAssets.heroSkinCare}
        showButton={false}
      />
      <Breadcrumbs />
      <Services selectedTab={selectedTab} setSelectedTab={handleTabChange} />
      <Footer />
    </>
  );
};

export default ServicePage;