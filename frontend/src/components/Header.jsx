import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";
import Gallery from './Gallery';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [expanded, setExpanded] = useState(false); // ✅ track navbar open/close
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  // ✅ Handle scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 70) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setScrolled(currentScrollTop > 50);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // ✅ Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expanded && navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  const handleNavClick = (targetId, routePath) => {
    setExpanded(false); // ✅ close after clicking
    if (location.pathname === "/") {
      const section = document.getElementById(targetId);
      if (section) {
        const offset = section.offsetTop - 70;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    } else {
      navigate(routePath);
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded} // ✅ controlled state
      onToggle={setExpanded}
      ref={navRef}
      className={`custom-navbar ${scrolled ? "scrolled" : ""} ${!showNavbar ? "hide-navbar" : ""}`}
    >
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Navbar.Brand as={Link} to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="logo" className="brand-logo" />
          <span className="brand-title">Redcat Hospitality Pvt. Ltd.</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
          <Nav className="ms-auto nav-items">
            <div className="nav-link-custom" onClick={() => handleNavClick("home", "/")}>Home</div>
            <NavLink to="/about" className="nav-link-custom" onClick={() => setExpanded(false)}>About</NavLink>
            <div className="nav-link-custom" onClick={() => handleNavClick("products", "/products")}>Products</div>
            <NavLink to="/gallery" className="nav-link-custom" onClick={() => setExpanded(false)}>Gallery</NavLink>
            <div className="nav-link-custom" onClick={() => handleNavClick("team", "/team")}>Our Team</div>
            <NavLink to="/privacy" className="nav-link-custom" onClick={() => setExpanded(false)}>Privacy Policy</NavLink>
            <div className="nav-link-custom" onClick={() => handleNavClick("contact", "/contact")}>Contact</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
