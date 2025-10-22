import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container">

        {/* Column 1 - Contacts */}
        <div className="footer_col">
          <h4>OUR CONTACTS</h4>
          <p><FaPhoneAlt className="contact-icon" /> 8420633207</p>
          <p><MdEmail className="contact-icon" /> it@redcathospitality.com</p>
          <p>
            <FaFacebookF className="contact-icon" />
            <a
              href="https://www.facebook.com/red.cat.73997861/"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/red.cat.73997861
            </a>
          </p>
          <p>
            <FaInstagram className="contact-icon" />
            <a
              href="https://www.instagram.com/redcatindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram.com/redcatindia
            </a>
          </p>
          <p>
            <FaLinkedinIn className="contact-icon" />
            <a
              href="https://www.linkedin.com/company/red-cat-technology-india-pvt-ltd/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>

        {/* Column 2 - Map */}
        <div className="footer_col">
          <h4>LOCATE AT GOOGLE MAP</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.75777477355!2d88.47485187527782!3d22.591238979484056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f0b75c19b45%3A0x3d8d47f2a7ee8b61!2sAstra%20Towers!5e0!3m2!1sen!2sin!4v1693484902333!5m2!1sen!2sin"
            width="250"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Column 3 - Offices */}
        <div className="footer_col">
          <h4>HO OFFICE</h4>
          <p>
            ASTRA TOWERS <br />
            ASO-715 at 7th floor, Rajarhat IT Park, 2C/1 Action Area II C, <br />
            Newtown Rajarhat, Kolkata 700157 <br />
            Nearest Bus Stop Akhankha
          </p>

          <h4>CORPORATE OFFICE</h4>
          <p>
            T-05/0603, Emaar Palm Gardens, <br />
            Sector 83, Gurgaon, India - 122004
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer_bottom">
        <p>Redcat © {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
