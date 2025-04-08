import React from 'react'
import heroWomen from '../../assets/about/hero-women.png'

const Hero = () => {
  return (
    <div className='h-[450px] bg-gradient-to-r from-[#e5f5db] to-[#b6fca7] rounded-xl flex my-5 overflow-hidden p-10'>
      <div className='md:w-[50%] '>
          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Discover the Heart of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59A52C] to-[#9ce648] ">Trendify</span>
          </h2>

          <p className="mt-4 text-[20px] font-medium text-gray-600">
            At Tredify Store, we’re more than just a fashion destination. We're a lifestyle movement — bringing you trending styles, bold designs, and quality you can trust.
          </p>

          <p className="mt-5 text-md text-black w-[540px] border-2 border-black px-4 py-3 rounded-lg rounded-tr-[40px] rounded-bl-[40px] ">
            Founded with the vision of making style accessible and empowering individuality, Tredify bridges comfort and confidence in every collection.
          </p>

          <div className="mt-6">
            <button className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all">
              Explore Our Story
            </button>
          </div>
      </div>

      <div className='w-[50%] flex justify-center items-end h-[420px] '>
        <img src={heroWomen} alt="" className='w-[410px] ' />
      </div>
    </div>
  )
}

export default Hero