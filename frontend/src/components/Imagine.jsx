import React, { useState } from "react";
import "./Imagine.css";
import logo from "../assets/products/logos/imagine.png";
import { FaTimes } from "react-icons/fa";

// Import images
import img1 from "../assets/products/imagine1.jpg";
import img2 from "../assets/products/imagine2.jpg";
import img3 from "../assets/products/imagine3.jpg";
import img4 from "../assets/products/imagine4.jpg";
import img5 from "../assets/products/imagine5.jpg";
import img6 from "../assets/products/imagine6.jpg";

const Imagine = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { src: img1, title: "Imagine Product View 1" },
    { src: img2, title: "Imagine Product View 2" },
    { src: img3, title: "Imagine Product View 3" },
    { src: img4, title: "Imagine Product View 4" },
    { src: img5, title: "Imagine Product View 5" },
    { src: img6, title: "Imagine Product View 6" },
  ];

  return (
    <div className="imagine_container">
      {/* LEFT SIDE (TEXT CONTENT + IMAGES) */}
      <div className="imagine_content">
        <h2>About Imagine</h2>
        <p>
          Discover how Red Cat is revolutionizing the smart phone experience through 
          innovation and by giving Originality with quality to every user.
        </p>
        <p>
          Phone for Special one ,Let’s be the change
        </p>
        <p>
          Revolutionizing the Smart phone Experience with Cutting-Edge Technology and Value for Everyone.
        </p>
        <div className="image-row">
          {images.map((img, index) => (
            <div
              key={index}
              className="image-container"
              onClick={() => setSelectedImg(img.src)}
            >
              <img src={img.src} alt={img.title} />
              <div className="image-overlay">🔍</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE (LOGO) */}
      <div className="imagine_logo">
        <img src={logo} alt="Imagine Logo" />
      </div>

      {/* POPUP IMAGE */}
      {selectedImg && (
        <div className="popup-overlay" onClick={() => setSelectedImg(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImg(null)}>
              <FaTimes />
            </button>
            <img src={selectedImg} alt="Popup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Imagine;
