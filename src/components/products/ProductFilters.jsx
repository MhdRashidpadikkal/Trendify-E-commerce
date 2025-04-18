import { handleFilterState, useCustomFilter, useFetchCategory } from '@/hooks';
import { Check, CircleX } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { PriceRangeSlider } from './PriceRangeSlider';
import RatingStars from '../common/Star';
import { useFilterContext } from '@/context/FilterContext';
import { productsBrands } from '@/data/brandMarqueeData';

const ProductFilters = () => {

   
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedRating, setSelectedRating] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);

    const { categories, loading } = useFetchCategory();
    
    const {state, dispatch} = useFilterContext();


    useEffect(() => {
       const filtered = useCustomFilter(state.allProducts, selectedCategory, state.priceRangeMax, state.priceRangeMin, selectedRating, selectedBrand )
       dispatch({type: 'FILTER_PRODUCTS', payload: filtered})
       dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
    
    }, [state.allProducts, selectedCategory, state.priceRangeMax, state.priceRangeMin, selectedRating, selectedBrand])


    return (

        <div className={`md:w-[20%] md:border-2 bg-white border-r-2 rounded-md ${state.isFilterBar ? "block" : "hidden"} md:block z-50 px-5 absolute left-0 top-0 md:relative py-3 ${!state.showAllCategories ? "h-[750px]" : "h-[1010px]"} `}>
            <CircleX onClick={() => dispatch({type:"HIDE_FILTER_BAR"})} className='absolute cursor-pointer right-2 md:hidden' />
            <h3 className='text-xs text-gray-400'>Filter by Category</h3>
            <ul className='mt-3'>
                {
                    categories.slice(0, !state.showAllCategories ? 8 : 27).map((item, index) => {

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
                                        className="hidden peer"
                                    />
                                    <div className="flex items-center justify-center w-4 h-4 transition-colors duration-200 bg-white border border-gray-300 rounded peer-checked:bg-green-500 peer-checked:border-green-600">
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
                    onClick={() => dispatch({type: "TOGGLE_ALL_CATEGORIES"})}
                >view {!state.showAllCategories ? "more" : "less"}</button>
            </ul>

            <h3 className='mt-4 mb-2 text-xs text-gray-400'>Price range</h3>
            <div>
                <PriceRangeSlider />
            </div>

            <h3 className='mt-4 mb-2 text-xs text-gray-400 '>Filter by rating</h3>
            {
                [1, 2, 3, 4, 5].map((i) => (
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            value={i}
                            checked={selectedRating.includes(`${i}`)}
                            onChange={(e) => handleFilterState(e, setSelectedRating)}
                            className="hidden peer"
                        />
                        <div className="flex items-center justify-center w-4 h-4 transition-colors duration-200 bg-white border border-gray-300 rounded peer-checked:bg-green-500 peer-checked:border-green-600">
                            <Check className="h-[20px] w-[17px] text-white  " />
                        </div>
                        <span className="text-sm"><RatingStars starData={i} /> </span>
                    </label>
                ))
            }

            <h3 className='mt-4 mb-2 text-xs text-gray-400 '>Filter by brand</h3>
            {
                productsBrands.map((item) => (
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            value={item}
                            checked={selectedBrand.includes(item)}
                            onChange={(e) => handleFilterState(e, setSelectedBrand)}
                            className="hidden peer"
                        />
                        <div className="flex items-center justify-center w-4 h-4 transition-colors duration-200 bg-white border border-gray-300 rounded peer-checked:bg-green-500 peer-checked:border-green-600">
                            <Check className="h-[20px] w-[17px] text-white  " />
                        </div>
                        <span className="text-sm">{item} </span>
                    </label>
                ))
            }


        </div>

    )
}

export default ProductFilters