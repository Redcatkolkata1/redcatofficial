// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";

import slide1 from "../assets/slides/slide1.jpg";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.jpg";
import slide4 from "../assets/slides/slide4.jpg";

import angle1 from "../assets/angledslide1/angle11.jpg";
import angle2 from "../assets/angledslide1/angle12.jpg";
import angle3 from "../assets/angledslide1/angle13.jpg";
import angle4 from "../assets/angledslide1/angle13.jpg";
import angle5 from "../assets/angledslide2/angle21.jpg";
import angle6 from "../assets/angledslide2/angle22.jpg";
import angle7 from "../assets/angledslide2/angle23.jpg";
import angle8 from "../assets/angledslide2/angle24.jpg";

import Products from "./Products";
import OurTeam from "./OurTeam";
import Contact from "./Contact";

const Home = () => {
  const [isPaused, setIsPaused] = useState(false);

  const missionRef = useRef(null);
  const visionRef = useRef(null);

  const handleClick = () => {
    setIsPaused((prev) => !prev);
  };

  useEffect(() => {
    const options = { threshold: 0.5 };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);

  return (
    <>
      {/* Hero Carousel */}
      <section id="home" className="home_container">
        <Carousel
          fade
          interval={isPaused ? null : 3000}
          pause={false}
          wrap
          className="hero-carousel"
          onClick={handleClick}
        >
          {[slide1, slide2, slide3, slide4].map((slide, idx) => (
            <Carousel.Item key={idx}>
              <div className="carousel-slide">
                <img
                  className="carousel-img"
                  src={slide}
                  alt={`Slide ${idx + 1}`}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Mission + Vision */}
      <div className="mission-vision-wrapper">
        <div className="chevron-row">
          <div className="chevron-heading right-arrow" ref={missionRef}>
            <div className="chevron-inner">
              <h2>Our Mission</h2>
            </div>
          </div>
          <div className="chevron-text">
            <p>
           Be an IT services company using the power of technology to build
           better futures for our customers, colleagues, environment and
           communities, helping our customers deliver business impact, and be the
           employer of choice.
            </p>
          </div>
        </div>

        <div className="chevron-row reverse">
          <div className="chevron-heading left-arrow" ref={visionRef}>
            <div className="chevron-inner">
              <h2>Our Vision</h2>
            </div>
          </div>
          <div className="chevron-text">
            <p>
             To build a world where technology 
             uplifts people, strengthens communities, and 
             enables limitless possibilities for progress.
            </p>
          </div>
        </div>
      </div>

      {/* Angled Sections with Slideshow */}
      <section className="angled-info-section">
        <div className="angled-image-wrapper">
          <Carousel fade interval={3000} controls={false} indicators={false}>
            {[angle1, angle2, angle3, angle4].map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={img}
                  alt={`Redbox slide ${idx + 1}`}
                  className="angled-image"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="angled-text">
          <h2>What We Are...</h2>
          <h3>Innovation | Entertainment | Sustainability</h3>
          <p>
            Innovation- With AI we are working on reshaping the healthcare
            landscape through innovative design and data-driven insights.
          </p>
          <p>
            Entertainment- We are committed to creating innovative entertainment apps that bring joy,
            excitement, and engagement to users of all ages. Our apps are designed to provide immersive
            experiences, whether through interactive games, streaming content, or social entertainment.
            By blending creativity with cutting-edge technology, we aim to redefine digital entertainment
            and keep our users entertained anytime, anywhere.
          </p>
          <p>
            Sustainability- Discover how Red Cat is revolutionizing the smart phone experience through
            innovation and by giving Originality with quality to every user
          </p>
        </div>
      </section>

      <section className="angled-info-section reverse">
        <div className="angled-image-wrapper right-clip">
          <Carousel fade interval={3000} controls={false} indicators={false}>
            {[angle5, angle6, angle7, angle8].map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={img}
                  alt={`Mcops slide ${idx + 1}`}
                  className="angled-image"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="angled-text">
          <h2>Always Vigilant to Protect Your Business</h2>
          <p>
            RED CAT HOSPITALITY INDIA PVT.LTD is a Private Ltd. organization
            which is catering innovative products to mass market as well as
            Niche ones. “We as an organization pledge to provide innovative
            products which bring a sense of easy going as well as security to
            the society.
          </p>
          <p>
            We are a software services company using the power of technology to
            build better futures for our customers, colleagues, environment and
            communities, thereby delivering cutting edge solutions in Mobile
            finance Security, AI powered health care technology, Reworked mobile
            electronics since April 2021
          </p>
        </div>
      </section>

{/* Scroll Sections with common background */}
<div className="scroll-wrapper">
  <section id="products" className="home_section scroll-section">
    <div className="section-inner-content">
      <Products isStandalone={false} />
    </div>
  </section>

  <section id="team" className="home_section scroll-section">
    <div className="section-inner-content">
      <OurTeam isStandalone={false} />
    </div>
  </section>

  <section id="contact" className="home_section scroll-section">
    <div className="section-inner-content">
      <Contact isStandalone={false} />
    </div>
  </section>
</div>
    </>
  );
};

export default Home;
