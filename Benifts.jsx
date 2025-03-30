import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import power from "../assets/images/enviroiment.jpeg";


const Message = () => {
  return (
    <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center p-4">
      <Row className="w-75 align-items-center g-4">
        {/* Heading */}
        <Col xs={12} className="text-black text-center mb-3">
          <h1>In choosing a job, women prioritize three factors</h1>
        </Col>

        {/* Image Column */}
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Image
            src={power}
            alt="Cybersecurity"
            className="rounded shadow-lg img-fluid"
            style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
          />
        </Col>

        <Col xs={12} md={6} className="text-black text-center text-md-start">
          <p className="fs-5 fs-md-4 fs-lg-2 fs-xm-6 text-wrap">
            <span className="fw-bold  d-sm-inline d-md-inline ">• Contributing to society:</span> 
            Making an impact through meaningful work.
          </p>
          <p className="fs-5 fs-md-4 fs-lg-3 fs-xm-6 text-wrap ">
            <span className="fw-bold  d-sm-inline  d-md-inline  ">• Balancing family and work needs:</span> 
            Achieving work-life harmony.
          </p>
          <p className="fs-5 fs-md-4 fs-lg-3 fs-xm-6 text-wrap ">
            <span className="fw-bold  d-sm-inline  d-md-inline  ">• Earnings and self-respect:</span> 
            Ensuring financial stability and growth.
          </p>
        </Col>

      </Row>
      </Container>
    
  );
};

export default Message;