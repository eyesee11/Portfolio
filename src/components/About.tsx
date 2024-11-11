import { Container, Row, Col } from 'react-bootstrap';

interface AboutProps {
  darkMode: boolean;
}

function About({ darkMode }: AboutProps) {
  return (
    <Container>
      <h2 className="text-center mb-5">About Me</h2>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="/src/assets/ayush.jpg"
            alt="About"
            className="img-fluid rounded-circle"
            style={{ width: '75%', borderRadius: '50%' }}
          />
        </Col>
        <Col md={6}>
          <h3 className="mb-4">My Journey</h3>
          <p>
            I specialize in creating responsive and user-friendly applications. My passion lies in
            solving complex problems and learning new technologies.
          </p>
          <div className="mt-4">
            <h4>Education</h4>
            <ul>
              <li>Pursuing Bachelor's in Computer Science</li>
              
            </ul>
          </div>
          <div className="mt-4">
            <h4>Experience</h4>
            <ul>
              <li>Web Developer for JBL brand company</li>
              <li>Hands on Experience with several AI/ML projects</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;