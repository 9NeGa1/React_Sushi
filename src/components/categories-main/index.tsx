import React from 'react'
import { NAV_DATA } from '../../constans'


type Props = {
  setCategoryType: (prev: string) => void
}

const CategoriesMain: React.FC<Props> = ({setCategoryType}) => {
  return (
    <ul className='flex justify-between px-3 w-full overflow-auto'>
        {
            NAV_DATA.map((elem) => <li key={elem.name} >
                    <div onClick={() => {setCategoryType(elem.categoryType)}} className={`cursor-pointer flex flex-col items-center hover:bg-accent hover:shadow rounded-2xl px-6  delay-[10ms] py-2 transition duration-300 ease-in-out active:bg-orange-700`}>
                    <img src={elem.img} alt="" className='w-8 h-8'/>
                    <p>{elem.name}</p>
                    
                    </div>
                
            </li>) 
        }
    </ul>
  )
}

export default CategoriesMain
