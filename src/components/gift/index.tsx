import React from 'react'
import Btn from "../../assets/Gift/btn.jpg"
import Picture from "../../assets/Gift/IMG.jpg"

const Gift = () => {
  return (
    <section className='flex flex-col md:flex-row mb-10 md:mb-16 pl-[30px] xl:pl-[60px] pr-[50px] xl:pr-[114px] justify-between'>
      <div className='pt-[30px] md:pt-[117px]'>
        <div className='max-w-[491px] mb-10 md:mb-20 text-center md:text-left'>
            <h2 className='font-bold text-[30px] md:text-[40px]'>Калифорния <span className='text-accent'> в подарок</span> при первом заказе</h2>
            <p className='font-medium text-xl'>от 1500 ₽</p>
        </div>
        
      </div>
      <div>
        <img src={Picture} alt="" />
      </div>
    </section>
  )
}

export default Gift
