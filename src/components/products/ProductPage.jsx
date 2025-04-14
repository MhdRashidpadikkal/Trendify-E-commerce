import { useFeatchGategory } from '@/hooks'
import { ArrowDownUp, Check, CircleX, SlidersHorizontal } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { PriceRangeSlider } from './PriceRangeSlider';
import RatingStars from '../common/Star';
import axios from 'axios';
import { getSmartPagination } from '@/utils/pagination';
import { formatPriceInINR } from '@/utils/currencyFormat';


const ProductPage = () => {
    const { categories, loading } = useFeatchGategory();
    const [selectedGategory, setSelectedCategory] = useState([]);
    const [catListCount, setCatListCount] = useState(false);
    const [selectedRating, setSelectedRating] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [isFilterBar, setIsFilterBar] = useState(false);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalproducts, setTotalProducts] = useState(0);
    const [paginationRange, setPaginationRange] = useState([]);

    const limit = 10;
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(totalproducts / limit)

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

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                const response = await axios(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
                const data = response.data.products;
                setProducts(data);
                console.log("total products count is ", response.data.total)
                setTotalProducts(response.data.total)
                const pagination = getSmartPagination(Math.ceil(response.data.total / limit), page);
                setPaginationRange(pagination);
            }
            
            catch (err) {
                console.log(err);
            }
        }

        fetchProducts()
    }, [page])


    console.log("getted products", products);
    console.log("pagination returned range", paginationRange);

    return (
        <div className="flex flex-col my-5 border-2 md:border-0 ">
            <div className='flex justify-between px-4 mt-3 md:hidden'>
                <button
                    className='flex gap-1 items-center cursor-pointer'
                    onClick={() => setIsFilterBar(true)}> <SlidersHorizontal /> Filters</button>
                <button
                    className='flex gap-1 items-center cursor-pointer '
                ><ArrowDownUp /> Sort</button>
            </div>
            <div className='flex gap-3 relative ' >
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
                <div className={`w-[80%] md:border-2 rounded-md p-5 ${!catListCount ? "  min-h-[950px]" : "min-h-[1010px]"} `}>
                    <h3 className='mb-5 font-medium'>{`${skip + 1} - ${skip + limit > totalproducts ? totalproducts : skip + limit}`} over <span className='bg-gradient-to-r from-[#437d21] to-[#6fca3a] bg-clip-text text-transparent '>{totalproducts}</span> results</h3>

                    {
                        products.map((item, index) => (
                            <div key={index} className='flex border-t border-b items-center'>
                                <div className='w-[35%]'>
                                    <img src={item.thumbnail} alt={item.title} />
                                </div>
                                <div className='w-[65%] py-3 '>
                                    <h2 className='md:text-2xl text-nowrap font-medium cursor-pointer hover:text-[#437d21] transition-all duration-300 '>{item.title}</h2>
                                    <p className='text-sm '>🏷️ {item.tags[0]}</p>
                                    <p className=' flex gap-2 text-nowrap items-end font-medium mt-2'>{item.rating} <RatingStars starData={item.rating} /> <span className='text-[#af8309a1] font-medium text-sm '> {index % 4 === 0 ? item.reviews.length * item.stock + 2 : (index % 3 === 0 ? item.reviews.length * item.stock + 3 : item.reviews.length + item.stock ) } reveiws </span> </p>
                                    <h5 className='text-sm text-gray-400 text-nowrap'>{20 * item.stock + index + 4}+ bought in past month </h5>
                                    <h2 className='md:text-3xl font-medium'><span className='md:text-[20px] '>₹</span> {formatPriceInINR(item.price)} </h2>
                                    <h5 className='text-sm hidden md:flex'>{item.description}</h5>
                                    <button className='bg-[#ffd900] px-4 mt-3 rounded-md font-medium text-sm py-1 text-[#111111] cursor-pointer '>Add to cart</button>
                                </div>
                            </div>
                        ))
                    }

                    {/* pagination button */}
                    <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-3 pt-3'>
                        <button
                         disabled={page === 1}
                         className=' bg-[#2a2a2a] h-[30px] px-3 rounded-md text-white cursor-pointer disabled:opacity-80 disabled:text-white/40 font-medium '
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}>prev</button>

                        {
                            paginationRange?.map((item, index) => {

                                if (item === "...") {
                                    return (
                                        <span key={`dots-${index}`} className="px-3 py-2 text-gray-500">
                                            ...
                                        </span>
                                    )
                                }

                                return (
                                    <button
                                        key={item}
                                        onClick={() => setPage(item)}
                                        className={`h-[27px] ${(item == 2 || item == totalPages - 1 ) && "hidden md:flex"} px-3 rounded font-medium cursor-pointer bg-gradient-to-r from-[#437d21] to-[#6fca3a]  ${page === item ? ' text-white' : 'bg-gray-200 from-[#437d21]/50 to-[#6fca3a]/50  '
                                            }`}
                                    >
                                        {item}
                                    </button>
                                )

                            })
                        }
                        <button 
                         disabled={page === totalPages}
                         className=' bg-[#2a2a2a] h-[30px] px-3 rounded-md text-white cursor-pointer disabled:opacity-80 disabled:text-white/40 font-medium'
                        onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}>next</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductPage


