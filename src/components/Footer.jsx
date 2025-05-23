import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#487e28] to-[#0d1a0a] p-10 flex flex-col gap-8 rounded-md'>
        
        <div className='flex flex-wrap lg:flex-nowrap gap-5 justify-around text-[16px] md:text-xl text-white my-10 text-nowrap'>
            <div className='w-[40%] md:[25%] lg:w-auto '>
                <p className='cursor-pointer'>Contact us</p>
                <p className='cursor-pointer'>About us</p>
                <p className='cursor-pointer'>Press</p>
                <p className='cursor-pointer'>Help</p>
            </div>
            <div className='w-[40%] md:[25%] lg:w-auto '>
                <p className='cursor-pointer'>Privacy policy</p>
                <p className='cursor-pointer'>Terms of service</p>
                <p className='cursor-pointer'>Refund policy</p>
                <p className='cursor-pointer'>Shipping policy</p>
                <p className='cursor-pointer'>Return policy</p>
            </div>
            <div className='w-[40%] md:[25%] lg:w-auto '>
                <p className='cursor-pointer'>FAQ</p>
                <p className='cursor-pointer'>Shipping</p>
                <p className='cursor-pointer'>Returns</p>
                <p className='cursor-pointer'>Exchanges</p>
                <p className='cursor-pointer'>Warranty</p>
            </div>
            <div className='w-[40%] md:[25%] lg:w-auto'>
                <p className='text-white sm:font-bold'>Payment methods</p>
                <p className='cursor-pointer'>Credit cards</p>
                <p className='cursor-pointer'>PayPal</p>
                
                <p className='cursor-pointer'>Apple Pay</p>
                <p className='cursor-pointer' >Google Pay</p>
            </div>
            <div className='flex flex-col gap-4 w-full sm:ps-5 lg:ps-0 lg:w-auto '>
                <div>
                    <p className='text-white text-2xl'>Subscribe to our newsletter</p>
                    <input
                     className='border-2 px-4 rounded-md py-1 mt-3 w-[210px] sm:w-[400px] lg:w-[220px] 2xl:w-[400px] text-white'
                     type="email" placeholder="Enter your email" />
                    <button className='ms-2 border px-3 text-sm py-[6px] sm:py-1 sm:px-3 lg:px-2 2xl:px-2 sm:text-[18px] rounded-md bg-white text-black cursor-pointer sm:font-semibold'>Subscribe</button>
                </div>
                <div>
                    <p className='text-white'>Follow us on social media</p>
                    <div className='flex gap-2 text-white mt-1 '>
                        <p className='cursor-pointer'><Facebook /></p>
                        <p className='cursor-pointer'><Instagram /></p>
                        <p className='cursor-pointer'><Twitter /></p>
                        <p className='cursor-pointer'><Linkedin /></p>
                    </div>
                </div>
            </div>
        </div>

        <div className='text-gray-400 text-center font-semibold'>
        <p>
            &copy; 2025 <span className='text-[#59A52C] '>Trendify</span>. All rights reserved.
        </p>
            
            <p>Terms of service</p>
        </div>
    
    </div>
  )
}

export default Footer