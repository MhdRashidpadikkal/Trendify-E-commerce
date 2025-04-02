import { ArrowRight, Heart } from 'lucide-react';
import React from 'react'

const ProductList = (props) => {
    const { data, title } = props;

  return (  
            
    <div className='my-10'>
        <div className='flex justify-between ps-4'>
            <h4 className='font-semibold text-[#59A52C;] '>{title}</h4>
            <button className='flex gap-1 cursor-pointer'>
                view more <ArrowRight />
            </button>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap sm:overflow-x-auto sm:overflow-hidden gap-4 p-4 no-scrollbar cursor-pointer ">
            {data.map((item, index) => (
                <div 
                    key={index}
                    className="w-[47%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xlw-[18%] h-[380px] 2xl:h-[400px] shrink-0 bg-gray-100 text-black p-6 text-center rounded-md overflow-hidden">
                    <img src={item.images[0]} alt={item.title} className='h-[55%]' />
                    <div className='flex flex-col items-start'>
                        <p className='text-gray-500'>{item.tags[0]}</p>
                        <h2 className="text-2xl font-bold text-black text-nowrap">{item.title}</h2>
                        <p className='text-nowrap'>star: {item.rating} <span className='text-sm text-gray-500'>{item.reviews.length} reviews</span></p>
                        <div className='flex justify-between w-full'>
                            <h3 className='text-[18px] sm:text-2xl font-semibold text-[#0bb40b] text-nowrap'>₹ {item.price * 4}</h3>
                            <button className='cursor-pointer'><Heart fill='red' stroke='red' /></button>
                        </div>
                        <button className='border border-black px-4 rounded-md font-semibold w-full mt-3 cursor-pointer py-1 sm:text-[18px] text-nowrap'>Add to cart</button>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default ProductList