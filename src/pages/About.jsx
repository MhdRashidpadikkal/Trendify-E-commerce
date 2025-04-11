import Hero from '@/components/about/Hero'
import WhoAre from '@/components/about/WhoAre'
import { OurTeam } from '@/components/aceternityUi/OurTeam'
import { TimelineDemo } from '@/components/aceternityUi/TimeLine'
import { UserReviews } from '@/components/aceternityUi/UserReviews'
import BrandMarquee from '@/components/common/BrandMarquee'
import React from 'react'

const About = () => {
  return (
    <div>
      <Hero />
      <WhoAre />
      <BrandMarquee />
      <TimelineDemo />
      <OurTeam />
      <UserReviews />
    </div>
  )
}

export default About
