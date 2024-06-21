import { createSlice } from "@reduxjs/toolkit";


const registerSlice=createSlice({
    name:'register',
    initialState:{
        hashedtoken:"",
        hashtoverify:""
    },
    reducers:{
        setRegistrationTokens:(state,action)=>{
            state.hashedtoken=action.payload.hashedtoken
            state.hashtoverify=action.payload.hashtoverify
        }
    }
})
export const {setRegistrationTokens}=registerSlice.actions
export default registerSlice.reducer