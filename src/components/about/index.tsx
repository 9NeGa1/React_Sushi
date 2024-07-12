import React from 'react'
import HeadSVG from "../../assets/about/head.svg?react"
import IMGJpg from "../../assets/about/image.jpg"

const About = () => {
  return (
    <section id='about' className='mb-[44px] lg:mb-[88px] flex flex-col lg:flex-row justify-between'>
      <div className='pt-[43px] lg:pt-[87px]'>
        <div className='flex gap-4 mb-[20px] lg:mb-[41px]'>
            <h2 className='font-semibold text-[36px] lg:text-5xl '>О компании</h2>
            <HeadSVG className='w-[50px] lg:w-[64px]'/>
        </div>
        <p className='font-light text-[18px] md:text-[20px] lg:max-w-[553px] break-words mb-7 lg:mb-5'>Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш стол и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу друзей. Все блюда готовятся исключительно из свежих продуктов и по оригинальным рецептам Нашего шеф-повара.</p>
       
        <p className='font-light text-[18px] md:text-[20px] lg:max-w-[553px] break-words mb-7 lg:mb-0'>
         Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! У вас есть возможность сделать предварительный заказ на определенный день и время.</p>
      </div>
      <img src={IMGJpg} alt="" />
    </section>
  )
}

export default About
