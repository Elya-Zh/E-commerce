import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false
};

export const toggleCartSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    openCart: (state) => {
      state.toggle = true;
    },
    closeCart: (state) => {
      state.toggle = false;
    }
  }
});

export const toggleCart = (state) => state.toggleCartState.toggle;

export const { openCart, closeCart } = toggleCartSlice.actions;

export default toggleCartSlice.reducer;
