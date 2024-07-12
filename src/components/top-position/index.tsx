import React from 'react'
import CatSVG from "../../assets/top-position/ill roll 1.svg?react"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from '../slider';
import { IState } from './types';

const TopPosition = () => {
  const [sliderRender, setSliderRender] = React.useState<IState>("top")

  const topClickHandler = () => {
    setSliderRender(prev => "top")
  }

  const newClickHandler = () => {
    setSliderRender(prev => "new")
  }
  return (
    <section className='relative mb-[54px] md:mb-[108px]'>
      <CatSVG className='absolute left-[-80px] top-[-20px]'/>
      <div className='flex justify-center md:justify-normal gap-8 mb-10'>
      <span onClick={topClickHandler} className={`text-[30px] md:text-[48px] cursor-pointer hover:opacity-80 ${sliderRender ==="new" && "text-greyText"}`}>Топ позиции</span>
      <span onClick={newClickHandler} className={`text-[30px] md:text-[48px] cursor-pointer hover:opacity-80 ${sliderRender ==="top" && "text-greyText"}`}>Новинки</span>

      </div>
        <Slider sliderRender={sliderRender}/>
    </section>
  )
}

export default TopPosition
