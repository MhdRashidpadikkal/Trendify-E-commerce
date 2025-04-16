import React from 'react'
import RatingStars from '../common/Star'
import { formatPriceInINR } from '@/utils/currencyFormat'
import { Heart, Minus, Plus, Trash2 } from 'lucide-react'
import { useCartContext } from '@/context/CartContext'
import { useProductActions } from '@/hooks'
import { useNavigate } from 'react-router-dom'

const Product = ({ item, index }) => {

    const { state, dispatch } = useCartContext()
    const { addToCart, addToFavorite, removeFavorite, messageState } = useProductActions();

    const cartItem = state.cartItems.find(cart => cart.item.id === item.id)
    const navigate = useNavigate();

    return (
        <div key={item.id} className='flex border-t border-b items-center'>
            <div
            onClick={() => navigate(`/product-detail/${item.id}/${item.title}`)} 
            className='w-[35%] cursor-pointer '>
                <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className='w-[65%] py-3 relative '>
                <h2 
                onClick={() => navigate(`/product-detail/${item.id}/${item.title}`)}
                className='md:text-2xl text-nowrap font-medium cursor-pointer hover:text-[#437d21] transition-all duration-300 '>{item.title}</h2>
                <p className='text-sm '>🏷️ {item.tags[0]}</p>
                <p className=' flex gap-2 text-nowrap items-end font-medium mt-2'>{item.rating} <RatingStars starData={item.rating} /> <span className='text-[#af8309a1] font-medium text-sm '> {index % 4 === 0 ? item.reviews.length * item.stock + 2 : (index % 3 === 0 ? item.reviews.length * item.stock + 3 : item.reviews.length + item.stock)} reveiws </span> </p>
                <h5 className='text-sm text-gray-400 text-nowrap'>{20 * item.stock + index + 4}+ bought in past month </h5>
                <h2 className='md:text-3xl font-medium'><span className='md:text-[20px] '>₹</span> {formatPriceInINR(item.price)} </h2>
                <h5 className='text-sm hidden md:flex'>{item.description}</h5>
                <div className='flex items-center gap-3 '>
                    <button
                        className='cursor-pointer mt-2'
                        onClick={() => { state.favorites.find(fvrt => fvrt === item.id) ? removeFavorite(item) : addToFavorite(item) }}
                    >
                        {state.favorites.find(fvrt => fvrt === item.id) ? <Heart fill='red' stroke='red' /> : <Heart />}
                    </button>
                    {cartItem ? (
                        <div className='flex items-center gap-4 mt-2 border-2 border-[#153103] px-3  rounded-xl'>
                            <button
                                onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: {id: item.id}  })}
                                className='cursor-pointer'> {cartItem.quantity !== 1 ? <Minus className='w-4' /> : <Trash2 className='w-4' />} </button>
                            <span>{cartItem.quantity}</span>
                            <button
                                onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: {id: item.id} })}
                                className='cursor-pointer'><Plus className='w-4' /> </button>
                        </div>
                    ) :
                        (<button className='bg-[#f0d436] px-4 mt-3 rounded-md font-medium text-sm py-1 text-[#111111] cursor-pointer '
                            onClick={() => addToCart(item)}
                        >Add to cart</button>)
                    }

                    {messageState.show && messageState.itemId === item.id && <div className='absolute bottom-10 left-[10px] border-2 border-gray-300 bg-white p-4 rounded-md font-medium text-sm'>{messageState.message}</div>}

                </div>

            </div>
        </div>
    )
}

export default Product