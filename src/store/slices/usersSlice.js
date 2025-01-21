import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    });
    builder.addCase(addUser.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    });
    builder.addCase(addUser.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((user) => {
          return user.id !== action.payload;
        }),
      };
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    });
  },
});

export const usersReducer = usersSlice.reducer;
