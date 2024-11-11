import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

interface HomeProps {
  darkMode: boolean;
}

function Home({ darkMode }: HomeProps) {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="display-4 mb-4">Hi, I'm Ayush Chauhan</h1>
          <h2 className="h3 mb-4">Freelancer and aspiring Full Stack Developer</h2>
          <p className="lead mb-4">
            I create beautiful and functional websites with modern technologies.
          </p>
          <Button
            as={Link}
            to="contact"
            smooth={true}
            duration={500}
            variant={darkMode ? 'outline-light' : 'outline-dark'}
            className="me-3"
          >
            Contact Me
          </Button>
          <Button
            as={Link}
            to="projects"
            smooth={true}
            duration={500}
            variant={darkMode ? 'light' : 'dark'}
          >
            View Projects
          </Button>
        </Col>
        <Col md={6}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHbdf5Pu5Zl8KwlSzTjVatJZv-FUyUULrKg&s"
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;