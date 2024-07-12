import React from 'react'
import HeadSVG from "../../assets/delievery/head.svg?react"
import GreenPNG from "../../assets/delievery/green.png"
import YellowPNG from "../../assets/delievery/yellow.png"

import DelieveryZone from '../delievery-zone'

const DelieveryHead = () => {
  return (
    <section className='mb-6 md:mb-12'>
    <div className='flex gap-2 mb-14 items-end justify-center md:justify-normal'>
    <h1 className='font-semibold text-[40px]'>Доставка</h1>
    <HeadSVG/>
    </div>
      <div className='flex justify-between flex-col md:flex-row'>

        <DelieveryZone image={GreenPNG} time={29} minSum={600} header='Зеленая зона'/>
        <DelieveryZone image={YellowPNG} time={59} minSum={800} header='Желтая зона'/>

     </div>


    
    </section>
  )
}

export default DelieveryHead
