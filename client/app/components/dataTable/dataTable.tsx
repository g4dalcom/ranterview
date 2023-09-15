import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as S from './style';
import { ProblemType } from '@/app/types';
import DataRow from './dataRow';

interface Props {
  problems: ProblemType[];
}

const DataTable = (problems: Props) => {
  return (
    <S.DataTable>
      <TableContainer className="data_grid" component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className="title_row" align="center">
                번호
              </TableCell>
              <TableCell className="title_row" align="center">
                질문
              </TableCell>
              <TableCell className="title_row" align="center">
                카테고리
              </TableCell>
              <TableCell className="title_row" align="center">
                완료여부
              </TableCell>
              <TableCell className="title_row" align="center">
                완료일
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(problems.problems) &&
              problems.problems.map((p) => <DataRow key={p.id} row={p} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </S.DataTable>
  );
};

export default DataTable;
