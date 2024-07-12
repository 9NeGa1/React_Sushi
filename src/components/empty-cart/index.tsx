
import EmptyPNG from "../../assets/cart/cartEmpty.png"
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] ">
      <h2 className="font-semibold text-[32px]">Корзина пустая 😕</h2>
      <p className="text-[#777] text-[20px] mb-8">Для того, чтобы заказать еду, перейдите в каталог.</p>
      <img className="w-[300px] mb-8" src={EmptyPNG} alt="" />
      <Link to={"/catalog"} className='text-lg flex justify-center font-semibold mx-auto py-3 rounded-[25px] mb-10  w-56 bg-[#232323] text-white hover:opacity-90 transition-opacity duration-200'>
      Перейти в каталог
      </Link>
    </div>
  )
}

export default EmptyCart
