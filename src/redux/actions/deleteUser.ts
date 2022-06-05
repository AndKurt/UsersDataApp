import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants';
import { getTokenFromLS } from '../../utils';

export const deleteUserApi = createAsyncThunk(
  'user/deleteUserApi',
  async (userId: string, thunkApi) => {
    try {
      console.log(userId);

      const TOKEN = getTokenFromLS();
      await axios.delete(`${BASE_URL}/delete?id=${userId}`, {
        headers: { Authorization: TOKEN },
      });
    } catch (error) {
      const err = error as AxiosError;
      return thunkApi.rejectWithValue(err.response?.data);
    }
  }
);
