import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Intro.css';
import { useState, useEffect } from 'react';

const messages = [
  "Hello, I'm Rushika Sirigadde!...",
  "Software developer...",
  "I love building web applications...",
  "Bridging design and code...",
  "Passionate about clean code...",
  "Creativity brought to life..."
];

export default function Intro() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
        if (displayedText === currentMessage) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayedText(currentMessage.slice(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }
      }
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentMessageIndex]);

  return (
   <section id="intro" className="page-section page-content intro-container">
      <div className="intro-inner">
        <p className="intro-main-line">Let's build massive &amp; quality projects together</p>
        <h1 className="intro-typewriter">
          <span>{displayedText}</span>
          <span className="blinking-cursor">|</span>
        </h1>
        <p className="intro-description">
          I am a software developer specialized in building unique and brilliant websites and mobile apps to meet the expectations of clients, employers and users. I am focused <span className="capitalize font-semibold text-blue-300">(following one course until success)</span> on building responsive front-end applications while consistently learning back-end technologies.
        </p>
        <div className="intro-socials">
          <a href="https://www.linkedin.com/in/rushika-sirigadde/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: '#0A66C2' }} /></a>
          <a href="https://github.com/rushika1503" target="_blank" rel="noopener noreferrer"><FaGithub style={{ color: '#222' }} /></a>
        </div>
      </div>
    </section>
  );
}