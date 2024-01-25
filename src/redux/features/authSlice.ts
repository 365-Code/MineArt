import { auth } from "@/utils/firebase"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
const initialState = {
    value: {
        token: "",
        isLogged: false,
        isAdm: false
    }
}

type authType = {
    user: string,
    isMe: boolean
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<authType>)=>{
            state.value.isLogged = true
            state.value.token = action.payload.user
            state.value.isAdm = action.payload.isMe
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