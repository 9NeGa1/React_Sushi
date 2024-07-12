import { useEffect, useState } from 'react'
import IconHead from "../../assets/categiroes/logo-head.svg?react"

import CardItem from '../card-item'
import PaginationComponent from '../pagination-component'
import ArrowSVG from "../../assets/pagination/next.svg?react"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFetchItems } from '../../redux/fetch/selectors'
import { fetchPagination } from '../../redux/fetch/fetchSlice'
import CategoriesMain from '../categories-main'
import { useAppDispatch } from '../../types'

const BlockCategories = () => {
  const dispatch = useAppDispatch()
  const {itemsPagination} = useSelector(selectFetchItems)
  const [categoryType, setCategoryType] = useState("Pizzas")
  const [currPage, setCurrPage] = useState(1)
console.log(currPage)
  const itemsPerPage = 3;
  const indexOfLastItem = currPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const pagesCount = Math.ceil(itemsPagination.length/itemsPerPage)

  const paginationData = itemsPagination.slice(indexOfFirstItem, indexOfLastItem)

 
  useEffect(() => {
    dispatch(fetchPagination({categoryType, page: currPage}))
  }, [currPage, categoryType])
  
  useEffect(() => {
    setCurrPage(1)
  }, [categoryType])
  
  return (
    <section className='pt-5 mb-[62px] md:mb-[124px]'>
      <div className='flex gap-4 mb-7 md:mb-10'>
        <h2 className='font-semibold text-[36px] md:text-5xl '>Категории</h2>
        <IconHead className='w-[50px] md:w-[64px]'/>
      </div>
      <CategoriesMain setCategoryType={setCategoryType}/>
      <div className='mt-9 grid grid-cols-1 md:grid-cols-3 gap-6 mb-[50px]'>
        {
            paginationData.map(item => <CardItem key={item.id + ""} {...item}/>)
        }
      </div>
      <div className='flex flex-col md:flex-row md:justify-between gap-5 md:gap-0'>
      <PaginationComponent currPage={currPage} pagesCount={pagesCount} setCurrPage={setCurrPage}/>
      <Link to={"/catalog/sushi"} className='flex items-start gap-4'>
      <span className='text-2xl font-semibold text-accent'>Перейти в каталог</span>
      <ArrowSVG/>
      </Link>
      </div>
    </section>
  )
}

export default BlockCategories
