import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/ProductsSlice";
import cartReducer from "./reducers/CartSlice";
import toggleCartReducer from "./reducers/ToggleCartSlice";
import toggleNavReducer from "./reducers/ToggleNavSlice";
import isLoadingReducer from "./reducers/IsLoadingSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage
};

const allReducers = combineReducers({
  cartState: cartReducer,
  productsState: productsReducer,
  toggleCartState: toggleCartReducer,
  toggleNavState: toggleNavReducer,
  loadingState: isLoadingReducer
});
const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});
export const persistor = persistStore(store);
