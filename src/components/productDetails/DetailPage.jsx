import { ChevronLeft, ChevronRight, Minus, Plus, Tag, Trash2, } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RatingStars from '../common/Star'
import { formatPriceInINR } from '@/utils/currencyFormat'
import { useCartContext } from '@/context/CartContext'
import { useProductActions } from '@/hooks'
import ProductList from '../Home/ProductList'

const DetailPage = ({ currentProduct, allProducts }) => {
    const navigate = useNavigate()
    const { state, dispatch } = useCartContext()

    const cartItem = state.cartItems.find(cart => cart.item.id === currentProduct?.id)
    const { addToCart } = useProductActions()
    const [currentIndex, setCurrentIndex] = useState(null);

    const relatedProducts = allProducts.filter((item) => item.category == currentProduct?.category && item.id !== currentProduct?.id)

    const toggleNextIndex = () => {
        if (currentIndex === null) {
            setCurrentIndex(currentProduct.images.length > 1 ? 1 : 0);
        }
        else {
            setCurrentIndex((currentIndex + 1) % currentProduct.images.length);
        }
    }

    const togglePrevIndex = () => {
        if (currentIndex === null) {
            setCurrentIndex(currentProduct.images.length - 1);
        }
        else {
            setCurrentIndex((currentIndex - 1 + currentProduct.images.length) % currentProduct.images.length);
        }
    }

    const handleBuyNow = () => {
        if (cartItem === undefined) {
            addToCart(currentProduct)
            navigate('/cart')
            console.log("handle buy now if condition worked")
        } else {
            navigate('/cart')
        }
    }


    return (
        <div>
            <div className='flex items-center gap-2 font-medium '>
                <button
                    onClick={() => navigate('/products')}
                    className='cursor-pointer text-[#22a002] '
                >Products</button>
                <ChevronRight className='w-4 mt-1' />
                <h4>{currentProduct?.title}</h4>
            </div>

            <div className='flex my-5 flex-col md:flex-row '>
                <div className='md:w-[40%] px-10' >
                    <div className=' h-[350px]  flex items-center justify-center border-2 rounded-md relative'>
                        <img src={currentIndex == null ? currentProduct?.thumbnail : currentProduct?.images[currentIndex]} alt="" className='' />
                        <span
                            onClick={togglePrevIndex}
                            className='absolute p-1 bg-gray-300 rounded-full cursor-pointer -left-4'><ChevronLeft /></span>
                        <span
                            onClick={toggleNextIndex}
                            className='absolute p-1 bg-gray-300 rounded-full cursor-pointer -right-4 '><ChevronRight /></span>
                    </div>
                    <div className='flex justify-center gap-3 mt-3'>
                        {
                            currentProduct?.images?.map((img, index) => (
                                <span
                                    onClick={() => setCurrentIndex(index)}
                                    className='cursor-pointer'>
                                    <img src={img} alt="" className='w-[40px] h-[40px] border-2 border-black rounded-md p-0' />
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className='md:w-[60%] px-5 mt-5 md:px-0 md:mt-0 ' >
                    <p className='flex gap-1 text-center tet-sm '>
                        <span className='border border-[green] px-2 rounded-full ' >🏷️  {currentProduct?.category}</span> </p>
                    <h2 className='mt-2 text-2xl font-medium md:text-3xl'>{currentProduct?.title}</h2>
                    <p className='text-lg'>{currentProduct?.description}</p>
                    <p className='flex gap-2 mt-1 '>{currentProduct?.rating} <RatingStars starData={currentProduct?.rating} /> </p>
                    <p><span className='pb-2 text-sm border-b '>Brand :</span> <span className='text-[#515aaa] font-medium '>{currentProduct?.brand} </span></p>
                    <p className='pb-2 mt-1 text-lg border-b'>₹ <span className='text-2xl font-medium'>{formatPriceInINR(currentProduct?.price)}</span></p>
                    <p className='font-medium'>Status : {currentProduct?.availabilityStatus} </p>
                    <p className='font-medium'>Return Policy : {currentProduct?.returnPolicy} </p>
                    <p className='font-medium'>Shipping :  {currentProduct?.shippingInformation} </p>
                    <p className='font-medium'>Warranty: {currentProduct?.warrantyInformation} </p>
                    {cartItem ? (
                        <div className='flex w-[150px] justify-around items-center gap-4 mt-2 border-2 border-[#153103] px-3  rounded-xl'>
                            <button
                                onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: { id: currentProduct.id } })}
                                className='cursor-pointer'> {cartItem.quantity !== 1 ? <Minus className='w-4' /> : <Trash2 className='w-4' />} </button>
                            <span>{cartItem.quantity}</span>
                            <button
                                onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: { id: currentProduct.id } })}
                                className='cursor-pointer'><Plus className='w-4' /> </button>
                        </div>
                    ) :
                        (<button className='bg-[#ffbb00]  transition-all duration-300   px-3 rounded-sm w-[150px] mt-2 text-center font-medium text-sm py-1 cursor-pointer hover:bg-[#ffbb00c2] '
                            onClick={() => addToCart(currentProduct)}
                        >Add to cart</button>)
                    }

                    <p
                        onClick={handleBuyNow}
                        className='bg-[#ff7b00] duration-300  transition-all text-white  px-3 rounded-sm w-[150px] mt-2 text-center font-medium text-sm py-1 cursor-pointer hover:bg-[#ff8800c2]' >But now</p>

                </div>
            </div>

            {/* Related products */}
            {
                relatedProducts.length > 0 && (
                    <div>

                        <ProductList data={relatedProducts} title="Related products" />
                    </div>
                )
            }

        </div>
    )
}

export default DetailPage