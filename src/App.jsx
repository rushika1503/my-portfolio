import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx'
import Intro from './components/Intro.jsx'
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main>
     
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
