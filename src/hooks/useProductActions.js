import { useCartContext } from "@/context/CartContext"
import { useState } from "react"

export const useProductActions = () => {

    const { state, dispatch } = useCartContext()

    const [messageState, setMessageState] = useState({
        show: false,
        message: '',
        itemId: null,
    })

    const handleInfoMessage = (itemId, message) => {
        setMessageState({ show: true, message, itemId })
        setTimeout(() => {
            setMessageState(prev => ({ ...prev, show: false }))
        }, 1200)
    }

    const addToCart = (item) => {
        dispatch({ type: 'ADD_NEW_ITEM', payload: {item} })
    }

    const addToFavorite = (item) => {
        dispatch({ type: 'ADD_FAVOURITE', payload: item.id })
        handleInfoMessage(item.id, 'Item added to favorites')
    }

    const removeFavorite = (item) => {
        dispatch({ type: 'REMOVE_FAVOURITE', payload: item.id })
        handleInfoMessage(item.id, 'Item removed from favorites')
    }

    return {addToCart, addToFavorite, removeFavorite, messageState }
}