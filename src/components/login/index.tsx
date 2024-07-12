import React, { useState } from 'react'
import AuthInput from '../../ui-components/AuthInput'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from '../../types';
import { setUser } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router';
import useInput from '../../hooks/use-input/useInput';

const LoginForm = () => {
 
const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
const pass = useInput("", { isEmpty: true, minLength: 6, maxLength: 10 });

const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const handleLogin = (email: string, password: string, e:React.MouseEvent<HTMLButtonElement>) => {
    const auth = getAuth()
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          //@ts-ignore
          token: user.accessToken
        }))
        navigate("/lc")
      })
      .catch(() => {
        alert("Пользователь не зарегистрирован!")
      })


  }

  return (
    <form action="">
         <p className='text-[#87898F] text-[20px] mb-2'>Email:</p>
         <input value={email.value} onBlur={(e) => email.onBlur(e)} onChange={(e) => email.onChange(e)}  type={"email"} placeholder="Ваш Email" className='form__input'/>
         {email.isDirty && email.isEmpty && <p className='text-red-500'>Поле не может быть пустым</p>}
        {email.isDirty && email.minLengthError && <p className='text-red-500' >Некорректная длина</p>}
        {email.isDirty && email.emailError && <p className='text-red-500'>Некорректный емейл</p>}
         <p className='text-[#87898F] text-[20px] mb-2'>Ваш пароль:</p>
         <input value={pass.value} onBlur={(e) => pass.onBlur(e)} onChange={(e) => pass.onChange(e)}  type={"password"} placeholder="Введите пароль" className='form__input'/>
         {pass.isDirty && (pass.minLengthError || pass.maxLengthError) && (
          <p className='text-red-500'>Пароль должен быть от 6 до 10 символов</p>
        )}
          <button disabled={!(pass.inputValid || email.inputValid)} onClick={(e) => handleLogin(email.value, pass.value, e)} className='bg-accent text-white p-3 rounded-lg w-full mt-2 transition duration-300 ease-in-out active:bg-red-500'>Войти</button>
    </form>
  )
}

export default LoginForm
