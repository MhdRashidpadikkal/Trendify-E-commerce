import { useToastContext } from '@/context/ToastContext';
import React, { useEffect, useState } from 'react'

const CustomToast = () => {

    const { state, dispatch } = useToastContext();
    const { showToast } = state;

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({type: "HIDE_TOAST" })
        }, 3000);

        return () => clearTimeout(timer);
        
    }, [state])
    
    
  return (
    showToast && 
    <div className='relative'>
        <div className='md:w-[500px] bg-green-400  text-center py-3 rounded-sm fixed md:right-[30%] z-50 '>
        <div className="absolute top-0 left-0 h-[2px] rounded-sm bg-[#1a1a1a] animate-border-reverse" />

            <p className='text-[18px] font-medium text-[#ffffff] '>{state.message}</p>
        </div>
    </div>
  )
}

export default CustomToast