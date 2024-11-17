import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value:0
}

export const speechSlice = createSlice({
    name:'speechslice',
    initialState,
    reducers:{
        addx:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {addx} = speechSlice.actions;
export default speechSlice.reducer