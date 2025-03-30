import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBolt } from "react-icons/fa";
import { MortarboardFill, BriefcaseFill, PeopleFill } from "react-bootstrap-icons";
import "./Service.css";

const services = [
  {
    icon: <MortarboardFill size={50} className="text-primary mb-3" />,
    title: "Internships",
    description: "Gain hands-on experience in the industry.",
  },
  {
    icon: <BriefcaseFill size={50} className="text-success mb-3" />,
    title: "Placements",
    description: "Secure your dream job with placement support.",
  },
  {
    icon: <PeopleFill size={50} className="text-warning mb-3" />,
    title: "Job Opportunities",
    description: "Connect with recruiters hiring skilled professionals.",
  },
];

const OurServices = () => {
  return (
    <>
      {/* Heading Outside */}
      <h1 className="text-center text-white service-heading">Our Services</h1>

      <div className="outer-container">
        <Container fluid className="service-section">
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <div className="service-container">
                <Row>
                  {services.map((service, index) => (
                    <Col key={index} xs={12} md={4} className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      <div className="service-header">
                        
                        <span className="service-title"><FaBolt className="bolt-icon" />{service.title}</span>
                      </div>
                      <p className="service-description">{service.description}</p>
                      {index < services.length - 1 && <div className="divider"></div>}
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurServices;


















