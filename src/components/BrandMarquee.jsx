import React from 'react'
import { motion } from 'framer-motion'
import { lowerMarquee, upperMarquee } from '@/data/brandMarqueeData';

const BrandMarquee = () => {
    
  return (
    <div className=' '>
        <h3 className='font-semibold mb-3 text-[#487e28] '>
            Trusted by top brands
        </h3>
        <div className=' mx-auto bg-gradient-to-r from-[#487e28] to-[#0d1a0a] overflow-x-hidden rounded-md'>
            <div className='flex MyGradient'>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="flex flex-shrink-0"
                >
                    {upperMarquee.map((image, index) => {
                    return <img className="h-20 w-36 sm:w-46 pr-10 sm:pr-20" src={image} key={index} />;
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="flex flex-shrink-0"
                >
                    {upperMarquee.map((image, index) => {
                    return <img className="h-20 w-36 sm:w-46 pr-10 sm:pr-20" src={image} key={index} />;
                    })}
                </motion.div>
            </div>

            <div className='flex MyGradient'>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="flex flex-shrink-0"
                >
                    {lowerMarquee.map((image, index) => {
                    return <img className="h-20 w-36 sm:w-46 pr-10 sm:pr-20" src={image} key={index} />;
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="flex flex-shrink-0"
                >
                    {lowerMarquee.map((image, index) => {
                    return <img className="h-20 w-36 sm:w-46 pr-10 sm:pr-20" src={image} key={index} />;
                    })}
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default BrandMarquee