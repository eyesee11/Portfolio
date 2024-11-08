import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { BsSun, BsMoon } from 'react-icons/bs';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
      <Navbar expand="lg" fixed="top" className={darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}>
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
              <Nav.Link as={Link} to="about" smooth={true} duration={500}>About</Nav.Link>
              <Nav.Link as={Link} to="skills" smooth={true} duration={500}>Skills</Nav.Link>
              <Nav.Link as={Link} to="projects" smooth={true} duration={500}>Projects</Nav.Link>
              <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact</Nav.Link>
            </Nav>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              aria-label="Toggle theme"
            >
              {darkMode ? <BsSun /> : <BsMoon />}
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section id="home"><Home darkMode={darkMode} /></section>
        <section id="about"><About darkMode={darkMode} /></section>
        <section id="skills"><Skills darkMode={darkMode} /></section>
        <section id="projects"><Projects darkMode={darkMode} /></section>
        <section id="contact"><Contact darkMode={darkMode} /></section>
      </main>
    </div>
  );
}

export default App;