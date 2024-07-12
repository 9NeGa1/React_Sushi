import React from 'react'


type Props = {
    image: string;
    time: number;
    minSum: number;
    header: string
}

const DelieveryZone:React.FC<Props> = ({
    image,
    time,
    minSum,
    header
}) => {
  return (
      <div className='flex gap-6 flex-col md:flex-row items-center mb-6 md:mb-0'>
        <img src={image} alt="" className='w-[200px] md:w-max'/>
        <div className='flex flex-col justify-center gap-3'>
          <h3 className='font-semibold text-[24px] text-[#7E9E1E] '>{header}</h3>
          <p>Доставка: <span className='font-semibold'>до {time} минут</span></p>
          <p>Минимальная сумма заказа: <span className='font-semibold'>{minSum} ₽</span></p>
          <p>Доставляем <span className='font-semibold'>БЕСПЛАТНО</span></p>

        </div>
      </div>
  )
}

export default DelieveryZone
