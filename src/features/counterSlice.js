import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    isShow: false,
}


export const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
    increment: (state) => {
        state.value += 1
    },
    decrement: (state) => {
        state.value -= 1
    },
    toggleShow: (state) => {
        state.isShow = !state.isShow,
        state.value = 0;
    }
   },
})

export const {increment, decrement, toggleShow} = counterSlice.actions

export default counterSlice.reducer