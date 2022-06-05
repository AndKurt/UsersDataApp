import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants';
import { getTokenFromLS } from '../../utils';

interface IUpdateUserApi {
  id: string;
  isLocked: boolean;
}

export const updateUserApi = createAsyncThunk(
  'user/updateUserApi',
  async (data: IUpdateUserApi, thunkApi) => {
    try {
      const TOKEN = getTokenFromLS();
      await axios.put(
        `${BASE_URL}/update`,
        {
          id: data.id,
          isLocked: data.isLocked,
        },
        {
          headers: { Authorization: TOKEN },
        }
      );
    } catch (error) {
      const err = error as AxiosError;
      return thunkApi.rejectWithValue(err.response?.data);
    }
  }
);
