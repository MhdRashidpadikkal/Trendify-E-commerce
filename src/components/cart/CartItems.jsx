import { useCartContext } from '@/context/CartContext'
import { useToastContext } from '@/context/ToastContext'
import { formatPriceInINR } from '@/utils/currencyFormat'
import { Minus, Plus, Trash2 } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartItems = () => {
    const { state, dispatch } = useCartContext()
    const {dispatch: toastDispatch} = useToastContext()
    const subTotal = state.cartItems.reduce((acc, item) => acc + item?.item?.price * item.quantity, 0)
    const navigate = useNavigate()

    const handleBuy = () => {
        navigate('/'),
        toastDispatch({
            type: "SHOW_TOAST",
            payload: {
                message: "Order placed successfully. Your product will be delivered shortly.",
                toastType: "success",
            },
        });
        dispatch({
            type: "RESET_CART"
        })
    }



    return (
        <div className='flex my-5 gap-3'>
            <div className='md:w-[80%] border p-5 rounded-md '>
                <h2 className=' md:text-4xl font-medium '>Shopping cart</h2>

                <div className='sticky z-10 top-28 py-4 bg-white '>
                    <h3>Subtotal ({state.totalCarts} items): <span className='text-nowrap'> ₹ <span className='text-2xl font-medium'>{formatPriceInINR(subTotal)}</span></span> </h3>

                    <button
                        onClick={handleBuy}
                        className='bg-yellow-300 md:hidden text-center rounded-full text-sm py-1 w-full mt-2 cursor-pointer font-medium '>Proceed to Buy </button>
                </div>

                {
                    state.cartItems?.length === 0 && <h2 className='md:text-2xl mt-5'>Your cart is empty 🙃</h2>
                }

                {
                    state.cartItems?.length > 0 && (
                        <div className='hidden md:flex text-center border-b border-[green] mt-5 font-medium '>
                            <p className='w-[40%] text-start'>Product</p>
                            <p className='w-[20%]'>Price</p>
                            <p className='w-[20%]'>Quantity</p>
                            <p className='w-[20%]'>Total</p>

                        </div>
                    )
                }

                {
                    state.cartItems?.length > 0 && state.cartItems?.map((cart, index) => {
                        return (
                            <div key={index} className='flex flex-col md:flex-row md:gap-3 md:items-center border-b border-[green] '>
                                <div className='flex w-full md:w-[40%] items-center '>
                                    <img src={cart?.item?.images[0]} alt={cart?.item?.title} className='w-20  ' />
                                    <p>{cart?.item?.title}</p>
                                </div>
                                <div className='flex w-full items-center md:w-[40%]  '>
                                    <p className='w-[50%]  '>{formatPriceInINR(cart?.item?.price)}</p>
                                    <div className='w-[50%] flex justify-center items-center gap-4 mt-2 border-2 border-[#153103] rounded-xl'>
                                        <button
                                            onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: { id: cart?.item.id } })}
                                            className='cursor-pointer'> {cart?.quantity !== 1 ? <Minus className='w-4' /> : <Trash2 className='w-4' />} </button>
                                        <span>{cart.quantity}</span>
                                        <button
                                            onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: { id: cart?.item.id } })}
                                            className='cursor-pointer'><Plus className='w-4' /> </button>
                                    </div>
                                </div>

                                <p className='md:w-[20%]  md:flex md:justify-center md:items-center ' ><span className='md:hidden'>Total : </span> {formatPriceInINR(cart?.item?.price * cart?.quantity)}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='hidden md:block md:w-[20%] border h-[130px] rounded-md px-5 py-3 '>
                <h3>Subtotal ({state?.totalCarts} items): <span className='text-nowrap'> ₹ <span className='text-2xl font-medium'>{formatPriceInINR(subTotal)}</span></span> </h3>

                <button
                    onClick={handleBuy}
                    className='bg-yellow-300 text-center px-7 rounded-full text-sm py-1 w-full mt-2 cursor-pointer font-medium '>Proceed to Buy </button>
            </div>
        </div>
    )
}

export default CartItems