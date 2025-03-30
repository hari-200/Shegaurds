import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Hero page.css"; // Make sure the filename matches exactly
import cyberSecurityImage from "../../assets/images/cyber.jpeg"; // Ensure correct path

const SheGuardSection = () => {
  return (
    <div className="sheguard-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Text Content */}
          <Col md={6} className="text-white text-start">
            <h1 className="hero-title">
              <span className="text-red-500">SHEGUARDS</span> 2025
            </h1>

            <h4 className="hero-subtext">
              Women Empowerment transforms potential into power by unlocking creativity, 
              leadership, and resilience. It enables women to break barriers, drive progress, 
              and shape their futures. By fostering gender equality, we fuel innovation, 
              strengthen societies, and accelerate economic growth, creating a world where all can thrive.
            </h4>

            {/* Get Started Button */}
            <div className="button-container">
              <a href="#" className="custom-button">Get Started</a>
            </div>
          </Col>

          {/* Right Column - Image */}
          <Col md={6} className="text-center">
            <img 
              src={cyberSecurityImage} 
              alt="Cybersecurity" 
              className="img-fluid cyber-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SheGuardSection;
