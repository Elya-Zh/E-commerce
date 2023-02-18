import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { data } from "../products";

const initialState = {
  inCart: []
};

export const cartSlice = createSlice({
  name: "inCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let newItem = data.find((item) => item.id === action.payload.id);
      newItem = { ...newItem, count: 1 };
      if (!state.inCart.some((el) => el.id === newItem.id)) {
        state.inCart.unshift(newItem);
        let name = action.payload.fields.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        toast.success(`"${name}" added to cart`, {
          position: "bottom-left"
        });
      } else {
        let newArr = state.inCart.map((el) =>
          el.id === newItem.id ? { ...el, count: el.count + 1 } : el
        );
        let name = action.payload.fields.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        toast.info(`increased quantity of "${name}"`, {
          position: "bottom-left"
        });
        state.inCart = newArr;
      }
    },
    removeFromCart: (state, action) => {
      let newArr = state.inCart.filter((el) => el.id !== action.payload.id);
      let name = action.payload.fields.name;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      toast.error(`"${name}" removed from cart `, {
        position: "bottom-left"
      });
      state.inCart = newArr;
    },
    increment: (state, action) => {
      let newArr = state.inCart.map((el) =>
        el.id === action.payload.id ? { ...el, count: el.count + 1 } : el
      );
      state.inCart = newArr;
    },
    decrement: (state, action) => {
      let newArr = state.inCart.map((el) =>
        el.id === action.payload.id ? { ...el, count: el.count - 1 } : el
      );

      state.inCart = newArr;
    }
  }
});

export const selectCart = (state) => state.cartState.inCart;
export const {
  addToCart,
  removeFromCart,
  increment,
  decrement,
  popUpInfo,
  popUpSuccess
} = cartSlice.actions;
export default cartSlice.reducer;
