import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Import X (formerly Twitter) icon
import "./Footer.css"; // Import CSS for styling
import port from '../../assets/images/manage.png';

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="text-center text-md-start align-items-center ">
          
          {/* Brand & Description */}
          <Col md={3} className="mb-3 ">
            <div className="brand d-flex flex-column align-items-center align-items-md-start">
              <img src={port} alt="Logo" height={50} width={50} className="d-inline-block align-top" />
              <h4 className="fw-bold text-white "><span>SheGuards</span> 2025</h4>
              <p className="text-white text-center text-md-start">
                Empowering Women, Securing the Future.
              </p>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-3 text-center text-md-start px-md-5">
            <h5 className="fw-bold text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/" className="footer-link">About</a></li>
              <li><a href="/" className="footer-link">Services</a></li>
            </ul>
          </Col>

          {/* Contact Details */}
          <Col md={3} className="mb-3 text-center text-md-start px-3 px-md-5">
            <h5 className="fw-bold text-white">Contact</h5>
            <ul className="list-unstyled text-white contact-list">
              <li><FaPhone className="me-2" /> +91 98765 43210</li>
              <li><FaEnvelope className="me-2" /> support@sheguard.org</li>
              <li><FaMapMarkerAlt className="me-2" /> Chennai, India</li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={3} className="mb-3 text-center text-md-start px-md-5">
            <h5 className="fw-bold text-white">Connect</h5>
            <div className="social-icons d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://twitter.com" className="social-icon"><FaXTwitter /></a> {/* Updated to X icon */}
              <a href="https://github.com" className="social-icon github"><FaGithub /></a>
              <a href="https://linkedin.com" className="social-icon"><FaLinkedin /></a>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


