import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false
};

export const toggleNavSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    openNav: (state) => {
      state.toggle = true;
    },
    closeNav: (state) => {
      state.toggle = false;
    }
  }
});

export const toggleNav = (state) => state.toggleNavState.toggle;

export const { openNav, closeNav } = toggleNavSlice.actions;

export default toggleNavSlice.reducer;
