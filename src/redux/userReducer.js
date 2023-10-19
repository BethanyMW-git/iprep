import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: false,
  },
  reducers: {
    loggedIn: (state, action) => {
      console.log("yay! we haz something", action.payload);
      state.value = action.payload;
    },
  },
});

export const { loggedIn } = userSlice.actions;
export const selectIsUserLoggedIn = (state) => state.users.value;
export default userSlice.reducer;
