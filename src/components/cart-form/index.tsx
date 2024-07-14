import React from 'react'
import FirstSVG from "../../assets/cart/01.svg?react"
import SecondSVG from "../../assets/cart/02.svg?react"
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/selectors'
import useInput from '../../hooks/use-input/useInput'

const CartForm = () => {

  const {totalPrice} = useSelector(selectCart)
  const name = useInput("", { isEmpty: true})
  const phone = useInput("", { isEmpty: true, isPhone: true})
  
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Ожидайте звонок оператора, ваш заказ принят")
  }

  return (
    <div>
          <form onSubmit={(e) => {onSubmit(e)}}>
          <div className="p-6 bg-[#F5F5F5] mb-3">
            <div className="flex gap-4 mb-[18px] items-center">
              <FirstSVG/>
              <h2 className="font-semibold text-[20px]">Контактные данные</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <input required value={name.value} onBlur={(e) => name.onBlur(e)} onChange={(e) => name.onChange(e)} name="name" type="text" placeholder="Ваше Имя" className=" md:w-[272px] p-4 placeholder:text-sm placeholder:text-greyText outline-none"/>
              <input required value={phone.value} onBlur={(e) => phone.onBlur(e)} onChange={(e) => phone.onChange(e)} name="phone" type="tel" placeholder="Телефон" className="md:w-[272px] p-4 placeholder:text-sm placeholder:text-greyText outline-none"/>

            </div>
            <div>
         {name.isDirty && name.isEmpty && <p className='text-red-500'>Имя не указано</p>}
         {phone.isDirty && phone.isEmpty && <p className='text-red-500'>Телефон не указан</p>}
         {phone.isDirty && phone.phoneError && phone && <p className='text-red-500'>Неверно указан номер</p>}

            </div>
          </div>

          <div className="secondBlock p-6 bg-[#F5F5F5] mb-3">
          <div className="flex gap-4 mb-7 items-center">
              <SecondSVG/>
              <h2 className="font-semibold text-[20px]">Параметры оплаты</h2>
            </div>

              <div className="border-t border-t-borderCol py-4 mb-6">
                <div className="flex justify-between mb-5">
                  <span>Сумма заказа</span>
                  <span className="font-semibold text-[20px]">{totalPrice} ₽ </span>
                </div>

                <div className="flex justify-between">
                  <span>Стоимость доставки</span>
                  <span className="font-semibold text-[20px]">0 ₽</span>
                </div>
              </div>

              <div className="pt-4 border-t-accent border-t mb-6">
                <div className="flex justify-between">
                  <span className="md:text-[20px]">Итоговая сумма заказа</span>
                  <span className="font-semibold text-[20px] md:text-[24px]">{totalPrice} ₽</span>
                </div>
              </div>
            
            <input type="text" className="mb-6 w-full md:w-[552px] px-4 outline-none placeholder:text-greyText h-[96px]" placeholder="Комментарий к заказу"/>
            <button disabled={!(phone.inputValid || name.inputValid)} className='md:text-[20px] rounded-sm font-semibold w-full flex justify-center items-center py-[20px] px-[56px] bg-accent text-white transition duration-300 ease-in-out hover:bg-red-500'>Подтвердить заказ</button>

          </div>
          </form>
        </div>
  )
}

export default CartForm
