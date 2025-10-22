import React, { useState, useRef } from "react";
import "./Zplus.css";
import logo from "../assets/products/logos/zplus.png";
import installationVideo from "../assets/products/videos/zplusinstall.mp4";
import { FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Zplus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="zplus_container">
      {/* LEFT SIDE (TEXT CONTENT) */}
      <div className="zplus_content">
        <h2>About Z+ Pro</h2>
        <p>
         A high-security locker kit with advanced monitoring features. 
         Offers maximum protection for financed devices with Z+ grade reliability.
        </p>

        <h2>Installation Video</h2>

        {/* Thumbnail video preview */}
        <div className="video-container" onClick={() => setIsOpen(true)}>
          <video src={installationVideo} muted />
          <div className="play-button">▶</div>
        </div>
      </div>

      {/* RIGHT SIDE (LOGO) */}
      <div className="zplus_logo">
        <img src={logo} alt="Zplus Logo" />
      </div>

      {/* POPUP VIDEO */}
      {isOpen && (
        <div className="video-popup">
          <div className="video-popup-content">
            {/* Close button positioned relative to video box */}
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>

            <a
              href={installationVideo}
              download="ZPlus-Installation.mp4"
              className="download-btn"
              title="Download Video"
            >
              <FiDownload />   {/* Or any icon you prefer */}
            </a>
            <video ref={videoRef} src={installationVideo} controls autoPlay />
          </div>
        </div>
      )}

    </div>
  );
};

export default Zplus