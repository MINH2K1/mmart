import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import userAction from "./reducers/userAction";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userAction,
  },
});
export default store;
