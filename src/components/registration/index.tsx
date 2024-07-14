import { useState } from 'react'
import { useAppDispatch } from '../../types'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../redux/user/userSlice';
import useInput from '../../hooks/use-input/useInput';

const Registration = () => {


const name = useInput("", { isEmpty: true, minLength: 3});
const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
const pass = useInput("", { isEmpty: true, minLength: 6, maxLength: 10 });
const passAgain = useInput("", { isEmpty: true, minLength: 6, maxLength: 10 });




const dispatch = useAppDispatch();

const handleSubmit = (email: string, password: string, e:React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      
      dispatch(setUser({
        
        email: user.email,
        id: user.uid,
        //@ts-ignore
        token: user.accessToken
      }))
    })
    .catch(error => alert("Данный email уже зарегистрирован!"))
}


  return (
    <form className='relative' action="">
         <p className='text-[#87898F] text-[20px] mb-2'>Имя:</p>
         <input value={name.value} onBlur={(e) => name.onBlur(e)} onChange={(e) => name.onChange(e)}  type={"text"} placeholder="Ваше имя" className='form__input'/>
         {name.isDirty && name.isEmpty && (
          <p className='text-red-500'>Поле не может быть пустым</p>
        )}
         
         <p className='text-[#87898F] text-[20px] mb-2'>Email:</p>
         <input value={email.value} onBlur={(e) => email.onBlur(e)} onChange={(e) => email.onChange(e)}  type={"email"} placeholder="Ваш Email" className='form__input'/>
         {email.isDirty && email.isEmpty && <p className='text-red-500'>Поле не может быть пустым</p>}
        {email.isDirty && email.minLengthError && <p className='text-red-500' >Некорректная длина</p>}
        {email.isDirty && email.emailError && <p className='text-red-500'>Некорректный емейл</p>}
         <p className='text-[#87898F] text-[20px] mb-2'>Ваш пароль:</p>
         
        <input value={pass.value} onChange={(e) => pass.onChange(e)} onBlur={(e) => pass.onBlur(e)} type={"password"} placeholder="Введите пароль" className='form__input'/>
         
         {pass.isDirty && pass.isEmpty && (
          <p className='text-red-500'>Поле не может быть пустым</p>
        )}
        {pass.isDirty && (pass.minLengthError || pass.maxLengthError) && (
          <p className='text-red-500'>Пароль должен быть от 6 до 10 символов</p>
        )}
        
         <p className='text-[#87898F] text-[20px] mb-2'>Подтвердите пароль:</p>
         <input value={passAgain.value} onChange={(e) => passAgain.onChange(e)} onBlur={(e) => passAgain.onBlur(e)} type={"password"} placeholder="Подтвердите пароль" className='form__input'/>
         {passAgain.isDirty && pass.value !== passAgain.value && <p className='text-red-500'>Пароли не совпадают</p>}
          <button disabled={!(name.inputValid && email.inputValid && pass.inputValid && passAgain.inputValid && pass.value === passAgain.value)} onClick={(e) => handleSubmit(email.value, pass.value, e)} className='bg-accent text-white p-3 rounded-lg w-full mt-2 transition duration-300 ease-in-out active:bg-red-500'>Зарегистрироваться</button>
    </form>
  )
}

export default Registration
