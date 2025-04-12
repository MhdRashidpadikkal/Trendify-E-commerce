import { useFeatchGategory } from '@/hooks'
import { ArrowDownUp, Check, CircleX, SlidersHorizontal } from 'lucide-react';
import React, { useState } from 'react'
import { PriceRangeSlider } from './PriceRangeSlider';
import RatingStars from '../common/Star';


const ProductPage = () => {
    const { categories, loading } = useFeatchGategory();
    const [selectedGategory, setSelectedCategory] = useState([]);
    const [catListCount, setCatListCount] = useState(false);
    const [selectedRating, setSelectedRating] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [isFilterBar, setIsFilterBar] = useState(false);

    const handleCategoryChange = (e, hello) => {
        const { value, checked } = e.target;

        if (checked) {
            hello((prev) => [...prev, value]);
        } else {
            hello((prev) => prev.filter((cat) => cat !== value));
        }
    }

    const brands = [
        "Apple", "Samsung", "OPPO", "Gucci", "Adidas", "Canon", "Nike", "Dell"
    ];


    console.log("selectedCategories ", selectedGategory);
    console.log("selectedRating", selectedRating);

    return (
        <div className="flex flex-col h-[750px] my-5 border-2 md:border-0 ">
            <div className='flex justify-between px-4 mt-3 md:hidden'>
                <button
                    className='flex gap-1 items-center cursor-pointer'
                    onClick={() => setIsFilterBar(true)}> <SlidersHorizontal /> Filters</button>
                <button
                    className='flex gap-1 items-center cursor-pointer '
                ><ArrowDownUp /> Sort</button>
            </div>
            <div className='flex gap-3 relative' >
                <div className={`md:w-[20%] md:border-2 bg-white border-r-2 rounded-md ${isFilterBar ? "block" || "md:block" : "hidden"} px-5 absolute left-0 top-0 md:relative py-3 `}>
                    <CircleX onClick={() => setIsFilterBar(false)} className='absolute right-2 cursor-pointer md:hidden' />
                    <h3 className='text-xs text-gray-400'>Filter by Category</h3>
                    <ul className='mt-3'>
                        {
                            categories.slice(0, !catListCount ? 8 : 27).map((item, index) => {

                                const formatted = item
                                    .split(' ')
                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' ')

                                return (
                                    <li key={index}>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value={item}
                                                checked={selectedGategory.includes(item)}
                                                onChange={(e) => handleCategoryChange(e, setSelectedCategory)}
                                                className="peer hidden"
                                            />
                                            <div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-green-500 peer-checked:border-green-600 flex items-center justify-center transition-colors duration-200">
                                                <Check className="h-[20px] w-[17px] text-white  " />
                                            </div>
                                            <span className="text-sm">{formatted}</span>
                                        </label>
                                    </li>
                                )
                            })
                        }

                        <button
                            className='border cursor-pointer px-2 bg-gradient-to-r from-[#c3f1b1] to-[#70d413] text-sm rounded-sm font-medium mt-3 text-[#222020] '
                            onClick={() => setCatListCount((prev) => !prev)}
                        >view {!catListCount ? "more" : "less"}</button>
                    </ul>

                    <h3 className='text-xs text-gray-400 mt-4 mb-2'>Price range</h3>
                    <div>
                        <PriceRangeSlider />
                    </div>

                    <h3 className='text-xs text-gray-400 mt-4 mb-2 '>Filter by rating</h3>
                    {
                        [1, 2, 3, 4, 5].map((i) => (
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={i}
                                    checked={selectedRating.includes(`${i}`)}
                                    onChange={(e) => handleCategoryChange(e, setSelectedRating)}
                                    className="peer hidden"
                                />
                                <div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-green-500 peer-checked:border-green-600 flex items-center justify-center transition-colors duration-200">
                                    <Check className="h-[20px] w-[17px] text-white  " />
                                </div>
                                <span className="text-sm"><RatingStars starData={i} /> </span>
                            </label>
                        ))
                    }

                    <h3 className='text-xs text-gray-400 mt-4 mb-2 '>Filter by brand</h3>
                    {
                        brands.map((item) => (
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={item}
                                    checked={selectedBrand.includes(item)}
                                    onChange={(e) => handleCategoryChange(e, setSelectedBrand)}
                                    className="peer hidden"
                                />
                                <div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-green-500 peer-checked:border-green-600 flex items-center justify-center transition-colors duration-200">
                                    <Check className="h-[20px] w-[17px] text-white  " />
                                </div>
                                <span className="text-sm">{item} </span>
                            </label>
                        ))
                    }


                </div>
                <div className="w-[80%] md:border-2 rounded-md p-5 ">
                    products cards
                </div>
            </div>
        </div>
    )
}

export default ProductPage


