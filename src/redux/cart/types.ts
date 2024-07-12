import { MiniItem } from "../../types";




export type fetchArray = {
    name: string,
    size: number,
    calories: number,
    description: string,
    crossedPrice: number,
    isHot: boolean,
    isSpicy: boolean,
    image: string,
    isTop: boolean,
    price: number,
    isNew: boolean,
    scale: number[] | null,
    extraPay: number | null,
    id: number,
    popular: number;
    count: number,
    nutritionalInfo: { "proteins": number, "carbohydrates": number, "fats": number, "calories": number }
}

export type initState = {
    items: MiniItem[];
    totalPrice: number
  }