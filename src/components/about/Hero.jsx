import React from 'react'
import heroWomen from '../../assets/about/hero-women.png'
import { ShoppingBag, Users } from 'lucide-react'
import RatingStars from '../common/Star'

const Hero = () => {
  return (
    <div className='h-[695px] sm:h-[850px] lg:h-[450px] bg-gradient-to-r from-[#e5f5db] to-[#b6fca7] rounded-xl lg:flex my-5 overflow-hidden p-10'>
      <div className='lg:w-[50%] relative '>
          <h2 className="text-[20px] sm:text-3xl xl:text-5xl font-bold leading-tight text-gray-900 text-nowrap">
            Discover the Heart of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59A52C] to-[#9ce648] ">Trendify</span>
          </h2>

          <p className="mt-4 sm:text-[20px] font-medium text-gray-600">
            At Tredify Store, we’re more than just a fashion destination. We're a lifestyle movement — bringing you trending styles, bold designs, and quality you can trust.
          </p>

          <div className='bg-white/60  px-7 py-5 rounded-lg lg:w-[450px] mt-5  ' >
            <p className="italic text-md text-black sm:font-semibold sm:text-[20px] ">
            <span className='font-bold relative bottom-1'>“ </span>Tredify isn’t just a store — it’s your space to express style, tech, and lifestyle in one place. <span className='font-bold'>”</span>
            </p>
          </div>

          <div className="mt-6">
            <button className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all cursor-pointer">
              Explore Our Story
            </button>
          </div>

          
      </div>

      <div className='lg:w-[50%] flex justify-center items-end lg:h-[420px] w-full relative '>

        <div className='bg-white absolute top-[50%] sm:top-[40%] left-0 md:left-[4%] xl:left-[22%] px-4 sm:px-10 rounded-2xl py-3 cursor-pointer z-40 '>
          <h3 className="md:text-3xl font-bold text-[#4c9125] flex justify-center items-center gap-3"> <Users fill='#4c9125' stroke='#4c9125' /> 25K+</h3>
          <p className='sm:text-[18px] font-medium '>Satisfied Customers</p>
        </div>

        <div className='bg-[#ffffff] absolute top-[20%] left-[69%] sm:top-[28%] md:left-[65%] px-5 rounded-2xl py-3 cursor-pointer z-20 '>
          <h3 className="md:text-2xl font-bold text-[#a854d8] flex items-center md:justify-center gap-2  "> <ShoppingBag stroke='#a854d8' /> 1.2M+</h3>
          <p className='text-[14px] sm:text-[18px] font-medium text-nowrap '>Products Sold</p>
        </div>

        <div className='bg-[#ffffff] absolute top-[74%] left-[65%] sm:top-[78%] sm:left-[70%] md:left-[55%] px-2 sm:px-5 rounded-2xl py-3 cursor-pointer z-40'>
          <RatingStars starData={4.5} />
          <p className='sm:text-[18px] font-medium text-nowrap '>Customer Rating</p>
        </div>

        <img src={heroWomen} alt="" className='lg:w-[410px] z-30  ' />
      </div>

    </div>
  )
}

export default Hero