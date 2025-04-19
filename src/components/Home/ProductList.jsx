import { useCartContext } from '@/context/CartContext';
import { ArrowRight, Heart, Minus, Plus, Trash2 } from 'lucide-react';
import React, { useState } from 'react'
import RatingStars from '../common/Star';
import { useProductActions } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { formatPriceInINR } from '@/utils/currencyFormat';


const ProductList = (props) => {
    const { data, title } = props;
    const { state, dispatch } = useCartContext()
    const navigate = useNavigate()

    const { addToCart, addToFavorite, removeFavorite, messageState } = useProductActions()

    const [imageLoaded, setImageLoaded] = useState(new Array(data.length).fill(false));

    const handleImageLoad = (index) => {
        setImageLoaded((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        })
    }

    return (

        <div className='my-10 '>
            <div className='flex justify-between ps-4'>
                <h4 className='font-semibold text-[#59A52C;] '>{title}</h4>
                {
                    data.length > 5 && (
                        <button className='flex gap-1 cursor-pointer'>
                            view more <ArrowRight />
                        </button>
                    )
                }
            </div>
            <div className="flex flex-wrap sm:flex-nowrap sm:overflow-x-auto sm:overflow-hidden gap-4 md:p-4 no-scrollbar cursor-pointer ">
                {data.map((item, index) => {
                    const cartItem = state.cartItems.find(cart => cart?.item?.id === item?.id)

                    return (
                        <div
                            key={index}
                            className="w-[47%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xlw-[18%] h-[380px] 2xl:h-[400px] shrink-0 bg-gray-100 text-black p-6 text-center rounded-md overflow-hidden pb-15">
                            {!imageLoaded[index] && <div className='h-[55%] w-full bg-gray-300 animate-pulse '></div>}
                            {
                                <img src={item?.images[0]} alt={item?.title}
                                    className={`h-[55%] ${imageLoaded[index] ? "opacity-100" : "opacity-0"} `}
                                    loading='lazy'
                                    onClick={() => navigate(`/product-detail/${item?.id}/${item?.title}`)}
                                    onLoad={() => handleImageLoad(index)}
                                />
                            }
                            <div className='flex flex-col items-start relative'>
                                <p className='text-gray-500'>{item?.tags[0]}</p>
                                <h2
                                    onClick={() => navigate(`/product-detail/${item?.id}/${item?.title}`)}
                                    className="text-2xl font-bold text-black text-nowrap">{item?.title}</h2>
                                <p className='text-nowrap flex gap-2 items-end mt-1'> <RatingStars starData={item?.rating} /> <span className='text-sm text-gray-500'>{item.reviews.length} reviews</span></p>
                                <div className='flex justify-between w-full'>
                                    <h3 className='text-[18px] font-semibold text-[#0bb40b] text-nowrap'>₹ {formatPriceInINR(item?.price)}</h3>
                                    <button
                                        className='cursor-pointer'
                                        onClick={() => { state?.favorites.find(fvrt => fvrt === item?.id) ? removeFavorite(item) : addToFavorite(item) }}
                                    >
                                        {state?.favorites.find(fvrt => fvrt === item?.id) ? <Heart fill='red' stroke='red' /> : <Heart />}
                                    </button>
                                </div>

                                {cartItem ? (
                                    <div className='flex items-center gap-4 mt-2 border-2 border-[#153103] px-3  rounded-xl'>
                                        <button
                                            onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: { item } })}
                                            className='cursor-pointer'> {cartItem?.quantity !== 1 ? <Minus className='w-4' /> : <Trash2 className='w-4' />} </button>
                                        <span>{cartItem?.quantity}</span>
                                        <button
                                            onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: { item } })}
                                            className='cursor-pointer'><Plus className='w-4' /> </button>
                                    </div>
                                ) :
                                    (<button className='bg-[#f0d436] px-6 mt-3 rounded-md font-medium text-sm py-1 text-[#111111] cursor-pointer '
                                        onClick={() => addToCart(item)}
                                    >Add to cart</button>)
                                }
                                {messageState.show && messageState.itemId === item?.id && <div className='absolute top-[10px] left-[10px] bg-white p-4 rounded-md font-medium text-sm'>{messageState.message}</div>}
                            </div>
                        </div>
                    )

                })}

            </div>
        </div>
    )
}

export default ProductList