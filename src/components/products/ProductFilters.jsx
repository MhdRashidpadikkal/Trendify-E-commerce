import { useFetchCategory } from '@/hooks';
import React from 'react'

const ProductFilters = () => {
    const { categories, loading } = useFetchCategory();
    return (
        <div>
            <div className={`md:w-[20%] md:border-2 bg-white border-r-2 rounded-md ${isFilterBar ? "block" : "hidden"} md:block px-5 absolute left-0 top-0 md:relative py-3 ${!catListCount ? "h-[750px]" : "h-[1010px]"} `}>
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
                                <li key={item}>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            value={item}
                                            checked={selectedCategory.includes(item)}
                                            onChange={(e) => handleFilterState(e, setSelectedCategory)}
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
                                onChange={(e) => handleFilterState(e, setSelectedRating)}
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
                                onChange={(e) => handleFilterState(e, setSelectedBrand)}
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
        </div>
    )
}

export default ProductFilters