import { configureStore } from "@reduxjs/toolkit";
import clickProductSlicer from './Slicer/ClickProductSlicer';
import CartSlicer from '../Redux/Slicer/CartSlicer'
import BlogSlicer from './Slicer/BlogData'


const store = configureStore({
  reducer: {
    clickProductSlicer: clickProductSlicer,
    cartSlicer: CartSlicer,
    BlogSlicer:BlogSlicer,
  },
});

export default store;