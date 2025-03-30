import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { ShieldFillCheck, LightbulbFill, PeopleFill } from "react-bootstrap-icons";
import '../Features/Feautures.css';

const features = [
  {
    title: "Awareness",
    description: "Stay ahead with cybersecurity insights and trends.",
    icon: <LightbulbFill size={45} className="text-primary" />,
  },
  {
    title: "Resilience",
    description: "Build confidence to tackle cybersecurity challenges.",
    icon: <ShieldFillCheck size={45} className="text-success" />,
  },
  {
    title: "Leadership",
    description: "Step up and lead in the digital security space.",
    icon: <PeopleFill size={45} className="text-warning" />,
  },
];

const SheGuards2025 = () => {
  return (
    <Container fluid className="features-section text-white py-5">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4"
      >
        SHEGUARDS 2025 THEME
      </motion.h1>

      {/* Features Section */}
      <Row className="justify-content-center">
        {features.map((feature, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="w-100 d-flex justify-content-center"
            >
              <Card className="feature-card text-white text-center p-4 shadow-lg border-0">
                <Card.Body className="d-flex flex-column align-items-center">
                  {feature.icon}
                  <Card.Title className="mt-3">{feature.title}</Card.Title>
                  <Card.Text className="mt-2 para">{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SheGuards2025;



