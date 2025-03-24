import { CircleX, Heart, HeartIcon, Menu, ShoppingCart, X } from 'lucide-react'
import logo from '../assets/logo.png'
import InputPlcaholder from './aceternityUi/InputPlcaholder'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logoIcon from '../assets/logo-icon.png'

const Navbar = () => {
    const [isToggle, setIsToggle] = useState(false)
    
    
    const lists = [
        {
            id:1,
            title : "Home",
            link : "/"
        },
        {
            id:2,
            title : "Products",
            link : "/products"
        },
        {
            id:3,
            title : "About Us",
            link : "/about"
        },
        {
            id:4,
            title : "Contact Us",
            link : "/contact"
        }]        

  return (
    
    <div className='relative mt-5 px-3'>
        <div className='flex justify-between '>
            <div className='flex items-center h-[60px]'>
                <div className="logo">
                    <img src={logo} alt="Trendify logo" width={'200px'} />
                </div>
                <ul className='hidden md:flex ml-4 text-[16px] lg:text-[18px] font-semibold gap-2 xl:gap-5 text-nowrap'>
                    {
                        lists.map((item, index) => <li key={index}> <NavLink to={item.link} >{item.title}</NavLink> </li> )
                    }
                </ul>
            </div>

            <div className='flex items-center gap-2 list-none md:gap-3'>
                <div className='hidden md:flex'>
                 <InputPlcaholder  />
                </div>
    
                <li className='flex md:hidden lg:flex '><Heart /></li>
                <li><ShoppingCart /></li>
                <li className='flex md:hidden' onClick={() => setIsToggle((prev) => !prev)}><Menu /></li>
            </div>   
        </div>
        {/* Smaller Screens Search */}
        <div className='block w-full md:hidden'>
            <InputPlcaholder />
        </div>

        {
            isToggle && (
                <div className="bg-[#111111] sidebar h-screen md:hidden px-4 py-3 absolute top-0 w-full z-50">
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-1'>
                            <img src={logoIcon} alt="" width="30px" />
                            <h2 className='text-white text-3xl font-semibold'>Trendify</h2>
                        </div>
                        <button className='text-white text-4xl font-semibold' onClick={() => setIsToggle(false)}><CircleX /></button>
                    </div>
                    <ul className='flex flex-col text-[18px] font-semibold gap-1 text-[#babcbd] py-4 w-[100%] '>
                        {
                            lists.map((item, index) => <li key={index}> <NavLink to={item.link} >{item.title}</NavLink> </li> )
                        }
                    </ul>
                </div>
            )
        }
    </div>
  )
}

export default Navbar