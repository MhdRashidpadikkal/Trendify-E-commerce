import React, { useEffect, useState } from 'react'
import clock from '../../assets/category/clock.png';
import watch from '../../assets/category/smart-watch.png';
import { ArrowRight } from 'lucide-react';

const OffersShowcase = () => {
    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60 + 30 * 60 + 15);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev > 0 ? prev - 1 : 0)
        }, 1000);

        return () => {clearInterval(timer)}
    }, [])

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
    }

  return (
    <div className='flex my-5 gap-5 flex-col md:flex-row md:gap-14'>
        <div className='flex h-[220px] justify-between items-center bg-[#fcf2ec] px-5 overflow-hidden rounded-md md:w-[50%]'>
            <div>
                <h2 className="text-xl font-bold xl:text-2xl 2xl:text-3xl">Deals & Promotions</h2>
                <p className="text-gray-600 text-[16px] xl:text-[20px] mt-1 2xl:text-[18px]">
                    Get the best deals before time runs out. Limited-time discounts!
                </p>
                
                <button className="mt-2 bg-[#111111] text-white text-[20px] font-semibold px-5 py-2 rounded-md border-2 border-black cursor-pointer transition flex items-center text-nowrap 2xl:font-bold 2xl:mt-4">
                    Shop Now <span className='w-[20px] h-[2px] bg-white relative left-1 ml-2'></span> <ArrowRight className="text-white " />
                </button>
            </div>
            <img src={clock} alt=""  width={250} className='relative left-[10%] ' />
        </div>
        <div className='flex h-[220px] justify-between items-center bg-[#fcf2ec] overflow-hidden rounded-md md:w-[50%]'>
            <div className="flex flex-col xl:items-center py-5 ml-5">
                <h2 className="text-xl font-bold text-[#111111] xl:text-2xl 2xl:text-3xl  ">Flash Sale – 50% OFF on Smartwatch</h2>
                <div className="text-[20px] font-bold text-[#ca3a3a] mt-2 xl:text-xl 2xl:text-2xl ">Ends in {formatTime(timeLeft)}</div>
                <p className="text-lg font-semibold text-green-500 ">
                    <span className="text-gray-500 line-through">₹1400.00</span> → <span className="text-gray-900 text-[22px]">₹699.00</span>
                </p>
                <button className="mt-2 text-black text-[18px] font-semibold px-5 py-2 rounded-md border-2 border-black cursor-pointer transition flex items-center text-nowrap 2xl:text-[18px] 2xl:font-bold 2xl:mt-4">
                    Grab the Deal <span className='w-[20px] h-[2px] bg-gray-700 relative left-1 ml-2'></span> <ArrowRight className="text-gray-700 " />
                </button>
            </div>
    
            <img src={watch} alt=""  className='relative left-[4%] w-[270px] 2xl:w-[300px] '/>
        </div>
    </div>
  )
}

export default OffersShowcase