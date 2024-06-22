import { User } from "@/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    removeUser(state, action: PayloadAction<User>) {
      state.users = state.users.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const usersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
