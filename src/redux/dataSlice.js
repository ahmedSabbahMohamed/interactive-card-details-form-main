import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        name: "Jane Appleseed",
        cardNum: "0000 0000 0000 0000",
        mm: "0",
        yy: "00",
        cvc: "000"
    },
    reducers: {
        addData: (state, action) => {
            state.name = action.payload.name;
            state.cardNum = action.payload.cardNum;
            state.mm = action.payload.mm;
            state.yy = action.payload.yy;
            state.cvc = action.payload.cvc;
        },
    },
})

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;