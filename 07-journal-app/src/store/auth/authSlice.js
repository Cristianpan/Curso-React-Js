import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "checking", // 'checking', 'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => {
      return { ...payload, status: "authenticated", errorMessage: null };
    },
    logout: (state, { payload }) => {
      return {
        ...initialState,
        status: "not-authenticated",
        errorMessage: payload?.errorMessage || null,
      };
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});
export const { login, logout, checkingCredentials } = authSlice.actions;
