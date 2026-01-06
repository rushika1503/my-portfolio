import './Experience.css';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';

const experiences = [
   {
    company: 'Lotus Tech Services',
    title: 'Full Stack Engineer (AI Focus)',
    duration: 'Aug 2025 – Till Date',
    location: 'United States',
    highlights: [
      'Architected a secure health application using Next.js,React and TypeScript, achieving a 35% increase in page-load speeds. ',
      'Leveraged Python based AI APIs to perform automated data validation on uploaded medical files, ensuring 99.9% accuracy in document categorization.',
      'Engineered scalable Node.js file-upload pipelines and optimized MongoDB schemas to handle large-scale medical datasets with 100% integrity. ',
      'Orchestrated background tasks via AWS SNS/SQS, ensuring UI responsiveness during complex data validation.',
      'Automated the CI/CD lifecycle using GitHub Actions and Jenkins, reducing manual deployment effort by 50%. ',
      'Optimized system reliability & uptime to 99.9% by implementing robust error-handling and monitoring protocols. '
    ]
  },
  {
    company: 'Qentelli',
    title: 'Software Engineer',
    duration: 'Jun 2022 – May 2023',
    location: 'Hyderabad, Telangana, India',
    highlights: [
     'Spearheaded the development of a high-performance Vue.js SPA, achieving a 70% increase in system throughput. ',
'Implemented real-time monitoring flows via Socket.io to track CRUD operations, reducing critical incident response times by 80%. ',
'Launched a performance-analytics dashboard integrated with JMeter and Node.js, enabling real-time load testing and stability assessment under high-concurrency procurement loads. ',
'Developed interactive, data-intensive visualizations using APACHE ECharts, converting complex engineering datasets into actionable executive-level insights. ',
'Optimized Real User Experience (RUX) monitoring via custom scripts, resulting in a 90% boost in user engagement. ',
'Streamlined frontend-to-backend data flow by optimizing PostgreSQL queries and RESTful API consumption, reducing data retrieval latency by 40%.  '
    ]
  },
  {
    company: 'Accenture',
    title: 'Application Development Analyst',
    duration: 'Nov 2020 – Jun 2022',
    location: 'Hyderabad, Telangana, India',
    highlights: [
      'Specialized in the WaveMaker platform for 1.5+ years, building enterprise Insurance Policy portals and extending core functionality through custom Angular components and TypeScript modules.' ,
'Designed modular UI components with React for logistics and claims processing, utilizing RESTful APIs to improve data retrieval speeds by 30% for over 5,000 internal users. ',
'Containerized legacy services using Docker and automated unit testing via GitHub Actions, leading to a 35% reduction in production-level defect.',
'Ensured all UI/UX components met strict WCAG 2.1 accessibility and branding standards for global insurance clients.'
    ]
  },
  {
    company: 'Pramati Technologies',
    title: 'Development Intern',
    duration: 'Jan 2019 – Jun 2019',
    location: 'Hyderabad, Telangana, India',
    highlights: [
      'Rapidly developed web-based insurance policy prototypes using WaveMaker and JavaScript, streamlining the proof-of concept phase for new client acquisitions. ',
'Assisted in mapping & migrating legacy data structures into modern REST APIs, ensuring seamless data flow. ',
'Refined layouts using CSS3 & HTML5 Flexbox/Grid, improving cross-browser compatibility & user engagement by 15%.'
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
