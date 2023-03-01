import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userAction = createSlice({
  name: "useraction",
  initialState,
  reducers: {
    changeUser: (state, action) => {
      const newUser = action.payload;
      console.log("a");
      state.user = { ...newUser };
    },
  },
});

export const { UserActions } = userAction.actions;

export default userAction.reducer;
