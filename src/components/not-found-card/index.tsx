import React from 'react'
import ArrowBack from "../../assets/arrows/arrowBackCard.svg?react"
import { Link } from 'react-router-dom'

const NotFoundCard = () => {
  return (
    <div className='mb-20'> 
    <div className="flex gap-2 mt-12 ">
        <ArrowBack />
        <Link className="text-[18px] font-medium" to={"/catalog"}>
          Назад в каталог
        </Link>
      </div>
        <p className="text-[40px] font-semibold text-center">Товар не найден!</p>
    </div>
  )
}

export default NotFoundCard
