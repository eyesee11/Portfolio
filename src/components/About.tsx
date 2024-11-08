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
            src="https://picsum.photos/600/400"
            alt="About"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h3 className="mb-4">My Journey</h3>
          <p>
            With over 5 years of experience in web development, I specialize in
            creating responsive and user-friendly applications. My passion lies in
            solving complex problems and learning new technologies.
          </p>
          <div className="mt-4">
            <h4>Education</h4>
            <ul>
              <li>Bachelor's in Computer Science</li>
              <li>Full Stack Development Certification</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>Experience</h4>
            <ul>
              <li>Senior Developer at Tech Corp (2020-Present)</li>
              <li>Web Developer at Digital Solutions (2018-2020)</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;