import React from 'react'
import subscribe from '../../assets/other/subscribe-men.png';
const Subscribe = () => {
  return (
    <div className='md:flex bg-[#dfe7fb] md:h-[450px] rounded-md my-5 '>
        <div className='md:w-[50%] flex flex-col justify-center items-start p-10 '>
            <p className='text-sm text-gray-400 font-semibold'>
                Get Discount 
            </p>
            <h3 className='text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bold uppercase'>Subscribe to our newsletter</h3>
            <p className='font-semibold text-[18px] text-gray-500 my-3'>
                Get the latest updates on new products and upcoming sales
            </p>
            <button className='border-2 border-black px-4 rounded-md cursor-pointer text-sm sm:text-[18px] lg:text-[20px] font-bold hover:bg-black transition-colors duration-800 ease-in-out  hover:text-white '>
                Subscribe
            </button>

        </div>
        <div className='md:w-[50%] '>
            <img src={subscribe} alt="" className='h-full w-[600px] ' />
        </div>
    </div>
  )
}

export default Subscribe