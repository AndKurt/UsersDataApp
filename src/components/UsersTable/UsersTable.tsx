import * as React from 'react';
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import { useState } from 'react';
import { ToolBar } from '..';
import { useAppSelector } from '../../redux/hooks';

const columns: GridColDef[] = [
  {
    field: 'id',
    filterable: false,
    hideable: false,
    headerName: 'ID',
    width: 50,
  },
  { field: 'firstName', hideable: false, headerName: 'First name', width: 90 },
  { field: 'lastName', hideable: false, headerName: 'Last name', width: 90 },
  { field: 'email', sortable: false, headerName: 'E-mail', width: 250 },
  {
    field: 'fullName',
    hideable: false,
    headerName: 'Full name',
    width: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName} ${params.row.lastName}`,
  },
  {
    field: 'registered',
    headerName: 'Registered',
    type: 'number',
    filterable: false,
    width: 200,
  },
  {
    field: 'lastVisit',
    headerName: 'Last visit',
    type: 'number',
    filterable: false,
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    filterable: false,
    hideable: false,
    description: 'This column has a value getter and is not sortable.',
    valueGetter: (params: GridValueGetterParams) => `${params.row.status ? 'Locked' : 'Unlocked'} `,
    width: 100,
  },
];

export const UsersTable = () => {
  const [arrIds, setArrIds] = useState<GridRowId[]>([]);
  const { usersData } = useAppSelector((state) => state.usersDataReducer);

  return (
    <div style={{ minHeight: 500, height: 100, width: '80%' }}>
      <ToolBar arrIds={arrIds} />
      <DataGrid
        rows={usersData}
        columns={columns}
        pageSize={usersData.length}
        rowsPerPageOptions={[usersData.length]}
        getRowId={(usersData) => usersData.id}
        checkboxSelection
        hideFooter={true}
        scrollbarSize={50}
        onSelectionModelChange={(ids) => setArrIds(ids)}
      />
    </div>
  );
};
