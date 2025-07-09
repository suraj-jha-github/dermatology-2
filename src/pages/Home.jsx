import React from "react";
import Hero from "../components/common/Hero/Hero";
import AboutSection from "../components/Home/AboutSection";
import ServicesSection from "../components/Home/ServicesSection";
import PatientExperienceSection from "../components/Home/PatientExperienceSection";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import Videoassets from "../components/Home/Videoassets";


const Home = () => {
  return (
    <>
      <Hero
        videoSrc={Videoassets.heroVideo}
        heading="Dermatologist"
        showButton={true}
        posterImage={ImageAssets.posterImage}
        isFullScreen={true} // Add prop for homepage hero
      />
      
      {/* <Hero 
        image={ImageAssets.rejuvenatingImage} 
        heading="Dermatology" 
        showButton={true} 
      /> */}
      <AboutSection />
      <ServicesSection />
      <PatientExperienceSection />
      <Footer />
    </>
  );
};

export default Home;