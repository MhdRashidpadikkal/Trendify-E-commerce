import React from 'react'
import halfStar from '../../assets/hero/half-star.png'
import { Star } from 'lucide-react'


const RatingStars = (props) => {
    const { starData } = props

    const fullStars = Math.floor(starData)
    const hasDecimal =  starData % 1 !== 0
    const halfStars = hasDecimal ? 1 : 0
    const emptyStars = 5 - fullStars - halfStars

    const starsArray = []

    for (let i = 0; i < fullStars; i++) {
      starsArray.push(<Star className='fill-amber-300  stroke-amber-300 w-[18px]'  />)
    }

    if (halfStars) {
      starsArray.push(<img src={halfStar} alt="" className='w-[16px] h-[14px] mt-[4px] sm:w-[18px] sm:h-[17px] sm:mt-[3px]' />)
    }

    for (let i = 0; i < emptyStars; i++) {
      starsArray.push(<Star className=' stroke-amber-300 w-[18px]' strokeWidth={1} />)
    }

  return (
    <div className='flex'>

      {
        starsArray
      }
    </div>
  )
}

export default RatingStars