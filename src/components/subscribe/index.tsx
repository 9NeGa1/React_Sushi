import React from 'react'
import InstSVG from "../../assets/subscribe/inst.svg?react"
import style from "./subscribe.module.css"
import FirstIMG from "../../assets/subscribe/1.jpg"
import SecondIMG from "../../assets/subscribe/2.jpg"
import ThirdIMG from "../../assets/subscribe/3.jpg"
import FourthIMG from "../../assets/subscribe/4.jpg"
import FifthIMG from "../../assets/subscribe/5.jpg"
import SixthIMG from "../../assets/subscribe/6.jpg"


const Subscribe = () => {
  return (
    <section id='subscribe' className='pt-[50px] md:pt-[140px] mb-[50px] md:mb-[195px]'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-[30px] md:mb-[58px]'>
        <h3 className='font-semibold text-[30px] md:text-[40px] text-center md:text-left max-w-[468px] mb-5 md:mb-0'>
        А вы уже подписались на наш <span className='text-accent'>Instagram</span>?
        </h3>
        <div>
        <a href="#" className='font-bold text-[24px] flex gap-[6px] py-[15px] md:py-[22px] pr-[32px] pl-[46px] bg-accent text-white items-center transition duration-300 ease-in-out hover:bg-red-500'>
            <InstSVG/>
        @riksha_sushi
        </a>
        </div>
      </div>
      <div className={style.gridContainer}>
<img className={style.first} src={FirstIMG} alt=""/>
<img className={style.second} src={SecondIMG} alt=""/>
<img className={style.third} src={ThirdIMG} alt=""/>
<img className={style.fourth} src={FourthIMG} alt=""/>
<img className={style.fifth} src={FifthIMG} alt=""/>
<img className={style.sixth} src={SixthIMG} alt=""/>
  </div>
    </section>
  )
}

export default Subscribe
