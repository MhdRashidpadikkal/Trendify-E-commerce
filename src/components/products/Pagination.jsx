import { useFilterContext } from '@/context/FilterContext';
import { getSmartPagination } from '@/utils/pagination';
import React, { useEffect, useState } from 'react'

const Pagination = ({totalPages}) => {
    const [paginationRange, setPaginationRange] = useState([]);

    console.log("pagination range in pagination component", paginationRange, totalPages);

    const { state, dispatch } = useFilterContext()


    useEffect(() => {
         const pagination = getSmartPagination((totalPages), state.currentPage);
         setPaginationRange(pagination)
    }, [totalPages, state.currentPage])

    return (
        <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-1 md:gap-3 pt-3'>
            <button
                disabled={state.currentPage === 1}
                className=' bg-[#2a2a2a] h-[30px] px-3 rounded-md text-white cursor-pointer disabled:opacity-80 disabled:text-white/40 font-medium '
                onClick={() => dispatch({ type: "SET_CURRENT_PAGE", payload: Math.max(state.currentPage - 1, 1) })} >prev</button>
            {/* setPage(prev => Math.max(prev - 1, 1) */}
            {
                paginationRange?.map((item, index) => {
                    
                    if (item === "...") {
                        return (
                            <span key={`dots-${index}`} className="px-3 py-2 text-gray-500">
                                ...
                            </span>
                        )
                    }

                    return (
                        <button
                            key={item}
                            onClick={() => dispatch({type: "SET_CURRENT_PAGE", payload: item})}
                            className={`h-[27px]  px-3 rounded font-medium cursor-pointer bg-gradient-to-r from-[#437d21] to-[#6fca3a]  ${state.currentPage === item ? ' text-white' : 'bg-gray-200 from-[#437d21]/50 to-[#6fca3a]/50  '
                                }`}
                        >
                            {item}
                        </button>
                    )

                })
            }
            <button
                disabled={state.currentPage === totalPages}
                className=' bg-[#2a2a2a] h-[30px] px-3 rounded-md text-white cursor-pointer disabled:opacity-80 disabled:text-white/40 font-medium'
                onClick={() => dispatch({ type: "SET_CURRENT_PAGE", payload: Math.min(state.currentPage + 1, totalPages) })}
            >next</button>
        </div>
    )
}

export default Pagination