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
        addToWish: (state, action: PayloadAction<ProductType>)=>{
            const index = state.value.items.findIndex((p: ProductType) => p._id == action.payload._id)
            if(index != -1){
                state.value.items[index].qty += 1
                state.value.subtotal += action.payload.price
            } else{
                state.value.items.push({...action.payload, qty: action.payload.minQty})
                state.value.subtotal += action.payload.price * action.payload.minQty
            }
            const wish = state.value.items.map((c) => ({id: c._id, qty: c.qty}) )
            localStorage.setItem('wish', JSON.stringify(wish))
            // subTotal()
        },
        removeFromWish: (state, action: PayloadAction<string>) => {
            state.value.items = state.value.items.filter((p: ProductType) => {
                return p._id != action.payload
            })
            const wish = state.value.items.map((c) => ({id: c._id}) )
            localStorage.setItem('wish', JSON.stringify(wish))
        },
        productQuantity: (state, action: PayloadAction<any>)=> {
            const ind = state.value.items.findIndex((p: ProductType) => p._id == action.payload._id)
            state.value.subtotal -= state.value.items[ind].qty * state.value.items[ind].price
            state.value.items[ind].qty = action.payload.qty
            state.value.subtotal += action.payload.qty * state.value.items[ind].price

            const wish = state.value.items.map((c) => ({id: c._id, qty: c.qty}) )
            localStorage.setItem('wish', JSON.stringify(wish))
            // subTotal()
        },
        setInitialWish: (state, action: PayloadAction<Array<ProductType>>) => {
            state.value.items = action.payload;
            state.value.subtotal = 0;
            state.value.items.forEach((e: ProductType) => state.value.subtotal += e.price * e.qty)
            
            const wish = state.value.items.map((c) => ({id: c._id, qty: c.qty}) )
            localStorage.setItem('wish', JSON.stringify(wish))
        },
        subTotal: (state)=> {
            state.value.subtotal = 0;
            state.value.items.forEach((e: ProductType) => state.value.subtotal += e.price * e.qty)
        }
    }
})

const wishReducer = wish.reducer
export default wishReducer
export const {addToWish, removeFromWish, productQuantity, setInitialWish} = wish.actions;