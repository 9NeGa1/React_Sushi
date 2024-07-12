import React from 'react'
import PhoneIcon from "../../assets/header/phone-fill.svg?react"
const Phone = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex gap-2 items-center font-medium text-[14px] md:text-[16px]'>
      <PhoneIcon />
        <span>+7 (495) 617-14-24</span>
        </div>

        <p className='text-xs text-gray-400 font-medium'>c 10:00 до 23:00</p>
    </div>
  )
}

export default Phone
