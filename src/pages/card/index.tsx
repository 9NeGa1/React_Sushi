import React, { useState } from "react"
import ArrowBack from "../../assets/arrows/arrowBackCard.svg?react"
import DelievSVG from "../../assets/catalog/deliev.svg?react"

import { Link, useLocation } from "react-router-dom"
import styles from "./index.module.css"
import { MiniItem, useAppDispatch } from "../../types"
import { addItem, minusItem } from "../../redux/cart/cartSlice"
import NotFoundCard from "../../components/not-found-card"
const Card = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  if(location.state === null) {
    return <NotFoundCard/>
  }

  let {count, crossedPrice, description, extraPay, id, image, name, nutritionalInfo, price, size}: MiniItem = location.state
  const item: MiniItem = {count, crossedPrice, description, extraPay, id, image, name, nutritionalInfo, price, size}
  const [itemCount, setItemCount] = useState(count);


  const clickMinusItem = () => {
    if(itemCount !== 0) {
      setItemCount((prev) => prev - 1)
      dispatch(minusItem(item))


    }
  }

  const clickPlusItem = () => {
    setItemCount((prev) => prev + 1)
    dispatch(addItem(item))
  }

  
 

  return (
    <section>
      <div className="flex gap-2 mt-12">
        <ArrowBack />
        <Link className="text-[18px] font-medium" to={"/catalog"}>
          Назад в каталог
        </Link>
      </div>

      <div className="border-y border-borderCol py-[28px] md:py-[57px]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:px-10 md:pt-5">
            <img className= " border border-borderCol lg:w-[570px] lg:h-[380px]" src={image} alt="" />
          </div>

          <div className="">
            <h2 className="font-semibold text-[30px] md:text-[40px] my-3 md:my-0">{name}</h2>
            <p className="font-semibold text-sm mb-3 md:mb-0">Вес:
            <span className="text-sm font-normal"> {size} грамм</span>
            </p>
            <ul className="border border-borderCol flex md:w-[531px] mb-6">

              <li className={`${styles.item} py-[10px] text-center w-[132px] relative`}>
                <p className="text-sm mb-[4px]">Белки</p>
                <p className="text-sm font-semibold" >{nutritionalInfo.proteins} г</p>
              </li>

              <li className={`${styles.item} py-[10px] text-center w-[132px] relative`}>

                <p className="text-sm mb-[4px]">Углеводы</p>
                <p className="text-sm font-semibold" >{nutritionalInfo.carbohydrates} г</p>
              </li>

              <li className={`${styles.item} py-[10px] text-center w-[132px] relative`}>

                <p className="text-sm mb-[4px]">Жиры</p>
                <p className="text-sm font-semibold" >{nutritionalInfo.fats} г</p>
              </li>

              <li className="py-[10px] text-center w-[132px]">
                <p className="text-sm mb-[4px]">Калорийность</p>
                <p className="text-sm font-semibold" >{nutritionalInfo.calories} Ккал</p>
              </li>
            </ul>

            <div className="flex items-center mb-[23px]">
              <DelievSVG className="mr-3"/>
              <span className="font-medium text-sm mr-5">Доставим за 40 мин</span>
              <Link className="text-[#C95C3F] font-medium text-sm underline" to={"/delievery"}>Условия доставки</Link>
            </div>
            <p className="font-semibold text-sm mb-[2px]">Состав:</p>
            <p className="text-sm mb-10">{description} </p>

            <div className="flex relative items-center justify-between ">
              <span className="text-[#B7B7B7] line-through absolute top-[-10px] left-0">{crossedPrice} ₽</span>
              <span className="font-bold text-[20px] md:text-[32px] mr-[12px] md:mr-[55px] whitespace-nowrap">{price} ₽</span>

              <div className="flex py-2 px-2 md:py-3 md:px-3 transition duration-300 ease-in-out rounded-lg items-center border-borderCol border mr-3 md:mr-6">
                <span onClick={clickMinusItem} className={`text-[20px] md:text-3xl font-extralight text-accent mr-3 md:mr-6  border-transparent border rounded-[12px] px-2 ${itemCount > 0 ? " hover:bg-accent hover:text-white transition duration-300 ease-in-out delay-[40] cursor-pointer" : "text-gray-400" }`}>-</span>
                <span className="text-[24px] mr-3 md:mr-6">{itemCount}</span>
                <span onClick={clickPlusItem} className=" text-[20px] md:text-3xl font-extralight text-accent cursor-pointer border-transparent border rounded-[12px] px-2 hover:bg-accent hover:text-white transition duration-300 ease-in-out delay-[40]">+</span>

              </div>

              <Link to={"/cart"} className="text-[14px] font-bold flex justify-center items-center py-4 px-3 md:py-[16px]  md:px-[70px] bg-accent text-white rounded-[2px] transition duration-300 ease-in-out hover:bg-red-500">К оплате</Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Card
