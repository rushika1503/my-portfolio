import './Experience.css';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';

const experiences = [
  {
    company: 'Qentelli',
    title: 'Software Engineer',
    duration: 'Jun 2022 – May 2023',
    location: 'Hyderabad, Telangana, India',
    highlights: [
      'Developed a responsive web application that improved system performance by 70% and reduced troubleshooting time by 50%.',
      'Analyzed procurement data with Node.js and JMeter, and visualized insights using Apache ECharts.',
      'Built a Vue.js load testing dashboard and implemented drag-and-drop using Vue-Draggable.',
      'Collaborated with backend engineers to optimize API efficiency and implemented Socket.io notification flows.',
      'Developed JavaScript automation that improved real user experience by 90%, using Vue.js and REST APIs.'
    ]
  },
  {
    company: 'Accenture',
    title: 'Application Development Analyst',
    duration: 'Jul 2021 – Jun 2022',
    location: 'Hyderabad, Telangana, India',
    highlights: [
      'Designed and implemented web pages using HTML5, CSS3, JavaScript, React.js, Redux, and SASS.',
      'Developed multiple frontend screens and reusable components using React.js and NPM packages.',
      'Implemented stable React components and used JEST for unit testing and debugging.',
      'Collaborated with business teams and project managers in an Agile Scrum environment.'
    ]
  },
  {
    company: 'Accenture',
    title: 'Software Engineer',
    duration: 'Nov 2020 – Jul 2021',
    location: 'Hyderabad, Telangana, India',
    highlights: [
      'Built dynamic UI screens using Wavemaker and JavaScript with HTML/CSS.',
      'Implemented secure login screens with validation and used MySQL queries for data handling.',
      'Tested APIs using Postman and managed JSON/XML data flows.'
    ]
  },
  {
    company: 'Pramati Technologies',
    title: 'Development Intern',
    duration: 'Jan 2019 – Jun 2019',
    location: 'Hyderabad, Telangana, India',
    highlights: [
      'Developed a library management system using C#, MySQL, HTML/CSS.',
      'Created dashboards with multi-level authentication and materialized views for procurement data.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="page-section">
      <h3 className="section-title">Professional Experience.</h3>
      <p className="section-subtext">Selected work I've taken in the past.</p>

      <div className="experience-summary-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-summary-section">
            <h3 className="experience-company">{exp.company}</h3>
            <p className="experience-summary-title">{exp.title}</p>
            <p className="experience-location">
              <FaMapMarkerAlt className="icon" />
              {exp.location} {' | '}
              <FaRegCalendarAlt className="icon calendar" />
              {exp.duration}
            </p>
            <ul className="experience-summary-list">
              {exp.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
