import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import qrCode1 from "../../assets/images/Registration.png"; // Replace with your QR code image path
import qrCode2 from "../../assets/images/Academy.png"; // Replace with your QR code image path
import './Registration.css'

const QRSection = () => {
  return (
    <Container  className="my-5 text-center bg-black ">
      <Row className="justify-content-center">
        <h1 className="text-white mb-5">Registration</h1>
        {/* Column 1 */}
        <Col md={6} lg={5} className="mb-4">
          <h3 className="text-white">Academic Registration</h3>
          <img src={qrCode1} alt="QR Code 1" className="img-fluid" width="200" />
         
        </Col>

        {/* Column 2 */}
        <Col md={6} lg={5} className="mb-4">
          <h3 className="text-white">General Regitration</h3>
          <img src={qrCode2} alt="QR Code 2" className="img-fluid" width="200" />
        
        </Col>
      </Row>
    </Container>
  );
};

export default QRSection;

