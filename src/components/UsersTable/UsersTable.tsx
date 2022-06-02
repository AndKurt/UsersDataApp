import * as React from 'react';
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import { useState } from 'react';
import { ToolBar } from '..';
import { MOCK_DATA } from '../../mock/mock_data';

const columns: GridColDef[] = [
  {
    field: 'id',
    filterable: false,
    hideable: false,
    headerName: 'ID',
    width: 50,
  },
  { field: 'name', hideable: false, headerName: 'Full name', width: 150 },
  { field: 'email', sortable: false, headerName: 'E-mail', width: 250 },
  {
    field: 'registered',
    headerName: 'Registered',
    type: 'number',
    filterable: false,
    width: 250,
  },
  {
    field: 'last_visit',
    headerName: 'Last visit',
    type: 'number',
    filterable: false,
    width: 250,
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
  return (
    <div style={{ minHeight: 500, height: 100, width: '80%' }}>
      <ToolBar arrIds={arrIds} />
      <DataGrid
        rows={MOCK_DATA}
        columns={columns}
        pageSize={MOCK_DATA.length}
        rowsPerPageOptions={[MOCK_DATA.length]}
        getRowId={(MOCK_DATA) => MOCK_DATA.id}
        checkboxSelection
        hideFooter={true}
        scrollbarSize={50}
        onSelectionModelChange={(ids) => setArrIds(ids)}
      />
    </div>
  );
};
