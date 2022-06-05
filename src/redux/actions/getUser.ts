import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants';
import { getTokenFromLS } from '../../utils';

export const getUserApi = createAsyncThunk('user/getUser', async (_, thunkApi) => {
  try {
    const TOKEN = getTokenFromLS();
    const response = await axios.get(`${BASE_URL}/user`, {
      headers: { Authorization: TOKEN },
    });

    localStorage.setItem('id', response.data._id);
    return;
  } catch (error) {
    const err = error as AxiosError;
    localStorage.clear();
    return thunkApi.rejectWithValue(err.response?.data);
  }
});
