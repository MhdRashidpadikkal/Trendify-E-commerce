import Category from '@/components/Category'
import Hero from '@/components/Hero'
import OffersShowcase from '@/components/OffersShowcase'
import UserCarousel from '@/components/UserCarousel'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <UserCarousel />
      <Category />
      <OffersShowcase />
    </div>
  )
}

export default Home