import { login, logout, register } from 'redux/auth/operactions.auth';
import { userInitialState } from './initialState.user';
import { getUser } from './operaction.user';

const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  extraReducers: {
    [getUser.pending](state) {
      state.isLoading = true;
    },
    [getUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.name = payload.name;
      state.email = payload.email;
    },
    [getUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.name = payload.user.name;
      state.email = payload.user.email;
    },
    [register.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [login.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.name = payload.user.name;
      state.email = payload.user.email;
    },

    [logout.fulfilled]() {
      return userInitialState;
    },
  },
});

export const userReducer = userSlice.reducer;
