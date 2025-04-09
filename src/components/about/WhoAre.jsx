import React from 'react'
import whoWeAre from '../../assets/about/who-we-are.jpg'
import { BadgeCheck, Leaf, Package, Truck, Undo } from 'lucide-react'
const WhoAre = () => {
  return (
    <div className='md:flex lg:h-[450px] bg-gray-50 rounded-md px-10 my-5 py-5 '>
        <div className='flex flex-col justify-center md:w-[50%] md:order-2 '>
            <h2 className="text-[20px] sm:text-3xl xl:text-5xl font-bold mb-3">Who We Are</h2>
            <p className="text-md md:text-[20px] text-gray-600 max-w-xl">
            Trendify is more than an online store — we’re a lifestyle destination.  
            We blend fashion, technology, and everyday essentials into one bold, seamless experience.  
            Driven by design and powered by passion, we exist to simplify your choices and amplify your vibe.
            </p>

            <div className="h-[2px] bg-gradient-to-r from-[#b1eb2a] via-[#39c108] to-[#1b6002] w-[120px] mt-6 rounded-full"></div>
            <div className='flex my-4 gap-3'>
                <div className="flex items-center flex-col gap-2 bg-white shadow px-4 py-2 rounded-xl text-[11px] sm:text-sm text-gray-700 font-medium pb-5">
                    <Leaf className="sm:w-10 h-6 sm:h-10 text-green-500" />
                    <span className='text-nowrap '>Eco-Friendly</span> <span className='leading-0'>Packaging</span>
                </div>
                <div className="flex items-center flex-col gap-2 bg-white shadow px-4 py-2 rounded-xl text-[11px] sm:text-sm text-gray-700 font-medium pb-5">
                    <Truck className="sm:w-10 h-6 sm:h-10 text-indigo-500" />
                    <span className='text-nowrap'>Free Returns</span> <span className='leading-0'>in 7 Days</span>
                </div>
                <div className="flex items-center flex-col gap-2 bg-white shadow px-4 py-2 rounded-xl text-[11px] sm:text-sm text-gray-700 font-medium pb-5">
                    <BadgeCheck className="sm:w-10 h-6 sm:h-10 text-yellow-500" />
                    <span className='text-nowrap'>Trusted by</span> <span className='text-nowrap leading-0'>500+ Brands</span>
                </div>
            </div>
        </div>
        <div className='md:w-[50%] flex justify-center md:order-1 px-3 '>
            <img src={whoWeAre} alt="" className='object-cover w-[90%] md:w-[100%] lg:w-[80%] 2xl:w-[50%] h-full md:h-[90%] lg:h-full rounded-full' />
        </div>
    </div>
  )
}

export default WhoAre