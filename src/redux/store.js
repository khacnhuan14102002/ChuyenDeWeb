import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./slides/productSlide";

export const store = configureStore({
    reducer: {
        product: productReducer
    },
})