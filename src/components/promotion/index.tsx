import React from 'react'
import SVGIcon from "../../assets/promotion/roll.svg?react"
import FirstPicPNG from "../../assets/promotion/1.png"
import SecondPicPNG from "../../assets/promotion/2.png"
import ThirdPicPNG from "../../assets/promotion/3.png"
import SVGWave from "../../assets/promotion/wave.svg?react"



const Promotion = () => {
  return (
    <section className='py-[54px] md:py-[104px]'>
        <div className='flex gap-4 mb-7 md:mb-10'>
            <h2 className='font-semibold text-[36px] md:text-5xl'>Акции</h2>
            <SVGIcon className='w-[50px] md:w-[64px]'/>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6'>

        <div className='pt-3 pl-3 md:pt-6 md:pl-6 pr-5 md:pr-0 bg-[#d2f6ff] relative md:max-w-[392px] rounded-lg'>
                <h3 className='font-semibold text-[18px] md:text-2xl mb-1 max-w-[365px]'>Празднуй день рождения вместе с нами</h3>
                <p className='font-medium text-[14px] mb-[26px]'>Ролл в подарок при заказе в день рождения</p>
                <div className='flex justify-end'>
                    <img src={FirstPicPNG} alt="" />
                </div>
                <SVGWave className='absolute bottom-0 left-0 w-full h-auto bg-cover bg-repeat'/>
            </div>

            <div className='pt-3 pl-3 md:pt-6 md:pl-6 pr-5 md:pr-0 bg-[#FFD8DA] relative md:max-w-[392px] rounded-lg'>
                <h3 className='font-semibold text-[18px] md:text-2xl mb-1 max-w-[365px]'>Доставим заказ за 60 мин</h3>
                <p className='font-medium text-[14px] mb-[81px]'>или проморол за опоздание</p>
                
                <div className='flex justify-center'>
                    <img src={SecondPicPNG} alt="" />
                </div>
                <SVGWave className='absolute bottom-0 left-0 w-full h-auto bg-cover bg-repeat'/>
            </div>

            <div className='pt-3 pl-3 md:pt-6 md:pl-6 md:pr-0 bg-[#DBFFCF] relative md:max-w-[392px] rounded-lg pr-3'>
                <h3 className='font-semibold text-[18px] md:text-2xl mb-1 max-w-[365px]'>Приведи друга </h3>
                <p className='font-medium text-[14px] mb-[26px]'>и получи <b>250 ₽</b> на бонусный счет</p>
                <div className='flex justify-end'>
                    <img src={ThirdPicPNG} alt="" />
                </div>
                <SVGWave className='absolute bottom-0 left-0 w-full h-auto bg-cover bg-repeat'/>
            </div>
        </div>
           
    </section>
  )
}

export default Promotion
