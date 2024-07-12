import React from 'react'
import FirstSVG from "../../assets/cart/01.svg?react"
import SecondSVG from "../../assets/cart/02.svg?react"
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/selectors'

const CartForm = () => {

  const {totalPrice} = useSelector(selectCart)

  return (
    <div>
          <form>
          <div className="p-6 bg-[#F5F5F5] mb-3">
            <div className="flex gap-4 mb-[18px] items-center">
              <FirstSVG/>
              <h2 className="font-semibold text-[20px]">Контактные данные</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <input name="name" type="text" placeholder="Ваше Имя" className=" md:w-[272px] p-4 placeholder:text-sm placeholder:text-greyText outline-none"/>
              <input name="phone" type="tel" placeholder="Телефон" className="md:w-[272px] p-4 placeholder:text-sm placeholder:text-greyText outline-none"/>

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
            <button className='md:text-[20px] rounded-sm font-semibold w-full flex justify-center items-center py-[20px] px-[56px] bg-accent text-white transition duration-300 ease-in-out hover:bg-red-500'>Подтвердить заказ</button>

          </div>
          </form>
        </div>
  )
}

export default CartForm
