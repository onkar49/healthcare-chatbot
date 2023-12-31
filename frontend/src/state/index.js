import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
};


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
    },
});

export const { setMode, setLogin } = authSlice.actions;

export default authSlice.reducer;