// About.jsx
import React from "react";
import "./About.css";
import backgroundimage from "../assets/background/bg1.jpg";
import { FaHandHoldingHeart } from "react-icons/fa"; // ✅ Matching icons
import { TbTargetArrow } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Users, Building2} from "lucide-react";


const About = () => {
  return (
    <div
      className="about_container"
      style={{ "--bg-backgroundimage": `url(${backgroundimage})` }}
    >
      <div className="about_content">
        <h2>Our Story</h2>
        <p>
          We are a software services company using the power of technology to
          build better futures for our customers, colleagues, environment and
          communities, thereby delivering cutting edge solutions in Security,
          IoT, and AI.
        </p>

        <h2>Our Mission</h2>
        <p>
          Be an IT services company using the power of technology to build
          better futures for our customers, colleagues, environment and
          communities, helping our customers deliver business impact, and be the
          employer of choice.
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

        <h2>What We Do</h2>
        <p>
          We deliver the Software Development & Deployment services our
          customers need to modernize operations and drive innovation across
          Fintech, Consulting, People Development & Environmental Care.
        </p>

        <h2>How We Work</h2>
        <p>
          Every day, we earn our customer's trust by delivering transformative
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
          leaders and consultants. By combining strengths and expertise
          globally, we create solutions and deliver greater outcomes for
          customers across their entire business lifecycle.
        </p>

        <p>We are continuously innovating.</p>

        <h2>Our Values</h2>
        <p>
          Our Values are the fabric of Red Cat. They bind us together regardless
          of where or how we work and position us to succeed on our
          transformation journey:
        </p>

        {/* ✅ Our Values Icons Section */}
        <div className="values_grid">
          <div className="value_card">
            <TbTargetArrow className="value_icon" />
            <h4>Deliver</h4>
            <p>We do what we say we are going to do.</p>
          </div>
          <div className="value_card">
            <FaHandHoldingHeart className="value_icon" />
            <h4>Care</h4>
            <p>
              We take care of each other and foster a culture of inclusion and
              belonging.
            </p>
          </div>
          <div className="value_card">
            <IoShieldCheckmarkSharp className="value_icon" />
            <h4>Do the right thing</h4>
            <p>We act with integrity.</p>
          </div>
          <div className="value_card">
            <Users className="value_icon" />
            <h4>Collaborate</h4>
            <p>We work as a team – globally and locally.</p>
          </div>
          <div className="value_card">
            <Building2 className="value_icon" />
            <h4>Community</h4>
            <p>
              We believe in stewardship and building a sustainable company that
              supports our communities.
            </p>
          </div>
        </div>

        <h2>Join Our Team</h2>
        <p>
          We inspire and take care of our people. We work to create a culture of
          learning, diversity and inclusion, and are dedicated to strong ethics
          and corporate citizenship. In each of the regions where we work,
          we’re singularly focused on delivering excellence for our customers.
        </p>

        <p>
          Red Cat is where brilliant people embrace change and seize
          opportunities to advance their careers and amplify customer success.
          Join us!
        </p>
      </div>
    </div>
  );
};

export default About;
