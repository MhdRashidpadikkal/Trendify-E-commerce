import Category from '@/components/Category'
import Hero from '@/components/Hero'
import UserCarousel from '@/components/UserCarousel'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <UserCarousel />
      <Category />
    </div>
  )
}

export default Home