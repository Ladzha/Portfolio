import React, {useState} from 'react'
import ProjectCard from '../components/ProjectCard'
import {ProjectsInfo} from '../data/ProjectInfo';

const Projects = (props) => {
  return (
    <div className='mainContainer'>
      <h2 className='title'>Projects</h2>
      <div className='projectBox'>
        {ProjectsInfo.map((project, index) => ( 
          <ProjectCard key={index} project={project}/>
        ))}
      </div>
    </div>
  )
};

export default Projects;