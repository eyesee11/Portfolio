import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactProps {
  darkMode: boolean;
}

function Contact({ darkMode }: ContactProps) {
  return (
    <Container>
      <h2 className="text-center mb-5">Contact Me</h2>
      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <h3 className="mb-4">Get in Touch</h3>
          <div className="d-flex align-items-center mb-3">
            <FaEnvelope className="me-3" />
            <span>weaboo1164@gmail.com</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <FaPhone className="me-3" />
            <span>+91 89237 09367</span>
          </div>
          <div className="d-flex align-items-center">
            <FaMapMarkerAlt className="me-3" />
            <span>Rajpura,Punjab,India</span>
          </div>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>
            <Button 
              variant={darkMode ? 'light' : 'dark'} 
              type="submit"
            >
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;