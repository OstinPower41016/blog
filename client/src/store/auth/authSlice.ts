import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticate: false,
  },
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
