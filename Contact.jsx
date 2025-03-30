import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { EnvelopeFill } from "react-bootstrap-icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "279f51ff-125b-44a2-b4cf-09d4718e742e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Container fluid className="py-5 text-white bg-dark">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>

        <Row className="g-4">
          {/* Contact Details */}
          <Col md={6} lg={4}>
            <h5><FaWhatsapp className="me-2" /> WhatsApp</h5>
            <p>+91 98765 43210</p>
            <h5><EnvelopeFill className="me-2" /> Email</h5>
            <p>support@sheguards.org</p>
          </Col>

          {/* Contact Form */}
          <Col md={6} lg={4}>
            <h5>Get in Touch</h5>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Your message" required />
              </Form.Group>

              
              <div className="button-container">
              <Button className="contact-button" variant="" type="submit">Submit</Button>
            </div>
            </Form>
            <span className="mt-3 d-block">{result}</span>
          </Col>

          {/* Social Media Links */}
          <Col md={12} lg={4} className="text-center">
            <h5>Follow Us</h5>
            <p>
              <a href="#" className="social-icon mx-2"><FaFacebook size={28} className="facebook" /></a>
              <a href="#" className="social-icon mx-2"><FaXTwitter size={28} className="twitter" /></a>
              <a href="#" className="social-icon mx-2 instagram-icon">
                <FaInstagram size={32} className="instagram-gradient" />
              </a>
              <a href="#" className="social-icon mx-2"><FaLinkedin size={28} className="linkedin" /></a>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;







