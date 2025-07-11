import Breadcrumbs from "@/components/common/BreadCrumbs/BreadCrumbs";
import Hero from "@/components/common/Hero/Hero";
import ImageAssets from "@/components/common/ImageAssets";
import React from "react";
import '../components/Pricing/Pricing.css'

const Pricing = () => (
  <>
   <Hero
        image={ImageAssets.payBillImage}
        // heading="PAY BILL"
        showButton={false}
      />
      <Breadcrumbs />
  <div className="service-page-wrapper">
    {/* Hero Section */}
    <aside  className="service-page-sidebar pricing-page-sidebar transition-all duration-300">
      {/* <h3 className="service-page-title">Pricing</h3> */}
      <ul>
        <li className="active">Pricing</li>
      </ul>
    </aside>
    <section className="service-page-content">
      <h1 className="heading-main">PRICE LIST</h1>
      <div className="mb-8">
        <h2 style={{ fontFamily: 'Shippori Mincho B1, serif', fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 500 }}>TREATMENTS:</h2>
        <ul style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.98rem', color: '#373636', marginBottom: '2rem', paddingLeft: 0 }}>
          <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>CONSULTATION</span>
            <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
            <span>$0.00</span>
          </li>
          <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>CHEMICAL PEEL</span>
            <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
            <span>$150+</span>
          </li>
          <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>MICRONEEDLING</span>
            <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
            <span>$350</span>
          </li>
          <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>MICRONEEDLING W/ PRP</span>
            <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
            <span>$700</span>
          </li>
          <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>SCALP PRP INJECTIONS</span>
            <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
            <span>$700</span>
          </li>
          <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>BOTOX</span>
            <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
            <span>$14/UNIT</span>
          </li>
          <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>FILLER</span>
            <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
            <span>$800</span>
          </li>
          <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>SCULPTRA</span>
            <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
            <span>$1500</span>
          </li>
        </ul>
        <h2 style={{ fontFamily: 'Shippori Mincho B1, serif', fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 500 }}>PACKAGES:</h2>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.98rem', color: '#373636', marginBottom: '2rem' }}>
          <div style={{ fontWeight: 500, marginBottom: 8 }}>PAY UPFRONT FOR 3 TREATMENTS & SAVE</div>
          <ul style={{ paddingLeft: 0 }}>
            <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
              <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>MICRONEEDLING</span>
              <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
              <span>$900</span>
            </li>
            <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
              <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>MICRONEEDLING W/ PRP SCALP PRP</span>
              <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
              <span>$1950</span>
            </li>
            <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
              <span style={{ minWidth: '180px', whiteSpace: 'nowrap' }}>INJECTIONS</span>
              <span style={{ flex: 1, borderBottom: '2px dotted #666', height: 2, margin: '0 10px', minWidth: 0 }}></span>
              <span>$1850</span>
            </li>
          </ul>
        </div>
        <div className="service-buttons">
          <a href="tel:8454217040" className="common-button common-button-secondary call-btn-service">CALL: 845-421-7040</a>
          <a href="/contact-us" className="common-button appt-btn-service">REQUEST AN APPOINTMENT</a>
        </div>
      </div>
    </section>
  </div>
  </>
);

export default Pricing; 