import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
export const CartSlice = createSlice({
    name: "cartCounter",
    initialState,
    reducers: {
        getCartNumber: (state) => {
            state.value = state.value;
        },
        addToCart : (state) => {
            state.value = state.value + 1;
        }
    }
})

export const { getCartNumber, addToCart } = CartSlice.actions;
export default CartSlice.reducer;