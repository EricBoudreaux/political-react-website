import React from 'react'
import Hero from '../components/Hero'
import AboutMission from '../components/AboutMission'
import Skills from '../components/Skills'
import VolunteerBar from '../components/VolunteerBar'
import UpcomingCampaign from '../components/UpcomingCampaign'

const About = () => {



  return (
    <div>
      <Hero 
      heroTitle='THE PROSPERITY BEGINS TODAY'
      heroSubTitle='Candidates 2022'
      heroImage='https://assets.website-files.com/62924709f48353c6d6d6a5b9/62ab356d9e309016fd863f86_banner%20about%20us%20(1).jpg'
      />
      <AboutMission />
      <Skills />
      <VolunteerBar />
      <UpcomingCampaign />
    </div>
  )
}

export default About