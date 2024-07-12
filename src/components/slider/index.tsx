import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import CardItem from '../card-item';
import {  useSelector } from 'react-redux';
import { fetchData } from '../../redux/fetch/fetchSlice';
import { selectFetchItems } from '../../redux/fetch/selectors';
import { useAppDispatch } from '../../types';
import { useMediaQuery } from '@react-hook/media-query';

type Props = {
  sliderRender: "new" | "top"
}

const Slider: React.FC<Props> = ({sliderRender}) => {

  const isMd = useMediaQuery('(min-width: 768px)');

  const {items} = useSelector(selectFetchItems)
  const dispatch = useAppDispatch()
  const renderAttr = sliderRender === "new" ? "isNew" : "isTop";
  useEffect(() => {
      dispatch(fetchData({sortBy: "", filterParams: "", categoryType: "Pizzas"}))
  }, [])
  const filterTop = items.filter(item => item?.[renderAttr] === true)
 
    return (
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={!isMd ? 1 : 3}
        navigation
        
      >

        {
            filterTop.map(item =>{
              
                return <SwiperSlide key={item.id + ""} >
                  <CardItem {...item}/>
                </SwiperSlide>} 
            )
        }
      </Swiper>
      )
}

export default Slider
