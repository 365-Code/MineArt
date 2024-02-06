import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { OrderType, ProductType } from "@/utils"

const initialState = {
    value: {
        items: [] as Array<ProductType>,
        shipping: "" as string
    }
}

const order = createSlice({
    name: "order",
    initialState,
    reducers:{
        addToOrders: (state, action: PayloadAction<Array<ProductType>>)=>{
            state.value.items = action.payload
        },
        clearOrders: (state, action: PayloadAction<string>) => {
            state.value.items = []
        },
        orderAddress: (state, action: PayloadAction<string>) => {
            state.value.shipping = action.payload
        }
    }
})

const orderReducer = order.reducer
export default orderReducer
export const {addToOrders, clearOrders, orderAddress} = order.actions;