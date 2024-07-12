import React from 'react'
import HeadSVG from "../../assets/delievery/ic 2.svg?react"
import FirstImg from "../../assets/delievery/pic1.png"
import SecondImg from "../../assets/delievery/pic2.png"
import ThirdImg from "../../assets/delievery/pic3.png"



const DelieveryPayment = () => {
  return (
    <section className='mb-[140px]'>
      <div className='flex gap-4 mb-10'>
        <h2 className='font-semibold text-[40px]'>Оплата</h2>
        <HeadSVG/>
      </div>
      <div className='grid md:grid-cols-3 gap-6 mb-[51px]'>
        <img src={FirstImg} alt="" />
        <img src={SecondImg} alt="" />
        <img src={ThirdImg} alt="" />
      </div>
        <p className='md:text-[20px] mb-4 font-light'>Мы предлагаем Вам 3 самых распространенных варианта для расчета: наличные, оплата онлайн или бонусами. Просто отметьте наиболее удобный для Вас способ оплаты при оформлении заказа на сайте или сообщите об этом оператору по телефону.
        </p>    
         <p className='md:text-[20px] mb-4 font-light'>Доставка «Рикша» – это четкие стандарты работы, высокий уровень сервиса и забота о каждом госте. Мы ежедневно развиваемся, чтобы услышать три слова «Рикша – это любовь».</p>
    </section>
  )
}

export default DelieveryPayment
