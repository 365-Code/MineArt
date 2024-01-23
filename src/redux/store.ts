import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import productReducer from "./features/productSlice";
import wishReducer from "./features/wishSlice";
import authReducer from './features/authSlice'

export const store = configureStore({
    reducer:{
        cartReducer,     
        productReducer,
        wishReducer,
        authReducer
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector