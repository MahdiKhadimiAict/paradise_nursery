import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, name, price, thumbnail } = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ id, name, price, thumbnail, qty: 1 });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.items.find((entry) => entry.id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((entry) => entry.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.qty, 0);
export const selectTotalCost = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.qty * item.price, 0);

const cartReducer = cartSlice.reducer;

export default cartReducer;