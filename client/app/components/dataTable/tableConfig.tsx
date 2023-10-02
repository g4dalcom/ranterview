import { Button } from '@/app/(pages)/daily/style';
import { GridColDef } from '@mui/x-data-grid';

export const titleColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: '번호',
    width: 90,
    disableColumnMenu: true,
  },
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
    renderCell: (params) => {
      return (
        <Button size="sm" variant={params.row.isSolved ? 'outline' : 'danger'}>
          {params.row.isSolved ? '완료' : '미완료'}
        </Button>
      );
    },
  },
  {
    field: 'completionDate',
    headerName: '완료일',
    width: 120,
    disableColumnMenu: true,
  },
];
