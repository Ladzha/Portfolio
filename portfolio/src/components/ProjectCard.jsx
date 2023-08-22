import React from 'react'
import Tool from './Tool'

const ProjectCard = (props) => {

  return (
    <div className='projectCard'>
        <p className='projectTitle'>{props.name}</p>
        <img src={props.image} alt={props.name} className='projectPreview'/>
        <p className='projectDetail'>{props.text}</p>
        <p ></p>
    </div>
  )
}

export default ProjectCard