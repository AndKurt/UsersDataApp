import React, { useState } from 'react';
import styles from './Toolbar.module.scss';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { Button, ButtonGroup } from '@mui/material';
import { GridRowId } from '@mui/x-data-grid';

interface IToolBar {
  arrIds: GridRowId[];
}

export const ToolBar = ({ arrIds }: IToolBar) => {
  const handleDelete = () => {
    console.log('delete', arrIds);
  };
  const handleUnlock = () => {
    console.log('unlock', arrIds);
  };
  const handleLock = () => {
    console.log('lock', arrIds);
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
