import { useSelector } from "react-redux"
import CartItem from "../../components/cart-item"
import { selectCart } from "../../redux/cart/selectors"
import EmptyCart from "../../components/empty-cart"
import CartForm from "../../components/cart-form"



const Cart = () => {

  const {items} = useSelector(selectCart)


  if(items.length === 0) {
    return <EmptyCart/>
    }

  return (
    <section className="mt-[32px] md:mt-[64px] mb-10">
      <h2 className="font-semibold text-[30px] md:text-[40px] mb-5 md:mb-10">Оформление заказа</h2>
      <div className="flex flex-col md:flex-row gap-6">

        {/* первый блок */}
        <div>
          { 
            items.map((item, index) => {
            return <CartItem key={index} {...item}/>

            })
          }
        </div>

        {/* второй блок(правый) */}

        <CartForm />
      </div>
    </section>
  )
}

export default Cart
