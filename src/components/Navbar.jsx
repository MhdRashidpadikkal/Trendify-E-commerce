import { CircleX, Heart, HeartIcon, Menu, ShoppingCart, X } from 'lucide-react'
import logo from '../assets/logo.png'
import InputPlcaholder from './aceternityUi/InputPlcaholder'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logoIcon from '../assets/logo-icon.png'
import { useCartContext } from '@/context/CartContext'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
    const [isToggle, setIsToggle] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const { state } = useCartContext()

    const location = useLocation()

    useEffect(() => {setIsToggle(false)}, [location.pathname])

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    })
    
    
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
        
        
        console.log("navbar items is ", state.cartItems.length)

  return (
    
    <div className={` mt-5 px-3 sticky top-0  z-50 ${isSticky ? 'bg-white/90  py-2' : ''} `}>
        <div className='flex justify-between relative '>
            <div className='flex items-center h-[60px]'>
                <div className="logo cursor-pointer">
                    <NavLink to='/'><img src={logo} alt="Trendify logo" width={'200px'} /></NavLink>
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
    
                <li className='relative flex md:hidden lg:flex'><Heart className='z-20 relative' /> {state.favorites.length > 0 && <span className='absolute bottom-4 right-[-12px] w-[25px] h-[25px] rounded-full bg-red-200 text-black text-center font-medium z-0'>{state.favorites.length}</span> }</li>
                <li className='relative '><ShoppingCart className='z-20 relative' /> {state.totalCarts > 0 && <span className='absolute bottom-4 right-[-12px] w-[25px] h-[25px] rounded-full bg-green-200 text-black text-center font-medium z-0'>{state.totalCarts}</span> } </li>
                <li className='flex md:hidden cursor-pointer' onClick={() => setIsToggle((prev) => !prev)}><Menu /></li>
            </div>   
        </div>

        {/* Smaller Screens Search */}
        <div className='block w-full md:hidden'>
            <InputPlcaholder />
        </div>

        <AnimatePresence>
        {
            isToggle && (
                <motion.div 
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                exit={{ opacity: 0, x: 200, transition: { duration: 0.4, ease: 'easeInOut', delay: 0 } }}

                    className="bg-[#111111] sidebar h-screen md:hidden px-4 py-3 absolute top-0 w-full z-50">
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-1'>
                            <img src={logoIcon} alt="" width="30px" />
                            <h2 className='text-white text-3xl font-semibold'>Trendify</h2>
                        </div>
                        <button className='text-white text-4xl font-semibold cursor-pointer ' onClick={() => setIsToggle(false)}><CircleX /></button>
                    </div>
                    <ul className='flex flex-col text-[18px] font-semibold gap-1 text-[#babcbd] py-4 w-[100%] '>
                        {
                            lists.map((item, index) => <li key={index}> <NavLink to={item.link} >{item.title}</NavLink> </li> )
                        }
                    </ul>
                </motion.div>
            )
        }
        </AnimatePresence>
    </div>
  )
}

export default Navbar