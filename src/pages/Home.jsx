import Category from '@/components/Home/Category'
import DeliveryAd from '@/components/Home/DeliveryAd'
import FashionStyle from '@/components/Home/FashionStyle'
import FeaturedProducts from '@/components/Home/FeaturedProducts'
import Hero from '@/components/Home/Hero'
import OffersShowcase from '@/components/Home/OffersShowcase'
import Subscribe from '@/components/Home/Subscribe'
import SuggestedProducts from '@/components/Home/SuggestedProducts'
import UserCarousel from '@/components/Home/UserCarousel'
import React from 'react'
import BrandMarquee from '@/components/Home/BrandMarquee'

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
      <BrandMarquee />
      <SuggestedProducts />
      <Subscribe />
    </div>
  )
}

export default Home