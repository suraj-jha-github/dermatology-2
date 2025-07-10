import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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

// Add mapping for new routes
const routeToServiceMap = {
  'hair-restoration': 'Hair Restoration',
  'injectables': 'Injectables',
  'skin-correcting': 'Skin Correcting',
  'skin-cancer-screenings': 'Skin Cancer Screenings',
  'excision-procedures': 'Excision Procedures',
  'mole-skin-tag-removal': 'Mole & Skin Tag Removal',
  'cryotherapy': 'Cryotherapy',
  'acne-treatment': 'Acne Treatment',
  'eczema-psoriasis-care': 'Eczema & Psoriasis Care',
  'rosacea-treatment': 'Rosacea Treatment',
  'vitiligo-management': 'Vitiligo Management',
  'hair-scalp-care': 'Hair & Scalp Care',
  'nail-care': 'Nail Care'
};

// Reverse it: title -> slug
const reverseServiceSlugMap = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([slug, label]) => [label, slug])
);

const defaultTab = "Dermatology";

const ServicePage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the service based on the current route
  let tabTitle = defaultTab;
  
  if (location.pathname.startsWith('/dermatology/')) {
    // Handle dermatology sub-services
    tabTitle = routeToServiceMap[serviceSlug] || defaultTab;
  } else if (location.pathname === '/hair-restoration') {
    tabTitle = 'Hair Restoration';
  } else if (location.pathname === '/injectables') {
    tabTitle = 'Injectables';
  } else if (location.pathname === '/skin-correcting') {
    tabTitle = 'Skin Correcting';
  } else if (serviceSlug) {
    // Handle legacy /services/ routes
    tabTitle = serviceSlugMap[serviceSlug?.toLowerCase()] || defaultTab;
  }

  const [selectedTab, setSelectedTab] = useState(tabTitle);

  // Debug: Log state
  console.log("ServicePage - serviceSlug:", serviceSlug, "tabTitle:", tabTitle, "selectedTab:", selectedTab, "pathname:", location.pathname);

  useEffect(() => {
    let newTab = defaultTab;
    
    if (location.pathname.startsWith('/dermatology/')) {
      newTab = routeToServiceMap[serviceSlug] || defaultTab;
    } else if (location.pathname === '/hair-restoration') {
      newTab = 'Hair Restoration';
    } else if (location.pathname === '/injectables') {
      newTab = 'Injectables';
    } else if (location.pathname === '/skin-correcting') {
      newTab = 'Skin Correcting';
    } else if (serviceSlug) {
      newTab = serviceSlugMap[serviceSlug?.toLowerCase()] || defaultTab;
    }
    
    if (newTab && newTab !== selectedTab) {
      setSelectedTab(newTab);
    }
  }, [serviceSlug, selectedTab, location.pathname]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    // Navigate based on the service type
    if (tab === 'Hair Restoration') {
      navigate('/hair-restoration');
    } else if (tab === 'Injectables') {
      navigate('/injectables');
    } else if (tab === 'Skin Correcting') {
      navigate('/skin-correcting');
    } else {
      // For dermatology services, navigate to dermatology route
      const slug = reverseServiceSlugMap[tab] || "cosmetic-dermatology";
      navigate(`/dermatology/${slug}`);
    }
  };

  const heroImages = {
    "Dermatology": ImageAssets.service5,
    "Skin Rejuvenation": ImageAssets.service2,
    Injectables: ImageAssets.service3,
    "Acne Treatment": ImageAssets.service4,
    "Skin Cancer Screenings": ImageAssets.skinCancer,
  "Mole & Skin Tag Removal": ImageAssets.moleSkin,
  "Cryotherapy": ImageAssets.cryotherapy,
  "Excision Procedures": ImageAssets.excisionProcedures,
  "Eczema & Psoriasis Care": ImageAssets.eczemaPsoriasis,
  "Nail Care": ImageAssets.nailCare,
  "Rosacea Treatment": ImageAssets.rosaceaTreatment,
  "Hair & Scalp Care": ImageAssets.hairScalp,
  "Vitiligo Management": ImageAssets.vitiligoManagement,
  "Hair Restoration":ImageAssets.hairRestoration,
  "Skin Correcting":ImageAssets.skinCorrecting

  

  
    
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