import React, { useState } from 'react'
import PointSVG from "../../assets/CommonPics/point.svg?react"
import TopPNG from "../../assets/CommonPics/top.png"
import HotJpg from "../../assets/CommonPics/hot.png"
import SpicyJpg from "../../assets/CommonPics/spicy.png"
import NewPNG from "../../assets/CommonPics/new.png"
import { addItem } from '../../redux/cart/cartSlice'
import { FullItemInfo, MiniItem, useAppDispatch } from '../../types'
import { Link } from 'react-router-dom'




const CardItem: React.FC<FullItemInfo> = ({
        name,
        size,
        calories,
        description,
        crossedPrice,
        isHot,
        isSpicy,
        image,
        price,
        isTop,
        isNew,
        scale,
        extraPay,
        id,
        nutritionalInfo
}) => {
  const [added, setAdded] = useState(false);

  const miniitem: MiniItem = {
    id, 
    name,
    size,
    image,
    price,
    extraPay,
    count: 0,
    nutritionalInfo,
    description,
    crossedPrice
  }

  const dispatch = useAppDispatch()
  const onClickAdd = () => {
    
    dispatch(addItem(miniitem))

    setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, 1000);
    
  }

    
  return (

    

    <div className={`flex flex-col relative justify-between ${added ? 'opacity-10' : ''}`}>
      <div>
        <div className='absolute right-0 w-[60px] md:w-[72px]'>
       {isTop && <img className='' src={TopPNG} alt="" />}
       {isNew && <img  src={NewPNG} alt="" />}
       </div>
       <div className='absolute left-0 z-50'>
        {isHot && <img src={HotJpg} alt=""/>}
        {isSpicy && <img src={SpicyJpg} alt=""/>}

       </div>

       <Link to={`/card/${id}`} state={miniitem} className='flex justify-center md:justify-start'>
      <img src={image} alt="" className='mb-[30px] rounded-lg'/>
      </Link>

      <div className='flex justify-between px-5'>
      <div className='flex gap-2 items-center '>
        <span className='text-greyText text-[14px] md:text-[16px]'>
        {size + " грамм"}        
        </span>
        <PointSVG/>
        <span className='text-greyText text-[14px] md:text-[16px]'>
            {calories + " Ккал"}
        </span>
      </div>
      <div className='flex items-center gap-2 relative'>
        {scale && <span className='bg-accent py-[2px] px-2 text-white rounded-sm cursor-pointer text-[12px] md:text-sm font-semibold'> {scale[0] + " см"}</span>}
        {scale && <PointSVG/>}
        {scale && <span className='bg-[#F5F5F5] py-[2px] px-2 text-greyText rounded-sm cursor-pointer text-[12px] md:text-sm font-semibold'> {scale[1] + " см"}</span>}
        {extraPay && <span className='absolute text-greyText right-0 top-[-30px] text-[15px]'>+{extraPay} ₽</span>}

      </div>
      </div>
      <h3 className='font-semibold text-[20px] text-center md:text-left md:text-2xl '>{name}</h3>
      <p className='text-sm mb-16 max-h-5'>{description}</p>
      </div>
      <div className='flex relative justify-between items-end '>
        <span className='absolute left-0 top-[-7px] text-greyText line-through text-sm'>{crossedPrice + " ₽"}</span>
        <span className='font-bold text-[25px] md:text-[32px]'>{price + " ₽"}</span>
        <button disabled={added ? true : false}  onClick={onClickAdd} className='flex justify-center items-center py-[10px] px-[56px] bg-accent text-white rounded-[2px] transition duration-300 ease-in-out hover:bg-red-500'>Заказать</button>

        
      </div>
      {added && (
        <div  style={{ opacity: 1 }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-2 rounded shadow font-bold text-red-900 text-[32px] z-100">
          Добавлен в корзину
        </div>
      )}
    </div>
  )
}

export default CardItem
