import * as S from './style';
import { ProblemType } from '@/app/types';
import { DataGrid, GridToolbar, GridEventListener } from '@mui/x-data-grid';
import { CustomPagination } from './pagination';
import { titleColumns } from './tableConfig';

interface DataTableProps {
  problems: ProblemType[];
}

const DataTable = (problems: DataTableProps) => {
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
        // onRowClick={handleClick}
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
