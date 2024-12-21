import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {saveCartToFirestore} from '../../FireBase/FireBaseApp'
// import {saveCartToFirestore,loadCartFromFirestore} from '../../FireBase/FireBaseApp'
// // Save cart to Firestore
// export const saveCart = createAsyncThunk(
//   "cart/saveCart",
//   async (args, { getState }) => {
//     const { userId } = args; // Get user ID from args
//     const { cartItems } = getState().cart; // Access cart state
//     await saveCartToFirestore(userId, cartItems);
//   }
// );

// // Load cart from Firestore
// export const loadCart = createAsyncThunk("cart/loadCart", async (userId) => {
//   const cartItems = await loadCartFromFirestore(userId);
//   // console.log(cartItems,userId);
//   return cartItems;
// });

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: false || JSON.parse(localStorage.getItem('cartItems')),
    loginUserId: '',
    loginUserName: '',
  },
  reducers: {
    setCartItemsFromFirebase: (state,action) => {
      // Fetch cart items from Firestore and update the cartItems state
      state.cartItems = action.payload;
      console.log(state.cartItems)
    

    },
    setLoginUserName: (state, action) => {

      state.loginUserName = action.payload;
      console.log(state.loginUserName)
    },
    setLoginUserId: (state, action) => {
      state.loginUserId = action.payload;
      console.log(state.loginUserId)
    },
    addtoCart: (state, action) => {
      const { id, size, quantity } = action.payload;

      const alreadyItem = state.cartItems.find((item) => item.id === id);
      // const sizeExist = state.cartItems.filter((item) => item)
      // console.log(sizeExist)
      console.log(alreadyItem);

      if (!alreadyItem) {
        const existingItem = state.cartItems.find(
          (item) => item.id === id

          // const existingsize =state.cartItems.find((item) => item.size ===)
        );

        if (existingItem) {
          existingItem.quantity = quantity;
        } else {
          state.cartItems.unshift(action.payload);
        }
      } else {
        // if(existingItem.size == sizeExist ){
        //   existingItem.size = sizeExist

        // }else{

        // }
        alert("Product already in cart");
      }

      // saveCartToFirestore(state.loginUserId, state.loginUserName ,state.cartItems)
      saveCartToFirestore(localStorage.getItem('uid'),  JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyBUQt081iPpCoQr9A9SEVZOMb5GFOGZ4Dk:[DEFAULT]')).displayName,state.cartItems)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      saveCartToFirestore(localStorage.getItem('uid'),  JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyBUQt081iPpCoQr9A9SEVZOMb5GFOGZ4Dk:[DEFAULT]')).displayName,state.cartItems)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

    },

    clearCart: (state) => {
      state.cartItems = [];
      saveCartToFirestore(localStorage.getItem('uid'),  JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyBUQt081iPpCoQr9A9SEVZOMb5GFOGZ4Dk:[DEFAULT]')).displayName,state.cartItems)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

    },
    quantityplus: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        if (item.quantity < 6) {
          item.quantity += 1;
        } else {
          item.quantity = 6;
        }
      }
      // saveCartToFirestore(state.loginUserId, state.loginUserName ,state.cartItems)
      saveCartToFirestore(localStorage.getItem('uid'),  JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyBUQt081iPpCoQr9A9SEVZOMb5GFOGZ4Dk:[DEFAULT]')).displayName,state.cartItems)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    quantityMinus: (state, action) => {
      const id = action.payload;

      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          item.quantity = 1;
        }
      }
      // saveCartToFirestore(state.loginUserId, state.loginUserName ,state.cartItems)
      saveCartToFirestore(localStorage.getItem('uid'),  JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyBUQt081iPpCoQr9A9SEVZOMb5GFOGZ4Dk:[DEFAULT]')).displayName,state.cartItems)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
  },
});
export const {
  addtoCart,
  removeFromCart,
  clearCart,
  quantityMinus,
  quantityplus,
  setLoginUserId,
  setLoginUserName,
  setCartItemsFromFirebase,
} = CartSlice.actions;

export default CartSlice.reducer;

export let saveCart = function fetchToFirebase() {
  return async function datafatchTofirebase(setStatus, dispatch) {
    try {
    } catch (error) {}
  };
};
