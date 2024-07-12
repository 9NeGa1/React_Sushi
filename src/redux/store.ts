import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import fetchSlice from "./fetch/fetchSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer: {
        cartSlice,
        fetchSlice,
        userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch