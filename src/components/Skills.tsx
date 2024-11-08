import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNode, FaDatabase, FaGitAlt, FaDocker 
} from 'react-icons/fa';

interface SkillsProps {
  darkMode: boolean;
}

function Skills({ darkMode }: SkillsProps) {
  const skills = [
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaReact, name: 'React' },
    { icon: FaNode, name: 'Node.js' },
    { icon: FaDatabase, name: 'Databases' },
    { icon: FaGitAlt, name: 'Git' },
    { icon: FaDocker, name: 'Docker' },
  ];

  return (
    <Container>
      <h2 className="text-center mb-5">Skills</h2>
      <Row className="g-4">
        {skills.map((skill, index) => (
          <Col key={index} xs={6} md={3}>
            <div className="text-center">
              <skill.icon className="skill-icon" size={50} />
              <h5 className="mt-3">{skill.name}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;