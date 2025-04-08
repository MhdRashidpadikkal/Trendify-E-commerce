import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'


const FeaturedProducts = () => {
    const [lastView, setLastView] = useState([])
    const [topProducts, setTopProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                
                setLastView(data.products.slice(20, 26))
                setTopProducts(data.products.slice(9, 15))
                
            }
            catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, [])

    console.log("lastviewed products : ", lastView)
    console.log("Top products : ", topProducts)
    
  return (
    <div>
        <ProductList data= {lastView} title="Last viewed" />
        <ProductList data= {topProducts} title="Top products" />

        

    </div>
  )
}

export default FeaturedProducts