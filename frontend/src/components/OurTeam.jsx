import React from "react";
import "./OurTeam.css";

import director1 from "../assets/team/director1.jpg";
import director2 from "../assets/team/director2.jpg";
import ho1 from "../assets/team/ho1.jpg";
import ho2 from "../assets/team/ho2.jpg";
import ho3 from "../assets/team/ho3.jpg";
import ho4 from "../assets/team/ho4.jpg";
import ho5 from "../assets/team/ho5.jpg";
import ho6 from "../assets/team/ho6.jpg";
import zo1 from "../assets/team/zo1.jpg";


const OurTeam = ({ isStandalone = false }) => {
  return (
    <div className={`ourteam_container ${isStandalone ? "standalone" : ""}`}>
      {/* Directors Section */}
      <section className="ourteam_section directors_section">
        <h3 className="section_subtitle">HONORABLE DIRECTORS</h3>
        <div className="team_grid">
          <div className="team_card">
            <img src={director1} alt="Director 1" />
            <div className="team_info">
              <h4>Raja Adhikari</h4>
              <p>Founder & CEO</p>
            </div>
          </div>
          <div className="team_card">
            <img src={director2} alt="Director 2" />
            <div className="team_info">
              <h4>Vivek Kapoor</h4>
              <p>Founder Director & Chairman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="ourteam_section">
        <h3 className="section_subtitle">HEAD OFFICE DEPARTMENT HEADS</h3>
        <div className="team_grid">
          <div className="team_card">
            <img src={ho1} alt="HO 1" />
            <div className="team_info">
              <h4>Piyali Adhikari</h4>
              <p>HR Head</p>
            </div>
          </div>
          <div className="team_card">
            <img src={ho2} alt="HO 2" />
            <div className="team_info">
              <h4>Sima Chatterjee</h4>
              <p>Production Dept Head</p>
            </div>
          </div>
          <div className="team_card">
            <img src={ho3} alt="HO 3" />
            <div className="team_info">
              <h4>Sumita Kandar</h4>
              <p>Admin Manager</p>
            </div>
          </div>
        </div>
        <div className="team_grid">
          <div className="team_card">
            <img src={ho4} alt="HO 4" />
            <div className="team_info">
              <h4>Naveen Agarwal</h4>
              <p>Design Manager</p>
            </div>
          </div>
          <div className="team_card">
            <img src={ho5} alt="HO 5" />
            <div className="team_info">
              <h4>Sudip Bhattacharya</h4>
              <p>Accounts Manager</p>
            </div>
          </div>
            <div className="team_card">
            <img src={ho6} alt="HO 6" />
            <div className="team_info">
              <h4>Smriti Nag</h4>
              <p>Sales Support Manager</p>
            </div>
          </div>
        </div>
      </section>

       {/* Sales Managers Section */}
        <section className="ourteam_section managers_section">
        <h3 className="section_subtitle">SALES HEAD</h3>
        <div className="team_grid">
          <div className="team_card">
            <img src={zo1} alt="ZO 1" />
            <div className="team_info">
              <h4>Dhananjay Kumar Singh</h4>
              <p>Zonal Sales Manager</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurTeam;
