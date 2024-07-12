import React from 'react'
import Free from "../../assets/features/1.jpg"
import Delievery from "../../assets/features/2.jpg"
import Gift from "../../assets/features/3.jpg"
import Fresh from "../../assets/features/4.jpg"
import FreeText from "../../assets/features/free.png"
import DelieverText from "../../assets/features/defiever.png"
import GiftText from "../../assets/features/gift.png"
import FreshText from "../../assets/features/fresh.png"
import BtnTop from "../../assets/features/btnTop.png"







const Features = () => {
  const topScroller = () => scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  return (
    <section id='features' className='mb-[54px] md:mb-[108px] flex flex-col md:flex-row gap-10 md:gap-[144px] items-center relative'>
      <div className='flex flex-col items-center'>

        <img src={FreeText} alt="" />
        <img src={Free} alt="" className='mb-3' />
        <p className='text-sm font-bold'>доставка</p>
        <p>при заказе от 600 ₽</p>
      </div>

      <div className='flex flex-col items-center'>

        <img src={DelieverText} alt="" />
        <img src={Delievery} alt="" className='mb-3' />
        <p className='text-sm font-bold'>за 60 мин</p>
        <p>или проморол за опоздание</p>
      </div>

      <div className='flex flex-col items-center'>

        <img src={GiftText} alt="" />
        <img src={Gift} alt="" className='mb-3' />
        <p className='text-sm font-bold'>бонусы</p>
        <p>бонусная система 1 ₽ = 1 бонус</p>
      </div>

      <div className='flex flex-col items-center'>

        <img src={FreshText} alt="" />
        <img src={Fresh} alt="" className='mb-3' />
        <p className='text-sm font-bold'>продукты</p>
        <p>Никаких заготовок!</p>
      </div>
      
        <img className='absolute w-[140px] md:w-[220px] bottom-0 right-[-20px] md:right-[-200px] cursor-pointer hover:opacity-90 transition duration-300 ease-out' onClick={topScroller} src={BtnTop} alt="" />
      
    </section>
  )
}

export default Features
