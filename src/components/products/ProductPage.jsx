
import { ArrowDownUp, SlidersHorizontal } from 'lucide-react';
import ProductFilters from './ProductFilters';
import { useFilterContext } from '@/context/FilterContext';
import Product from './Product';
import Pagination from './Pagination';


const ProductPage = () => {

    const { state,dispatch } = useFilterContext()

    const limit = 10;
    const totalPages = Math.ceil(state.filteredProducts.length / 10)

    const startIndex = (state.currentPage - 1) * limit;
    const endIndex = startIndex + limit;

    const products = state.filteredProducts.slice(startIndex, endIndex);

    return (
        <div className="flex flex-col my-5 border-2 md:border-0 ">
            <div className='flex justify-between px-4 mt-3 md:hidden'>
                <button
                    className='flex gap-1 items-center cursor-pointer'
                    onClick={() => dispatch({ type: "SHOW_FILTER_BAR" })}> <SlidersHorizontal /> Filters</button>
                <button
                    className='flex gap-1 items-center cursor-pointer '
                ><ArrowDownUp /> Sort</button>
            </div>
            <div className='flex gap-3 relative ' >

                <ProductFilters />

                <div className={`w-[80%] md:border-2 rounded-md p-5 ${!state.showAllCategories ? "  min-h-[950px]" : "min-h-[1010px]"} `}>
                    <h3 className='mb-5 font-medium'>{`${startIndex + 1} - ${startIndex + limit > state.filteredProducts.length ? state.filteredProducts.length : startIndex + limit}`} over <span className='bg-gradient-to-r from-[#437d21] to-[#6fca3a] bg-clip-text text-transparent '>{state.filteredProducts.length}</span> results</h3>

                    {
                        products.map((item, index) => (
                            <Product item={item} index={index} />
                        ))
                    }

                    {/* pagination button */}
                    <Pagination totalPages={totalPages} />

                </div>
            </div>
        </div>
    )
}

export default ProductPage


