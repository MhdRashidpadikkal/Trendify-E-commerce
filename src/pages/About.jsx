import Hero from '@/components/about/Hero'
import WhoAre from '@/components/about/WhoAre'
import { TimelineDemo } from '@/components/aceternityUi/TimeLine'
import BrandMarquee from '@/components/common/BrandMarquee'
import React from 'react'

const About = () => {
  return (
    <div>
      <Hero />
      <WhoAre />
      <BrandMarquee  />
      <TimelineDemo />
    </div>
  )
}

export default About