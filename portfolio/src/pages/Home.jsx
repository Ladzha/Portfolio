import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className='mainContainer'>
        Home page
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home