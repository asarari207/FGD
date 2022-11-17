import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams,GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'SiteID', headerName: 'Site name', width: 500 },
  { field: 'Status', headerName: 'Status', width: 500 },
  
];

const rows = [
  { id: 1, SiteID:'RAMA001', Status:'Done'},
  { id: 2, SiteID:'RAMA002', Status:'In Progress'},
  { id: 3, SiteID:'RAMA003', Status:'Done'},
  { id: 4, SiteID:'RAMA004', Status:'In Progress'},
];

export default function DataTable() {
  return (
    <div className='container'>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        components={{ Toolbar: GridToolbar }}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  );
}
