import { auth } from "@/utils/firebase"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
const initialState = {
    value: {
        token: "",
        isLogged: false
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>)=>{
            state.value.isLogged = true
            state.value.token = action.payload
        },
        logout: (state)=>{
            state.value.token = ""
            state.value.isLogged = false
        }
    }
})

const authReducer = authSlice.reducer
export default authReducer
export const {login, logout} = authSlice.actions;