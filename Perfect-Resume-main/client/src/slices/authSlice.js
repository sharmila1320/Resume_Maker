import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserInfo: localStorage.getItem("UserInfo")
        ? JSON.parse(localStorage.getItem("UserInfo"))
        : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.UserInfo = action.payload;
            // console.log(state.UserInfo);
            localStorage.setItem("UserInfo", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.UserInfo = null;
            localStorage.removeItem("UserInfo");
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
