import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react'

const FilterContext = createContext();

const initialState = {
    isFilterBar: false,
    showAllCategories: false,
    allProducts: [],
    priceRangeMax: 0,
    priceRangeMin: 0,
    filteredProducts: [],
    currentPage: 1
}

const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_FILTER_BAR':
            return { ...state, isFilterBar: true }
        case 'HIDE_FILTER_BAR':
            return { ...state, isFilterBar: false }
        case 'TOGGLE_ALL_CATEGORIES':
            return { ...state, showAllCategories: !state.showAllCategories }
        case 'SET_ALL_PRODUCTS':
            return { ...state, allProducts: action.payload }
        case 'SET_PRICE_RANGE':
            return { ...state, priceRangeMax: action.payload.max, priceRangeMin: action.payload.min }
        case 'FILTER_PRODUCTS':
            return { ...state, filteredProducts: action.payload }
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload }
        default:
            return state;
    }
}

export const FilterProvider = ({ children }) => {

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios('https://dummyjson.com/products?limit=194&skip=0')
                const data = response.data.products;
                dispatch({ type: 'SET_ALL_PRODUCTS', payload: data })
            } catch (err) {
                console.error(err);
            }
        }
        fetchProducts();
    }, [])

    const [state, dispatch] = useReducer(filterReducer, initialState);
    return (
        <FilterContext.Provider value={{ state, dispatch }} >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => useContext(FilterContext)