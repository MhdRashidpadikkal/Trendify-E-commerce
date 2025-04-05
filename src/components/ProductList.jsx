import { useCartContext } from '@/context/CartContext';
import { ArrowRight, Heart } from 'lucide-react';
import React, { useState } from 'react'
import RatingStars from './Star';

const ProductList = (props) => {
    const { data, title } = props;
    const { state, dispatch } = useCartContext()

    const [messageState, setMessageState] = useState({
        show: false,
        message: '',
        itemId: null,
    })
    
    const [imageLoaded, setImageLoaded] = useState(new Array(data.length).fill(false));

    const handleImageLoad = (index) => {
        setImageLoaded((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        })
    }

    const handleInfoMessage = (itemId, message) => {
        setMessageState({show: true, message, itemId})
        setTimeout(() => {
            setMessageState(prev => ({...prev, show: false}))
        }, 1200 ) 
    }

    const addToCart = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item.id })
    }

    const addToFavorite = (item) => {
        dispatch({ type: 'ADD_FAVOURITE', payload: item.id })
        handleInfoMessage(item.id, 'Item added to favorites')
    }

    const removeFavorite = (item) => {
        dispatch({ type: 'REMOVE_FAVOURITE', payload: item.id })
        handleInfoMessage(item.id, 'Item removed from favorites')
    }

    
  return (  
            
    <div className='my-10 '>
        <div className='flex justify-between ps-4'>
            <h4 className='font-semibold text-[#59A52C;] '>{title}</h4>
            <button className='flex gap-1 cursor-pointer'>
                view more <ArrowRight />
            </button>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap sm:overflow-x-auto sm:overflow-hidden gap-4 md:p-4 no-scrollbar cursor-pointer ">
            {data.map((item, index) => (
                <div 
                    key={index}
                    className="w-[47%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xlw-[18%] h-[380px] 2xl:h-[400px] shrink-0 bg-gray-100 text-black p-6 text-center rounded-md overflow-hidden pb-15">
                    {!imageLoaded[index] && <div className='h-[55%] w-full bg-gray-300 animate-pulse '></div>}
                    {
                        <img src={item.images[0]} alt={item.title} 
                        className={`h-[55%] ${imageLoaded[index] ? "opacity-100" : "opacity-0" } `} 
                        loading='lazy'
                        onLoad={() => handleImageLoad(index)}
                          />
                     }
                    <div className='flex flex-col items-start relative'>
                        <p className='text-gray-500'>{item.tags[0]}</p>
                        <h2 className="text-2xl font-bold text-black text-nowrap">{item.title}</h2>
                        <p className='text-nowrap flex gap-2 items-end mt-1'> <RatingStars starData={item.rating} /> <span className='text-sm text-gray-500'>{item.reviews.length} reviews</span></p>
                        <div className='flex justify-between w-full'>
                            <h3 className='text-[18px] sm:text-2xl font-semibold text-[#0bb40b] text-nowrap'>₹ {item.price * 4}</h3>
                            <button 
                                className='cursor-pointer'
                                onClick={() => {state.favorites.find(fvrt => fvrt === item.id) ? removeFavorite(item) : addToFavorite(item) } }
                                >
                                {state.favorites.find(fvrt => fvrt === item.id) ? <Heart fill='red' stroke='red' /> : <Heart /> }
                                </button>
                        </div>
                        <button 
                            className={`borde md:px-4 rounded-md font-semibold w-full mt-3 cursor-pointer py-1 sm:text-[18px] text-nowrap border ${state.cartItems.some(cart => cart === item.id ) ? 'bg-[#229422] text-gray-300 ' : 'border-black' }  `}
                            onClick={() => addToCart(item)}
                            > { state.cartItems.some(cart => cart === item.id ) ?  "Added to Cart" : "Add to cart"  }</button>
                        {messageState.show && messageState.itemId === item.id && <div className='absolute top-[10px] left-[10px] bg-white p-4 rounded-md font-medium text-sm'>{messageState.message}</div>}
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default ProductList