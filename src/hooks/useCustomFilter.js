import { formatPriceInINR } from "@/utils/currencyFormat";


export const useCustomFilter = (products, categories, priceRangeMax, priceRangeMin, ratings, brands ) => {

    const numericRatings = ratings.map(Number)

    const matchedCategories = products.filter(product => categories.includes(product.category) && product.category !== "")
    
    const matchedPrice = (matchedCategories.length > 0 ? matchedCategories : products)
        .filter(product => {
            const price = formatPriceInINR(product.price)
            if (priceRangeMax === formatPriceInINR(1000) && priceRangeMin === formatPriceInINR(0)) {
                return product
            } else if (priceRangeMax === formatPriceInINR(1000)) {
                return price >= priceRangeMin
            }else {
                return price >= priceRangeMin && price <= priceRangeMax
            }  
        })
            
    const matchedRatings = (matchedPrice.length > 0 ? matchedPrice : (matchedCategories.length > 0 ? matchedCategories : products)).filter( product => numericRatings.includes(Math.floor(product.rating) ))
    const matchedBrands = (matchedRatings.length > 0 ? matchedRatings : matchedPrice.length > 0 ? matchedPrice : (matchedCategories.length > 0 ? matchedCategories : products) ).filter(product => brands.includes(product.brand))

    console.log("products", products)
    console.log("matchedCategories", matchedCategories)
    console.log("matchedPrice", matchedPrice)
    return (
        matchedBrands.length > 0 ? matchedBrands : matchedRatings.length > 0 ? matchedRatings : matchedPrice.length > 0 ? matchedPrice : matchedCategories.length > 0 ? matchedCategories : products
    )

}
