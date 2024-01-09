import { subTotal } from "@/utils"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type ProductType = {
    _id: string,
    title: string,
    description: string,
    price: number,
    qty: number,
    minQty: number,
    material: string
}

const initialState = {
    // value: [...Array(), Array<ProductType>]
    value: {
        items: [] as Array<ProductType>,
        subtotal: 0
    }
}

const wish = createSlice({
    name: "wish",
    initialState,
    reducers:{
        addTowish: (state, action: PayloadAction<ProductType>)=>{
            const index = state.value.items.findIndex((p: ProductType) => p._id == action.payload._id)
            if(index != -1){
                state.value.items[index].qty += 1
                state.value.subtotal += action.payload.price
            } else{
                state.value.items.push({...action.payload, qty: action.payload.minQty})
                state.value.subtotal += action.payload.price * action.payload.minQty
            }
            // subTotal()
        },
        removeFromwish: (state, action: PayloadAction<string>) => {
            state.value.items = state.value.items.filter((p: ProductType) => {
                if(p._id == action.payload){
                    state.value.subtotal -= p.price * p.qty
                }
                return p._id != action.payload
            })
        },
        productQuantity: (state, action: PayloadAction<any>)=> {
            const ind = state.value.items.findIndex((p: ProductType) => p._id == action.payload._id)
            state.value.subtotal -= state.value.items[ind].qty * state.value.items[ind].price
            state.value.items[ind].qty = action.payload.qty
            state.value.subtotal += action.payload.qty * state.value.items[ind].price
            // subTotal()
        },
        subTotal: (state)=> {
            state.value.subtotal = 0;
            state.value.items.forEach((e: ProductType) => state.value.subtotal += e.price * e.qty)
        }
    }
})

const wishReducer = wish.reducer
export default wishReducer
export const {addTowish, removeFromwish, productQuantity} = wish.actions;