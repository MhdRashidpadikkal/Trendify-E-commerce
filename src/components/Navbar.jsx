import { Heart, ShoppingCart } from 'lucide-react'
import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    const lists = [
        {
            id:1,
            title : "Home",
            link : "#"
        },
        {
            id:2,
            title : "Products",
            link : "#"
        },
        {
            id:3,
            title : "About Us",
            link : "#"
        },
        {
            id:4,
            title : "Contact Us",
            link : "#"
        }]

  return (
    <div className='flex justify-between px-4 '>
        <div className='flex items-center h-[60px]'>
            <div className="logo">
                <img src={logo} alt="Trendify logo" width={'200px'} />
            </div>
            <ul className='flex ml-4 text-[18px] font-semibold gap-7'>
                {
                    lists.map((item, index) => <li key={index}><a href={item.link}>{item.title}</a></li> )
                }
            </ul>
        </div>

        <div className='flex items-center gap-3 list-none'>
            <p>Search</p>
            <li><Heart className='' /></li>
            <li><ShoppingCart /></li>
        </div>
        
    </div>
  )
}

export default Navbar