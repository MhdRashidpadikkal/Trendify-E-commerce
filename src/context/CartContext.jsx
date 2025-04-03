import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'

const CartContext = createContext();

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, cartItems: [...state.cartItems, action.payload] }   
        case 'ADD_FAVOURITE':
            return {...state, favorites: [...state.favorites, action.payload] }
        case 'REMOVE_FAVOURITE':
            return {...state, favorites: state.favorites.filter(fav => fav !== action.payload) }
        default:
            return state;
    };
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }, [state.cartItems, state.favorites])

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)