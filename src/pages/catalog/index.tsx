import React, { useEffect } from 'react'
import SortCard from '../../components/sort-card'

import CardItem from '../../components/card-item'
import { Link, useParams } from 'react-router-dom'
import Skeleton from '../../components/skeleton'
import DropDown from '../../components/dropdown-menu'
import { categoriesKeys, categoriesTitles } from '../../constans'
import { useSelector } from 'react-redux'
import { selectFetchItems } from '../../redux/fetch/selectors'
import { sortParams, filterParams } from '../../types'
import { fetchData } from '../../redux/fetch/fetchSlice'
import FetchError from '../../components/fetch-error'
import { fetchArray } from '../../redux/cart/types'
import { useAppDispatch } from '../../types'

export type StateType = fetchArray[] | null

type Icategories = ('' | 'isHot' | 'isSpicy' | 'isNew' | 'isTop')[]

const categories: Icategories = ['', 'isHot', 'isSpicy', 'isNew', 'isTop'];




const Catalog = () => {
  const dispatch = useAppDispatch()
  const {items, status} = useSelector(selectFetchItems);
  const {category} = useParams();

const [sortParams, setSortParams] = React.useState<sortParams>({
  desc: "по умолчанию",
  params: ""
});

const [filterParams, setFilterParams] = React.useState<filterParams>("");


  useEffect(() => {
    const fetchItems = async () => {
        // const sort = sortParams.params && "sortBy=" + sortParams.params + "&";
        const sortBy = sortParams.params;

        // const filter = filterParams && `${filterParams}=true`;
       


        const categoryType = category && categoriesKeys[category as keyof typeof categoriesKeys] || "Pizzas";
        dispatch(fetchData({categoryType, sortBy, filterParams}))
        // dispatch(fetchData({sort, filter, categoryType}))

        
      };


    fetchItems();
  }, [sortParams, filterParams, category]);
  
  const [isOpen, setIsOpen] = React.useState(false);
  
  const openClickHandler = () => {
    setIsOpen(prev => !prev)
  }
  const title = categoriesTitles[category as keyof typeof categoriesTitles]   

  return (
    
    <section className='pb-[100px]'>
    <div className='pt-6 md:pt-12'>
      <p className='text-sm mb-6'> <Link to={"/"}> Главная</Link>  // <span className='font-semibold'>{title}</span></p>
    </div>

    <h2 className='font-semibold text-[30px] md:text-[40px] mb-5'>{title}</h2>
    <div className='flex flex-col lg:flex-row justify-center md:justify-between mb-6'>
      {status !== "error" && 
      <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:flex md:gap-1 mb-7'>
        {categories.map((category, index) => <SortCard key={index} filterParam={category} index={index} setFilterParams={setFilterParams}/>)}
      
      </div>
        <div>
      <DropDown openClickHandler={openClickHandler} sortParams={sortParams} setSortParams={setSortParams} isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      </>
}
    </div>
    {
        status === "error" && <FetchError/>
      }

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

      { 
        status === "loading" ?
        [...new Array(9)].map((_, index) => <Skeleton key={index}/>) :
        items?.map(item =><CardItem key={item.name} {...item}/>)
       
      }
    </div>
    </section>
  )
}

export default Catalog
