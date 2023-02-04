import React from 'react'
import AchievementBar from '../components/AchievementBar'
import DonateBar from '../components/DonateBar'
import HeroMain from '../components/HeroMain'
import Mission from '../components/Mission'
import News from '../components/News'
import PictureBar from '../components/PictureBar'
import ScrollUp from '../components/ScrollUp'
import ShopBar from '../components/ShopBar'
import UpcomingCampaign from '../components/UpcomingCampaign'
import VolunteerBar from '../components/VolunteerBar'

const Home = () => {
  return (
    <div>
      <HeroMain />
      <DonateBar />
      <Mission />
      <News />
      <VolunteerBar />
      <AchievementBar />
      <ShopBar />
      <UpcomingCampaign />
      <PictureBar />
    </div>
  )
}

export default Home
