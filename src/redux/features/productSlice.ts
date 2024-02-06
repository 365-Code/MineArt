import { ProductType } from "@/utils";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [] as Array<ProductType>
}

const product = createSlice({
    name: 'products',
    initialState,
    reducers:{
        setAllProducts: (state, action:PayloadAction<Array<ProductType>>)=>{
            state.value = action.payload
        },
        sortProducts: (state)=>{
            state.value = state.value.reverse()
        }
    }
})


const productReducer = product.reducer
export default productReducer

export const {setAllProducts, sortProducts} = product.actions
