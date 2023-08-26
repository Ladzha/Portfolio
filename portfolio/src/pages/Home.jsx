import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { HashLink } from 'react-router-hash-link'
import { GoHome } from "react-icons/go";



const Home = () => {
  return (
    <div className='mainContainer' id='home'>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <HashLink smooth to='#home'className='upIcon'><GoHome/></HashLink>
    </div>
  )
}

export default Home