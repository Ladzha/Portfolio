import React from 'react';
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='mainContainer'>
        <h1 className='titleName'>Hi, I'm Alla</h1>
        <p className='welcomeText'>Motivated full stack developer with a background in graphic design and strong passion for coding, focused on creating attractive and user-friendly web applications. Skilled in creative problem-solving and meticulous attention to detail, I bring a unique combination of design and coding expertise.
</p>
        <button className='button'>Download CV</button>
        <button className='button'><NavLink to='/contact'>Contact me</NavLink></button>
    </div>
  )
}

export default About