import React from 'react';
import { HashLink } from 'react-router-hash-link'
const About = () => {



  return (
    <div className='' id='about'>
        <h1 className='titleName'>Hi, I'm Alla</h1>
        <p className='welcomeText'>I'm a full stack developer with a background in graphic design and strong passion for coding, focused on creating attractive and user-friendly web applications. Skilled in creative problem-solving and meticulous attention to detail, I bring a unique combination of design and coding expertise.</p>
        <div className='row'>
        <a href="Alla_Nudelman_CV.pdf" download><button className='button'>Download CV</button></a>
        <button className='button'><HashLink smooth to='#contact'>Contact me</HashLink></button>
        </div>

    </div>
  )
}

export default About