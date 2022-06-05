import { GridRowId } from '@mui/x-data-grid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUsersData } from '../../interface';
import { deleteUserApi } from '../actions/deleteUser';
import { getUsersApi } from '../actions/getUsers';
import { registerAPI } from '../actions/register';
import { updateUserApi } from '../actions/updateUser';

interface IRegisterSlice {
  userData: IUsersData | null;
  users: IUsersData[] | [];
  isLoading: boolean;
  error: string;
}
const initialState: IRegisterSlice = {
  userData: null,
  users: [],
  isLoading: false,
  error: '',
};

export const usersDataSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    setUsersStatusLock(state, action: PayloadAction<GridRowId[]>) {
      const arrIds = action.payload;
      for (let i = 0; i < arrIds.length; i++) {
        state.users.filter((user) => {
          if (user._id === arrIds[i]) {
            user.isLocked = true;
          }
        });
      }
    },
    setUsersStatusUnlock(state, action: PayloadAction<GridRowId[]>) {
      const arrIds = action.payload;
      for (let i = 0; i < arrIds.length; i++) {
        state.users.filter((user) => {
          if (user._id === arrIds[i]) {
            user.isLocked = false;
          }
        });
      }
    },
    deleteUsers(state, action: PayloadAction<GridRowId[]>) {
      const arrIds = action.payload;
      for (let i = 0; i < arrIds.length; i++) {
        state.users = [...state.users].filter((user) => user._id !== arrIds[i]);
      }
    },
  },
  extraReducers: {
    [registerAPI.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [registerAPI.fulfilled.type]: (state, action: PayloadAction<IUsersData>) => {
      state.isLoading = false;
      state.error = '';
      state.userData = action.payload;
    },
    [registerAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.userData = null;
    },
    [getUsersApi.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [getUsersApi.fulfilled.type]: (state, action: PayloadAction<IUsersData[]>) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    [getUsersApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.users = [];
    },
    [deleteUserApi.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [deleteUserApi.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    [deleteUserApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.users = [];
    },
    [updateUserApi.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [updateUserApi.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    [updateUserApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.users = [];
    },
  },
});

export const usersDataReducer = usersDataSlice.reducer;
