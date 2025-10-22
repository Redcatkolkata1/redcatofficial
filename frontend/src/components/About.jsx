import React from "react";
import "./About.css";
import backgroundimage from "../assets/background/bg1.jpg"; // ✅ import the impression image

const About = () => {
  return (
    <div
      className="about_container"
      style={{ "--bg-backgroundimage": `url(${backgroundimage})` }} // ✅ pass image to CSS
    >
      {/* LEFT SIDE (TEXT CONTENT) */}
      <div className="about_content">
        <h2>Our Story</h2>
        <p>
          We are a software services company using the power of technology to
          build better futures for our customers, colleagues, environment and
          communities, thereby delivering cutting edge solutions in Security,
          IoT, and AI, since April 2021.
        </p>

        <h2>Our Mission</h2>
        <p>
          Being an IT services company using the power of technology to build
          better futures for our customers, colleagues, environment and
          communities, helping our customers deliver business impact, and be the
          employer of choice.
        </p>

        <h2>Our Vision</h2>
        <p>
          We leverage the power of partnerships through our curated team of
          leaders and consultants, by combining strengths and expertise.
        </p>

        <h2>Our Values</h2>
        <p>
          Our Values are the fabric of Red Cat. They bind us together regardless
          of where or how we work and position us to succeed on our
          transformation journey.
        </p>

        <h2>Delivering Excellence for our Customers and Colleagues</h2>
        <p>
          Red Cat is a Software Services leader. Our more than 230 people in
          multiple locations and countries are entrusted by our customers to
          deliver what matters most. We use the power of technology to deliver
          business critical software development and deployment services that
          drive business impact. Red Cat is an employer of choice with strong
          values, and fosters a culture of inclusion, belonging and corporate
          citizenship. We are Red Cat.
        </p>

        <h2>What we do</h2>
        <p>
          We deliver the Software Development & Deployment services our
          customers need to modernize operations and drive innovation across
          Fintech, Consulting, People Development & Environmental Care.
        </p>

        <h2>How we work</h2>
        <p>
          Every day, we earn our customers’ trust by delivering transformative
          technologies to ensure the success, safety and well-being of
          businesses and people worldwide.
        </p>

        <p>
          We provide latest solutions and services from our Global Innovation
          and Delivery Centers in India. Our globally connected customers drive
          us to solve business challenges and transform our customer's
          businesses through our dedicated delivery workforce of more than 200
          people. With widely distributed teams and rich skills, Red Cat offers
          competitive solutions to address customer's cost, innovative
          deployment, and business continuity requirements.
        </p>

        <p>
          We leverage the power of partnerships through our curated team of
          leaders and consultants, by combining strengths and expertise
          globally, we create solutions and deliver greater outcomes for
          customers across their entire business lifecycle.
        </p>

        <p>We are continuously Innovating</p>
      </div>
    </div>
  );
};

export default About;
