import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'http/http';
import { getCurrentUser } from 'services/users.service';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const currentToken = state.auth.token;
      token.set(currentToken);

      return await getCurrentUser();
    } catch (error) {
      token.unset();
      return rejectWithValue(error);
    }
  }
);
