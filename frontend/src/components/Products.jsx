import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

import ourproduct1 from "../assets/products/op1.jpg";
import ourproduct2 from "../assets/products/op2.jpg";
import ourproduct3 from "../assets/products/op3.jpg";
import ourproduct4 from "../assets/products/op4.jpg";
import ourproduct5 from "../assets/products/op5.jpg";
import ourproduct6 from "../assets/products/op6.jpg";

const Products = ({ isStandalone = false }) => {
  return (
    <div className={`products_container ${isStandalone ? "standalone" : ""}`}>
      {/* Our Products Section */}
      <section className="ourteam_section directors_section">
        <h3 className="section_subtitle">Our Products</h3>

        <div className="team_grid">
          <Link to="/products/mcops-series" className="team_card">
            <img src={ourproduct1} alt="Ourproduct 1" />
            <div className="team_info">
              <h4>MCOPS Series</h4>
            </div>
          </Link>

          <Link to="/products/mcops-zpro" className="team_card">
            <img src={ourproduct2} alt="Ourproduct 2" />
            <div className="team_info">
              <h4>MCOPS Z+ Pro</h4>
            </div>
          </Link>

          <Link to="/products/mcops-finsure" className="team_card">
            <img src={ourproduct3} alt="Ourproduct 3" />
            <div className="team_info">
              <h4>MCOPS Finsure</h4>
            </div>
          </Link>
        </div>

        <div className="team_grid">
          <div className="team_card">
            <img src={ourproduct4} alt="Ourproduct 4" />
            <div className="team_info">
              <h4>MCOPS Finance Locker</h4>
            </div>
          </div>

          <Link to="/products/imagine" className="team_card">
            <img src={ourproduct5} alt="Ourproduct 5" />
            <div className="team_info">
              <h4>Imagine</h4>
            </div>
          </Link>
        </div>
      </section>

      {/* Upcoming Products Section */}
      <section className="ourteam_section directors_section">
        <h3 className="section_subtitle">Upcoming Products</h3> 
        <div className="team_grid"> 
          <div className="team_card"> 
           <img src={ourproduct6} alt="Ourproduct 6" /> 
            <div className="team_info"> 
             <h4>E-Mandate</h4> 
            </div> 
          </div> 
        </div> 
            </section>
    </div>
  );
};

export default Products;
