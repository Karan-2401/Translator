import { createSlice } from "@reduxjs/toolkit";
import { languages } from "../../Languages";

const initialState = {
    value:[{code:'en'}]
}

export const langSlice = createSlice({
    name:'langsolution',
    initialState,
    reducers:{
        add : (state,action)=>{
            let x = action.payload;
           state.value =  languages.filter((a)=>{
                return a.language === x
            })
        }
    }
})

export const {add} = langSlice.actions;
export default langSlice.reducer