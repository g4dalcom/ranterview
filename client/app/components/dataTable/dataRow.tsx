import { TableCell, TableRow } from '@mui/material';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Collapse } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useState } from 'react';
import { ProblemType } from '@/app/types';
import * as S from './style';

interface Props {
  row: ProblemType;
}

const DataRow = ({ row }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="large"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          className="content_row"
          align="center"
          component="th"
          scope="row"
        >
          {row.id}
        </TableCell>
        <TableCell className="content_row" align="center">
          {row.question}
        </TableCell>
        <TableCell className="content_row" align="center">
          {row.category}
        </TableCell>
        <TableCell className="content_row" align="center">
          {row.isSolved === false ? '미완료' : '완료'}
        </TableCell>
        <TableCell className="content_row" align="center">
          {row.completionDate === null
            ? ''
            : row.completionDate.substring(0, 10)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <S.AnswerBox>{row.answer}</S.AnswerBox>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default DataRow;
