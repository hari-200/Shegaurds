import React from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import "./Faq.css"; // Ensure CSS is properly imported

const FAQ = () => {
  return (
    <Container fluid className="faq-container bg-black">
      <h2 className="text-center fw-bold mb-4 title text-white">
        More about SHEGUARDS 2025 [FAQ]
      </h2>

      <Row className="justify-content-center faq-pos">
        {/* First Column */}
        <Col xs={12} sm={6} lg={4} className="faq-col">
          <Card className="faq-card p-3 ">
            <Accordion >
              <Accordion.Item eventKey="0" className="bg">
                <Accordion.Header className="accord" >Duration </Accordion.Header>
                <Accordion.Body>
                  100% online for 6 Weeks <i>(5pm to 6pm on alternate days)</i>,
                  starting from the 2nd week of April to the end of May 2025. Offline recordings will be available if a session is missed.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>

          <Card className="faq-card p-3">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>areas?</Accordion.Header>
                <Accordion.Body>
                  Women empowerment, especially focusing on Technology (AI, Cloud & Cybersecurity), Entrepreneurship, and Networking.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
        </Col>

        {/* Second Column */}
        <Col xs={12} sm={6} lg={4} className="faq-col">
          <Card className="faq-card p-3">
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Cost?</Accordion.Header>
                <Accordion.Body>
                  This program is 100% free of cost. Absolutely no cost for enrollment & participation.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>

          <Card className="faq-card p-3">
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>participate?</Accordion.Header>
                <Accordion.Body>
                  Students, Academicians, Working women, Entrepreneurs / Self-employed, Job-seekers, Women in career breaks; in short, open for all women.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
        </Col>

        {/* Third Column */}
        <Col xs={12} lg={4} className="faq-col">
          <Card className="faq-card p-3">
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Geography?</Accordion.Header>
                <Accordion.Body>
                  This program is not limited to any geographical boundary. Global audiences are welcome.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
          <Card className="faq-card p-3">
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Outcomes?</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>🛠 Hands-on experience in AI, Cloud & Cybersecurity.</li>
                    <li>🚀 Career opportunities through networking & mentorship.</li>
                    <li>📜 Certification upon successful completion.</li>
                    <li>💡 Exposure to industry experts and leadership training.</li>
                    <li>🌍 Build a strong community of women professionals.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;







