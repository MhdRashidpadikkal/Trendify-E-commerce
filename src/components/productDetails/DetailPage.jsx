import { ChevronLeft, ChevronRight, Tag,  } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RatingStars from '../common/Star'
import { formatPriceInINR } from '@/utils/currencyFormat'

const DetailPage = ({ currentProduct }) => {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(null);

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
            setCurrentIndex((currentIndex - 1 + currentProduct.images.length) % currentProduct.images.length );
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

            <div className='flex my-5'>
                <div className='w-[40%] px-10' >
                    <div className=' h-[350px]  flex items-center justify-center border-2 rounded-md relative'>
                        <img src={currentIndex == null ?  currentProduct?.thumbnail : currentProduct?.images[currentIndex]} alt="" className='' />
                        <span 
                        onClick={togglePrevIndex}
                        className='absolute -left-4 bg-gray-300 p-1 rounded-full cursor-pointer'><ChevronLeft /></span>
                        <span 
                        onClick={toggleNextIndex}
                        className='absolute -right-4 bg-gray-300 p-1 rounded-full cursor-pointer '><ChevronRight /></span>
                    </div>
                    <div className='flex gap-3 mt-3 justify-center'>
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
                <div className='w-[60%]' >
                    <p className='text-sm flex gap-1 border border-[green] rounded-full px-2 w-[90px] '>🏷️  {currentProduct?.category} </p>
                    <h2 className='text-2xl md:text-3xl font-medium mt-2'>{currentProduct?.title}</h2>
                    <p className='text-lg'>{currentProduct?.description}</p>
                    <p className='flex gap-2 mt-1 '>{currentProduct?.rating} <RatingStars starData={currentProduct?.rating} /> </p>
                    <p><span className='text-sm border-b pb-2 '>Brand :</span> <span className='text-[#515aaa] font-medium '>{currentProduct?.brand} </span></p>
                    <p className='text-lg mt-1 border-b pb-2'>₹ <span className='text-2xl font-medium'>{formatPriceInINR(currentProduct?.price)}</span></p>
                    <p className='font-medium'>Status : {currentProduct?.availabilityStatus } </p>
                    <p className='font-medium'>Return Policy : {currentProduct?.returnPolicy } </p>
                    <p className='font-medium'>Shipping :  {currentProduct?.shippingInformation } </p>
                    <p className='font-medium'>Warranty: {currentProduct?.warrantyInformation } </p>
                    <p>Add to cart</p>
                    <p>But now</p>
                </div>
            </div>

        </div>
    )
}

export default DetailPage