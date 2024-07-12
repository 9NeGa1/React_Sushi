import React from 'react'
import { NAV_DATA } from '../../constans'
import { Link } from 'react-router-dom'

type Props = {
  padding: number
}

const categories = ["pizza", "sushi", "rolls", "sets", "wok", "soup", "salats", "deserts", "drinks", "actions"]
const Categories: React.FC<Props> = ({padding}) => {
  return (
    <ul className=' justify-between px-3 flex'>
        {
            NAV_DATA.map((elem, index) => <li key={elem.name} >
                    <Link to={`/catalog/${categories[index]}`} className={`flex flex-col items-center hover:bg-accent hover:shadow rounded-2xl px-${padding}  delay-[10ms] py-2 transition duration-300 ease-in-out active:bg-orange-700`}>
                    <img src={elem.img} alt="" className='w-8 h-8'/>
                    <p>{elem.name}</p>
                    </Link>
                
            </li>) 
        }
    </ul>
  )
}

export default Categories
