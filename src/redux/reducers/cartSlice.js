import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.quantity) * Number(existingItem.price);
      }
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return (total = total + Number(item.totalPrice));
      }, 0);
      //   console.log(state.totalAmount);
      //   console.log(state.totalQuantity);
    },
    removeItem: (state, action) => {
      const { value, quantity } = action.payload;
      console.log(quantity);
      console.log(value);
      var newState = state.cartItems.filter((item) => item.id !== value);
      state.cartItems = [...newState];
      const quantityNew = state.totalQuantity;
      state.totalQuantity = quantityNew - quantity;
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return (total = total + Number(item.totalPrice));
      }, 0);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
