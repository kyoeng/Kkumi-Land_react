import { createSlice } from "@reduxjs/toolkit";



// =========================================
// 로딩화면을 위한 Slice
// =========================================

const initialState = true;


const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        loadingOn: (state) => {
            state = true;
        },
        loadingOff: (state) => {
            state = false;
        }
    }
});



export const { loadingOn, loadingOff } = loadingSlice.actions;
export default loadingSlice.reducer;