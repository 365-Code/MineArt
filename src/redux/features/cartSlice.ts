import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProductType } from "@/utils"

const initialState = {
    value: {
        items: [] as Array<ProductType>,
        subtotal: 0
    }
}

const cart = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<ProductType>)=>{
            const index = state.value.items.findIndex((p: ProductType) => p._id == action.payload._id)
            if(index != -1){
                state.value.items[index].qty += action.payload.qty || 1
                state.value.subtotal += action.payload.price * action.payload.qty
            } else{
                state.value.items.push({...action.payload, qty: action.payload.qty})
                state.value.subtotal += action.payload.price * action.payload.qty
            }

            const crt = state.value.items.map((c) => c._id)
            localStorage.setItem('cart', JSON.stringify(crt))
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.value.items = state.value.items.filter((p: ProductType) => {
                if(p._id == action.payload){
                    state.value.subtotal -= p.price * p.qty
                }
                return p._id != action.payload
            })
            const crt = {items: state.value.items, subtotal: state.value.subtotal}
            localStorage.setItem('cart', JSON.stringify(crt))
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

const cartReducer = cart.reducer
export default cartReducer
export const {addToCart, removeFromCart, productQuantity} = cart.actions;