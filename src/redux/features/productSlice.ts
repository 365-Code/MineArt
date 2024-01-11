import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ProductType = {
    _id: string,
    thumbnail: string,
    title: string,
    price: number,
    images?: Array<string>,
    material: string
    description: string,
    qty: number,
    minQty: number,
    category?: string,
}

const initialState = {
    value: [] as Array<ProductType>
}

const product = createSlice({
    name: 'products',
    initialState,
    reducers:{
        fetchProducts: (state, action:PayloadAction<Array<ProductType>>)=>{
            state.value = action.payload
        }
    }
})


const productReducer = product.reducer
export default productReducer

export const {fetchProducts} = product.actions
