import React, { useState, useRef } from "react";
import "./Finsure.css";
import logo from "../assets/products/logos/finsure.png";
import { FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

// ✅ Import multiple local videos
import finvideo1 from "../assets/products/videos/finsureinstall.mp4";
import finvideo2 from "../assets/products/videos/finsureprymeinstall.mp4";


const Finsure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
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

  const videoList = [
    { src: finvideo1, title: "FINSURE INSTALLATION" },
    { src: finvideo2, title: "FINSURE PRYME INSTALLATION" },
  ];

  return (
    <div className="finsure_container">
      {/* LEFT SIDE (TEXT CONTENT) */}
      <div className="finsure_content">
        <h2>About Finsure</h2>
        <p>
          Finsure – A financial security locker providing smooth EMI management.
          It locks financed devices if payment schedules are not met.
        </p>
        <p>
          Finsure Pryme – An advanced version of Finsure for running devices.
          Combines flexibility with strong security for retailers and customers.

        </p>

        <h2>Installation Videos</h2>

        {/* Video Cards List */}
        <div className="video-list">
          {videoList.map((vid, idx) => (
            <div
              key={idx}
              className="video-card"
              onClick={() => {
                setActiveVideo(vid.src);
                setIsOpen(true);
              }}
            >
              <div className="video-wrapper">
                <video src={vid.src} muted />
                <div className="play-button">▶</div>
              </div>
              <h3>{vid.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE (LOGO) */}
      <div className="finsure_logo">
        <img src={logo} alt="Finsure Logo" />
      </div>

      {/* POPUP VIDEO */}
      {isOpen && (
        <div className="video-popup" onClick={handleOverlayClick}>
          <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>

            {/* Close button */}
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>

            {/* Download button */}
            <a
              href={activeVideo}
              download="Finsure-Installation.mp4"
              className="download-btn"
              title="Download Video"
            >
              <FiDownload />
            </a>

            {/* Active video */}
            <video ref={videoRef} src={activeVideo} controls autoPlay />
          </div>
        </div>
      )}

    </div>
  );
};

export default Finsure;
