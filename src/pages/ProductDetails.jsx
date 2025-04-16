import DetailPage from '@/components/productDetails/DetailPage'
import { useFilterContext } from '@/context/FilterContext'
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const params = useParams()

    const {state} = useFilterContext()
    const {allProducts} = state

    const currentProduct = allProducts.find(item => item.id === Number(params.id))

    console.log("all products in detail page", currentProduct)
  return (
    <div>
     
      <DetailPage currentProduct={currentProduct} />
    </div>
  )
}

export default ProductDetails