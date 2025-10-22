import React from "react";
import "./MSeries.css";
import { Link } from "react-router-dom";

import glock from "../assets/products/mseries/glock.jpg";
import pryme from "../assets/products/mseries/pryme.jpg";
import ilock from "../assets/products/mseries/ilock.jpg";

const MSeries = () => {
  return (
    <div className="mseries_container">
      {/* Our Products Section */}
      <section className="mseries_section products_section">
        <h3 className="section_subtitle">MSeries Products</h3>

        <div className="mseries_grid">
          <Link to="/products/mcops-series/glock" className="mseries_card">
            <img src={glock} alt="GLock" />
            <div className="series_info">
              <h4>MCOPS Glock</h4>
            </div>
          </Link>

          <Link to="/products/mcops-series/pryme" className="mseries_card">
            <img src={pryme} alt="Pryme" />
            <div className="series_info">
              <h4>MCOPS Glock Pryme</h4>
            </div>
          </Link>

          <Link to="/products/mcops-series/ilock" className="mseries_card">
            <img src={ilock} alt="Ilock" />
            <div className="series_info">
              <h4>MCOPS ILock</h4>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MSeries;
