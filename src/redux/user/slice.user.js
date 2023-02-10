import { login, logout, register } from 'redux/auth/operactions.auth';
import { userInitialState } from './initialState.user';
import { getUser } from './operaction.user';

const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.name = payload.name;
        state.email = payload.email;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.name = payload.user.name;
        state.email = payload.user.email;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.name = payload.user.name;
        state.email = payload.user.email;
      })
      .addCase(logout.fulfilled, () => {
        return userInitialState;
      });
  },
});

export const userReducer = userSlice.reducer;
