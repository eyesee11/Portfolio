import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

function Projects({ darkMode }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      title: 'Dating Website',
      description: 'A full-stack Dating website with React and Django',
      image: '/src/assets/Dating.png',
      github: 'https://github.com/eyesee11/GeekyMilan',
      demo: 'https://eyesee11.github.io/GeekyMilan/'
    },
    {
      title: 'Mini Music Player',
      description: 'A simple music player built with React',
      image: '/src/assets/music.png',
      github: 'https://github.com/eyesee11/music_player',
      demo: 'https://eyesee11.github.io/music_player/'
    },
    {
      title: 'IntelliSpeed',
      description: 'A portable speedometer for vehicles',
      image: 'https://portfolio-iamramanjot444-gmailcoms-projects.vercel.app/static/media/intel.02c8115ef6eb1ea8b375.png',
      github: 'https://github.com/eyesee11/IntelliSpeedr',
      demo: 'https://raman-0123.github.io/IntelliSpeed/'
    },
    {
      title: 'Calculator',
      description: 'A simple calculator built with React',
      image: '/src/assets/calc.png',
      github: 'https://github.com/eyesee11/calculator',
      demo: 'https://eyesee11.github.io/calculator/'
    },
    {
      title: 'QR Code Generator',
      description: 'A simple QR code generator built with HTML, CSS, and JavaScript',
      image: '/src/assets/QR.png',
      github: 'https://github.com/eyesee11/QR_generator',
      demo: 'https://eyesee11.github.io/QR_generator/'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= projects.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, projects.length - 3) : prevIndex - 3
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <Container className="position-relative">
      <h2 className="text-center mb-5">Projects</h2>
      
      <button 
        className={`slider-btn slider-btn-left ${darkMode ? 'slider-btn-dark' : ''}`}
        onClick={prevSlide}
        aria-label="Previous projects"
      >
        <FaChevronLeft />
      </button>

      <Row className="g-4">
        {visibleProjects.map((project, index) => (
          <Col key={index} md={4}>
            <Card className={`project-card ${darkMode ? 'project-card-dark' : ''}`}>
              <div className="project-image-container">
                <Card.Img variant="top" src={project.image} />
              </div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`project-link ${darkMode ? 'project-link-dark' : ''}`}
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`project-link ${darkMode ? 'project-link-dark' : ''}`}
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <button 
        className={`slider-btn slider-btn-right ${darkMode ? 'slider-btn-dark' : ''}`}
        onClick={nextSlide}
        aria-label="Next projects"
      >
        <FaChevronRight />
      </button>
    </Container>
  );
}

export default Projects;