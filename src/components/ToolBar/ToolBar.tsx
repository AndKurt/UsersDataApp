import React from 'react';
import styles from './Toolbar.module.scss';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { Button, ButtonGroup } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { GridRowId } from '@mui/x-data-grid';
import { usersDataSlice } from '../../redux/reducers/usersData';
import { deleteUserApi } from '../../redux/actions/deleteUser';
import { updateUserApi } from '../../redux/actions/updateUser';
import { useNavigate } from 'react-router-dom';
import { loginSlice } from '../../redux/reducers/loginSlice';

interface IToolBar {
  arrIds: GridRowId[];
}

export const ToolBar = ({ arrIds }: IToolBar) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { setUsersStatusUnlock, setUsersStatusLock, deleteUsers } = usersDataSlice.actions;
  const { setTokenStatus } = loginSlice.actions;

  const logOutUser = () => {
    const activeUserId = arrIds.find((id) => id === localStorage.getItem('id'));
    if (activeUserId) {
      localStorage.clear();
      dispatch(setTokenStatus(false));
      navigation('/login');
    }
  };
  const handleDelete = () => {
    if (arrIds.length > 0) {
      dispatch(deleteUsers(arrIds));
      arrIds.forEach((id) => dispatch(deleteUserApi(id as string)));
    }
    logOutUser();
  };
  const handleUnlock = () => {
    if (arrIds.length > 0) {
      dispatch(setUsersStatusUnlock(arrIds));
      arrIds.forEach((id) => dispatch(updateUserApi({ id: id as string, isLocked: false })));
    }
  };
  const handleLock = () => {
    if (arrIds.length > 0) {
      dispatch(setUsersStatusLock(arrIds));
      arrIds.forEach((id) => dispatch(updateUserApi({ id: id as string, isLocked: true })));
      logOutUser();
    }
  };

  return (
    <div className={styles.toolbar}>
      <h4>User management</h4>
      <div className={styles.controls}>
        <ButtonGroup variant="outlined">
          <Button color="error" sx={{ width: '150px' }} onClick={handleDelete}>
            Delete
            <DeleteForeverTwoToneIcon />
          </Button>
          <Button color="success" sx={{ width: '150px' }} onClick={handleUnlock}>
            Unblock
            <LockOpenTwoToneIcon />
          </Button>
          <Button color="warning" sx={{ width: '150px' }} onClick={handleLock}>
            Block
            <LockTwoToneIcon />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
