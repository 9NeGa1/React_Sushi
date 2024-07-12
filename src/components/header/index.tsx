import { useEffect, useState } from 'react'
import MenuIcon from "../../assets/header/logo.svg?react"
import CloseIcon from "../../assets/header/close.svg?react"


import Navigation from '../navigation'
import Phone from '../phone'
import CartHeading from '../cart-heading'
import UserHeading from '../user-heading'
import Categories from '../categories'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/selectors'
import MenuSVG from "../../assets/header/menu.svg?react"
import MobileCategories from '../mobile-categories'


const Header = () => {
  const location = useLocation();
  const {items} = useSelector(selectCart)
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  



  useEffect(() => {
    if(isMounted) {
      const json = JSON.stringify(items)
      localStorage.setItem("cart", json)
    }

    setIsMounted(prev => true)
  }, [items])

  useEffect( () => {
    setIsOpen(prev => false)
  }, [location])
  
  const ToggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  return (
    
    <header className='flex justify-between pt-2 md:gap-16 mb-6 md:mb-12 px-[10px] sm:px-7 md:px-0'>
      <Link to={"/"}>
    <MenuIcon className='w-[90px] md:w-[134px]'/>
      </Link>
    <div className='flex flex-col '>
      <div className='flex pt-5 gap-14 items-center mb-5'>
        <div className='hidden md:block'>
        <Navigation/>
        </div>
       <div className='hidden xl:block'>
        <Phone/>
        </div>
        
        <div className='flex gap-[20px] xl:gap-6 '>
        <CartHeading/>
        <UserHeading/>
        <div onClick={ToggleMenu} className='cursor-pointer z-[80] w-10 block xl:hidden'>
      {!isOpen && <MenuSVG className={`w-10 block xl:hidden `}/>}
      {isOpen && <CloseIcon className={`w-10 block xl:hidden `}/>}
      </div>
        </div>
      </div>
      <div className='bg-[#F5F5F5]'>
        <div className='xl:hidden block'>
        <Phone/>
        </div>
        <div className='hidden xl:block'>
      <Categories padding={4}/>
      </div>
      </div>
    </div>
    {isOpen && <MobileCategories/>}
    </header>
  )
}

export default Header
