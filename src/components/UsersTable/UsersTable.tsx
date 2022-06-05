import * as React from 'react';
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import { useState } from 'react';
import { ToolBar } from '..';
import { useAppSelector } from '../../redux/hooks';

const columns: GridColDef[] = [
  {
    field: '_id',
    filterable: false,
    hideable: false,
    headerName: 'ID',
    width: 220,
  },
  { field: 'firstName', hideable: false, headerName: 'First name', width: 90 },
  { field: 'lastName', hideable: false, headerName: 'Last name', width: 90 },
  { field: 'email', sortable: false, headerName: 'E-mail', width: 220 },
  {
    field: 'fullName',
    hideable: false,
    headerName: 'Full name',
    width: 220,
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
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.isLocked ? 'Blocked' : 'Unblocked'} `,
    width: 100,
  },
];

export const UsersTable = () => {
  const [arrIds, setArrIds] = useState<GridRowId[]>([]);
  const { users } = useAppSelector((state) => state.usersDataReducer);
  const [test] = useState(users);

  return (
    <div style={{ minHeight: 500, height: 100, width: '80%' }}>
      <ToolBar arrIds={arrIds} />
      <DataGrid
        rows={test}
        columns={columns}
        pageSize={test.length}
        rowsPerPageOptions={[test.length]}
        getRowId={(test) => test._id}
        checkboxSelection
        hideFooter={true}
        scrollbarSize={50}
        onSelectionModelChange={(ids) => setArrIds(ids)}
      />
    </div>
  );
};
