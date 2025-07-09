import React from "react";
import { useParams } from "react-router-dom";
import ImageAssets from "../components/common/ImageAssets";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import './BlogDetails.css'
import Breadcrumbs from "../components/common/BreadCrumbs/BreadCrumbs";

const blogs = [
  {slug: "early-stage-skin-cancer",
    title: "Early-Stage Skin Cancer: Could It Look Like a Rash?",
    date: "February 24, 2025",
    content: (
      <>
        <p>
          Skin cancer is the most common form of cancer, and early detection is
          critical for effective treatment. But many people overlook one crucial
          detail — early-stage skin cancer can sometimes look like a simple
          rash. In this article, we’ll explore how to tell the difference, what
          to look for, and when to see a dermatologist.
        </p>

        <h3>What Is Early-Stage Skin Cancer?</h3>
        <ul>
          <li>
            <strong>Basal Cell Carcinoma (BCC):</strong> Often appears as a
            shiny bump or pink patch.
          </li>
          <li>
            <strong>Squamous Cell Carcinoma (SCC):</strong> Can show up as a
            rough, red, scaly patch.
          </li>
          <li>
            <strong>Melanoma:</strong> May look like an irregular mole or dark
            spot with uneven borders.
          </li>
        </ul>

        <p>
          <p style={{fontSize:"21px",fontWeight:"500",color:"#000"}}>
            Recognizing these signs early can make a significant difference in
            treatment outcomes.
          </p>
        </p>

        <h3>Can Skin Cancer Look Like a Rash?</h3>
        <ul>
          <li>
            <h4>Basal Cell Carcinoma Symptoms</h4>
            <ul className="no-bullets">
              <li>Pinkish or reddish patches</li>
              <li>Slightly raised or shiny surface</li>
              <li>May bleed or scab and then return</li>
            </ul>
          </li>
          <li>
            <h4>Squamous Cell Carcinoma Symptoms</h4>
            <ul className="no-bullets">
              <li>Can resemble persistent sunburn or a rough rash</li>
              <li>May itch or bleed occasionally</li>
            </ul>
          </li>
          <li>
            <h4>Melanoma Symptoms</h4>
            <ul className="no-bullets">
              <li>Dark flat patches that may look like a rash at first</li>
              <li>Uneven edges or multiple colors</li>
              <li>Rapid changes in size or appearance</li>
            </ul>
          </li>
        </ul>

        <h3>When to See a Dermatologist</h3>
        <p>
          <p style={{fontSize:"28px",fontWeight:"400",color:"#000"}}>Seek professional evaluation if you notice:</p>
        </p>
        <ul className="no-bullets">
          <li>A skin patch that doesn’t heal within 2–3 weeks</li>
          <li>A rash that keeps returning in the same spot</li>
          <li>Bleeding, scabbing, or changes in size or shape</li>
          <li>A personal or family history of skin cancer</li>
        </ul>
        <p>
          Dermatologists are trained to differentiate between rashes and
          potential skin cancers. A quick in-office examination — and possibly a
          skin biopsy — can provide clarity and peace of mind.
        </p>

        <h3>Conclusion</h3>
        <p>
          While many rashes are harmless, persistent or unusual skin changes
          should never be ignored. Some forms of early-stage skin cancer can
          closely resemble a rash, making it important to stay alert and act
          early. If something on your skin doesn’t feel right, trust your
          instincts — and schedule a professional skin check.
        </p>
      </>
    ),
    image: ImageAssets.blog2,
  },
  { slug: "rosacea-understanding-causes",
    title:
      "Rosacea Understanding Causes and Solutions with Dermatologist Expertise",
    date: "March 3, 2025",
    content:
      "Acne is one of the most frustrating skin conditions, and breakouts can be very diffic...",

    image: ImageAssets.blog1,
  },
  
  {
    slug: "best-facial-treatment",
    title:
      "Best Facial Treatment for Your Age: Tailored Skincare Solutions Every Decade",
    date: "February 24, 2025",
    content:
      "As we age, our skin’s needs evolve, and so should our skincare routines...",
    image: ImageAssets.blog3,
  },
  {slug: "how-to-get-rid-of-acne-extractions",
    title:
      "Acne Extractions: How to Get Rid of Pimples Safely with a Dermatologist",
    date: "February 24, 2025",
    content:
      "Acne is one of the most frustrating skin conditions, and breakouts can be very diffic...",
    image: ImageAssets.blog4,
  },
  {slug: "top-dermatologist-recommended-for-skincare",
    title: "Top Dermatologist-Recommended Skincare Tips for 2025",
    date: "February 22, 2025",
    content:
      "Stay ahead in skincare with these expert tips that keep your skin glowing all year round...",
    image: ImageAssets.blog5,
  },
];

const BlogDetail = () => {
 const { slug } = useParams();
const blog = blogs.find((b) => b.slug === slug);


  if (!blog) return <div>Blog not found</div>;

  return (
    <>
      {/* <Hero image={blog.image} showButton={false} /> */}
      <Hero
  image={slug === "early-stage-skin-cancer" ? ImageAssets.blog2Hero : blog.image}
  showButton={false}
/>

      <Breadcrumbs />
      <div className="blog-detail-container">
        <div className="blog-header">
          <h2 className="blog-title">{blog.title}</h2>
          <p style={{margin:"0px",fontSize:"19px",}} className="blog-date">{blog.date}</p>
        </div>
        <div>{blog.content}</div>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetail;
