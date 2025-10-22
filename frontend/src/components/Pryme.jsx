import React, { useState, useRef } from "react";
import "./Pryme.css";
import logo from "../assets/products/logos/pryme.png";
import { FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

// ✅ Import multiple local videos
import video1 from "../assets/products/videos/prymeredmi.mp4";
import video2 from "../assets/products/videos/prymeoppo.mp4";
import video3 from "../assets/products/videos/prymesamsung.mp4";
import video4 from "../assets/products/videos/prymerealme.mp4";

const Pryme = () => {
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
    { src: video1, title: "GLOCK PRYME INSTALLATION ON REDMI DEVICES" },
    { src: video2, title: "GLOCK PRYME INSTALLATION ON OPPO DEVICES" },
    { src: video3, title: "GLOCK PRYME INSTALLATION ON SAMSUNG DEVICES" },
    { src: video4, title: "GLOCK PRYME INSTALLATION ON REALME DEVICES" },
  ];

  return (
    <div className="pryme_container">
      {/* LEFT SIDE (TEXT CONTENT) */}
      <div className="pryme_content">
        <h2>About GLock Pryme</h2>
        <p>
        An upgraded version of Glock, made for running devices. 
        Offers enhanced control while keeping the device fully functional.
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
      <div className="pryme_logo">
        <img src={logo} alt="Pryme Logo" />
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
            <video ref={videoRef} src={activeVideo} controls autoPlay />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pryme;
