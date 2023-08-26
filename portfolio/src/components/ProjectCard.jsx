import React from 'react'
import {Link} from 'react-router-dom'

const ProjectCard = ({project}) => {

  return (
    <div className='projectCard column'>
        <p className='projectTitle'>{project.title}</p>
        <Link to={project.github}> <img src={project.image} alt={project.title} className='projectPreview'/> </Link>
        <p className='projectDetail'>{project.description}</p>
        <p className='toolSet row'>
        {project.tools.map((tool, index) => (<div key={index} className='tool'>{tool}</div>))}
        </p>
    </div>
  )
}

export default ProjectCard