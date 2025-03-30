import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { BookFill, PeopleFill, Globe2, LightbulbFill } from "react-bootstrap-icons";
import "./About.css"; // Import CSS for styling

const sections = [
  {
    title: "Upskilling",
    description: "Enhance your skills with hands-on cybersecurity training.",
    icon: <BookFill size={20} color="#FF5733" />,
  },
  {
    title: "Mentorship",
    description: "Learn from industry experts and experienced professionals.",
    icon: <PeopleFill size={20} color="#4CAF50" />,
  },
  {
    title: "Networking",
    description: "Connect with like-minded professionals and expand your network.",
    icon: <Globe2 size={20} color="#3498DB" />,
  },
  {
    title: "Innovation",
    description: "Drive cutting-edge solutions in digital security.",
    icon: <LightbulbFill size={20} color="#F1C40F" />,
  },
];

const Defi = () => {
  return (
    <div className="defi-section">
      {/* Background Grid */}
      <div className="image-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={`grid-item img-${index + 1}`}></div>
        ))}
      </div>

      {/* Content Overlay */}
      <Container className="content-overlay">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="main-heading"
        >
          SHEGUARDS 2025 is All About
        </motion.h1>

        {/* Glassmorphism Buttons */}
        <Row className="justify-content-center align-items-center gx-2 gy-2">
          {sections.map((section, index) => (
            <Col key={index} xs={12} sm={6} md={5} lg={5} className="d-flex justify-content-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="glass-button"
              >
                {section.icon}
                <div>
                  <h5 className="button-title">{section.title}</h5>
                  <span className="button-text">{section.description}</span>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Defi;











