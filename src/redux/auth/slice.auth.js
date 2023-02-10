import { getUser } from 'redux/user/operaction.user';
import { login, logout, register } from './operactions.auth';

const { createSlice } = require('@reduxjs/toolkit');
const { authInitialState } = require('./initialState.auth');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = payload.token;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = payload.token;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, () => {
        return authInitialState;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getUser.rejected, () => {
        return authInitialState;
      })
      .addCase(getUser.fulfilled, state => {
        state.isAuth = true;
      });
  },
});

export const authReducer = authSlice.reducer;
