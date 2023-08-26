import React, {useState} from 'react'
import ProjectCard from '../components/ProjectCard'
import {ProjectsInfo} from '../data/ProjectInfo';

const Projects = (props) => {
  return (
    <div className='row' id='projects'>
      <h2 className='title'>Projects</h2>
      <div className='projectBox row'>
        {ProjectsInfo.map((project, index) => ( 
          <ProjectCard key={index} project={project}/>
        ))}
      </div>
    </div>
  )
};

export default Projects;