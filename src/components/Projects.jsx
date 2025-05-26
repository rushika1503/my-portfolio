import './Projects.css';
import productPreviewCardImage from '../assets/product.jpg';
import bpcard from '../assets/bpCar.jpg';
import tgcard from '../assets/tgcard.jpg';
import results from '../assets/results.jpg';
import Lottie from 'lottie-react';
import walkingGirls from '../assets/girls.json';

const projects = [
  {
    title: 'Stats Preview Card',
    image: productPreviewCardImage,
    liveLink: 'https://rushika1503.github.io/Product-preview-card-component-FM/',
  },
  {
    title: 'Testimonial Grid Section',
    image: tgcard,
    liveLink: 'https://rushika1503.github.io/Testimonials-grid-section/',
  },
  {
    title: 'Blog Preview Card',
    image: bpcard,
    liveLink: 'https://rushika1503.github.io/blogPreviewCard_FM/',
  },
  {
    title: 'Results Summary',
    image: results,
    liveLink: 'https://rushika1503.github.io/resultSummary-FM/',
  },
];

export default function Projects() {
  return (
    <section className="frontend-projects-section" id="projects">
      <h3 className='section-title'>Frontend Projects</h3>
      <p className="section-subtext">Small UI challenges completed using HTML & CSS.</p>
      <div className="marquee-wrapper">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.liveLink}
              key={index}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.image} alt={project.title} />
            </a>
          ))}

          <div className="project-card">
            <Lottie
              animationData={walkingGirls}
              loop={true}
              className="walking-animation"
            />
          </div>
          <div className="project-card">
            <p className="soon-text">More Projects Coming Soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
