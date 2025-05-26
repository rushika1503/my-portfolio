import React, { useState } from 'react';
import './About.css';
import profileImg from '../assets/profile.jpeg'; // Replace with your actual image path

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const shortText = [
    `👋Hello! I'm Rushika Sirigadde, a passionate frontend and full stack developer with 4 years of professional experience and a recent graduate in Master’s in Information Studies. With hands-on experience building responsive and accessible web apps, I love creating user-centric designs.`,
  ];

  const fullText = [
    ...shortText,
    `💪 I specialize in HTML, CSS, JavaScript, React.js, Vue.js, Node.js, MongoDB, SQL, REST APIs, Tailwind CSS, and Git. I also use Figma for UI/UX design and am currently learning Python, backend development, and Next.js.`,
    `📚 I believe in continuous learning and growth. My portfolio reflects this journey—from UI challenges to full-stack projects like a Cloud-Based Task Management System and a Finance Tracker.`,
    `🤝 I'm excited about building meaningful apps, collaborating with diverse teams, and pushing creative boundaries. Thanks for stopping by! 🚀 Peace out! ✌️`,
  ];

  const content = readMore ? fullText : shortText;

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Text Block */}
        <div className="about-text">
          <h3 className='section-title-h3'>About Me</h3>
          {content.map((paragraph, index) => (
            <p key={index} className="about-paragraph">{paragraph}</p>
          ))}
          <button className="toggle-button" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Image Block */}
        <div className="about-image-wrapper">
          <img src={profileImg} alt="Rushika Sirigadde" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
