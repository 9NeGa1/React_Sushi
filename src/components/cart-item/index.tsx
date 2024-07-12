import React from 'react'
import PointSVG from "../../assets/CommonPics/point.svg?react"
import DeleteSVG from "../../assets/cart/delete.svg?react"
import { addItem, minusItem, removeItem } from '../../redux/cart/cartSlice'
import { MiniItem, useAppDispatch } from '../../types'


const CartItem: React.FC<MiniItem> = ({
  count,
  extraPay,
  id,
  image,
  name,
  price,
  size,
  nutritionalInfo,
  description,
  crossedPrice
}) => {
  const dispatch = useAppDispatch();

  const item: MiniItem = {
  count,
  extraPay,
  id,
  image,
  name,
  price,
  size,
  nutritionalInfo,
  description,
  crossedPrice
  }

  const minusProduct = () => {
    dispatch(minusItem(item))
  }
  const plusProduct = () => {
    dispatch(addItem(item))
  }

  const removeProduct = () => {
    dispatch(removeItem(item))
  }
  return (
    <div className="flex py-6 border-y-borderCol border-y-1 md:w-[560px] justify-between ">
            <div className="flex gap-4 items-center flex-col md:flex-row">
              <img
                className="w-[98px] h-[64px]"
                src={image}
                alt={name}
              />
              <div>
                <p className="font-semibold text-sm mb-[2px] text-center md:text-left max-w-[100px] md:max-w-max ">{name}</p>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-sm text-accent">
                    30 см
                  </span>
                  <PointSVG />
                  <span className="text-sm text-greyText">50 см</span>
                </div>
              </div>
            </div>

            <div className="flex py-[14px] items-center">
              <div className="flex py-1 border-borderCol border rounded-lg items-center mr-4">
               
                <span onClick={minusProduct} className={`text-2xl font-extralight text-accent mr-2 cursor-pointer border-transparent border rounded-[12px] px-2 ${count > 0 ? "hover:bg-accent hover:text-white" : "text-gray-500"} transition duration-300 ease-in-out delay-[40]`}>
                  -
                </span>
                <span className=" mr-2">{count}</span>
                <span onClick={plusProduct} className="text-2xl font-extralight text-accent cursor-pointer border-transparent border rounded-[12px] px-2 hover:bg-accent hover:text-white transition duration-300 ease-in-out delay-[40]">
                  +
                </span>
              </div>
              <p className="font-semibold mr-[50px] max-w-[9px] whitespace-nowrap">{price * count} ₽ </p>
              <DeleteSVG onClick={removeProduct} className="hover:opacity-70 cursor-pointer" />
            </div>
          </div>

  )
}

export default CartItem
