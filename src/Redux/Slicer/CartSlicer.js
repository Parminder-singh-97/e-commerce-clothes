import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const { id, size, quantity } = action.payload;

      // Check if the product with the same size already exists
      const existingItem = state.cartItems.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        // If exists, update the quantity
        existingItem.quantity = quantity;
      } else {
        // If not, add a new item
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const [id] = action.payload;

      let NewArry = state.cartItems.filter((items) => items.id !== id);
      state.cartItems = NewArry;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    quantityplus: (state, action) => {
      const [id] = action.payload;

      let quantityplus = state.cartItems.filter((item) => item.id == id);

      quantityplus.map((item) => {
        if(item.quantity > 5){
          item.quantity = 6;
        }else{

          item.quantity += 1;
        }
      });
    },
    quantityMinus: (state, action) => {
      const [id] = action.payload;

      let quantityMinus = state.cartItems.filter((item) => item.id == id);

      quantityMinus.map((item) => {
        if (item.quantity < 2) {
          item.quantity = 1;
        } else {
          item.quantity -= 1;
        }
      });
    },
  },
});
export const {
  addtoCart,
  removeFromCart,
  clearCart,
  quantityMinus,
  quantityplus,
} = CartSlice.actions;

export default CartSlice.reducer;
