import { configureStore } from '@reduxjs/toolkit';
import addToCart from '../Features/CartSlice';
import getCartNumber   from '../Features/CartSlice';


export const store = configureStore({
    reducer: {
        showCartCounter: getCartNumber,
        increaseCartCounter:addToCart
    }
}) 