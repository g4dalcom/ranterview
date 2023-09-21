import styled from '@emotion/styled';

export const Container = styled.article`
  border: 2px solid var(--color-main);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 340px;
  width: 50%;
  padding: 30px;
  background-color: var(--color-main-bg);
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;

  & label {
    display: flex;
    width: 100%;
  }

  & input {
    width: calc(100% - 42px);
  }

  & textarea {
    resize: none;
    width: calc(100% - 42px);
    height: 300px;
  }
`;

export const ContentTitle = styled.span`
  margin-right: 10px;
`;

export const CategoryBox = styled.div`
  align-self: flex-end;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
