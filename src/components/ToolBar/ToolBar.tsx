import React from 'react';
import styles from './Toolbar.module.scss';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { Button, ButtonGroup } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { GridRowId } from '@mui/x-data-grid';
import { usersDataSlice } from '../../redux/reducers/usersData';

interface IToolBar {
  arrIds: GridRowId[];
}

export const ToolBar = ({ arrIds }: IToolBar) => {
  const dispatch = useAppDispatch();
  const { setUsersStatusUnlock, setUsersStatusLock, deleteUsers } = usersDataSlice.actions;
  const handleDelete = () => {
    console.log('delete', arrIds);
    dispatch(deleteUsers(arrIds));
  };
  const handleUnlock = () => {
    console.log('unlock', arrIds);
    dispatch(setUsersStatusUnlock(arrIds));
  };
  const handleLock = () => {
    console.log('lock', arrIds);
    dispatch(setUsersStatusLock(arrIds));
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
            Unlock
            <LockOpenTwoToneIcon />
          </Button>
          <Button color="warning" sx={{ width: '150px' }} onClick={handleLock}>
            Lock
            <LockTwoToneIcon />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
