import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import productReducer from "./features/productSlice";
import wishReducer from "./features/wishSlice";


export const store = configureStore({
    reducer:{
        cartReducer,     
        productReducer,
        wishReducer
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector