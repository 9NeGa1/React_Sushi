import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./redux/store"

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type MiniItem = {
    id: number;
    name: string;
    size: number;
    image: string;
    price: number;
    extraPay: number | null;
    count: number;
    nutritionalInfo: { "proteins": number, "carbohydrates": number, "fats": number, "calories": number };
    description: string;
    crossedPrice: number;


  }

  export type sortParams = {
    desc: "по умолчанию" | "По алфавиту" | "По цене" | "По популярности",
    params: "" | "name" | "price" | "popular"
  }

  export type filterParams = "" | "isHot" | "isSpicy" | "isNew" | "isTop"

  export type FullItemInfo = {
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
        nutritionalInfo: { "proteins": number, "carbohydrates": number, "fats": number, "calories": number } 
}

export type Validations = {
  isEmpty: boolean;
  minLength?: number;
  isEmail?: boolean;
  maxLength?: number;
  isPhone?: boolean;
}

