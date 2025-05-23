import './Nav.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        document.body.style.backgroundColor = isDark ? 'rgb(7,13,25)' : 'white';
        document.body.style.color = isDark ? '#f5f5f5' : 'black';
        document.documentElement.style.color = isDark ? '#f5f5f5' : 'black';
        if (isDark) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isDark]);

    return (
        <header className="header">
            <div className="header__logo">
                <a href="#intro" className="navbar-brand" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
                    <h1>Rushika </h1>
                </a>
            </div>
            <nav className="header__nav">
                <ul className="navbar-nav d-flex flex-row me-auto">
                    {/* Add more <Link> components for other routes when you create them */}
                    <li><a href="#about" onClick={e => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}>ABOUT</a></li>
                    <li><a href="#skills" onClick={e => { e.preventDefault(); document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }); }}>SKILLS</a></li>
                    <li><a href="#experience" onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>EXPERIENCE</a></li>
                    <li><a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>PROJECTS</a></li>
                    <li><a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>CONTACT</a></li>
                    {/* <li><a href="#faq" onClick={e => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>FAQ'S</a></li> */}
                    <li>
                        <a href="#theme" onClick={e => { e.preventDefault(); setIsDark(v => !v); }}>
                            <i className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}