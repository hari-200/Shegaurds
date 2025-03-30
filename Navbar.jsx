import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import port from '../../assets/images/manage.png';

const BlogNavbar = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
    } else {
      window.location.href = "/"; // Reload home page
    }
  };

  return (
    <Navbar expand="lg" variant="dark" fixed="top" className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold brand-logo d-flex align-items-center me-auto">
          <img src={port} alt="Logo" height={60} width={60} className="d-inline-block align-top" />
          <span className="ms-2 text-white">SHEGUARDS</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link onClick={handleHomeClick} className="nav-item text-white">Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("about")} className="nav-item text-white">About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("services")} className="nav-item text-white">Services</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")} className="nav-item text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BlogNavbar;





