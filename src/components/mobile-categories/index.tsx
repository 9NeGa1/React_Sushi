import React from 'react'
import { NAV_DATA } from '../../constans'
import { Link } from 'react-router-dom'
const categories = ["pizza", "sushi", "rolls", "sets", "wok", "soup", "salats", "deserts", "drinks", "actions"]

const MobileCategories = () => {
  return (
    <>
    <ul className='absolute top-0 left-0 right-0 bottom-0 bg-white z-[60] flex flex-col xl:hidden  gap-3 p-10'>
    {
            NAV_DATA.map((elem, index) => <li key={elem.name} >
                    <Link to={`/catalog/${categories[index]}`} className={`flex pl-10 gap-8 hover:bg-accent hover:shadow rounded-2xl delay-[10ms] py-2 transition duration-300 ease-in-out active:bg-orange-700`}>
                    <img src={elem.img} alt="" className='w-8 h-8'/>
                    <p>{elem.name}</p>
                    </Link>
                
            </li>) 
        }
    </ul>
    </>
  )
}

export default MobileCategories
