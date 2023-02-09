import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser } from 'services/users.service';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { rejectWithValue }) => {
    try {
      return await getCurrentUser();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
