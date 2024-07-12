import React, { useState } from 'react'
import Registration from '../registration'
import LoginForm from '../login'
import CloseIcon from "../../assets/header/close.svg?react"

type Props = {
    setActive: ((prev: (prev: boolean) => boolean) => void)
}

const ModalRegistration: React.FC<Props> = ({ setActive}) => {
  const [isRegistraion, setIsRegistration] = useState(true)
  return (
    <div onClick={() => setActive(prev => !prev)} className='fixed top-0 left-0 z-[80] bg-black/40 h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='relative bg-white py-5 px-10 rounded-md border-blue-400 border'  onClick={e => e.stopPropagation()}>
      <CloseIcon onClick={() => setActive(prev => !prev)} className='absolute top-2 right-2 w-8 cursor-pointer hover:opacity-75'/>
        
        <div className='flex gap-5'>
        <h2 onClick={() => setIsRegistration(true)} className={`text-[40px] font-semibold cursor-pointer ${isRegistraion ? "text-black underline" : "text-gray-400"}`}>Регистрация</h2>
        <h2 onClick={() => setIsRegistration(false)} className={`text-[40px] font-semibold cursor-pointer ${!isRegistraion ? "text-black underline" : "text-gray-400"}`}>Вход</h2>
        </div>
        {isRegistraion && <Registration/>}
        {!isRegistraion && <LoginForm/>}

      </div>
    </div>
  )
}

export default ModalRegistration
