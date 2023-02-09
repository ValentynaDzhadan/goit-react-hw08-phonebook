import { login, register } from './operactions.auth';

const { createSlice } = require('@reduxjs/toolkit');
const { authInitialState } = require('./initialState.auth');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.token = payload.token;
    },
    [register.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [login.pending](state) {
      state.isLoading = true;
    },
    [login.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.token = payload.token;
    },
    [login.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
