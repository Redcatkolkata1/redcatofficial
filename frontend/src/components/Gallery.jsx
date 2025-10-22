import React, { useState } from "react";
import "./Gallery.css"; // keep your background and styling
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import your gallery images
import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";
import gallery9 from "../assets/gallery/gallery9.jpg";
import gallery10 from "../assets/gallery/gallery10.jpg";
import gallery11 from "../assets/gallery/gallery11.jpg";
import gallery12 from "../assets/gallery/gallery12.jpg";
import gallery13 from "../assets/gallery/gallery13.jpg";
import gallery14 from "../assets/gallery/gallery14.jpg";
import gallery15 from "../assets/gallery/gallery15.jpg";
import gallery16 from "../assets/gallery/gallery16.jpg";
import gallery17 from "../assets/gallery/gallery17.jpg";
import gallery18 from "../assets/gallery/gallery18.jpg";
import gallery19 from "../assets/gallery/gallery19.jpg";
import gallery20 from "../assets/gallery/gallery20.jpg";
import gallery21 from "../assets/gallery/gallery21.jpg";
import gallery22 from "../assets/gallery/gallery22.jpg";
import gallery23 from "../assets/gallery/gallery23.jpg";
import gallery24 from "../assets/gallery/gallery24.jpg";
import gallery25 from "../assets/gallery/gallery25.jpg";
import gallery26 from "../assets/gallery/gallery26.jpg";
import gallery27 from "../assets/gallery/gallery27.jpg";
import gallery28 from "../assets/gallery/gallery28.jpg";
import gallery29 from "../assets/gallery/gallery29.jpg";
import gallery30 from "../assets/gallery/gallery30.jpg";
import gallery31 from "../assets/gallery/gallery31.jpg";
import gallery32 from "../assets/gallery/gallery32.jpg";
import gallery33 from "../assets/gallery/gallery33.jpg";
import gallery34 from "../assets/gallery/gallery34.jpg";
import gallery35 from "../assets/gallery/gallery35.jpg";
import gallery36 from "../assets/gallery/gallery36.jpg";
import gallery37 from "../assets/gallery/gallery37.jpg";
import gallery38 from "../assets/gallery/gallery38.jpg";
import gallery39 from "../assets/gallery/gallery39.jpg";
import gallery40 from "../assets/gallery/gallery40.jpg";



const Gallery = () => {
  const images = [
    { src: gallery1 },
    { src: gallery2 },
    { src: gallery3 },
    { src: gallery4 },
    { src: gallery5 },
    { src: gallery6 },
    { src: gallery7 },
    { src: gallery8 },
    { src: gallery9 },
    { src: gallery10 },
    { src: gallery11 },
    { src: gallery12 },
    { src: gallery13 },
    { src: gallery14 },
    { src: gallery15 },
    { src: gallery16 },
    { src: gallery17 },
    { src: gallery18 },
    { src: gallery19 },
    { src: gallery20 },
    { src: gallery21 },
    { src: gallery22 },
    { src: gallery23 },
    { src: gallery24 },
    { src: gallery25 },
    { src: gallery26 },
    { src: gallery27 },
    { src: gallery28 },
    { src: gallery29 },
    { src: gallery30 },
    { src: gallery31 },
    { src: gallery32 },
    { src: gallery33 },
    { src: gallery34 },
    { src: gallery35 },
    { src: gallery36 },
    { src: gallery37 },
    { src: gallery38 },
    { src: gallery39 },
    { src: gallery40 },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="gallery_container">
      {/* Centered golden heading */}
      <h2 className="gallery_title">Gallery</h2>

      {/* Image grid */}
      <div className="gallery_grid">
        {images.map((img, i) => (
          <div className="gallery_item" key={i}>
            <img
              src={img.src}
              alt={`Gallery ${i + 1}`}
              onClick={() => {
                setOpen(true);
                setIndex(i);
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox popup */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
      />
    </div>
  );
};

export default Gallery;
