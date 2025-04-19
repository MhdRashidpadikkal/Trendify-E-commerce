import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'

const CartContext = createContext();

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    totalCarts: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, cartItems: [...state.cartItems, action.payload] }   
        case 'ADD_NEW_ITEM':
            return {...state, cartItems:[...state.cartItems, {...action.payload, quantity:1}]};
        case 'INCREASE_QUANTITY' : {
            return {...state, 
                cartItems: state.cartItems.map(cartItem => {
                   return (
                        cartItem.item.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
                    )
                }
                )
            }
        }
        case 'DECREASE_QUANTITY' : {
            return {...state,
                cartItems: state.cartItems.map(cartItem => 
                    cartItem.item.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
                 ) 
                 .filter(item => item.quantity > 0)
            }
        }
        case 'RESET_CART':
            return {...state, cartItems:[] }
        case 'ADD_FAVOURITE':
            return {...state, favorites: [...state.favorites, action.payload] }
        case 'REMOVE_FAVOURITE':
            return {...state, favorites: state.favorites.filter(fav => fav !== action.payload) }
        case 'TOTAL_CARTS':
            return {...state, totalCarts: action.payload}
        default:
            return state;
    };
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
        const totalCarts = state.cartItems.reduce((acc, item) => acc + item.quantity , 0);
        dispatch({type: "TOTAL_CARTS", payload: totalCarts})
    }, [state.cartItems, state.favorites])

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)