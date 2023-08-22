import React, {useState} from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    const [projects, setProjects] = useState([])
  return (
    <div className='mainContainer'>
        <h2 className='title'>Projects</h2>
        <div className='projectBox'>
            {projects.map((project, index) => ( 
                <ProjectCard key={index} projects={projects}/>
            ))}
        </div>

    </div>
  )
};

export default Projects;