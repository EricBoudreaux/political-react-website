import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Gallery = () => {
  return (
    <div>
      <Hero 
        heroTitle='GOVERNMENT AND POLITICS GALLERY'
        heroImage='https://assets.website-files.com/62924709f48353c6d6d6a5b9/62ab38e71c15f94e118cd4a3_banner%20image%2001.jpg'
      />
      <Projects />
    </div>
  )
}

export default Gallery
