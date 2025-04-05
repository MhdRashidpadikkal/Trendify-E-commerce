import React from 'react'
import her from '../assets/other/fashion-her.png'
import him from '../assets/other/fashion-him.png'
import handBag from '../assets/other/handbag.png';
import menShirt from '../assets/other/men-shirt.png';

import { ArrowRight, CircleChevronRight } from 'lucide-react'

const FashionStyle = () => {
  return (
    <div className='md:flex gap-3 h-[420px]'>
        <div className='md:w-[50%] flex bg-[#e7e8fd] my-10 rounded-md px-5 overflow-hidden '>
            <div className='pt-10 flex flex-col gap-2 pb-5'>
                <h2 className='text-2xl font-bold text-nowrap'>Comfy styles for her</h2>
                <p className='font-medium text-gray-600'>
                    From soft hoodies to cozy sweatpants, our comfy styles for her are designed to keep her
                </p>
                <button className='cursor-pointer text-[18px] flex items-center font-semibold text-gray-600  '>
                    See more <span className='w-[40px] h-[2px] bg-gray-600 relative left-3'></span> <ArrowRight fill='#4B5563' />
                </button>

                <div className='flex items-center mt-4'>
                    <img src={handBag} alt="" className='w-[25%]' />
                    <div className='ps-2'>
                        <h3 className='font-semibold text-[20px] text-nowrap'>Top Handbags</h3>
                        <p className='text-gray-600 font-semibold'>Big Sale 30% Off</p>
                    </div>
                    <CircleChevronRight className='ms-7 cursor-pointer' />
                </div>
            </div>
            <img src={her} alt="fashion her" className='w-[50%]' />
        </div>

        <div className='md:w-[50%] flex bg-[#fde7ed] my-10 rounded-md px-5 overflow-hidden '>
            <div className='pt-10 flex flex-col gap-2 pb-5'>
                <h2 className='text-2xl font-bold text-nowrap'>Comfy styles for him</h2>
                <p className='font-medium text-gray-600'>
                From casual shirts to stylish jeans, our comfy styles for him are designed to keep him
                </p>
                <button className='cursor-pointer text-[18px] flex items-center font-semibold text-gray-600  '>
                    See more <span className='w-[40px] h-[2px] bg-gray-600 relative left-3'></span> <ArrowRight fill='#4B5563' />
                </button>
                
                <div className='flex items-center mt-4'>
                    <img src={menShirt} alt="" className='w-[25%]' />
                    <div className='ps-2'>
                        <h3 className='font-semibold text-[20px] text-nowrap'>Checkered Shirt </h3>
                        <p className='text-gray-600 font-semibold'>Big Sale 30% Off</p>
                    </div>
                    <CircleChevronRight className='ms-7 cursor-pointer' />
                </div>
            </div>
            <img src={him} alt="fashion him" className='w-[50%]' />
        </div>



    </div>
  )
}

export default FashionStyle