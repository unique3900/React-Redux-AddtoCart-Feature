import { configureStore } from '@reduxjs/toolkit';
import { addToCart, getCartNumber } from '../Features/CartSlice';

export const store = configureStore({
    reducer: {
        showCartCounter: getCartNumber,
        increaseCartCounter:addToCart
    }
}) 