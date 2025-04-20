import Pagination from '@/components/products/Pagination';
import Product from '@/components/products/Product';
import { useFilterContext } from '@/context/FilterContext';
import React from 'react'
import { useParams } from 'react-router-dom'

const SearchedProducts = () => {
  const params = useParams()
  const { keyword } = params;
  const { state } = useFilterContext()

  const keywords = keyword.split(" ")
  const searchedProducts = state.allProducts.filter(product =>
    keywords.some(key => product.description.toLowerCase().includes(key.toLowerCase())))

  const limit = 10;
  const totalPages = Math.ceil(searchedProducts.length / 10)

  const startIndex = (state.currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const products = searchedProducts.slice(startIndex, endIndex);

  return (
    <div>
      <div className={` md:border-2 rounded-md p-5  `}>
        <h3 className='mb-5 font-medium'>{`${startIndex + 1} - ${startIndex + limit > searchedProducts.length ? searchedProducts.length : startIndex + limit}`} of <span className='bg-gradient-to-r from-[#437d21] to-[#6fca3a] bg-clip-text text-transparent '>{searchedProducts.length}</span> results for <span className='font-medium text-[green] '>"{keyword}"</span></h3>

        {
          products.map((item, index) => (
            <Product item={item} index={index} />
          ))
        }

        {/* pagination button */}
        <Pagination totalPages={totalPages} />

      </div>
    </div>
  )
}

export default SearchedProducts