import { createSlice } from "@reduxjs/toolkit";


const registerSlice=createSlice({
    name:'register',
    initialState:{
        hashedtoken:"",
        hashtoverify:"",
        htvpToken:""
    },
    reducers:{
        setRegistrationTokens:(state,action)=>{
            state.hashedtoken=action.payload.hashedtoken
            state.hashtoverify=action.payload.hashtoverify
        },
        setHTVP:(state,action)=>{
            state.htvpToken=action.payload
        }
    }
})
export const {setRegistrationTokens,setHTVP}=registerSlice.actions
export default registerSlice.reducer