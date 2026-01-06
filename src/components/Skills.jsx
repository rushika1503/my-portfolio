import './skill.css';

export default function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Vue.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'Python',
    'Java',
    'Git & GitHub',
    'Tailwind CSS',
    'Bootstrap',
    'REST APIs',
    'Figma',
    'Jest',
    'AWS Basics',
  ];

  const learning = ['Python (Advanced)', 'JavaScript Backend', 'Next.js'];

  return (
    <section id="skills" className="skills-section">
      <h3 className='section-title'>My Skills</h3>
      <p className="skills-subtext">Technologies & tools I’ve worked with</p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>

      {/* <h5 className="learning-heading">Currently Learning</h5>
      <div className="skills-grid">
        {learning.map((item, index) => (
          <div className="skill-card learning-card" key={index}>
            {item}
          </div>
        ))}
      </div> */}
    </section>
  );
}
