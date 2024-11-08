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
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      image: 'https://picsum.photos/400/300?random=1',
      github: 'https://github.com/username/ecommerce',
      demo: 'https://ecommerce-demo.com'
    },
    {
      title: 'Social Media App',
      description: 'Real-time social platform using Socket.io and React',
      image: 'https://picsum.photos/400/300?random=2',
      github: 'https://github.com/username/social-media',
      demo: 'https://social-demo.com'
    },
    {
      title: 'Task Management',
      description: 'Productivity app with drag-and-drop interface',
      image: 'https://picsum.photos/400/300?random=3',
      github: 'https://github.com/username/task-manager',
      demo: 'https://task-demo.com'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with React and Bootstrap',
      image: 'https://picsum.photos/400/300?random=4',
      github: 'https://github.com/username/portfolio',
      demo: 'https://portfolio-demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application',
      image: 'https://picsum.photos/400/300?random=5',
      github: 'https://github.com/username/weather',
      demo: 'https://weather-demo.com'
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