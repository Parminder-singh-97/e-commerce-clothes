import { createSlice } from "@reduxjs/toolkit";

const clickProductSlicer = createSlice({
        name: 'clickProduct',
        initialState: {

            product:[],
        },
        reducers: {
            addProduct: (state, action) => {
                state.product = action.payload
            }
        }



})

export const { addProduct } = clickProductSlicer.actions;
export default clickProductSlicer.reducer;







