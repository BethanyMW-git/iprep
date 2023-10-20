import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      isLoggedIn: false,
      username: ''
    },
  },
  reducers: {
    loggedIn: (state, action) => {
      console.log("yay! we haz something", action.payload);
      state.value.isLoggedIn = action.payload;
    },
    setUserName: (state, action) => {
      state.value.username = action.payload;
    }
  },
});

export const { loggedIn } = userSlice.actions;
export const selectIsUserLoggedIn = (state) => state.users.value.isLoggedIn;
export const {setUserName} = userSlice.actions;
export const selectUserAccountName = (state) => state.users.value.username; 
export default userSlice.reducer;
