import { GridRowId } from '@mui/x-data-grid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUsersData } from '../../interface';
import { MOCK_DATA } from '../../mock/mock_data';

interface IUsersDataSlice {
  usersData: IUsersData[];
}

const initialState: IUsersDataSlice = {
  usersData: MOCK_DATA,
};

export const usersDataSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    setUsersStatusLock(state, action: PayloadAction<GridRowId[]>) {
      const arrIds = action.payload;
      for (let i = 0; i < arrIds.length; i++) {
        state.usersData.filter((user) => {
          if (user.id === arrIds[i]) {
            user.status = true;
          }
        });
      }
    },
    setUsersStatusUnlock(state, action: PayloadAction<GridRowId[]>) {
      const arrIds = action.payload;
      for (let i = 0; i < arrIds.length; i++) {
        state.usersData.filter((user) => {
          if (user.id === arrIds[i]) {
            user.status = false;
          }
        });
      }
    },
    deleteUsers(state, action: PayloadAction<GridRowId[]>) {
      const arrIds = action.payload;
      for (let i = 0; i < arrIds.length; i++) {
        state.usersData = [...state.usersData].filter((user) => user.id !== arrIds[i]);
      }
    },
  },
});

export const usersDataReducer = usersDataSlice.reducer;
