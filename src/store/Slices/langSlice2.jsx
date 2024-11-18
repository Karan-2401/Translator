import { createSlice } from "@reduxjs/toolkit";
import { languages } from "../../Languages";

const initialState = {
    value:[{code:'en'}]
}

export const langSlice2 = createSlice({
    name:'langsolution2',
    initialState,
    reducers:{
        add2 : (state,action)=>{
            let a = action.payload;
            state.value = languages.filter((x)=>{
                return x.language === a
            })
        }
    }
})

export const {add2} = langSlice2.actions;
export default langSlice2.reducer