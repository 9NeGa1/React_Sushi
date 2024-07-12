import React from 'react'
import DelieveryHead from '../../components/delievery-head'
import MapPNG from "../../assets/delievery/map.png"
import DelieveryInfo from '../../components/delievery-info'
import DelieveryPayment from '../../components/delievery-payment'

const Delievery = () => {
  return (
    <section className='pt-5 md:pt-10'>
      <DelieveryHead/>
      <div className='mb-6 md:mb-12'>
        <img src={MapPNG} alt="" />
      </div>
      <DelieveryInfo/>
      <DelieveryPayment/>
    </section>
  )
}

export default Delievery
