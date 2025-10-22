import React, { useState, useRef } from "react";
import "./Glock.css";
import logo from "../assets/products/logos/glock.png";
import installationVideo from "../assets/products/videos/glockinstall.mp4";
import { FaTimes } from "react-icons/fa";   // ✅ Added FaDownload
import { FiDownload } from "react-icons/fi";

const Glock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const handleOverlayClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="glock_container">
      {/* LEFT SIDE (TEXT CONTENT) */}
      <div className="glock_content">
        <h2>About GLock</h2>
        <p>
          A standard e-finance locker kit that secures mobiles purchased under EMI.
          Designed to protect retailer interests and ensure timely EMI compliance.
        </p>

        <h2>Installation Video</h2>

        {/* Thumbnail video preview */}
        <div className="video-container" onClick={() => setIsOpen(true)}>
          <video src={installationVideo} muted />
          <div className="play-button">▶</div>
        </div>
      </div>

      {/* RIGHT SIDE (LOGO) */}
      <div className="glock_logo">
        <img src={logo} alt="Glock Logo" />
      </div>

      {/* POPUP VIDEO */}
      {isOpen && (
        <div className="video-popup" onClick={handleOverlayClick}>
          <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>

            <a
              href={installationVideo}
              download="Glock-Installation.mp4"
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

export default Glock;
