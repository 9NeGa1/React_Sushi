import React from 'react'
import { useAppDispatch } from '../../types'
import { removeUser } from '../../redux/user/userSlice'
import { useNavigate } from 'react-router'

const PrivateOffice = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const signOutHandler = () => {
    dispatch(removeUser())
    navigate("/")
  }
  return (
    <div className='py-[50px]'>
      <h2 className='font-semibold text-[40px]'>Ваш личный кабинет</h2>
      <div>
      <button onClick={signOutHandler} className='md:text-[20px] rounded-sm font-semibold w-[300px] flex justify-center items-center py-[20px] px-[56px] bg-accent text-white transition duration-300 ease-in-out hover:bg-red-500'>Выйти из аккаунта?</button>
      

      </div>
    </div>
  )
}

export default PrivateOffice
