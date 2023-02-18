import { createSlice } from "@reduxjs/toolkit";
import { data } from "../products";
console.log("state");

const initialState = {
  products: data
};
let filteredProducts = data;
console.log(data);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      const searchResult = filteredProducts.filter((el) =>
        el.fields.name.includes(action.payload.toLowerCase())
      );
      state.products = searchResult;
    },
    filterCategory: (state, action) => {
      if (action.payload === "all") {
        state.products = data;
      } else {
        const newProducts = data.filter(
          (item) => item.fields.company === action.payload
        );
        state.products = newProducts;
      }
      filteredProducts = state.products;
    },
    filterByRange: (state, action) => {
      const newProducts = filteredProducts.filter(
        (item) => item.fields.price / 100 < parseInt(action.payload, 10)
      );
      state.products = newProducts;
    }
  }
});

export const allProducts = (state) => state.productsState.products;

export const {
  filterCategory,
  searchFilter,
  filterByRange
} = productsSlice.actions;
export default productsSlice.reducer;
