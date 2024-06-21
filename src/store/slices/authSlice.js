import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:false,
    reducers:{
        setLogin:(state)=>{
            return state=true;
        },
        setLogout:(state)=>{
            localStorage.removeItem("token")
            localStorage.removeItem("name")
            return state=false;
        },
        checkLogin:(state)=>{
            if(localStorage.getItem("token")){
                return state=true;
            }else{
                return state=false
            }
        }
    }
})

export const {setLogin,setLogout,checkLogin}=authSlice.actions
export default authSlice.reducer