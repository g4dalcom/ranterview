import styled from '@emotion/styled';

export const DataTable = styled.div`
  max-width: var(--size-xl);
  width: 100%;
  margin: 0 auto;

  & .data_grid {
    padding: 20px;
    background-color: var(--color-main);
  }

  // export 버튼
  & .css-1knaqv7-MuiButtonBase-root-MuiButton-root {
    display: none;
  }

  // 페이지네이션 박스
  & .css-wop1k0-MuiDataGrid-footerContainer {
    justify-content: center;
  }

  & .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar {
    padding: 0;
  }

  // 페이지네이션 개수 정보
  & .css-levciy-MuiTablePagination-displayedRows {
    display: none;
  }

  &
    .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar
    .MuiTablePagination-actions {
    margin: 0 auto;
  }

  // 검색바
  &
    .css-3be3ve-MuiFormControl-root-MuiTextField-root-MuiDataGrid-toolbarQuickFilter
    input {
    font-size: 1.2rem;
  }

  // Row
  & .MuiDataGrid-row {
    cursor: pointer;
  }

  // Title
  & .css-t89xny-MuiDataGrid-columnHeaderTitle {
    font-weight: 600;
  }
`;
