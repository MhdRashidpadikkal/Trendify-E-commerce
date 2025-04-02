import Category from '@/components/Category'
import DeliveryAd from '@/components/DeliveryAd'
import FeaturedProducts from '@/components/FeaturedProducts'
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
      <DeliveryAd />
      <FeaturedProducts />
    </div>
  )
}

export default Home