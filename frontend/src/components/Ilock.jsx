import React, { useState, useRef } from "react";
import "./Ilock.css";
import logo from "../assets/products/logos/ilock.png";
import installationVideo from "../assets/products/videos/ilockinstall.mp4";
import { FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Ilock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="ilock_container">
      {/* LEFT SIDE (TEXT CONTENT) */}
      <div className="ilock_content">
        <h2>About ILock</h2>
        <p>
          A dedicated locker kit built exclusively for iPhones.
          Ensures EMI-linked iPhones remain secure and compliant throughout the tenure.

        </p>

        <h2>Installation Video</h2>

        {/* Thumbnail video preview */}
        <div className="video-container" onClick={() => setIsOpen(true)}>
          <video src={installationVideo} muted />
          <div className="play-button">▶</div>
        </div>
      </div>

      {/* RIGHT SIDE (LOGO) */}
      <div className="ilock_logo">
        <img src={logo} alt="Ilock Logo" />
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
              download="Ilock-Installation.mp4"
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

export default Ilock;
