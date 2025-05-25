import './Nav.css';
import React, { useState, useEffect } from 'react';

export default function Nav() {
    const [isDark, setIsDark] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = isDark ? 'rgb(7,13,25)' : 'white';
        document.body.style.color = isDark ? '#f5f5f5' : 'black';
        document.documentElement.style.color = isDark ? '#f5f5f5' : 'black';

        document.body.classList.toggle('dark-mode', isDark);
        document.body.classList.toggle('light-mode', !isDark);
    }, [isDark]);

    const scrollToSection = (id) => {
        setIsMenuOpen(false); // close mobile menu
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>
                        <h1>Rushika</h1>
                    </a>
                </div>

                <div className="hamburger" onClick={() => setIsMenuOpen(prev => !prev)}>
                    <i className="fa-solid fa-bars"></i>
                </div>

                <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a onClick={() => scrollToSection('about')}>ABOUT</a></li>
                        <li><a onClick={() => scrollToSection('skills')}>SKILLS</a></li>
                        <li><a onClick={() => scrollToSection('experience')}>EXPERIENCE</a></li>
                        <li><a onClick={() => scrollToSection('projects')}>PROJECTS</a></li>
                        <li><a onClick={() => scrollToSection('contact')}>CONTACT</a></li>
                        <li>
                            <a onClick={() => setIsDark(v => !v)}>
                                <i className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
