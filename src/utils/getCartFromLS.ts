import { MiniItem } from "../types"
import { calcTotalPrice } from "./calcTotalPrice"

export const getCartFromLS = () => {
    const json = localStorage.getItem("cart")
    const items = json ? JSON.parse(json) : []
    const totalPrice = calcTotalPrice(items)

    return {
        items: items as MiniItem[],
         totalPrice
        }
}