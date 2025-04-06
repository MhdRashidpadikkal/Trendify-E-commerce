import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

const SuggestedProducts = () => {
    const [suggestedProducts, setSuggestedProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/products');
                setSuggestedProducts(res.data.products.slice(0, 9));    
            }catch (err) {
                console.log(err)
            }
        };

        fetchProducts();
    }, [])

    
  return (
    <div>
        <ProductList data={suggestedProducts} title="Top Beauty Picks You’ll Love" />
    </div>
  )
}

export default SuggestedProducts