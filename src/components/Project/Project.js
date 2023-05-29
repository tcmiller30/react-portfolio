import React from 'react'
import './project.css'

const Project = ({ name, github_url, deployed_url, img_src }) => {
  
  return (
    <div className='project-card d-flex flex-column align-items-center justify-content-between my-2'>
      <h4>{name}</h4>
      <img className='project-img' src={img_src} alt={name}></img>
      <div className='project-links'>
        <button className='btn'>
          <a href={github_url}>GitHub</a>
        </button>
        <button className='btn'>
          <a href={deployed_url}>View Project</a>
        </button>
    </div>
    </div>
  )
}

export default Project