import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'http/http';
import { loginUser, logoutUser, registerUser } from 'services/users.service';

export const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const data = await registerUser(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginUser(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutUser();
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
