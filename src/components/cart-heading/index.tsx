
import Lock from "../../assets/header/shopping-cart-2-fill.svg?react"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/selectors'

const CartHeading = () => {
  const {totalPrice, items} = useSelector(selectCart)
  return (
    <Link to={"/cart"}>
    <div className='whitespace-nowrap max-h-14 flex bg-[#F5F5F5] transition delay-50 hover:bg-slate-400 active:bg-slate-500 gap-4 pr-6 pl-6 py-4 rounded-md items-center relative'>
      <span className='text-sm font-medium max-h-5 max-w-5 relative right-2'>
        {totalPrice + " ₽"}
      </span>
      <div className='w-[1px] h-6 bg-white'>
      </div>
      <div>
        <Lock/>
        <div className='absolute text-sm rounded-2xl bg-[#E07153] text-white px-2 text-center font-medium top-[10px] right-[12px]'>
            <span>{items.reduce((sum, item) => sum + item.count, 0)}</span>
        </div>
      </div>

    </div>
    </Link>
  )
}

export default CartHeading
