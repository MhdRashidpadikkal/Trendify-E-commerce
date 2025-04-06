import Category from '@/components/Category'
import DeliveryAd from '@/components/DeliveryAd'
import FashionStyle from '@/components/FashionStyle'
import FeaturedProducts from '@/components/FeaturedProducts'
import Hero from '@/components/Hero'
import OffersShowcase from '@/components/OffersShowcase'
import Subscribe from '@/components/Subscribe'
import SuggestedProducts from '@/components/SuggestedProducts'
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
      <FashionStyle />
      <SuggestedProducts />
      <Subscribe />
    </div>
  )
}

export default Home