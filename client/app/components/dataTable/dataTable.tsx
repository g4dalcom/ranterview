import * as S from './style';
import { ProblemType } from '@/app/types';
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridEventListener,
} from '@mui/x-data-grid';
import { CustomPagination } from './pagination';

interface DataTableProps {
  problems: ProblemType[];
}

const DataTable = (problems: DataTableProps) => {
  const titleColumns: GridColDef[] = [
    { field: 'id', headerName: '번호', width: 90, disableColumnMenu: true },
    {
      field: 'question',
      headerName: '질문',
      width: 500,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: 'category',
      headerName: '카테고리',
      width: 120,
      disableColumnMenu: true,
    },
    {
      field: 'isSolved',
      headerName: '완료여부',
      width: 120,
      disableColumnMenu: true,
    },
    {
      field: 'completionDate',
      headerName: '완료일',
      width: 120,
      disableColumnMenu: true,
    },
  ];

  const handleClick: GridEventListener<'rowClick'> = (id) => {
    console.log(`${id} clicked`);
  };

  return (
    <S.DataTable>
      <DataGrid
        className="data_grid"
        sx={{
          fontSize: 14,
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
        onRowClick={handleClick}
        rows={problems.problems}
        columns={titleColumns}
        pagination
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar, pagination: CustomPagination }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </S.DataTable>
  );
};

export default DataTable;
