import { MiniItem } from "../types"


export const calcTotalPrice = (items: MiniItem[]) => {
    return items.reduce((sum, item) => sum + item.price * item.count, 0)
}